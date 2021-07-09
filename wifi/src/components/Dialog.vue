<template>
    <div class="dialog-root" v-if="modelValue" @click="borderclick">
        <transition name="dlgpopup">
        <div class="content" @click.stop v-if="ifcontent">
            <div class="head" v-if="ifhead">
                <slot name="head"></slot>
            </div>
            <div class="body">
                <slot></slot>
            </div>
            <div class="foot" v-if="iffoot">
                <slot name="foor">
                    <div class="foot-default">
                        <div class="foot-button" style="border-right:1px solid rgba(0,0,0,0.1);" @click="cancelclick">取消</div>
                        <div class="foot-button" @click="okclick">确认</div>
                    </div>
                </slot>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    props:{'modelValue':{default:false},'canclose':{default:true},iffoot:false,ifhead:false,data:null},
    emits:['update:modelValue','bcancel','bok'],
    setup() {
    },
    data(){
        return {
            ifcontent:this.modelValue,
        }
    },
    watch:{
        modelValue(val,old){
            if(val)
                this.$nextTick(()=>{this.ifcontent=true});
            else this.ifcontent=false;
        }
    },
    methods:{
        borderclick(e){
            if(this.canclose)
                this.$emit('update:modelValue', false);
        },
        cancelclick(e){
            this.$emit('update:modelValue', false);
            this.$emit('bcancel', this.data);
        },
        okclick(e){
            this.$emit('bok', this.data);
        }
    },
}
</script>
<style scoped>
.dialog-root{
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0,0,0,0.3);
    top: 0;
    left: 0;
}
.content{
    min-width: 200px;
    width: max-content;
    /*min-height: 160px;*/
    background: white;
    max-width: calc(100% - 64px);
    max-height: calc(100% - 64px);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
}
.head{
    height: 30px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.body{
    width: 100%;
    flex: 1;
    overflow-y: scroll;
}
.foot{
    width: 100%;
    height: 40px;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.foot-default{
    display: flex;
    height: 100%;
}
.foot-button{
    height:40px;
    flex:1;
    line-height:40px;
    text-align: center;
}
.foot-button:active{
    background: rgba(0,0,0,0.1);
}

.dlgpopup-enter-from,
.dlgpopup-leave-to{
    transform: translate(-50%,-50%) scale(0.1);
}
.dlgpopup-enter-active,
.dlgpopup-leave-active{
    transition: all .2s ease;
}
</style>