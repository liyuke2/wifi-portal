const http = require('http');
const url = require('url');
const fs = require('fs');
const ws = require('ws');
const querystring = require("querystring");

let quesjson = null;
function readJson(name,e){
    fs.readFile(name, function (error, data) {
        if (error) {
            console.log('read error');
            quesjson = [];
        } else {
            quesjson = JSON.parse(data.toString());
        }
    });
}
function writeJson(name,json){
    fs.writeFile(name, JSON.stringify(json), function (error) {
        if (error) {
            console.log('save error');
        } else {
        }
    });
}
readJson('./html/answer.json',[]);
function answer(json, res){
    if(!quesjson){
        res.end('{"state":"not ready!"}');
        console.log(quesjson);
        return;
    }
    if(json.type=="create"||json.type=="getall"||json.type=="getbyid"||json.type=="delete"||json.type=="import"){
        if(json.token != 'qwerghjm')return;
    }
    if(json.type=='create'){
        json.type = undefined;
        for(let j=0;j<quesjson.length;j++){
            if(quesjson[j].question==json.question){
                if(json.id>=0){
                    quesjson[j].question=json.question;
                    quesjson[j].options=json.options;
                    quesjson[j].answer=json.answer;
                    break;
                }else{
                    res.end('{"state":"exists"}');
                    return;
                }
            }
        }
        if(json.id<0){
            quesjson.push(json);
            json.id = quesjson.length-1;
        }
        writeJson('./html/answer.json',quesjson);
        res.end(`{"state":"ok","id":"${json.id}"}`);
    }else if(json.type=='getq'){
        let id = Math.floor(Math.random()*quesjson.length);
        let data = {question:quesjson[id].question,options:[],type:"",quid:id};
        if(quesjson[id].answer.length>1)data.type = "multiple";else data.type = "single";
        for(let i=0;i<quesjson[id].options.length;i++){
            data.options[i] = quesjson[id].options[i];
        }
        res.end(JSON.stringify(data));
    }else if(json.type=="check"){
        let ran = quesjson[json.id].answer;
        if(json.answer.length==ran.length){
            for(let i=0;i<ran.length;i++){
                if(ran[i]!=json.answer[i]){
                    let data = {state:"error",answer:ran};
                    res.end(JSON.stringify(data));
                    return;
                }
            }
        }else{
            let data = {state:"error",answer:ran};
            res.end(JSON.stringify(data));
            return;
        }
        res.end('{"state":"ok"}');
    }else if(json.type=="getall"){
        console.log(json.token);
        res.end(JSON.stringify(quesjson));
    }else if(json.type=="getbyid"){
        res.end(JSON.stringify(quesjson[json.id]));
    }else if(json.type=="delete"){
        if(json.id>=0&&json.id<quesjson.length){
            quesjson.splice(json.id,1);
            writeJson('./html/answer.json',quesjson);
            res.end('{"state":"ok"}');
        }else if(json.id==-100){
            quesjson = [];
            writeJson('./html/answer.json',quesjson);
            res.end('{"state":"ok"}');
        }else{
            res.end('{"state":"error"}');
        }
    }else if(json.type=="import"){
        let flag = true;
        for(let i=0;i<json.data.length;i++){
            flag = true;
            for(let j=0;j<quesjson.length;j++){
                if(quesjson[j].question==json.data[i].question){
                    flag = false;
                    break;
                }
            }
            if(flag)quesjson.push(json.data[i]);
        }
        writeJson('./html/answer.json',quesjson);
        res.end('{"state":"ok"}');
    }else if(json.type=="login"){
        if(json.data=='123456')
            res.end('{"state":"ok","token":"qwerghjm"}');
        else res.end('{"state":"error"}');
    }else{
        res.end('{"state":"no cmd"}');
    }
}
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname=="/index.html"||urlObj.pathname=='/'){
        var rs = fs.createReadStream("./html/index.html");
        var index = null;
        rs.on('data',function(chunk){
            index+=chunk
        })
        
        rs.pipe(res)
    }
    else if(urlObj.pathname=="/login"){
        var data = '';
        req.on('data',function(chunk){
            data+=chunk
        });
        req.on('end',function(){
           console.log(data)  
        })
        res.end('....!');
    }else if(urlObj.pathname=="/answer"){
        let str = '';
        res.setHeader("Access-Control-Allow-Origin","*");
        //允许的header类型
        res.setHeader("Access-Control-Allow-Headers","content-type");
        //跨域允许的请求方式 
        res.setHeader("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
        req.on('data',function(data){
            str+=data;
        });
        req.on('end',function(){
            let json = {};
            try{
                json = JSON.parse(str);
                answer(json,res);
            }catch(e){
                res.end('{"state":"error"}');
                return;
            }
        });
    }else{
        let path = "./html"+urlObj.pathname;
        fs.exists(path, function(exists) {
            if(exists){
                var rs = fs.createReadStream("./html"+urlObj.pathname);
                //var index = null;
                //rs.on('data',function(chunk){
                //    index+=chunk
                //})
                rs.pipe(res)
            }else{
                res.end('Not Found!');
            }
        });
    }
 })
  
 server.listen(8088, function () {
     console.log('start server')
 })

var wsServer = new ws.Server({
    host: "127.0.0.1",
    port: 8089,
});
function on_server_client_comming (wsObj) {
    console.log("request comming");
    websocket_add_listener(wsObj);
}
wsServer.on("connection", on_server_client_comming);

// 各事件处理逻辑
function websocket_add_listener(wsObj) {
    wsObj.on("message", function(data) {
        if(data=='close'){
            wsObj.close()
        }
        console.log("request data:"+data);
        wsObj.send("1秒延时，收到了，正在处理");
    });
    wsObj.on("close", function() {
        console.log("request close");
    });
    wsObj.on("error", function(err) {
        console.log("request error", err);
    });
}
