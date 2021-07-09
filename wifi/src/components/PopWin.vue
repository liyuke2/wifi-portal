<template>
    <transition name="popwinan">
    <div class="popwin-root" v-show="modelValue" ref="root">
        <div class="content" @click.stop>
            <slot></slot>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
    props:['modelValue','element','ptop','pleft','pright','palign'],
    data(){
        return{
            //
        }
    },
    watch:{
        element(){
            let xy = this.GetXY(this.element,document.body);
            if(this.palign=='right')
                this.$refs.root.style.right = this.pright+'px';
            else
                this.$refs.root.style.left = this.pleft+'px';
            this.$refs.root.style.top = (parseInt(xy.y)+parseInt(this.ptop))+'px';
        },
    },
    mounted(){
        if(!this.pright)this.pright=0;
        if(this.pleft||this.pleft===0)
            this.$refs.root.style.left = (this.pleft)+'px';
        else this.left = 0;
        if(this.ptop||this.ptop===0)
            this.$refs.root.style.top = (this.ptop)+'px';
        else this.ptop = 0;
    },
    methods:{
        CheckParent(n,p){
		    if(n==null)return false;
            if(n==p)return true;
		    var node = n;
		    do{
			    node = node.parentNode?node.parentNode:null;
			    if(node == p)return true;
		    }while(node!=null);
		    return false;
	    },
        GetXY(node,root){
            var x = 0;
            var y = 0;
		    while(node != root&&node){
			    x = x + node.offsetLeft;
                y = y + node.offsetTop;
			    node = node.offsetParent;
                if(node==root)return {x:x,y:y};
                if(this.CheckParent(root,node))return {x:x-root.offsetLeft,y:y-root.offsetTop};
		    }
            return {x:x,y:y};
        },
    },
}
</script>
<style scoped>
.popwin-root{
    position: fixed;
    z-index: 999;
    background: white;
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    border-radius: 4px;
    overflow: hidden;
}
.content{
    width: 100%;
    height: 100%;
    min-width: 80px;
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 64px);
    position: relative;
}

.popwinan-enter-from{
    transform: translate(-50%,-50%) scale(0.1);
}
.popwinan-enter-active{
    transition: all .1s ease;
}
</style>