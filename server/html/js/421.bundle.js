(self.webpackChunkwifi=self.webpackChunkwifi||[]).push([[421],{756:(n,r,t)=>{"use strict";t.d(r,{Z:()=>e});const e={props:{modelValue:{default:!1},canclose:{default:!0},iffoot:!1,ifhead:!1,data:null},emits:["update:modelValue","bcancel","bok"],setup:function(){},data:function(){return{ifcontent:this.modelValue}},watch:{modelValue:function(n,r){var t=this;n?this.$nextTick((function(){t.ifcontent=!0})):this.ifcontent=!1}},methods:{borderclick:function(n){this.canclose&&this.$emit("update:modelValue",!1)},cancelclick:function(n){this.$emit("update:modelValue",!1),this.$emit("bcancel",this.data)},okclick:function(n){this.$emit("bok",this.data)}}}},729:(n,r,t)=>{"use strict";t.d(r,{s:()=>d});var e=t(361),i=t(864),a=(0,e.HX)("data-v-30a69b61");(0,e.dD)("data-v-30a69b61");var o={key:0,class:"head"},l={class:"body"},s={key:1,class:"foot"},A={class:"foot-default"};(0,e.Cn)();var d=a((function(n,r,t,d,c,p){return t.modelValue?((0,e.wg)(),(0,e.j4)("div",{key:0,class:"dialog-root",onClick:r[4]||(r[4]=function(){return p.borderclick&&p.borderclick.apply(p,arguments)})},[(0,e.Wm)(i.uT,{name:"dlgpopup"},{default:a((function(){return[c.ifcontent?((0,e.wg)(),(0,e.j4)("div",{key:0,class:"content",onClick:r[3]||(r[3]=(0,i.iM)((function(){}),["stop"]))},[t.ifhead?((0,e.wg)(),(0,e.j4)("div",o,[(0,e.WI)(n.$slots,"head",{},void 0,!0)])):(0,e.kq)("v-if",!0),(0,e.Wm)("div",l,[(0,e.WI)(n.$slots,"default",{},void 0,!0)]),t.iffoot?((0,e.wg)(),(0,e.j4)("div",s,[(0,e.WI)(n.$slots,"foor",{},(function(){return[(0,e.Wm)("div",A,[(0,e.Wm)("div",{class:"foot-button",style:{"border-right":"1px solid rgba(0,0,0,0.1)"},onClick:r[1]||(r[1]=function(){return p.cancelclick&&p.cancelclick.apply(p,arguments)})},"取消"),(0,e.Wm)("div",{class:"foot-button",onClick:r[2]||(r[2]=function(){return p.okclick&&p.okclick.apply(p,arguments)})},"确认")])]}),{},!0)])):(0,e.kq)("v-if",!0)])):(0,e.kq)("v-if",!0)]})),_:3})])):(0,e.kq)("v-if",!0)}))},261:(n,r,t)=>{"use strict";t.d(r,{Z:()=>l});var e=t(549),i=t.n(e),a=t(165),o=t.n(a)()(i());o.push([n.id,"\n.circel-root[data-v-54061121]{\r\n    position: relative;\n}\n.circle-pross[data-v-54061121]{\r\n  width: 100%;\r\n  height: 100%;\r\n  animation: circle-pross2-54061121 1.5s linear 0s infinite;\n}\n.circle-pross circle[data-v-54061121]{\r\n  stroke-dasharray: 0,44, 210;\r\n  animation: circle-pross1-54061121 1.5s ease 0s infinite;\n}\n@keyframes circle-pross1-54061121 {\n0% {stroke-dasharray: 0, 0, 0, 314;}\n50% {stroke-dasharray: 0, 44, 270, 0;}\n100% {stroke-dasharray: 0, 314, 0, 0;}\n}\n@keyframes circle-pross2-54061121 {\n0% {transform: rotateZ(-45deg);}\n100% {transform: rotateZ(315deg);}\n}\r\n\r\n","",{version:3,sources:["webpack://./src/components/Circle.vue"],names:[],mappings:";AAQA;IACI,kBAAkB;AACtB;AACA;EACE,WAAW;EACX,YAAY;EACZ,yDAAgD;AAClD;AACA;EACE,2BAA2B;EAC3B,uDAA8C;AAChD;AACA;AACE,IAAI,8BAA8B,CAAC;AACnC,KAAK,+BAA+B,CAAC;AACrC,MAAM,8BAA8B,CAAC;AACvC;AACA;AACE,IAAI,0BAA0B,CAAC;AAC/B,MAAM,0BAA0B,CAAC;AACnC",sourcesContent:['<template>\r\n    <div class="circel-root">\r\n        <svg focusable="false" viewBox="0 0 120 120" class="circle-pross">\r\n            <circle fill="transparent" stroke="#0F5DFB" stroke-width="10" stroke-dasharray="0 314" cx="60" cy="60" r="50"></circle>\r\n        </svg>\r\n    </div>\r\n</template>\r\n<style scoped>\r\n.circel-root{\r\n    position: relative;\r\n}\r\n.circle-pross{\r\n  width: 100%;\r\n  height: 100%;\r\n  animation: circle-pross2 1.5s linear 0s infinite;\r\n}\r\n.circle-pross circle{\r\n  stroke-dasharray: 0,44, 210;\r\n  animation: circle-pross1 1.5s ease 0s infinite;\r\n}\r\n@keyframes circle-pross1 {\r\n  0% {stroke-dasharray: 0, 0, 0, 314;}\r\n  50% {stroke-dasharray: 0, 44, 270, 0;}\r\n  100% {stroke-dasharray: 0, 314, 0, 0;}\r\n}\r\n@keyframes circle-pross2 {\r\n  0% {transform: rotateZ(-45deg);}\r\n  100% {transform: rotateZ(315deg);}\r\n}\r\n\r\n</style>'],sourceRoot:""}]);const l=o},518:(n,r,t)=>{"use strict";t.d(r,{Z:()=>l});var e=t(549),i=t.n(e),a=t(165),o=t.n(a)()(i());o.push([n.id,"\n.dialog-root[data-v-30a69b61]{\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background: rgba(0,0,0,0.3);\r\n    top: 0;\r\n    left: 0;\n}\n.content[data-v-30a69b61]{\r\n    min-width: 200px;\r\n    width: max-content;\r\n    /*min-height: 160px;*/\r\n    background: white;\r\n    max-width: calc(100% - 64px);\r\n    max-height: calc(100% - 64px);\r\n    border-radius: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);\n}\n.head[data-v-30a69b61]{\r\n    height: 30px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n}\n.body[data-v-30a69b61]{\r\n    width: 100%;\r\n    flex: 1;\r\n    overflow-y: scroll;\n}\n.foot[data-v-30a69b61]{\r\n    width: 100%;\r\n    height: 40px;\r\n    border-top: 1px solid rgba(0,0,0,0.1);\n}\n.foot-default[data-v-30a69b61]{\r\n    display: flex;\r\n    height: 100%;\n}\n.foot-button[data-v-30a69b61]{\r\n    height:40px;\r\n    flex:1;\r\n    line-height:40px;\r\n    text-align: center;\n}\n.foot-button[data-v-30a69b61]:active{\r\n    background: rgba(0,0,0,0.1);\n}\n.dlgpopup-enter-from[data-v-30a69b61],\r\n.dlgpopup-leave-to[data-v-30a69b61]{\r\n    transform: translate(-50%,-50%) scale(0.1);\n}\n.dlgpopup-enter-active[data-v-30a69b61],\r\n.dlgpopup-leave-active[data-v-30a69b61]{\r\n    transition: all .2s ease;\n}\r\n","",{version:3,sources:["webpack://./src/components/Dialog.vue"],names:[],mappings:";AAwDA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,MAAM;IACN,OAAO;AACX;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,4BAA4B;IAC5B,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,2CAA2C;AAC/C;AACA;IACI,YAAY;IACZ,WAAW;IACX,wCAAwC;AAC5C;AACA;IACI,WAAW;IACX,OAAO;IACP,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;IACZ,qCAAqC;AACzC;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,WAAW;IACX,MAAM;IACN,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,2BAA2B;AAC/B;AAEA;;IAEI,0CAA0C;AAC9C;AACA;;IAEI,wBAAwB;AAC5B",sourcesContent:['<template>\r\n    <div class="dialog-root" v-if="modelValue" @click="borderclick">\r\n        <transition name="dlgpopup">\r\n        <div class="content" @click.stop v-if="ifcontent">\r\n            <div class="head" v-if="ifhead">\r\n                <slot name="head"></slot>\r\n            </div>\r\n            <div class="body">\r\n                <slot></slot>\r\n            </div>\r\n            <div class="foot" v-if="iffoot">\r\n                <slot name="foor">\r\n                    <div class="foot-default">\r\n                        <div class="foot-button" style="border-right:1px solid rgba(0,0,0,0.1);" @click="cancelclick">取消</div>\r\n                        <div class="foot-button" @click="okclick">确认</div>\r\n                    </div>\r\n                </slot>\r\n            </div>\r\n        </div>\r\n        </transition>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    props:{\'modelValue\':{default:false},\'canclose\':{default:true},iffoot:false,ifhead:false,data:null},\r\n    emits:[\'update:modelValue\',\'bcancel\',\'bok\'],\r\n    setup() {\r\n    },\r\n    data(){\r\n        return {\r\n            ifcontent:this.modelValue,\r\n        }\r\n    },\r\n    watch:{\r\n        modelValue(val,old){\r\n            if(val)\r\n                this.$nextTick(()=>{this.ifcontent=true});\r\n            else this.ifcontent=false;\r\n        }\r\n    },\r\n    methods:{\r\n        borderclick(e){\r\n            if(this.canclose)\r\n                this.$emit(\'update:modelValue\', false);\r\n        },\r\n        cancelclick(e){\r\n            this.$emit(\'update:modelValue\', false);\r\n            this.$emit(\'bcancel\', this.data);\r\n        },\r\n        okclick(e){\r\n            this.$emit(\'bok\', this.data);\r\n        }\r\n    },\r\n}\r\n<\/script>\r\n<style scoped>\r\n.dialog-root{\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    background: rgba(0,0,0,0.3);\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.content{\r\n    min-width: 200px;\r\n    width: max-content;\r\n    /*min-height: 160px;*/\r\n    background: white;\r\n    max-width: calc(100% - 64px);\r\n    max-height: calc(100% - 64px);\r\n    border-radius: 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);\r\n}\r\n.head{\r\n    height: 30px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n}\r\n.body{\r\n    width: 100%;\r\n    flex: 1;\r\n    overflow-y: scroll;\r\n}\r\n.foot{\r\n    width: 100%;\r\n    height: 40px;\r\n    border-top: 1px solid rgba(0,0,0,0.1);\r\n}\r\n.foot-default{\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n.foot-button{\r\n    height:40px;\r\n    flex:1;\r\n    line-height:40px;\r\n    text-align: center;\r\n}\r\n.foot-button:active{\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.dlgpopup-enter-from,\r\n.dlgpopup-leave-to{\r\n    transform: translate(-50%,-50%) scale(0.1);\r\n}\r\n.dlgpopup-enter-active,\r\n.dlgpopup-leave-active{\r\n    transition: all .2s ease;\r\n}\r\n</style>'],sourceRoot:""}]);const l=o},37:(n,r,t)=>{"use strict";t.d(r,{Z:()=>l});var e=t(549),i=t.n(e),a=t(165),o=t.n(a)()(i());o.push([n.id,"\n.content[data-v-e398713a]{\r\n  background: #F2F2F2;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: PingFang SC;\n}\n.titlebar[data-v-e398713a]{\r\n  height: 44px;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  line-height: 44px;\r\n  color: #000000;\r\n  text-align: center;\r\n  background: white;\r\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\r\n  position: relative;\r\n  z-index: 1;\r\n  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);\n}\n.body[data-v-e398713a]{\r\n  height: 0;\r\n  flex: 1;\r\n  width: 100%;\r\n  text-align: center;\r\n  overflow-y: scroll;\n}\n.titlebar span[data-v-e398713a]{\r\n  width: 44px;\r\n  height: 44px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: 50%;\n}\n.titlebar span[data-v-e398713a]:active{\r\n  background: rgba(0,0,0,0.3);\n}\n.titlebar span[data-v-e398713a]::before{\r\n  content: '';\r\n  display: block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-top: 2px solid #888888;\r\n  border-right: 2px solid #888888;\r\n  transform: rotateZ(225deg);\r\n  margin: 15px;\n}\n.titlemore[data-v-e398713a]{\r\n  width: 24px;\r\n  height: 24px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  border-radius: 50%;\r\n  list-style: none;\r\n  padding: 10px;\n}\n.titlemore[data-v-e398713a]:active{\r\n  background: rgba(0,0,0,0.3);\n}\n.loading[data-v-e398713a]{\r\n  width:60px;\r\n  height:60px;\r\n  margin: 20px auto;\n}\n.item[data-v-e398713a]{\r\n  display: block;\r\n  margin: 16px;\r\n  background: white;\r\n  border-radius: 6px;\r\n  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3);\r\n  padding: 16px;\r\n  text-align: left;\n}\n.ilineblock[data-v-e398713a]{\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  font-family: monospace;\r\n  font-size: 16px;\n}\n.ilineblock .lblock[data-v-e398713a]{\r\n  display: block;\r\n  line-height: 26px;\n}\n.ifoot[data-v-e398713a]{\r\n  display: block;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  height: 30px;\r\n  text-align: right;\r\n  padding-top: 10px;\n}\n.ibutton[data-v-e398713a]{\r\n  display: inline-block;\r\n  height: 30px;\r\n  line-height: 30px;\n}\n.ibutton svg[data-v-e398713a]{\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: 7px;\n}\n.ibutton span[data-v-e398713a]{\r\n  display: inline-block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  vertical-align: top;\r\n  margin-right: 16px;\n}\r\n","",{version:3,sources:["webpack://./src/pages/admin/catall.vue"],names:[],mappings:";AA0HA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,6CAA6C;EAC7C,kBAAkB;EAClB,UAAU;EACV,2CAA2C;AAC7C;AACA;EACE,SAAS;EACT,OAAO;EACP,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,kBAAkB;AACpB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,WAAW;EACX,cAAc;EACd,UAAU;EACV,WAAW;EACX,6BAA6B;EAC7B,+BAA+B;EAC/B,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;AACnB;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,2CAA2C;EAC3C,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;AAEA;EACE,cAAc;EACd,wCAAwC;EACxC,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;AACb;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB",sourcesContent:['<template>\r\n  <div class="content">\r\n    <div class="titlebar"><span @click="pageback"></span>查看题目<li class="titlemore" @click="deleteall">\r\n      <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" style="vertical-align: top;">\r\n        <path d="M0 0h24v24H0z" fill="none"/>\r\n        <path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"/>\r\n      </svg>\r\n    </li></div>\r\n    <div class="body">\r\n      <div v-for="(item,index) in list" :key="index" class="item">\r\n        <div class="ilineblock" style="border-bottom:1px solid rgba(0,0,0,0.1);padding-bottom:10px;background: #fefff8;">{{index+1}}、<code style="font-size:16px;" v-html="textfilter(item.question)"></code></div>\r\n        <div class="ilineblock">\r\n          <span class="lblock" v-for="(item2,index) in item.options" :key="item2">\r\n            <input class="icheckbox" type="checkbox" :checked="item.answer.includes(index)" :data-val="item.answer.includes(index)" @click="checkboxchange"/>\r\n            {{String.fromCodePoint(65+index)}}、{{item2}}\r\n          </span>\r\n        </div>\r\n        <div class="ifoot">\r\n          <span class="leftbar"></span>\r\n          <span class="ibutton" @click="editclick(index)">\r\n            <svg height="16px" viewBox="0 0 24 24" width="16px" fill="#000000">\r\n              <path d="M0 0h24v24H0z" fill="none"/>\r\n              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>\r\n            </svg>\r\n            <span>编辑</span>\r\n          </span>\r\n          <span class="ibutton" @click="deleteclick(index)" style="color:red;">\r\n            <svg height="16px" viewBox="0 0 24 24" width="16px" fill="#ff0000">\r\n              <path d="M0 0h24v24H0z" fill="none"/>\r\n              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>\r\n            </svg>\r\n            <span>删除</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <my-cricle v-show="loading" class="loading"/>\r\n      <my-dialog v-model="deletedialog" :iffoot="true" :data="deleteitem" @bok="dialogok">\r\n        <div style="height:80px;line-height:80px;">{{deletetext}}</div>\r\n      </my-dialog>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\nimport Dialog from \'@/components/Dialog.vue\'\r\nimport Cricle from \'@/components/Circle.vue\'\r\n\r\nexport default {\r\n  components:{\r\n    "my-cricle":Cricle,\r\n    \'my-dialog\':Dialog,\r\n  },\r\n  props:[\'addr\'],\r\n  data() {\r\n    return{\r\n      loading:true,\r\n      list:[],\r\n\r\n      deletedialog:false,\r\n      deleteitem:-1,\r\n      deletetext:"确认删除？",\r\n    }\r\n  },\r\n  methods:{\r\n    checkboxchange(e){\r\n      let v = e.target.dataset[\'val\'];\r\n      e.target.checked = (v==\'true\'?true:false);\r\n    },\r\n    textfilter(str){\r\n      return str.replace(/(\\n|\\r)+?/g,\'<br>\');\r\n    },\r\n    pageback(){\r\n      this.$router.back();\r\n    },\r\n    getAllqu(){\r\n      //fetch("http://localhost:8088/answer",{\r\n      fetch("/answer",{\r\n        method: \'POST\',\r\n        headers: {\r\n          "Content-type":"application/json; charset=utf-8",\r\n        },\r\n        body: `{"type":"getall","token":"${window.sessionStorage.getItem(\'mytoken\')}"}`,\r\n      }).then(res=>res.json()).then(json=>{\r\n        //console.log(json);\r\n        this.loading = false;\r\n        this.list = json;\r\n      });\r\n    },\r\n    editclick(i){\r\n      this.$router.push(`/create?id=${i}&addr=${this.addr}`);\r\n    },\r\n    deleteclick(i){\r\n      this.deleteitem = i;\r\n      this.deletedialog=true;\r\n      this.deletetext="确认删除？";\r\n    },\r\n    deleteall(e){\r\n      this.deleteitem = -100;\r\n      this.deletedialog=true;\r\n      this.deletetext="确认全部删除？";\r\n    },\r\n    dialogok(i){\r\n      //fetch("http://localhost:8088/answer",{\r\n      fetch("/answer",{\r\n        method: \'POST\',\r\n        headers: {\r\n          "Content-type":"application/json; charset=utf-8",\r\n        },\r\n        body: `{"type":"delete","id":"${i}","token":"${window.sessionStorage.getItem(\'mytoken\')}"}`,\r\n      }).then(res=>res.json()).then(json=>{\r\n        //console.log(json);\r\n        if(i==-100)this.list=[];\r\n        else this.list.splice(i,1);\r\n        this.deletedialog=false;\r\n      });\r\n    },\r\n  },\r\n  mounted(){\r\n    this.getAllqu();\r\n  },\r\n}\r\n<\/script>\r\n<style scoped>\r\n.content{\r\n  background: #F2F2F2;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: PingFang SC;\r\n}\r\n.titlebar{\r\n  height: 44px;\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  line-height: 44px;\r\n  color: #000000;\r\n  text-align: center;\r\n  background: white;\r\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\r\n  position: relative;\r\n  z-index: 1;\r\n  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);\r\n}\r\n.body{\r\n  height: 0;\r\n  flex: 1;\r\n  width: 100%;\r\n  text-align: center;\r\n  overflow-y: scroll;\r\n}\r\n.titlebar span{\r\n  width: 44px;\r\n  height: 44px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: 50%;\r\n}\r\n.titlebar span:active{\r\n  background: rgba(0,0,0,0.3);\r\n}\r\n.titlebar span::before{\r\n  content: \'\';\r\n  display: block;\r\n  width: 8px;\r\n  height: 8px;\r\n  border-top: 2px solid #888888;\r\n  border-right: 2px solid #888888;\r\n  transform: rotateZ(225deg);\r\n  margin: 15px;\r\n}\r\n.titlemore{\r\n  width: 24px;\r\n  height: 24px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  border-radius: 50%;\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n.titlemore:active{\r\n  background: rgba(0,0,0,0.3);\r\n}\r\n.loading{\r\n  width:60px;\r\n  height:60px;\r\n  margin: 20px auto;\r\n}\r\n\r\n.item{\r\n  display: block;\r\n  margin: 16px;\r\n  background: white;\r\n  border-radius: 6px;\r\n  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.3);\r\n  padding: 16px;\r\n  text-align: left;\r\n}\r\n.ilineblock{\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  font-family: monospace;\r\n  font-size: 16px;\r\n}\r\n.ilineblock .lblock{\r\n  display: block;\r\n  line-height: 26px;\r\n}\r\n\r\n.ifoot{\r\n  display: block;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  height: 30px;\r\n  text-align: right;\r\n  padding-top: 10px;\r\n}\r\n.ibutton{\r\n  display: inline-block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n}\r\n.ibutton svg{\r\n  width: 16px;\r\n  height: 16px;\r\n  margin: 7px;\r\n}\r\n.ibutton span{\r\n  display: inline-block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  vertical-align: top;\r\n  margin-right: 16px;\r\n}\r\n</style>'],sourceRoot:""}]);const l=o},604:(n,r,t)=>{"use strict";var e=t(574),i=t.n(e),a=t(518);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals},125:(n,r,t)=>{"use strict";t.d(r,{Z:()=>p});var e=t(361),i=(0,e.HX)("data-v-54061121");(0,e.dD)("data-v-54061121");var a={class:"circel-root"},o=(0,e.Wm)("svg",{focusable:"false",viewBox:"0 0 120 120",class:"circle-pross"},[(0,e.Wm)("circle",{fill:"transparent",stroke:"#0F5DFB","stroke-width":"10","stroke-dasharray":"0 314",cx:"60",cy:"60",r:"50"})],-1);(0,e.Cn)();var l=i((function(n,r){return(0,e.wg)(),(0,e.j4)("div",a,[o])})),s=t(574),A=t.n(s),d=t(261);A()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;const c={};c.render=l,c.__scopeId="data-v-54061121";const p=c},632:(n,r,t)=>{"use strict";t.d(r,{Z:()=>a});var e=t(793),i=t(14);t(386),i.Z.render=e.s,i.Z.__scopeId="data-v-30a69b61";const a=i.Z},421:(n,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>I});var e=t(361),i=t(661),a=t(864),o=(0,e.HX)("data-v-e398713a");(0,e.dD)("data-v-e398713a");var l={class:"content"},s={class:"titlebar"},A=(0,e.Uk)("查看题目"),d=(0,e.Wm)("svg",{height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",style:{"vertical-align":"top"}},[(0,e.Wm)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,e.Wm)("path",{d:"M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"})],-1),c={class:"body"},p={class:"ilineblock",style:{"border-bottom":"1px solid rgba(0,0,0,0.1)","padding-bottom":"10px",background:"#fefff8"}},h={class:"ilineblock"},g={class:"ifoot"},C=(0,e.Wm)("span",{class:"leftbar"},null,-1),u=(0,e.Wm)("svg",{height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"#000000"},[(0,e.Wm)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,e.Wm)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})],-1),f=(0,e.Wm)("span",null,"编辑",-1),x=(0,e.Wm)("svg",{height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"#ff0000"},[(0,e.Wm)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,e.Wm)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1),v=(0,e.Wm)("span",null,"删除",-1),b={style:{height:"80px","line-height":"80px"}};(0,e.Cn)();var m=o((function(n,r,t,m,k,B){var w=(0,e.up)("my-cricle"),y=(0,e.up)("my-dialog");return(0,e.wg)(),(0,e.j4)("div",l,[(0,e.Wm)("div",s,[(0,e.Wm)("span",{onClick:r[1]||(r[1]=function(){return B.pageback&&B.pageback.apply(B,arguments)})}),A,(0,e.Wm)("li",{class:"titlemore",onClick:r[2]||(r[2]=function(){return B.deleteall&&B.deleteall.apply(B,arguments)})},[d])]),(0,e.Wm)("div",c,[((0,e.wg)(!0),(0,e.j4)(e.HY,null,(0,e.Ko)(k.list,(function(n,t){return(0,e.wg)(),(0,e.j4)("div",{key:t,class:"item"},[(0,e.Wm)("div",p,[(0,e.Uk)((0,i.zw)(t+1)+"、",1),(0,e.Wm)("code",{style:{"font-size":"16px"},innerHTML:B.textfilter(n.question)},null,8,["innerHTML"])]),(0,e.Wm)("div",h,[((0,e.wg)(!0),(0,e.j4)(e.HY,null,(0,e.Ko)(n.options,(function(t,a){return(0,e.wg)(),(0,e.j4)("span",{class:"lblock",key:t},[(0,e.Wm)("input",{class:"icheckbox",type:"checkbox",checked:n.answer.includes(a),"data-val":n.answer.includes(a),onClick:r[3]||(r[3]=function(){return B.checkboxchange&&B.checkboxchange.apply(B,arguments)})},null,8,["checked","data-val"]),(0,e.Uk)(" "+(0,i.zw)(String.fromCodePoint(65+a))+"、"+(0,i.zw)(t),1)])})),128))]),(0,e.Wm)("div",g,[C,(0,e.Wm)("span",{class:"ibutton",onClick:function(n){return B.editclick(t)}},[u,f],8,["onClick"]),(0,e.Wm)("span",{class:"ibutton",onClick:function(n){return B.deleteclick(t)},style:{color:"red"}},[x,v],8,["onClick"])])])})),128)),(0,e.wy)((0,e.Wm)(w,{class:"loading"},null,512),[[a.F8,k.loading]]),(0,e.Wm)(y,{modelValue:k.deletedialog,"onUpdate:modelValue":r[4]||(r[4]=function(n){return k.deletedialog=n}),iffoot:!0,data:k.deleteitem,onBok:B.dialogok},{default:o((function(){return[(0,e.Wm)("div",b,(0,i.zw)(k.deletetext),1)]})),_:1},8,["modelValue","data","onBok"])])])})),k=t(632);const B={components:{"my-cricle":t(125).Z,"my-dialog":k.Z},props:["addr"],data:function(){return{loading:!0,list:[],deletedialog:!1,deleteitem:-1,deletetext:"确认删除？"}},methods:{checkboxchange:function(n){var r=n.target.dataset.val;n.target.checked="true"==r},textfilter:function(n){return n.replace(/(\n|\r)+?/g,"<br>")},pageback:function(){this.$router.back()},getAllqu:function(){var n=this;fetch("/answer",{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:'{"type":"getall","token":"'.concat(window.sessionStorage.getItem("mytoken"),'"}')}).then((function(n){return n.json()})).then((function(r){n.loading=!1,n.list=r}))},editclick:function(n){this.$router.push("/create?id=".concat(n,"&addr=").concat(this.addr))},deleteclick:function(n){this.deleteitem=n,this.deletedialog=!0,this.deletetext="确认删除？"},deleteall:function(n){this.deleteitem=-100,this.deletedialog=!0,this.deletetext="确认全部删除？"},dialogok:function(n){var r=this;fetch("/answer",{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:'{"type":"delete","id":"'.concat(n,'","token":"').concat(window.sessionStorage.getItem("mytoken"),'"}')}).then((function(n){return n.json()})).then((function(t){-100==n?r.list=[]:r.list.splice(n,1),r.deletedialog=!1}))}},mounted:function(){this.getAllqu()}};var w=t(574),y=t.n(w),E=t(37);y()(E.Z,{insert:"head",singleton:!1}),E.Z.locals,B.render=m,B.__scopeId="data-v-e398713a";const I=B},14:(n,r,t)=>{"use strict";t.d(r,{Z:()=>e.Z});var e=t(756)},793:(n,r,t)=>{"use strict";t.d(r,{s:()=>e.s});var e=t(729)},386:(n,r,t)=>{"use strict";t(604)}}]);
//# sourceMappingURL=421.bundle.js.map