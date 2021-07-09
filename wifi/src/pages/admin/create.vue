<template>
  <div class="content">
    <div class="titlebar"><span @click="pageback"></span>创建题目</div>
    <div class="body" ref="body">
      <div class="subtitle">填写题目</div>
      <div class="input1"><textarea placeholder="请填写题目" v-model="question"></textarea></div>
      <div class="subtitle">填写选项</div>
      <div class="itemarea">
        <div v-for="(item,index) in list" :key="index" class="item">
          <span>{{item.letter}}</span>
          <input type="text" v-model="item.text" placeholder="请填写选项"/>
          <li @click="deleteitem(index)"></li>
        </div>
      </div>
      <div class="add"><span @click="additem"></span></div>
      <div class="subtitle">添加答案</div>
      <div class="selectitem" style="white-space:pre;" @click="selectitem">{{answertype}}<span>{{sletterstr}}</span></div>
    </div>
    <div class="submit" :class="{'submit-on':cansubmit}" @click="submitdata">上传至题库</div>
    <div class="dialog" v-show="dialog" @click="dialog=false">
      <div class="items" @click.stop>
        <div class="dia_title"><div @click="quanxuanclick"><input type="checkbox" v-model="selectall"/><label>全选</label></div><span>选择一项或多项</span></div>
        <div class="dia_con">
          <div v-for="(item,index) in list" :key="index" class="sitem" @click="sitemclick(index)">
            <input type="checkbox" name="selectitem" :value="item.letter" :checked="item.isanswer"/><span>{{item.letter+'.&nbsp;'+item.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="toast">
    <div class="toasts" v-show="toast">{{toasttext}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  props:{'addr':"",'id':{default:-1}},
  data(){
    return {
      list:[{letter:"A",text:"",isanswer:false},{letter:"B",text:"",isanswer:false}],
      dialog:false,
      selectall:false,
      sletter:"",
      answertype:"(    )",

      question:"",

      toast:false,
      toasttext:"上传成功",

      myid:this.id,
    }
  },
  computed:{
    sletterstr(){
      return this.stringCheckLen(this.sletter,19);
    },
    cansubmit(){
      if(!this.question)return false;
      if(!this.sletter)return false;
      for(let i=0;i<this.list.length;i++){
        if(!this.list[i].text)return false;
      }
      return true;
    },
  },
  watch:{
    sletter(){
      if(this.sletter.length>1)this.answertype="(多选)";
      else if(this.sletter.length==1)this.answertype="(单选)";
      else this.answertype="(    )";
    },
  },
  mounted(){
    if(this.myid&&this.myid>=0)this.getData(this.myid);
  },
  methods:{
    pageback(e){
      this.$router.back();
    },
    additem(e){
      let letter = this.list[this.list.length-1].letter.codePointAt(0);
      this.list.push({letter:String.fromCodePoint(letter+1),text:"",isanswer:false});
      this.selectall = false;
      this.$nextTick(()=>{
        this.scrollToBottom();
      });
    },
    deleteitem(i){
      if(this.list.length>1){
        let c = true;
        this.list.splice(i,1);
        for(let i=0;i<this.list.length;i++){
          this.list[i].letter = String.fromCodePoint(65+i);
          if(!this.list[i].isanswer){
            c = false;
          }
        }
        this.selectall = c;
      }else{
        this.list = [{letter:"A",text:"",isanswer:false}];
      }
    },
    selectitem(e){
      this.dialog = true;
    },
    sitemclick(i){
      this.list[i].isanswer = !this.list[i].isanswer;
      let c = true;
      this.sletter = '';
      for(let i=0;i<this.list.length;i++){
        if(!this.list[i].isanswer){
          c = false;
        }else{
          this.sletter = this.sletter+','+this.list[i].letter;
        }
      }
      this.sletter = this.sletter.substring(1);
      this.selectall = c;
    },
    quanxuanclick(e){
      this.selectall = !this.selectall;
      if(this.selectall){
        this.sletter = '';
        for(let i=0;i<this.list.length;i++){
          this.list[i].isanswer = true;
          this.sletter = this.sletter+','+this.list[i].letter;
        }
        this.sletter = this.sletter.substring(1);
      }else{
        this.sletter = '';
        for(let i=0;i<this.list.length;i++)this.list[i].isanswer = false;
      }
    },
    //
    scrollToBottom(){
      let h  = this.$refs.body.offsetHeight;
      let sh = this.$refs.body.scrollHeight;
      this.$refs.body.scrollTop = sh-h;
    },
    stringCheckLen(str,l){
      if(str.length>l)return str.substring(0,l)+'...';
      return str;
    },
    //
    submitdata(){
      if(!this.cansubmit)return;
      let data = {question:this.question,options:[],answer:[],type:"create",id:this.myid,token:window.sessionStorage.getItem('mytoken')};
      for(let i=0;i<this.list.length;i++){
        data.options.push(this.list[i].text);
        if(this.list[i].isanswer)data.answer.push(i);
      }
      //fetch("http://localhost:8088/answer",{
      fetch("/answer",{
        method: 'POST',
        headers: {
          //"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Content-type":"application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      }).then(res=>res.json()).then(json=>{
        console.log(json);
        if(json.state=='ok'){
          this.toasttext = "上传成功！";
          this.myid = json.id;
        }else if(json.state=='exists'){
          this.toasttext = "题目已存在！";
        }else{
          this.toasttext = "上传失败！";
        }
        this.toast = true;
        setTimeout(() => {
          this.toast = false;
        }, 2000);
      });
    },
    getData(id){
      //fetch("http://localhost:8088/answer",{
      fetch("/answer",{
        method: 'POST',
        headers: {
          "Content-type":"application/json; charset=utf-8",
        },
        body: `{"type":"getbyid","id":"${id}","token":"${window.sessionStorage.getItem('mytoken')}"}`,
      }).then(res=>res.json()).then(json=>{
        this.question = json.question;
        this.list = [];
        for(let i=0;i<json.options.length;i++){
          this.list.push({letter:String.fromCodePoint(65+i),text:json.options[i],isanswer:false});
        }
        this.sletter='';
        for(let i=0;i<json.answer.length;i++){
          this.list[json.answer[i]].isanswer = true;
          this.sletter = this.sletter+','+this.list[json.answer[i]].letter;
        }
        this.sletter = this.sletter.substring(1);
        //console.log(json)
      });
    },
  },
}
</script>
<style scoped>
.content{
  background: #F2F2F2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: PingFang SC;
}
.titlebar{
  height: 44px;
  font-size: 17px;
  font-weight: 500;
  line-height: 44px;
  color: #000000;
  text-align: center;
  background: white;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
}
.body{
  height: 0;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
}
.titlebar span{
  width: 44px;
  height: 44px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
}
.titlebar span:active{
  background: rgba(0,0,0,0.3);
}
.titlebar span::before{
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-top: 2px solid #888888;
  border-right: 2px solid #888888;
  transform: rotateZ(225deg);
  margin: 15px;
}
.subtitle{
  height: 54px;
  font-size: 16px;
  font-weight: 500;
  line-height: 54px;
  color: #383838;
  padding: 0 16px;
  overflow: hidden;
}
.input1{
  width: 100%;
  height: 80px;
  background: white;
  overflow: hidden;
  margin-bottom: 18px;
}
.input1 textarea{
  display: block;
  margin: 16px;
  outline: none;
  border: none;
  width: calc(100% - 32px);
  height: 48px;
  font-family: PingFang SC;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
}
.input1 textarea::placeholder{
  color: #B2B2B2;
}
.itemarea{
  background: white;
  width: 100%;
}
.item{
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
.item:last-child{
  border-bottom: none;
}
.item span{
  display: inline-block;
  height: 56px;
  width: 21px;
  font-size: 16px;
  font-weight: 500;
  line-height: 56px;
  color: #383838;
}
.item input{
  height: 100%;
  width: 0;
  flex: 1;
  outline: none;
  border: none;
  padding: 0 6px;
}
.item input::placeholder{
  font-size: 16px;
  font-weight: 400;
  color: #B2B2B2;
}
.item li{
  list-style:none;
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  border: 2px solid #333333;
  border-radius: 50%;
}
.item li::before{
  content: '';
  display: block;
  width: 12px;
  height: 2px;
  background: #333333;
  position: absolute;
  top: 9px;
  right: 4px;
}
.add{
  height: 54px;
  width: 100%;
  position: relative;
}
.add span{
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  border: 2px solid #333333;
  border-radius: 50%;
}
.add span::before{
  content: '';
  display: block;
  width: 12px;
  height: 2px;
  background: #333333;
  position: absolute;
  top: 9px;
  right: 4px;
}
.add span::after{
  content: '';
  display: block;
  width: 2px;
  height: 12px;
  background: #333333;
  position: absolute;
  top: 4px;
  right: 9px;
}
.selectitem{
  display: block;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 56px;
  color: #383838;
  padding-left: 16px;
  background: white;
  position: relative;
}
.selectitem span{
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  line-height: 56px;
  color: #0F5DFB;
  float: right;
  margin-right: 40px;
  max-width: 200px;
  overflow: hidden;
}
.selectitem::after{
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  border-top: 2px solid #888888;
  border-right: 2px solid #888888;
  position: absolute;
  top: 23px;
  right: 21px;
  transform: rotateZ(45deg);
}
.submit{
  height: 56px;
  margin: 20px 16px 34px 16px;
  background: #acc4f4;
  border-radius: 12px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 56px;
  color: #FFFFFF;
  text-align: center;
}
.submit-on{
  background: #0F5DFB;
}
.submit-on:active{
  background: #0d45b4;
}

.dialog{
  display: block;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
}
.items{
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  top: 50%;
  left: 32px;
  right: 32px;
  width: calc(100% - 64px);
  max-height: calc(100% - 64px);
  border-radius: 4px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
  transform: translateY(-50%);
  overflow-y: scroll;
}
.dia_title{
  height: 44px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.dia_title input{
  width: 16px;
  height: 16px;
  margin: 14px 10px 14px 16px;
}
.dia_title label{
  vertical-align: top;
  height: 44px;
  line-height: 44px;
}
.dia_title span{
  display: inline-block;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
}
.dia_con{
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.sitem{
  height: 22px;
  line-height: 22px;
  padding: 16px;
}
.sitem input{
  width: 16px;
  height: 16px;
  margin: 3px 10px 3px 0px;
}
.sitem:active{
  background: rgba(0,0,0,0.3);
}
.sitem span{
  vertical-align: top;
}

.toasts{
  background: rgba(0,0,0,0.6);
  border-radius: 6px;
  padding: 6px 12px;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  color: white;
}
.toast-enter-from,
.toast-leave-to{
  transform: translateX(-50%) scale(0);
}
.toast-enter-active,
.toast-leave-active{
  transition: all .2s ease;
}
</style>
