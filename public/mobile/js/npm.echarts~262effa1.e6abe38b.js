(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.echarts~262effa1"],{"1be7":function(e,t,n){"use strict";n.d(t,"a",(function(){return le})),n.d(t,"b",(function(){return dt})),n.d(t,"j",(function(){return ft})),n.d(t,"k",(function(){return ht})),n.d(t,"h",(function(){return _t})),n.d(t,"i",(function(){return vt})),n.d(t,"c",(function(){return gt})),n.d(t,"d",(function(){return mt})),n.d(t,"e",(function(){return yt})),n.d(t,"m",(function(){return bt})),n.d(t,"f",(function(){return Ct})),n.d(t,"g",(function(){return Tt})),n.d(t,"l",(function(){return Mt}));var i=n("9ab4"),o=n("697e7"),a=n("6d8b"),r=n("41ef"),s=n("22d1"),u=n("04f6"),c=n("6fd3"),d=n("7e63"),p=n("9c1d"),l=n("1f39"),f=n("ca98"),h=n("fb05"),_=n("d15d"),v=n("4f85"),g=n("b12f"),m=n("e887"),y=n("c7a2"),b=n("0da8"),w=n("2306"),O=n("cbe5"),C=n("861c"),T=n("7d6c"),M=n("e0d3"),S=n("88b3"),I=n("15a5"),x=n("998c"),k=n("7c13"),L=n("c533"),z=n("f219"),j=n("ec34"),D=n("625e"),R=n("a1d9"),P=n("7f96"),V=n("0924"),A=n("2624"),E=n("edae"),U=n("f3bb"),F=n("04f7"),B=n("ef59"),H=n("fadd"),G=n("a699"),Z=a["b"],N=a["k"],X=a["w"],q=a["z"],Y=a["r"],J="undefined"!==typeof window,W=1,$=800,K=900,Q=1e3,ee=2e3,te=5e3,ne=1e3,ie=1100,oe=2e3,ae=3e3,re=4e3,se=4500,ue=4600,ce=5e3,de=6e3,pe=7e3,le={PROCESSOR:{FILTER:Q,SERIES_FILTER:$,STATISTIC:te},VISUAL:{LAYOUT:ne,PROGRESSIVE_LAYOUT:ie,GLOBAL:oe,CHART:ae,POST_CHART_LAYOUT:ue,COMPONENT:re,BRUSH:ce,CHART_ITEM:se,ARIA:de,DECAL:pe}},fe="__flagInMainProcess",he="__optionUpdated",_e="__needsUpdateStatus",ve=/^[a-zA-Z0-9_]+$/,ge="__connectUpdateStatus",me=0,ye=1,be=2;function we(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(!this.isDisposed())return Ce(this,e,t);We(this.id)}}function Oe(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Ce(this,e,t)}}function Ce(e,t,n){return n[0]=n[0]&&n[0].toLowerCase(),c["a"].prototype[t].apply(e,n)}var Te,Me,Se,Ie,xe,ke,Le,ze,je,De,Re,Pe,Ve,Ae,Ee,Ue,Fe,Be,He,Ge,Ze,Ne=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i["b"])(t,e),t}(c["a"]),Xe=Ne.prototype;Xe.on=Oe("on"),Xe.off=Oe("off");var qe=function(e){function t(t,n,i){var r=e.call(this,new R["a"])||this;r._chartsViews=[],r._chartsMap={},r._componentsViews=[],r._componentsMap={},r._pendingActions=[],i=i||{},"string"===typeof n&&(n=ot[n]),r._dom=t;var s="canvas",c=!1,d=r._zr=o["a"](t,{renderer:i.renderer||s,devicePixelRatio:i.devicePixelRatio,width:i.width,height:i.height,useDirtyRect:null==i.useDirtyRect?c:i.useDirtyRect});r._throttledZrFlush=Object(S["c"])(a["c"](d.flush,d),17),n=a["d"](n),n&&Object(h["a"])(n,!0),r._theme=n,r._locale=Object(B["b"])(i.locale||B["a"]),r._coordSysMgr=new l["a"];var p=r._api=Fe(r);function f(e,t){return e.__prio-t.__prio}return Object(u["a"])(it,f),Object(u["a"])(Qe,f),r._scheduler=new k["a"](r,p,Qe,it),r._messageCenter=new Ne,r._labelManager=new A["a"],r._initEvents(),r.resize=a["c"](r.resize,r),d.animation.on("frame",r._onframe,r),De(d,r),Re(d,r),a["R"](r),r}return Object(i["b"])(t,e),t.prototype._onframe=function(){if(!this._disposed){Ze(this);var e=this._scheduler;if(this[he]){var t=this[he].silent;this[fe]=!0,Te(this),Ie.update.call(this),this._zr.flush(),this[fe]=!1,this[he]=!1,ze.call(this,t),je.call(this,t)}else if(e.unfinished){var n=W,i=this._model,o=this._api;e.unfinished=!1;do{var a=+new Date;e.performSeriesTasks(i),e.performDataProcessorTasks(i),ke(this,i),e.performVisualTasks(i),Ee(this,this._model,o,"remain"),n-=+new Date-a}while(n>0&&e.unfinished);e.unfinished||this._zr.flush()}}},t.prototype.getDom=function(){return this._dom},t.prototype.getId=function(){return this.id},t.prototype.getZr=function(){return this._zr},t.prototype.setOption=function(e,t,n){if(this._disposed)We(this.id);else{var i,o,a;if(q(t)&&(n=t.lazyUpdate,i=t.silent,o=t.replaceMerge,a=t.transition,t=t.notMerge),this[fe]=!0,!this._model||t){var r=new f["a"](this._api),s=this._theme,u=this._model=new d["a"];u.scheduler=this._scheduler,u.init(null,null,null,s,this._locale,r)}this._model.setOption(e,{replaceMerge:o},et),He(this,a),n?(this[he]={silent:i},this[fe]=!1,this.getZr().wakeUp()):(Te(this),Ie.update.call(this),this._zr.flush(),this[he]=!1,this[fe]=!1,ze.call(this,i),je.call(this,i))}},t.prototype.setTheme=function(){console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},t.prototype.getModel=function(){return this._model},t.prototype.getOption=function(){return this._model&&this._model.getOption()},t.prototype.getWidth=function(){return this._zr.getWidth()},t.prototype.getHeight=function(){return this._zr.getHeight()},t.prototype.getDevicePixelRatio=function(){return this._zr.painter.dpr||J&&window.devicePixelRatio||1},t.prototype.getRenderedCanvas=function(e){if(s["a"].canvasSupported){e=a["m"]({},e||{}),e.pixelRatio=e.pixelRatio||this.getDevicePixelRatio(),e.backgroundColor=e.backgroundColor||this._model.get("backgroundColor");var t=this._zr;return t.painter.getRenderedCanvas(e)}},t.prototype.getSvgDataURL=function(){if(s["a"].svgSupported){var e=this._zr,t=e.storage.getDisplayList();return a["k"](t,(function(e){e.stopAnimation(null,!0)})),e.painter.toDataURL()}},t.prototype.getDataURL=function(e){if(!this._disposed){e=e||{};var t=e.excludeComponents,n=this._model,i=[],o=this;N(t,(function(e){n.eachComponent({mainType:e},(function(e){var t=o._componentsMap[e.__viewId];t.group.ignore||(i.push(t),t.group.ignore=!0)}))}));var a="svg"===this._zr.painter.getType()?this.getSvgDataURL():this.getRenderedCanvas(e).toDataURL("image/"+(e&&e.type||"png"));return N(i,(function(e){e.group.ignore=!1})),a}We(this.id)},t.prototype.getConnectedDataURL=function(e){if(this._disposed)We(this.id);else if(s["a"].canvasSupported){var t="svg"===e.type,n=this.group,i=Math.min,r=Math.max,u=1/0;if(st[n]){var c=u,d=u,p=-u,l=-u,f=[],h=e&&e.pixelRatio||this.getDevicePixelRatio();a["k"](rt,(function(o,s){if(o.group===n){var u=t?o.getZr().painter.getSvgDom().innerHTML:o.getRenderedCanvas(a["d"](e)),h=o.getDom().getBoundingClientRect();c=i(h.left,c),d=i(h.top,d),p=r(h.right,p),l=r(h.bottom,l),f.push({dom:u,left:h.left,top:h.top})}})),c*=h,d*=h,p*=h,l*=h;var _=p-c,v=l-d,g=a["f"](),m=o["a"](g,{renderer:t?"svg":"canvas"});if(m.resize({width:_,height:v}),t){var w="";return N(f,(function(e){var t=e.left-c,n=e.top-d;w+='<g transform="translate('+t+","+n+')">'+e.dom+"</g>"})),m.painter.getSvgRoot().innerHTML=w,e.connectedBackgroundColor&&m.painter.setBackgroundColor(e.connectedBackgroundColor),m.refreshImmediately(),m.painter.toDataURL()}return e.connectedBackgroundColor&&m.add(new y["a"]({shape:{x:0,y:0,width:_,height:v},style:{fill:e.connectedBackgroundColor}})),N(f,(function(e){var t=new b["a"]({style:{x:e.left*h-c,y:e.top*h-d,image:e.dom}});m.add(t)})),m.refreshImmediately(),g.toDataURL("image/"+(e&&e.type||"png"))}return this.getDataURL(e)}},t.prototype.convertToPixel=function(e,t){return xe(this,"convertToPixel",e,t)},t.prototype.convertFromPixel=function(e,t){return xe(this,"convertFromPixel",e,t)},t.prototype.containPixel=function(e,t){if(!this._disposed){var n,i=this._model,o=M["s"](i,e);return a["k"](o,(function(e,i){i.indexOf("Models")>=0&&a["k"](e,(function(e){var o=e.coordinateSystem;if(o&&o.containPoint)n=n||!!o.containPoint(t);else if("seriesModels"===i){var a=this._chartsMap[e.__viewId];a&&a.containPoint&&(n=n||a.containPoint(t,e))}else 0}),this)}),this),!!n}We(this.id)},t.prototype.getVisual=function(e,t){var n=this._model,i=M["s"](n,e,{defaultMainType:"series"}),o=i.seriesModel;var a=o.getData(),r=i.hasOwnProperty("dataIndexInside")?i.dataIndexInside:i.hasOwnProperty("dataIndex")?a.indexOfRawIndex(i.dataIndex):null;return null!=r?Object(V["a"])(a,r,t):Object(V["b"])(a,t)},t.prototype.getViewOfComponentModel=function(e){return this._componentsMap[e.__viewId]},t.prototype.getViewOfSeriesModel=function(e){return this._chartsMap[e.__viewId]},t.prototype._initEvents=function(){var e=this;N(Je,(function(t){var n=function(n){var i,o=e.getModel(),r=n.target,s="globalout"===t;if(s?i={}:r&&Object(H["a"])(r,(function(e){var t=Object(C["a"])(e);if(t&&null!=t.dataIndex){var n=t.dataModel||o.getSeriesByIndex(t.seriesIndex);return i=n&&n.getDataParams(t.dataIndex,t.dataType)||{},!0}if(t.eventData)return i=a["m"]({},t.eventData),!0}),!0),i){var u=i.componentType,c=i.componentIndex;"markLine"!==u&&"markPoint"!==u&&"markArea"!==u||(u="series",c=i.seriesIndex);var d=u&&null!=c&&o.getComponent(u,c),p=d&&e["series"===d.mainType?"_chartsMap":"_componentsMap"][d.__viewId];0,i.event=n,i.type=t,e._$eventProcessor.eventInfo={targetEl:r,packedEvent:i,model:d,view:p},e.trigger(t,i)}};n.zrEventfulCallAtLast=!0,e._zr.on(t,n,e)})),N(Ke,(function(t,n){e._messageCenter.on(n,(function(e){this.trigger(n,e)}),e)})),N(["selectchanged"],(function(t){e._messageCenter.on(t,(function(e){this.trigger(t,e)}),e)})),Object(U["b"])(this._messageCenter,this,this._api)},t.prototype.isDisposed=function(){return this._disposed},t.prototype.clear=function(){this._disposed?We(this.id):this.setOption({series:[]},!0)},t.prototype.dispose=function(){if(this._disposed)We(this.id);else{this._disposed=!0,M["v"](this.getDom(),ct,"");var e=this._api,t=this._model;N(this._componentsViews,(function(n){n.dispose(t,e)})),N(this._chartsViews,(function(n){n.dispose(t,e)})),this._zr.dispose(),delete rt[this.id]}},t.prototype.resize=function(e){if(this._disposed)We(this.id);else{this._zr.resize(e);var t=this._model;if(this._loadingFX&&this._loadingFX.resize(),t){var n=t.resetOption("media"),i=e&&e.silent;this[fe]=!0,n&&Te(this),Ie.update.call(this,{type:"resize",animation:{duration:0}}),this[fe]=!1,ze.call(this,i),je.call(this,i)}}},t.prototype.showLoading=function(e,t){if(this._disposed)We(this.id);else if(q(e)&&(t=e,e=""),e=e||"default",this.hideLoading(),at[e]){var n=at[e](this._api,t),i=this._zr;this._loadingFX=n,i.add(n)}},t.prototype.hideLoading=function(){this._disposed?We(this.id):(this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null)},t.prototype.makeActionFromEvent=function(e){var t=a["m"]({},e);return t.type=Ke[e.type],t},t.prototype.dispatchAction=function(e,t){if(this._disposed)We(this.id);else if(q(t)||(t={silent:!!t}),$e[e.type]&&this._model)if(this[fe])this._pendingActions.push(e);else{var n=t.silent;Le.call(this,e,n);var i=t.flush;i?this._zr.flush():!1!==i&&s["a"].browser.weChat&&this._throttledZrFlush(),ze.call(this,n),je.call(this,n)}},t.prototype.updateLabelLayout=function(){var e=this._labelManager;e.updateLayoutConfig(this._api),e.layout(this._api),e.processLabelsOverall()},t.prototype.appendData=function(e){if(this._disposed)We(this.id);else{var t=e.seriesIndex,n=this.getModel(),i=n.getSeriesByIndex(t);0,i.appendData(e),this._scheduler.unfinished=!0,this.getZr().wakeUp()}},t.internalField=function(){function e(e){for(var t=[],n=e.currentStates,i=0;i<n.length;i++){var o=n[i];"emphasis"!==o&&"blur"!==o&&"select"!==o&&t.push(o)}e.selected&&e.states.select&&t.push("select"),e.hoverState===T["e"]&&e.states.emphasis?t.push("emphasis"):e.hoverState===T["d"]&&e.states.blur&&t.push("blur"),e.useStates(t)}function t(e,t){var n=e._zr,i=n.storage,o=0;i.traverse((function(e){e.isGroup||o++})),o>t.get("hoverLayerThreshold")&&!s["a"].node&&!s["a"].worker&&t.eachSeries((function(t){if(!t.preventUsingHoverLayer){var n=e._chartsMap[t.__viewId];n.__alive&&n.group.traverse((function(e){e.states.emphasis&&(e.states.emphasis.hoverLayer=!0)}))}}))}function n(e,t){var n=e.get("blendMode")||null;t.group.traverse((function(e){e.isGroup||(e.style.blend=n),e.eachPendingDisplayable&&e.eachPendingDisplayable((function(e){e.style.blend=n}))}))}function o(e,t){if(!e.preventAutoZ){var n=e.get("z"),i=e.get("zlevel");t.group.traverse((function(e){if(!e.isGroup){null!=n&&(e.z=n),null!=i&&(e.zlevel=i);var t=e.getTextContent(),o=e.getTextGuideLine();if(t&&(t.z=e.z,t.zlevel=e.zlevel,t.z2=e.z2+2),o){var a=e.textGuideLineConfig&&e.textGuideLineConfig.showAbove;o.z=e.z,o.zlevel=e.zlevel,o.z2=e.z2+(a?1:-1)}}}))}}function u(e,t){t.group.traverse((function(e){if(!w["isElementRemoved"](e)){var t=e.getTextContent(),n=e.getTextGuideLine();e.stateTransition&&(e.stateTransition=null),t&&t.stateTransition&&(t.stateTransition=null),n&&n.stateTransition&&(n.stateTransition=null),e.hasState()?(e.prevStates=e.currentStates,e.clearStates()):e.prevStates&&(e.prevStates=null)}}))}function c(t,n){var i=t.getModel("stateAnimation"),o=t.isAnimationEnabled(),a=i.get("duration"),r=a>0?{duration:a,delay:i.get("delay"),easing:i.get("easing")}:null;n.group.traverse((function(t){if(t.states&&t.states.emphasis){if(w["isElementRemoved"](t))return;if(t instanceof O["b"]&&Object(T["z"])(t),t.__dirty){var n=t.prevStates;n&&t.useStates(n)}if(o){t.stateTransition=r;var i=t.getTextContent(),a=t.getTextGuideLine();i&&(i.stateTransition=r),a&&(a.stateTransition=r)}t.__dirty&&e(t)}}))}Te=function(e){var t=e._scheduler;t.restorePipelines(e._model),t.prepareStageTasks(),Me(e,!0),Me(e,!1),t.plan()},Me=function(e,t){for(var n=e._model,i=e._scheduler,o=t?e._componentsViews:e._chartsViews,a=t?e._componentsMap:e._chartsMap,r=e._zr,s=e._api,u=0;u<o.length;u++)o[u].__alive=!1;function c(e){var u=e.__requireNewView;e.__requireNewView=!1;var c="_ec_"+e.id+"_"+e.type,d=!u&&a[c];if(!d){var p=Object(D["f"])(e.type),l=t?g["a"].getClass(p.main,p.sub):m["a"].getClass(p.sub);0,d=new l,d.init(n,s),a[c]=d,o.push(d),r.add(d.group)}e.__viewId=d.__id=c,d.__alive=!0,d.__model=e,d.group.__ecComponentInfo={mainType:e.mainType,index:e.componentIndex},!t&&i.prepareView(d,e,n,s)}t?n.eachComponent((function(e,t){"series"!==e&&c(t)})):n.eachSeries(c);for(u=0;u<o.length;){var d=o[u];d.__alive?u++:(!t&&d.renderTask.dispose(),r.remove(d.group),d.dispose(n,s),o.splice(u,1),a[d.__id]===d&&delete a[d.__id],d.__id=d.group.__ecComponentInfo=null)}},Se=function(e,t,n,i,o){var r=e._model;if(r.setUpdatePayload(n),i){var s={};s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"];var u={mainType:i,query:s};o&&(u.subType=o);var c,d=n.excludeSeriesId;null!=d&&(c=a["g"](),N(M["r"](d),(function(e){var t=M["e"](e,null);null!=t&&c.set(t,!0)}))),r&&r.eachComponent(u,(function(t){c&&null!=c.get(t.id)||(Object(T["t"])(n)&&!n.notBlur?t instanceof v["a"]&&Object(T["G"])(t,n,e._api):Object(T["u"])(n)&&t instanceof v["a"]&&(Object(T["E"])(t,n,e._api),Object(T["H"])(t),Ge(e)),p(e["series"===i?"_chartsMap":"_componentsMap"][t.__viewId]))}),e)}else N([].concat(e._componentsViews).concat(e._chartsViews),p);function p(i){i&&i.__alive&&i[t]&&i[t](i.__model,r,e._api,n)}},Ie={prepareAndUpdate:function(e){Te(this),Ie.update.call(this,e)},update:function(e){var t=this._model,n=this._api,i=this._zr,o=this._coordSysMgr,a=this._scheduler;if(t){t.setUpdatePayload(e),a.restoreData(t,e),a.performSeriesTasks(t),o.create(t,n),a.performDataProcessorTasks(t,e),ke(this,t),o.update(t,n),Pe(t),a.performVisualTasks(t,e),Ve(this,t,n,e);var u=t.get("backgroundColor")||"transparent",c=t.get("darkMode");if(s["a"].canvasSupported)i.setBackgroundColor(u),null!=c&&"auto"!==c&&i.setDarkMode(c);else{var d=r["f"](u);u=r["g"](d,"rgb"),0===d[3]&&(u="transparent")}Ue(t,n)}},updateTransform:function(e){var t=this,n=this._model,i=this._api;if(n){n.setUpdatePayload(e);var o=[];n.eachComponent((function(a,r){if("series"!==a){var s=t.getViewOfComponentModel(r);if(s&&s.__alive)if(s.updateTransform){var u=s.updateTransform(r,n,i,e);u&&u.update&&o.push(s)}else o.push(s)}}));var r=a["g"]();n.eachSeries((function(o){var a=t._chartsMap[o.__viewId];if(a.updateTransform){var s=a.updateTransform(o,n,i,e);s&&s.update&&r.set(o.uid,1)}else r.set(o.uid,1)})),Pe(n),this._scheduler.performVisualTasks(n,e,{setDirty:!0,dirtyMap:r}),Ee(this,n,i,e,r),Ue(n,this._api)}},updateView:function(e){var t=this._model;t&&(t.setUpdatePayload(e),m["a"].markUpdateMethod(e,"updateView"),Pe(t),this._scheduler.performVisualTasks(t,e,{setDirty:!0}),Ve(this,this._model,this._api,e),Ue(t,this._api))},updateVisual:function(e){var t=this,n=this._model;n&&(n.setUpdatePayload(e),n.eachSeries((function(e){e.getData().clearAllVisual()})),m["a"].markUpdateMethod(e,"updateVisual"),Pe(n),this._scheduler.performVisualTasks(n,e,{visualType:"visual",setDirty:!0}),n.eachComponent((function(i,o){if("series"!==i){var a=t.getViewOfComponentModel(o);a&&a.__alive&&a.updateVisual(o,n,t._api,e)}})),n.eachSeries((function(i){var o=t._chartsMap[i.__viewId];o.updateVisual(i,n,t._api,e)})),Ue(n,this._api))},updateLayout:function(e){Ie.update.call(this,e)}},xe=function(e,t,n,i){if(e._disposed)We(e.id);else{for(var o,a=e._model,r=e._coordSysMgr.getCoordinateSystems(),s=M["s"](a,n),u=0;u<r.length;u++){var c=r[u];if(c[t]&&null!=(o=c[t](a,s,i)))return o}0}},ke=function(e,t){var n=e._chartsMap,i=e._scheduler;t.eachSeries((function(e){i.updateStreamModes(e,n[e.__viewId])}))},Le=function(e,t){var n=this,i=this.getModel(),o=e.type,r=e.escapeConnect,s=$e[o],u=s.actionInfo,c=(u.update||"update").split(":"),d=c.pop(),p=null!=c[0]&&Object(D["f"])(c[0]);this[fe]=!0;var l=[e],f=!1;e.batch&&(f=!0,l=a["H"](e.batch,(function(t){return t=a["j"](a["m"]({},t),e),t.batch=null,t})));var h,_=[],v=Object(T["u"])(e),g=Object(T["t"])(e)||v;if(N(l,(function(e){h=s.action(e,n._model,n._api),h=h||a["m"]({},e),h.type=u.event||h.type,_.push(h),g?(Se(n,d,e,"series"),Ge(n)):p&&Se(n,d,e,p.main,p.sub)})),"none"===d||g||p||(this[he]?(Te(this),Ie.update.call(this,e),this[he]=!1):Ie[d].call(this,e)),h=f?{type:u.event||o,escapeConnect:r,batch:_}:_[0],this[fe]=!1,!t){var m=this._messageCenter;if(m.trigger(h.type,h),v){var y={type:"selectchanged",escapeConnect:r,selected:Object(T["q"])(i),isFromClick:e.isFromClick||!1,fromAction:e.type,fromActionPayload:e};m.trigger(y.type,y)}}},ze=function(e){var t=this._pendingActions;while(t.length){var n=t.shift();Le.call(this,n,e)}},je=function(e){!e&&this.trigger("updated")},De=function(e,t){e.on("rendered",(function(n){t.trigger("rendered",n),!e.animation.isFinished()||t[he]||t._scheduler.unfinished||t._pendingActions.length||t.trigger("finished")}))},Re=function(e,t){e.on("mouseover",(function(e){var n=e.target,i=Object(H["a"])(n,T["s"]);if(i){var o=Object(C["a"])(i);Object(T["F"])(o.seriesIndex,o.focus,o.blurScope,t._api,!0),Object(T["o"])(i,e),Ge(t)}})).on("mouseout",(function(e){var n=e.target,i=Object(H["a"])(n,T["s"]);if(i){var o=Object(C["a"])(i);Object(T["F"])(o.seriesIndex,o.focus,o.blurScope,t._api,!1),Object(T["x"])(i,e),Ge(t)}})).on("click",(function(e){var n=e.target,i=Object(H["a"])(n,(function(e){return null!=Object(C["a"])(e).dataIndex}),!0);if(i){var o=i.selected?"unselect":"select",a=Object(C["a"])(i);t._api.dispatchAction({type:o,dataType:a.dataType,dataIndexInside:a.dataIndex,seriesIndex:a.seriesIndex,isFromClick:!0})}}))},Pe=function(e){e.clearColorPalette(),e.eachSeries((function(e){e.clearColorPalette()}))},Ve=function(e,t,n,i){Ae(e,t,n,i),N(e._chartsViews,(function(e){e.__alive=!1})),Ee(e,t,n,i),N(e._chartsViews,(function(e){e.__alive||e.remove(t,n)}))},Ae=function(e,t,n,i,a){N(a||e._componentsViews,(function(e){var a=e.__model;u(a,e),e.render(a,t,n,i),o(a,e),c(a,e)}))},Ee=function(e,i,a,r,s){var d=e._scheduler,p=e._labelManager;p.clearLabels();var l=!1;i.eachSeries((function(t){var i=e._chartsMap[t.__viewId];i.__alive=!0;var o=i.renderTask;d.updatePayload(o,r),u(t,i),s&&s.get(t.uid)&&o.dirty(),o.perform(d.getPerformArgs(o))&&(l=!0),t.__transientTransitionOpt=null,i.group.silent=!!t.get("silent"),n(t,i),Object(T["H"])(t),p.addLabelsOfSeries(i)})),d.unfinished=l||d.unfinished,p.updateLayoutConfig(a),p.layout(a),p.processLabelsOverall(),i.eachSeries((function(t){var n=e._chartsMap[t.__viewId];o(t,n),c(t,n)})),t(e,i)},Ue=function(e,t){N(nt,(function(n){n(e,t)}))},Ge=function(e){e[_e]=!0,e.getZr().wakeUp()},Ze=function(t){t[_e]&&(t.getZr().storage.traverse((function(t){w["isElementRemoved"](t)||e(t)})),t[_e]=!1)},Fe=function(e){return new(function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return Object(i["b"])(n,t),n.prototype.getCoordinateSystems=function(){return e._coordSysMgr.getCoordinateSystems()},n.prototype.getComponentByElement=function(t){while(t){var n=t.__ecComponentInfo;if(null!=n)return e._model.getComponent(n.mainType,n.index);t=t.parent}},n.prototype.enterEmphasis=function(t,n){Object(T["n"])(t,n),Ge(e)},n.prototype.leaveEmphasis=function(t,n){Object(T["w"])(t,n),Ge(e)},n.prototype.enterBlur=function(t){Object(T["m"])(t),Ge(e)},n.prototype.leaveBlur=function(t){Object(T["v"])(t),Ge(e)},n.prototype.enterSelect=function(t){Object(T["p"])(t),Ge(e)},n.prototype.leaveSelect=function(t){Object(T["y"])(t),Ge(e)},n.prototype.getModel=function(){return e.getModel()},n.prototype.getViewOfComponentModel=function(t){return e.getViewOfComponentModel(t)},n.prototype.getViewOfSeriesModel=function(t){return e.getViewOfSeriesModel(t)},n}(p["a"]))(e)},Be=function(e){function t(e,t){for(var n=0;n<e.length;n++){var i=e[n];i[ge]=t}}N(Ke,(function(n,i){e._messageCenter.on(i,(function(n){if(st[e.group]&&e[ge]!==me){if(n&&n.escapeConnect)return;var i=e.makeActionFromEvent(n),o=[];N(rt,(function(t){t!==e&&t.group===e.group&&o.push(t)})),t(o,me),N(o,(function(e){e[ge]!==ye&&e.dispatchAction(i)})),t(o,be)}}))}))},He=function(e,t){var n=e._model;a["k"](M["r"](t),(function(e){var t,i=e.from,o=e.to;null==o&&Object(E["b"])(t);var a={includeMainTypes:["series"],enableAll:!1,enableNone:!1},r=i?M["s"](n,i,a):null,s=M["s"](n,o,a),u=s.seriesModel;null==u&&(t=""),r&&r.seriesModel!==u&&(t=""),null!=t&&Object(E["b"])(t),u.__transientTransitionOpt={from:i?i.dimension:null,to:o.dimension,dividingMethod:e.dividingMethod}}))}}(),t}(c["a"]),Ye=qe.prototype;Ye.on=we("on"),Ye.off=we("off"),Ye.one=function(e,t,n){var i=this;function o(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];t&&t.apply&&t.apply(this,n),i.off(e,o)}Object(E["a"])("ECharts#one is deprecated."),this.on.call(this,e,o,n)};var Je=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"];function We(e){0}var $e={},Ke={},Qe=[],et=[],tt=[],nt=[],it=[],ot={},at={},rt={},st={},ut=+new Date-0,ct=(new Date,"_echarts_instance_");function dt(e,t,n){var i=pt(e);if(i)return i;var o=new qe(e,t,n);return o.id="ec_"+ut++,rt[o.id]=o,M["v"](e,ct,o.id),Be(o),N(tt,(function(e){e(o)})),o}function pt(e){return rt[M["g"](e,ct)]}function lt(e,t){ot[e]=t}function ft(e){Y(et,e)<0&&et.push(e)}function ht(e,t){Ot(Qe,e,t,ee)}function _t(e){Y(tt,e)<0&&e&&tt.push(e)}function vt(e){Y(nt,e)<0&&e&&nt.push(e)}function gt(e,t,n){"function"===typeof t&&(n=t,t="");var i=q(e)?e.type:[e,e={event:t}][0];e.event=(e.event||i).toLowerCase(),t=e.event,Ke[t]||(Z(ve.test(i)&&ve.test(t)),$e[i]||($e[i]={action:n,actionInfo:e}),Ke[t]=i)}function mt(e,t){l["a"].register(e,t)}function yt(e,t){Ot(it,e,t,ne,"layout")}function bt(e,t){Ot(it,e,t,ae,"visual")}var wt=[];function Ot(e,t,n,i,o){if((X(t)||q(t))&&(n=t,t=i),!(Y(wt,n)>=0)){wt.push(n);var a=k["a"].wrapStageHandler(n,o);a.__prio=t,a.__raw=n,e.push(a)}}function Ct(e,t){at[e]=t}function Tt(e,t,n){j["a"].registerMap(e,t,n)}var Mt=F["b"];bt(oe,I["c"]),bt(se,I["b"]),bt(se,I["a"]),bt(oe,P["b"]),bt(se,P["a"]),bt(pe,G["a"]),ft(h["a"]),ht(K,_["a"]),Ct("default",x["a"]),gt({type:T["c"],event:T["c"],update:T["c"]},a["L"]),gt({type:T["b"],event:T["b"],update:T["b"]},a["L"]),gt({type:T["f"],event:T["f"],update:T["f"]},a["L"]),gt({type:T["i"],event:T["i"],update:T["i"]},a["L"]),gt({type:T["h"],event:T["h"],update:T["h"]},a["L"]),lt("light",L["a"]),lt("dark",z["a"])}}]);