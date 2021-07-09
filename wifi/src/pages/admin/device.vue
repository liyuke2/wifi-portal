<template>
    <div class="content" @click="dialog=false;">
        <div class="titlebar">选择设备<span class="righttool" @click="downtemp">
            <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#0F5DFB"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            <span>导入模板</span>
            </span>
        </div>
        <div class="body">
            <div v-for="(item,index) in list" :key="index" class="item" :data-val="index" @click.stop="deviceclick(index,$event)">
                <span class="iname">{{item.name}}</span>
                <span class="iaddr">{{item.addr}}</span>
            </div>
        </div>
        <my-menu v-model="dialog" :element="item" ptop="20" pright="16" palign="right">
            <div class="opitem" @click="importclick">批量导入题目</div>
            <div class="opitem" @click="exportclick">导出全部题目</div>
            <div class="opitem" @click="createclick">单个创建题目</div>
            <div class="opitem" @click="catclick">查看已导入题目</div>
        </my-menu>
        <input type="file" ref="file" style="display:none;" @change="filechange"/>
        <my-dialog v-model="dialog2" :iffoot="true" @bok="dialog2=false;">
            <div class="dialog2-con">导入成功</div>
        </my-dialog>
    </div>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
import PopWin from '@/components/PopWin.vue'
import Cricle from '@/components/Circle.vue'

export default {
    components:{
        'my-menu':PopWin,
        'my-dialog':Dialog,
        "my-cricle":Cricle,
    },
    data() {
        return {
            list:[{name:"设备1",addr:"192.168.0.1"},{name:"设备2",addr:"192.168.1.1"},{name:"设备3",addr:"192.168.2.1"}],
            dialog:false,
            device: -1,

            item:null,
            dialog2:false,
        }
    },
    watch:{
        dialog(){
            if(this.dialog==false)this.device = -1;
        }
    },
    methods:{
        deviceclick(i,e){
            this.dialog = false;
            this.device = i;
            this.item = e.target;
            setTimeout(()=>{this.dialog = true;},20);
        },
        createclick(e){
            if(this.device>=0){
                this.$router.push('/create?addr='+this.list[this.device].addr);
                this.dialog = false;
            }
        },
        catclick(e){
            if(this.device>=0){
                this.$router.push('/catall?addr='+this.list[this.device].addr);
                this.dialog = false;
            }
        },
        importclick(e){
            this.dialog = false;
            this.$refs.file.click();
        },
        exportclick(e){
            let a = document.createElement('a');
            a.style.display = 'none';
            a.href = "/answer.json";
            a.download = 'export.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            this.dialog = false;
        },
        submitdata(e){
            let file = this.$refs.file.files;
            if(file.lenght<=0)return;
            var reader = new FileReader();
            reader.onload = ()=> {
                fetch("/answer",{
                    method: 'POST',
                    headers: {
                        "Content-type":"application/json; charset=utf-8",
                    },
                    body: `{"type":"import","data":${reader.result},"token":"${window.sessionStorage.getItem('mytoken')}"}`,
                }).then(res=>res.json()).then(json=>{
                    console.log(json);
                    this.dialog2 = true;
                });
            };
            reader.readAsText(file[0]);
        },
        filechange(e){
            this.submitdata();
        },
        downtemp(e){
            let a = document.createElement('a');
            a.style.display = 'none';
            a.href = "/templete.json";
            a.download = 'templete.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            this.dialog = false;
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
}
.righttool{
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
    font-size: 14px;
    color: #0F5DFB;
}
.righttool svg{
    width: 14px;
    height: 14px;
    margin-top: 15px;
    margin-right: 4px;
}
.righttool span{
    vertical-align: top;
}
.item{
    display: block;
    color: #333333;
    text-decoration: none;
    width: 100%;
    background: white;
    height: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.item:active{
    background: rgba(0,0,0,0.3);
}
.iname{
    margin-left: 16px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    color: #333333;
    float: left;
}
.iaddr{
    margin-right: 16px;
    height: 40px;
    font-size: 14px;
    font-weight: 300;
    color: #999999;
    line-height: 40px;
    float: right;
}
.opitem{
    display: block;
    height: 40px;
    padding: 0 16px;
    text-align: center;
    line-height: 40px;
}
.opitem:active{
    background: rgba(0,0,0,0.3);
}

.dialog2-con{
    height:60px;
    padding:16px;
    text-align: center;
    line-height: 60px;
}
</style>