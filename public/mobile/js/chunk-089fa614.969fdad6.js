(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-089fa614"],{"3d64":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"my-settings",staticStyle:{background:"#fff"}},[i("div",{staticClass:"tit_head"},[t._v(" "+t._s(t.$t("Miner_details"))+" "),i("img",{staticClass:"tit_head_back",attrs:{src:"imgs/backs.png",alt:""},on:{click:function(s){return t.$router.back(-1)}}})]),i("div",{staticStyle:{height:"60px"}}),i("div",{staticClass:"box"},[i("div",{staticClass:"flex111"},[i("img",{attrs:{src:t.list.img,alt:""}})]),i("div",{staticClass:"flex22"},[i("div",{staticClass:"box_title1"},[t._v(" "+t._s(t.$t("power_waste"))+": "),i("br"),i("span",{staticClass:"bot_title"},[t._v(t._s(t.list.consume))])]),i("div",{staticStyle:{height:"10px"}}),i("div",{staticClass:"box_title1"},[t._v(" "+t._s(t.$t("Calculation_power"))+": "),i("br"),i("span",{staticClass:"bot_title"},[t._v(t._s(t.list.calculation))])]),i("div",{staticStyle:{height:"10px"}}),i("div",{staticClass:"box_title1"},[t._v(" "+t._s(t.$t("Expected_daily_income"))+": "),i("br"),i("span",{staticClass:"bot_title"},[t._v(t._s(t.list.daily_income))])]),i("div",{staticStyle:{height:"10px"}}),i("div",{staticClass:"box_title1"},[t._v(" "+t._s(t.$t("surplus"))+"： "),i("span",{staticClass:"bot_title"},[t._v(t._s(t.list.s_num))])])])]),i("div",{staticClass:"k_title"},[t._v(" "+t._s(t.list.title)+" ")]),i("div",{staticClass:"k_title3"},t._l(t.list.label,(function(s,a){return i("div",{key:a,staticClass:"tags_desc"},[t._v(" "+t._s(s)+" ")])})),0),i("div",{staticStyle:{height:"30px"}}),i("div",{staticClass:"lines"}),i("div",{staticStyle:{height:"30px"}}),i("div",[i("mu-tabs",{attrs:{value:t.active1,inverse:"",color:"secondary","text-color":"rgba(0, 0, 0, .54)",center:""},on:{"update:value":function(s){t.active1=s}}},[i("mu-tab",[t._v(t._s(t.$t("Product_specifications")))]),i("mu-tab",[t._v(t._s(t.$t("Risk_statement")))])],1)],1),i("div",{staticStyle:{height:"10px"}}),0==t.active1?i("div",{staticClass:"k_tab1"},[i("div",{staticClass:"k_tab1_flex"},[i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("Miner_model")))]),i("div",{staticClass:"k_flex_item k_item_wg"},[t._v(t._s(t.list.title))]),i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("Output_currency")))]),i("div",{staticClass:"k_flex_item"},[1==t.list.type?i("span",[t._v("BTC")]):t._e(),2==t.list.type?i("span",[t._v("ETH")]):t._e(),3==t.list.type?i("span",[t._v("BBC")]):t._e()])]),i("div",{staticClass:"listss"}),i("div",{staticClass:"k_tab1_flex"},[i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("Calculation_power")))]),i("div",{staticClass:"k_flex_item k_item_wg"},[t._v(t._s(t.list.calculation))]),i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("power_waste")))]),i("div",{staticClass:"k_flex_item"},[t._v(" "+t._s(t.list.consume)+" ")])]),i("div",{staticClass:"listss"}),i("div",{staticClass:"k_tab1_flex"},[i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("Expected_output")))]),i("div",{staticClass:"k_flex_item k_item_wg"},[t._v(t._s(t.list.daily_income))]),i("div",{staticClass:"k_flex_item k_item_bg"},[t._v(t._s(t.$t("management_expense")))]),i("div",{staticClass:"k_flex_item"},[t._v(t._s(t.list.management)+"%")])])]):t._e(),1==t.active1?i("div",{staticClass:"k_tab2"},[i("pre",{staticStyle:{"text-align":"left"}},[t._v("     "+t._s(t.list.prompt)+"\n   ")])]):t._e(),i("div",{staticStyle:{height:"60px"}}),i("div",{staticClass:"next_btn"},[i("mu-button",{attrs:{color:"primary"},on:{click:function(s){t.openFullscreen1=!0}}},[t._v(t._s(t.$t("next_step")))])],1),i("mu-dialog",{attrs:{width:"100%",transition:"slide-bottom",fullscreen:"",open:t.openFullscreen},on:{"update:open":function(s){t.openFullscreen=s}}},[i("mu-appbar",{attrs:{color:"primary",title:t.$t("Privacy_agreement")}},[i("mu-button",{attrs:{slot:"right",icon:""},on:{click:function(s){t.openFullscreen=!1}},slot:"right"},[i("mu-icon",{attrs:{value:":icon-guanbi"}})],1)],1),i("div",{staticStyle:{padding:"10px 10px"}},[i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:"imgs/banner.jpeg",alt:""}})]),i("pre",[t._v("        "+t._s(t.list.protocol)+"\n      ")])])],1),i("mu-dialog",{attrs:{width:"100%",transition:"slide-bottom",fullscreen:"",open:t.openFullscreen1},on:{"update:open":function(s){t.openFullscreen1=s}}},[i("mu-appbar",{attrs:{color:"primary",title:""}},[i("mu-button",{attrs:{slot:"right",icon:""},on:{click:function(s){t.openFullscreen1=!1}},slot:"right"},[i("mu-icon",{attrs:{value:":icon-guanbi"}})],1)],1),i("div",{staticStyle:{padding:"10px 10px"}},[i("div",{staticClass:"title_kj"},[t._v(" "+t._s(t.list.title)+" ")]),i("div",{staticClass:"title_kj1"},[i("svg",{staticClass:"icon",attrs:{t:"1623057353855",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3255",width:"64",height:"64"}},[i("path",{attrs:{d:"M387.072 611.328L236.6464 460.8 128 569.3952l259.072 259.1232 515.1232-515.072L793.6 204.8z",fill:"#8CC152","p-id":"3256"}})]),i("span",{staticStyle:{padding:"0 5px"}}),t._v(" "+t._s(t.$t("Service_time"))+" ")]),i("div",{staticStyle:{height:"1px",background:"#eee"}}),i("div",{staticClass:"title_kj1"},[i("svg",{staticClass:"icon",attrs:{t:"1623057353855",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3255",width:"64",height:"64"}},[i("path",{attrs:{d:"M387.072 611.328L236.6464 460.8 128 569.3952l259.072 259.1232 515.1232-515.072L793.6 204.8z",fill:"#8CC152","p-id":"3256"}})]),i("span",{staticStyle:{padding:"0 5px"}}),t._v(" "+t._s(t.$t("Digging_time"))+" ")]),i("div",{staticStyle:{height:"1px",background:"#eee"}}),i("div",{staticClass:"title_kj1"},[i("svg",{staticClass:"icon",attrs:{t:"1623057353855",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3255",width:"64",height:"64"}},[i("path",{attrs:{d:"M387.072 611.328L236.6464 460.8 128 569.3952l259.072 259.1232 515.1232-515.072L793.6 204.8z",fill:"#8CC152","p-id":"3256"}})]),i("span",{staticStyle:{padding:"0 5px"}}),t._v(" "+t._s(t.$t("Hosting_status"))+" ")]),i("div",{staticStyle:{height:"1px",background:"#eee"}}),i("div",{staticClass:"title_kj1"},[i("svg",{staticClass:"icon",attrs:{t:"1623057353855",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3255",width:"64",height:"64"}},[i("path",{attrs:{d:"M387.072 611.328L236.6464 460.8 128 569.3952l259.072 259.1232 515.1232-515.072L793.6 204.8z",fill:"#8CC152","p-id":"3256"}})]),i("span",{staticStyle:{padding:"0 5px"}}),t._v(" "+t._s(t.$t("Contract_days"))+": ")]),i("div",{staticClass:"title_kj1",staticStyle:{display:"flex"}},[i("div",{staticStyle:{width:"60%","margin-left":"10px"}},[i("mu-slider",{staticClass:"demo-slider",attrs:{max:t.day_max,min:t.day_min,step:1},model:{value:t.cur_day,callback:function(s){t.cur_day=s},expression:"cur_day"}})],1),i("div",{staticStyle:{"text-align":"center",background:"#f4f4f4",padding:"0 5px","margin-left":"10px",position:"relative",top:"-2px",height:"25px"}},[i("span",{staticStyle:{"font-size":"16px","margin-right":"5px"},on:{click:function(s){t.cur_day>t.day_min?t.cur_day=1*t.cur_day-1:t.cur_day}}},[t._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cur_day,expression:"cur_day"}],staticStyle:{width:"40px","text-align":"center",border:"none",outline:"none","background-color":"rgba(0, 0, 0, 0)"},attrs:{type:"number"},domProps:{value:t.cur_day},on:{blur:t.inputs,input:function(s){s.target.composing||(t.cur_day=s.target.value)}}}),i("span",{staticStyle:{"font-size":"16px","margin-left":"5px"},on:{click:function(s){t.cur_day<t.day_max?t.cur_day=1*t.cur_day+1:t.cur_day}}},[t._v("+")])]),i("div",{staticStyle:{padding:"0 10px"}},[t._v(" day ")])]),i("div",[t._v(" "+t._s(t.$t("Expected_revenue"))+": "+t._s((t.list.daily_income_num*t.cur_day*t.nums).toFixed(8))+" "),1==t.list.type?i("span",[t._v("BTC")]):t._e(),2==t.list.type?i("span",[t._v("ETH")]):t._e(),3==t.list.type?i("span",[t._v("BBC")]):t._e()]),i("div",{staticStyle:{height:"1px",background:"#eee"}}),i("div",{staticClass:"title_kj1",staticStyle:{display:"flex"}},[i("div",[i("svg",{staticClass:"icon",attrs:{t:"1623057353855",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3255",width:"64",height:"64"}},[i("path",{attrs:{d:"M387.072 611.328L236.6464 460.8 128 569.3952l259.072 259.1232 515.1232-515.072L793.6 204.8z",fill:"#8CC152","p-id":"3256"}})])]),i("div",[i("span",{staticStyle:{padding:"0 5px"}}),t._v(" "+t._s(t.$t("Purchase_quantity"))+": ")]),i("div",{staticStyle:{"text-align":"center",background:"#f4f4f4",padding:"0 5px","margin-left":"10px",position:"relative",top:"-2px"}},[i("span",{staticStyle:{"font-size":"16px","margin-right":"5px"},on:{click:function(s){t.nums>1?t.nums=1*t.nums-1:t.num}}},[t._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nums,expression:"nums"}],staticStyle:{width:"40px","text-align":"center",border:"none",outline:"none","background-color":"rgba(0, 0, 0, 0)"},attrs:{type:"number"},domProps:{value:t.nums},on:{input:function(s){s.target.composing||(t.nums=s.target.value)}}}),i("span",{staticStyle:{"font-size":"16px","margin-left":"5px"},on:{click:function(s){t.nums=1*t.nums+1}}},[t._v("+")])])]),i("div",{staticStyle:{height:"1px",background:"#eee"}}),i("div",{staticStyle:{height:"10px"}}),i("div",{staticStyle:{"font-size":"14px",color:"#000"}},[i("mu-checkbox",{attrs:{label:t.$t("Agree_agreement")},model:{value:t.ceck_statuss,callback:function(s){t.ceck_statuss=s},expression:"ceck_statuss"}}),i("span",{staticStyle:{position:"relative",top:"-6px",left:"10px",color:"#2980b9"},on:{click:function(s){t.openFullscreen=!0}}},[t._v(t._s(t.$t("Mining_machinery")))])],1)]),i("div",{staticClass:"sub_btns"},[i("mu-button",{attrs:{color:"primary",disabled:!t.ceck_statuss||t.nums<1},on:{click:t.subs}},[t._v(" "+t._s((t.cur_day*t.cur_price*t.nums).toFixed(3))+" USDT "+t._s(t.$t("purchase")))])],1)],1)],1)},e=[],l={data:function(){var t=window.localStorage.getItem("user_id");return{day_min:0,day_max:100,cur_price:"",cur_day:1,nums:1,ceck_statuss:!1,tab_index:0,openFullscreen:!1,openFullscreen1:!1,active1:0,user_id:t,list:[],account_num:window.localStorage.getItem("accountNum")}},mounted:function(){window.localStorage.getItem("user_id")||this.$router.push("/login"),this.loadAssets()},methods:{inputs:function(){this.cur_day<this.day_min?this.cur_day=1*this.day_min:this.cur_day>this.day_max&&(this.cur_day=1*this.day_max)},subs:function(){var t=this,s=this;s.ceck_statuss=!1,this.$http({url:"/api/buy_mining_machine",method:"post",headers:{Authorization:localStorage.getItem("token")},data:{id:s.list.id,num:s.nums,day:s.cur_day,type:s.list.type}}).then((function(s){"ok"==s.data.type?t.$toast.success(s.data.message):t.$toast.fail(s.data.message)}))},tab_cur:function(t){this.tab_index=t,this.cur_price=this.list.purchase_days_price[t],this.cur_day=this.list.purchase_days[t]},loadAssets:function(t){var s=this;this.$http({url:"/api/get_mining_machine_info?id="+t,method:"get",headers:{Authorization:localStorage.getItem("token")}}).then((function(i){if(!t)return!1;s.list=i.data.message,i.data.message.purchase_days&&(s.cur_price=i.data.message.money,s.cur_day=1*i.data.message.purchase_days[0],s.day_min=1*i.data.message.purchase_days[0],s.day_max=1*i.data.message.purchase_days[1])}))}},created:function(){this.loadAssets(this.$route.query.id)}},n=l,c=(i("4198"),i("2877")),_=Object(c["a"])(n,a,e,!1,null,null,null);s["default"]=_.exports},4198:function(t,s,i){"use strict";i("d28b")},d28b:function(t,s,i){}}]);