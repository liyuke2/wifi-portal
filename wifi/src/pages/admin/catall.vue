<template>
  <div class="content">
    <div class="titlebar"><span @click="pageback"></span>查看题目<li class="titlemore" @click="deleteall">
      <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" style="vertical-align: top;">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/>
      </svg>
    </li></div>
    <div class="body">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="ilineblock" style="border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:10px;background: #fefff8;">{{index+1}}、<code style="font-size:16px;" v-html="textfilter(item.question)"></code></div>
        <div class="ilineblock">
          <span class="lblock" v-for="(item2,index) in item.options" :key="item2">
            <input class="icheckbox" type="checkbox" :checked="item.answer.includes(index)" :data-val="item.answer.includes(index)" @click="checkboxchange"/>
            {{String.fromCodePoint(65+index)}}、{{item2}}
          </span>
        </div>
        <div class="ifoot">
          <span class="leftbar"></span>
          <span class="ibutton" @click="editclick(index)">
            <svg height="16px" viewBox="0 0 24 24" width="16px" fill="#000000">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
            <span>编辑</span>
          </span>
          <span class="ibutton" @click="deleteclick(index)" style="color:red;">
            <svg height="16px" viewBox="0 0 24 24" width="16px" fill="#ff0000">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
            <span>删除</span>
          </span>
        </div>
      </div>
      <my-cricle v-show="loading" class="loading"/>
      <my-dialog v-model="deletedialog" :iffoot="true" :data="deleteitem" @bok="dialogok">
        <div style="height:80px;line-height:80px;">{{deletetext}}</div>
      </my-dialog>
    </div>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
import Cricle from '@/components/Circle.vue'

export default {
  components:{
    "my-cricle":Cricle,
    'my-dialog':Dialog,
  },
  props:['addr'],
  data() {
    return{
      loading:true,
      list:[],

      deletedialog:false,
      deleteitem:-1,
      deletetext:"确认删除？",
    }
  },
  methods:{
    checkboxchange(e){
      let v = e.target.dataset['val'];
      e.target.checked = (v=='true'?true:false);
    },
    textfilter(str){
      return str.replace(/(\n|\r)+?/g,'<br>');
    },
    pageback(){
      this.$router.back();
    },
    getAllqu(){
      //fetch("http://localhost:8088/answer",{
      fetch("/answer",{
        method: 'POST',
        headers: {
          "Content-type":"application/json; charset=utf-8",
        },
        body: `{"type":"getall","token":"${window.sessionStorage.getItem('mytoken')}"}`,
      }).then(res=>res.json()).then(json=>{
        //console.log(json);
        this.loading = false;
        this.list = json;
      });
    },
    editclick(i){
      this.$router.push(`/create?id=${i}&addr=${this.addr}`);
    },
    deleteclick(i){
      this.deleteitem = i;
      this.deletedialog=true;
      this.deletetext="确认删除？";
    },
    deleteall(e){
      this.deleteitem = -100;
      this.deletedialog=true;
      this.deletetext="确认全部删除？";
    },
    dialogok(i){
      //fetch("http://localhost:8088/answer",{
      fetch("/answer",{
        method: 'POST',
        headers: {
          "Content-type":"application/json; charset=utf-8",
        },
        body: `{"type":"delete","id":"${i}","token":"${window.sessionStorage.getItem('mytoken')}"}`,
      }).then(res=>res.json()).then(json=>{
        //console.log(json);
        if(i==-100)this.list=[];
        else this.list.splice(i,1);
        this.deletedialog=false;
      });
    },
  },
  mounted(){
    this.getAllqu();
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
  text-align: center;
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
.titlemore{
  width: 24px;
  height: 24px;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  list-style: none;
  padding: 10px;
}
.titlemore:active{
  background: rgba(0,0,0,0.3);
}
.loading{
  width:60px;
  height:60px;
  margin: 20px auto;
}

.item{
  display: block;
  margin: 16px;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3);
  padding: 16px;
  text-align: left;
}
.ilineblock{
  display: block;
  margin-bottom: 10px;
  font-family: monospace;
  font-size: 16px;
}
.ilineblock .lblock{
  display: block;
  line-height: 26px;
}

.ifoot{
  display: block;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 30px;
  text-align: right;
  padding-top: 10px;
}
.ibutton{
  display: inline-block;
  height: 30px;
  line-height: 30px;
}
.ibutton svg{
  width: 16px;
  height: 16px;
  margin: 7px;
}
.ibutton span{
  display: inline-block;
  height: 30px;
  line-height: 30px;
  vertical-align: top;
  margin-right: 16px;
}
</style>