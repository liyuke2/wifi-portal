<template>
    <div class="login-root">
        <div class="titlebar">登录</div>
        <div class="body">
            <div class="tops">管理员登录</div>
            <div class="inputs">
                <div class="input">
                    <input type="password" ref="input"/>
                    <svg enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666" class="icon">
                        <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
                        <g><g><path d="M2,17h20v2H2V17z M3.15,12.95L4,11.47l0.85,1.48l1.3-0.75L5.3,10.72H7v-1.5H5.3l0.85-1.47L4.85,7L4,8.47L3.15,7l-1.3,0.75 L2.7,9.22H1v1.5h1.7L1.85,12.2L3.15,12.95z M9.85,12.2l1.3,0.75L12,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H15v-1.5h-1.7l0.85-1.47 L12.85,7L12,8.47L11.15,7l-1.3,0.75l0.85,1.47H9v1.5h1.7L9.85,12.2z M23,9.22h-1.7l0.85-1.47L20.85,7L20,8.47L19.15,7l-1.3,0.75 l0.85,1.47H17v1.5h1.7l-0.85,1.48l1.3,0.75L20,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H23V9.22z"/></g></g>
                    </svg>
                </div>
                <div class="button" @click="login"><span class="text">登录</span></div>
            </div>
            <div class="foots"></div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    methods:{
        login(e){
            fetch("/answer",{
                method: 'POST',
                headers: {
                    "Content-type":"application/json; charset=utf-8",
                },
                body: `{"type":"login","data":${this.$refs.input.value}}`,
            }).then(res=>res.json()).then(json=>{
                if(json.state=='ok'){
                    window.sessionStorage.setItem('mytoken',json.token);
                    this.$router.replace('/device');
                }
            });
        },
    },
}
</script>
<style scoped>
.login-root{
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
.tops{
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 40px;
}
.inputs{
    padding: 16px;
}
.input{
   position: relative;
}
.input input{
    outline: none;
    border: none;
    width: calc(100% - 48px);
    padding: 8px 8px 8px 40px;
    height: 24px;
    font-size: 16px;
    border-bottom: 2px solid #666666;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.1);
}
.input input:focus{
    border-color: #0F5DFB;
}
.input input:focus + .icon{
    fill: #0F5DFB;
}
.input .icon{
    position: absolute;
    top: 8px;
    left: 8px;
}
.button{
    height: 40px;
    background: #0F5DFB;
    margin-top: 20px;
    color: white;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    border-radius: 6px;
}
.button:active{
    background: #0c4bc9;
}
.button .text{
    display: inline-block;
    letter-spacing: 1em;
}
</style>