(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12ed4c7e"],{"297b":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("5319"),a("ac1f"),a("4d63"),a("25f0");function i(e,t){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(t)||[,""])[1].replace(/\+/g,"%20"))||null}},"2cfd":function(e,t,a){"use strict";a("e314")},"73cf":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap",staticStyle:{background:"#FFFFFF"}},[a("div",{staticClass:"flex alcenter",staticStyle:{height:"50px"}},[a("div",{staticClass:"flex1 flex",staticStyle:{"padding-right":"15px","justify-content":"flex-end"}},[a("svg",{staticClass:"icon",staticStyle:{"font-size":"24px"},attrs:{color:"#999","aria-hidden":"true"},on:{click:function(t){return e.$router.back(-1)}}},[a("use",{attrs:{"xlink:href":"#icon-guanbi"}})])])]),a("mu-container",[a("div",{staticClass:"ways"},[a("h4",{class:{active:1===e.mode},on:{click:function(t){e.mode=1}}},[e._v(e._s(e.$t("register.email")))]),a("h4",{class:{active:2===e.mode},on:{click:function(t){e.mode=2}}},[e._v(e._s(e.$t("register.phone")))])]),a("van-form",{attrs:{"label-width":"9em"}},[2===e.mode?[a("van-field",{attrs:{readonly:"",required:"",clickable:"",name:"picker",value:e.value,label:e.$t("register01.country")},on:{click:function(t){e.showPicker=!0}}}),a("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.country,"confirm-button-text":e.$t("cuy.confirm"),"cancel-button-text":e.$t("cuy.cancel")},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),a("p",{staticClass:"tips"},[e._v(e._s(e.$t("xieyi1.first")))])]:e._e(),a("van-field",{attrs:{required:"",placeholder:1==e.mode?e.$t("register.emailnum"):e.$t("register.phonenum")},model:{value:e.validateForm.email,callback:function(t){e.$set(e.validateForm,"email",t)},expression:"validateForm.email"}}),2===e.mode?[a("van-field",{attrs:{required:"",center:"",clearable:"",placeholder:e.$t("register.codenum")},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",type:"info",disabled:e.isSending,loading:e.loadingSend},on:{click:e.sendCode}},[e._v(e._s(e.isSending?e.$t("resend",{number:e.seconds}):e.$t("send")))])]},proxy:!0}],null,!1,2188538015),model:{value:e.validateForm.code,callback:function(t){e.$set(e.validateForm,"code",t)},expression:"validateForm.code"}})]:e._e(),a("van-field",{attrs:{required:"",placeholder:e.$t("register.logpwd"),"right-icon":e.visibilitylog?"eye-o":"closed-eye",type:e.visibilitylog?"text":"password"},on:{"click-right-icon":function(t){e.visibilitylog=!e.visibilitylog}},model:{value:e.validateForm.logpwd,callback:function(t){e.$set(e.validateForm,"logpwd",t)},expression:"validateForm.logpwd"}}),a("van-field",{attrs:{required:"",placeholder:e.$t("register.repwd"),"right-icon":e.visibilityre?"eye-o":"closed-eye",type:e.visibilityre?"text":"password"},on:{"click-right-icon":function(t){e.visibilityre=!e.visibilityre}},model:{value:e.validateForm.repwd,callback:function(t){e.$set(e.validateForm,"repwd",t)},expression:"validateForm.repwd"}}),a("van-field",{attrs:{required:"",placeholder:e.$t("pass1"),type:"password"},model:{value:e.validateForm.withdraw_password,callback:function(t){e.$set(e.validateForm,"withdraw_password",t)},expression:"validateForm.withdraw_password"}}),a("van-field",{attrs:{required:"1"===e.invitation_code,placeholder:e.inpInvite},model:{value:e.validateForm.invitecode,callback:function(t){e.$set(e.validateForm,"invitecode",t)},expression:"validateForm.invitecode"}})],2),e.stepOne?a("mu-form",{ref:"form",staticClass:"mu-demo-form",attrs:{model:e.validateForm}},[a("div",{staticStyle:{margin:"20px 0"}},[a("codes",{ref:"codess",attrs:{title:e.$t("login_codes1"),title1:e.$t("login_codes2")}})],1),a("mu-form-item",{attrs:{prop:"isAgree"}},[a("mu-checkbox",{attrs:{size:"12",label:e.$t("register.agree")},model:{value:e.validateForm.isAgree,callback:function(t){e.$set(e.validateForm,"isAgree",t)},expression:"validateForm.isAgree"}}),a("span",{staticClass:"xieyi_page",on:{click:function(t){return e.$router.push("xieyi")}}},[e._v(" "+e._s(e.$t("register.mian")))])],1),a("mu-button",{staticStyle:{width:"100%",height:"40px"},attrs:{color:"primary",disabled:e.disabled},on:{click:e.register}},[e._v(e._s(e.$t("regiterStep1"))+" ")]),a("div",{staticClass:"flex",staticStyle:{height:"50px"}},[a("span",{staticClass:"flex1 flex alcenter",on:{click:function(t){return e.$router.push("/login")}}},[e._v(e._s(e.$t("register.gologin")))])])],1):e._e()],1)],1)},r=[],s=a("1da1"),n=a("5530"),o=(a("96cf"),a("d81d"),a("99af"),a("d3b7"),a("2f62")),c=a("797a"),l=a("297b"),d=a("3fa8"),u=a("2b0e"),m=a("f253"),f=a("e41f"),h=a("772a"),p=a("565f"),v=a("b650"),g=a("92d9");u["default"].use(m["a"]),u["default"].use(f["a"]),u["default"].use(h["a"]),u["default"].use(p["a"]),u["default"].use(v["a"]);var b={mixins:[g["a"]],components:{codes:d["a"]},data:function(){return{mode:1,usernameRules:[{validate:function(e){return!!e},message:"User name must be filled in"},{validate:function(e){return e.length>=3},message:"User name length is greater than 3"}],passwordRules:[{validate:function(e){return!!e},message:"Password must be filled in"},{validate:function(e){return e.length>=3&&e.length<=10},message:"Password length is greater than 3 and less than 10"}],argeeRules:[{validate:function(e){return!!e},message:"Must agree to user agreement"}],validateForm:{area_code:"+86",email:"",code:"",isAgree:!1,country:"China",logpwd:"",repwd:"",invitecode:"",withdraw_password:""},isMobile:!1,loadingSend:!1,isSending:!1,seconds:60,country:c["a"],canNext:!1,stepOne:!0,stepTwo:!1,visibilitylog:!1,visibilityre:!1,showPicker:!1,value:""}},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])(["invitation_code"])),{},{disabled:function(){var e=this.validateForm;return 2===this.mode?0===e.email.length||0===e.code.length||!e.isAgree:0===e.email.length||!e.isAgree},inpInvite:function(){var e=this.$t("register.invitecode");return"0"===this.invitation_code&&(e+=" (".concat(this.$t("register.optional"),")")),e}}),beforeCreate:function(){},mounted:function(){this.getWeb(this),this.country=this.country.map((function(e){var t=e.area_code,a=e.name_en;return e.text="".concat(t," ").concat(a),e}));var e=Object(l["a"])("code",window.location.href);e&&(this.validateForm.invitecode=e)},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["getWeb"])),{},{onConfirm:function(e){var t=e.area_code,a=e.text;this.value=a,this.validateForm.area_code=t,this.showPicker=!1},changeMode:function(e){this.mode=e},submit:function(){if(!this.$refs.codess.status_code())return this.$toast.fail(this.$t("login_codes3"));var e=this,t="user/check_email",a={email_code:this.validateForm.code};2==this.mode&&(t="user/check_mobile",a.mobile_code=this.validateForm.code,delete a.email_code),this.$http({url:"/api/"+t,method:"post",data:a}).then((function(t){"ok"==t.data.type?(e.stepTwo=!0,e.stepOne=!1):e.$toast(t.data.message)}))},register:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i,r,s,n,o,c,l,d,u,m,f,h,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,i=e.mode,r=e.validateForm,s=r.code,n=r.email,o=r.logpwd,c=r.repwd,l=r.invitecode,d=r.withdraw_password,u=r.area_code,m=r.isAgree,m){t.next=6;break}return e.$toast.fail("Please check to agree to the user agreement"),t.abrupt("return",!1);case 6:if(""!=n){t.next=11;break}return e.$tosst.fail(e.$t("lay.paccount")),t.abrupt("return");case 11:if(""!=s||2!==i){t.next=16;break}return e.$toast.fail(e.$t("lay.notcode")),t.abrupt("return");case 16:if(2!==i){t.next=23;break}return t.next=19,e.check();case 19:if(f=t.sent,"ok"===f.data.type){t.next=23;break}return e.$toast.fail(f.data.message),t.abrupt("return");case 23:if(""!=o){t.next=28;break}return a.$toast.fail(a.$t("lay.inpwd")),t.abrupt("return");case 28:if(!(o.length<6||o.length>16)){t.next=33;break}return a.$toast.fail(a.$t("lay.pwdlength")),t.abrupt("return");case 33:if(""!=c){t.next=38;break}return a.$toast.fail(a.$t("lay.repwd")),t.abrupt("return");case 38:if(o===c){t.next=43;break}return a.$toast.fail(a.$t("lay.twopwd")),t.abrupt("return");case 43:if(""!=l||"1"!==e.invitation_code){t.next=46;break}return a.$toast.fail(a.$t("register.invitecode")),t.abrupt("return");case 46:h={},p=2===i,h.type=p?"mobile":"email",h.user_string=n,h.code=s,h.password=o,h.re_password=c,h.extension_code=l,h.country_code=u,h.withdraw_password=d,a.$http({url:"/api/user/register",data:h,method:"post"}).then((function(t){"ok"==t.data.type?(a.$toast({message:e.$t("success"),type:"success"}),a.$router.push("/login")):a.$toast.fail(t.data.message)}));case 57:case"end":return t.stop()}}),t)})))()},check:function(){var e=this.mode;if(1!==e||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.validateForm.email)){var t={},a="user/check_email";if(2===this.mode?(t={mobile_code:this.validateForm.code},a="user/check_mobile"):t={email_code:this.validateForm.code},this.$refs.codess.status_code()){var i=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});return this.$http({url:"/api/"+a,method:"post",data:t}).then((function(e){return e})).catch((function(e){console.log(e)})).finally((function(){i.close()}))}that.$toast.fail(this.$t("login_codes3"))}else this.$toast.fail(this.$t("register.emailnum"))},sendCode:function(){var e=this,t="sms_mail";if(this.validateForm.email){if(1==this.mode){var a=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;if(!a.test(this.validateForm.email))return console.log(this.$toast),void this.$toast.fail(this.$t("register.emailnum"))}else t="sms_send";this.loadingSend=!0;var i={user_string:this.validateForm.email};i.lang=window.localStorage.getItem("lang"),2==this.mode&&(i.country_code=this.validateForm.area_code),this.$http({url:"/api/"+t,method:"post",data:i,headers:{not_loading:!0}}).then((function(t){if(e.loadingSend=!1,e.isSending=!0,"error"!==t.data.type){e.$toast.success(t.data.message),e.canNext=!0;var a=setInterval((function(t){e.seconds--,0===e.seconds&&(e.seconds=60,clearInterval(a),e.isSending=!1)}),1e3)}else e.isSending=!1,e.$toast.fail(t.data.message)}))}else this.$toast.fail(this.$t("lay.paccount"))}})},$=b,w=(a("2cfd"),a("f485"),a("2877")),_=Object(w["a"])($,i,r,!1,null,"ec10e16a",null);t["default"]=_.exports},"92d9":function(e,t,a){"use strict";var i=a("5530"),r=a("1da1"),s=(a("96cf"),a("2f62"));t["a"]={mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("mixin mounted"),t.next=3,e.getWeb(e);case 3:a=t.sent,a&&e.setIco(a);case 5:case"end":return t.stop()}}),t)})))()},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["getWeb"])),{},{setIco:function(e){var t=document.querySelector('link[rel="icon"]');t.href=e.logo}})}},bfec:function(e,t,a){},e314:function(e,t,a){},f485:function(e,t,a){"use strict";a("bfec")}}]);