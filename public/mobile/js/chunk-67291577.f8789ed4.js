(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67291577"],{1276:function(t,i,e){"use strict";var n=e("d784"),s=e("44e7"),c=e("825a"),r=e("1d80"),l=e("4840"),a=e("8aa5"),o=e("50c4"),u=e("14c3"),d=e("9263"),h=e("d039"),p=[].push,f=Math.min,g=4294967295,x=!h((function(){return!RegExp(g,"y")}));n("split",2,(function(t,i,e){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(r(this)),c=void 0===e?g:e>>>0;if(0===c)return[];if(void 0===t)return[n];if(!s(t))return i.call(n,t,c);var l,a,o,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,x=new RegExp(t.source,h+"g");while(l=d.call(x,n)){if(a=x.lastIndex,a>f&&(u.push(n.slice(f,l.index)),l.length>1&&l.index<n.length&&p.apply(u,l.slice(1)),o=l[0].length,f=a,u.length>=c))break;x.lastIndex===l.index&&x.lastIndex++}return f===n.length?!o&&x.test("")||u.push(""):u.push(n.slice(f)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,e){var s=r(this),c=void 0==i?void 0:i[t];return void 0!==c?c.call(i,s,e):n.call(String(s),i,e)},function(t,s){var r=e(n,t,this,s,n!==i);if(r.done)return r.value;var d=c(t),h=String(this),p=l(d,RegExp),v=d.unicode,y=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(x?"y":"g"),m=new p(x?d:"^(?:"+d.source+")",y),b=void 0===s?g:s>>>0;if(0===b)return[];if(0===h.length)return null===u(m,h)?[h]:[];var w=0,_=0,S=[];while(_<h.length){m.lastIndex=x?_:0;var k,C=u(m,x?h:h.slice(_));if(null===C||(k=f(o(m.lastIndex+(x?0:_)),h.length))===w)_=a(h,_,v);else{if(S.push(h.slice(w,_)),S.length===b)return S;for(var $=1;$<=C.length-1;$++)if(S.push(C[$]),S.length===b)return S;_=w=k}}return S.push(h.slice(w)),S}]}),!x)},"3c11":function(t,i,e){t.exports=e.p+"img/img_4.23537abe.png"},"555c":function(t,i,e){"use strict";e("c4c6")},c4c6:function(t,i,e){},fbd8:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("mu-container",{staticClass:"share"},[n("div",{staticStyle:{width:"24px",height:"24px",top:"20px",right:"20px","z-index":"1",position:"fixed"}},[n("svg",{staticClass:"icon",staticStyle:{"font-size":"24px","z-index":"999"},attrs:{color:"#fff"},on:{click:function(i){return t.$router.back(-1)}}},[n("use",{attrs:{"xlink:href":"#icon-guanbi"}})])]),n("mu-card",{staticStyle:{width:"100%","max-width":"100%",margin:"0 auto","text-align":"left"},attrs:{raised:!1}},[n("mu-card-media",{attrs:{title:t.$t("sgr.invite"),"sub-title":t.$t("invite.welcome")}},[n("img",{attrs:{src:e("3c11")}})])],1),n("div",{staticStyle:{"margin-top":"30px",width:"100%"}},[n("div",{staticStyle:{"font-size":"18px","line-height":"45px"}},[t._v(t._s(t.$t("security.invite")))]),n("div",{staticClass:"flex alcenter"},[n("span",{staticClass:"flex1"}),n("span",{staticStyle:{"font-size":"28px",color:"#0a8415","margin-right":"15px"}},[t._v(t._s(t.code))]),n("mu-icon",{staticClass:"copy1",attrs:{color:"primary","data-clipboard-text":t.code,value:":icon-fuzhi-"},on:{click:function(i){return t.copy(".copy1")}}}),n("span",{staticClass:"flex1"})],1)]),n("div",[n("div",{ref:"qrcode",attrs:{id:"qrcode"}})]),n("div",[n("div",{staticStyle:{"font-size":"18px","line-height":"45px"}},[t._v(t._s(t.$t("invite.link")))]),n("div",{staticClass:"flex alcenter"},[n("span",{staticClass:"flex1"}),n("div",{staticStyle:{"border-radius":"10px","line-height":"25px",padding:"0 15px",background:"#f5f5f5"}},[n("span",{staticStyle:{"font-size":"14px","margin-right":"15px"}},[t._v(t._s(t.share_url))]),n("mu-icon",{staticClass:"copy2",attrs:{color:"primary","data-clipboard-text":t.share_url,value:":icon-fuzhi-"},on:{click:function(i){return t.copy(".copy2")}}})],1),n("span",{staticClass:"flex1"})])])],1)},s=[],c=(e("1276"),e("ac1f"),e("99af"),e("5319"),e("d044")),r=e.n(c),l=e("b311"),a=e.n(l),o={name:"Share",data:function(){return{url:"",code:"",share_url:""}},mounted:function(){this.url=location.href.split("#")[0],this.code=localStorage.getItem("extension_code"),this.share_url="".concat(this.url.replace("index.html",""),"#/register?code=").concat(this.code),console.log(this.url),this.qrcode(this.share_url)},methods:{copy:function(t){var i=this,e=new a.a(t);console.log(e),e.on("success",(function(t){i.$toast.success(i.$t("lay.copys")),t.clearSelection(),e.destroy()})),e.on("error",(function(t){i.$toast.fail(i.$t("lay.fcopy"))}))},qrcode:function(t){this.$refs.qrcode.innerHTML="",this.qrccode=new r.a("qrcode",{width:150,height:150,text:t})}}},u=o,d=(e("555c"),e("2877")),h=Object(d["a"])(u,n,s,!1,null,null,null);i["default"]=h.exports}}]);