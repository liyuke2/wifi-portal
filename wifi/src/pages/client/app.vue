<template>
  <div class="content">
        <div class="titlebar">连接WIFI</div>
        <div class="body">
          <div class="question">{{question}}{{tip}}</div>
          <div v-for="(item,index) in list" :key="index" class="anbutton" :class="{'anbutton-on':item.select}" @click="itemclick(index)">{{String.fromCodePoint(65+index)}}、{{item.text}}</div>
        </div>
        <div class="submit" @click="submit">提交答案连接至Wi-Fi</div>
        <my-dialog v-model="dialog1" :canclose="false">
          <div class="dialog1-text"><span>{{dialog1text}}</span></div>
          <div class="dialog1-button" @click="getagain">再次答题</div>
        </my-dialog>
        <my-dialog v-model="dialog2" :canclose="false">
          <div class="dialog2-text">
            <svg focusable="false" viewBox="0 0 120 120" class="circle-pross">
              <circle fill="transparent" stroke="#0F5DFB" stroke-width="10" stroke-dasharray="0 314" cx="60" cy="60" r="50"></circle>
            </svg>
            <div class="text">正在连接到Wi-Fi</div>
          </div>
        </my-dialog>
    </div>
</template>
<script>
import '@/css/main.css'
import Dialog from '@/components/Dialog.vue'

export default {
  name: 'app',
  components:{
    'my-dialog':Dialog,
  },
  data(){
    return {
      question:"主要运输巷和主要回风巷的净高，自轨面起不得低于几米。",
      list:[{text:"1",select:false},{text:"1",select:false},{text:"1",select:false},{text:"1",select:false}],
      type: 'multiple',//'multiple','single'

      quid:0,
      //
      dialog1:false,
      dialog1text:"",
      dialog2:false,
    }
  },
  computed:{
    tip(){
      if(this.type=='single')
        return "(单选)";
      return "(多选)"
    },
  },
  methods:{
    itemclick(i){
      if(this.type=="single"){
        for(let j=0;j<this.list.length;j++){
          if(j==i){
            this.list[i].select = !this.list[i].select;
          }else{
            this.list[j].select = false;
          }
        }
      }else{
        this.list[i].select = !this.list[i].select;
      }
    },
    submit(e){
      let data = {id:this.quid,answer:[],type:"check"};
      for(let j=0;j<this.list.length;j++){
          if(this.list[j].select){
            data.answer.push(j);
          }
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
        if(json.state=="ok"){
          this.dialog2 = true;
          setTimeout(()=>{this.dialog2=false;},3000);
        }else{
          this.dialog1 = true;
          this.dialog1text = "";
          for(let i=0;i<json.answer.length;i++){
            this.dialog1text += (','+String.fromCodePoint(65+json.answer[i]));
          }
          this.dialog1text = "正确答案："+this.dialog1text.substring(1);
        }
      });
    },
    getagain(e){
      this.getQuestion();
      this.dialog1 = false;
    },
    getQuestion(){
      //fetch("http://localhost:8088/answer",{
      fetch("/answer",{
        method: 'POST',
        headers: {
          //"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Content-type":"application/json; charset=utf-8",
        },
        body: '{"type":"getq"}',
      })
      .then(res=>res.json()).then(json=>{
        console.log(json);
        this.question = json.question;
        this.list = [];
        for(let i=0;i<json.options.length;i++){
          this.list.push({text:json.options[i],select:false});
        }
        this.type = json.type;
        this.quid = json.quid;
      });
    },
  },
  mounted(){
    this.getQuestion();
  },
}
</script>
<style scoped>
.content{
  background: white;;
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
}

.question{
  width: calc(100% - 48px);
  height: auto;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: #333333;
  margin: 44px 24px 16px 24px;
}
.anbutton{
  width: calc(100% - 80px);
  height: 24px;
  background: #E6E6E6;
  border-radius: 12px;
  margin: 16px 24px;
  padding: 16px;
}
.anbutton-on{
  background: #0F5DFB;
}

.submit{
  width: calc(100% - 48px);
  height: 56px;
  background: #FFD833;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  line-height: 56px;
  color: #333333;
  text-align: center;
  margin: 40px 24px;
}
.submit:active{
  background: #bea326;
}

.dialog1-text{
  height: 123px;
  width: calc(100vw - 64px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}
.dialog1-text span{
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #333333;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.dialog1-button{
  height: 56px;
  text-align: center;
  line-height: 56px;
  font-size: 17px;
  font-weight: 500;
  color: #0F5DFB;
}

.dialog2-text{
  height: 180px;
  width: calc(100vw - 64px);
  text-align: center;
}

.dialog2-text .text{
  height: 24px;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  color: #333333;
  margin-top: 24px;
  text-align: center;
}
.circle-pross{
  width: 48px;
  height: 48px;
  margin-top: 42px;
  animation: circle-pross2 1.5s linear 0s infinite;
}
.circle-pross circle{
  stroke-dasharray: 0,44, 210;
  animation: circle-pross1 1.5s ease 0s infinite;
}
@keyframes circle-pross1 {
  0% {stroke-dasharray: 0, 0, 0, 314;}
  50% {stroke-dasharray: 0, 44, 270, 0;}
  100% {stroke-dasharray: 0, 314, 0, 0;}
}
@keyframes circle-pross2 {
  0% {transform: rotateZ(-45deg);}
  100% {transform: rotateZ(315deg);}
}

</style>
