(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.echarts~900021e8"],{"14bf":function(t,e,o){"use strict";o.d(e,"a",(function(){return F}));var r=o("9ab4"),a=o("73ca"),s=o("0fd3"),n=o("7e5b"),i=o("4527"),l=o("6a4c"),f=o("a38d"),p=o("cccd"),d={seriesType:"lines",plan:Object(p["a"])(),reset:function(t){var e=t.coordinateSystem,o=t.get("polyline"),r=t.pipelineContext.large;return{progress:function(a,s){var n=[];if(r){var i=void 0,l=a.end-a.start;if(o){for(var f=0,p=a.start;p<a.end;p++)f+=t.getLineCoordsCount(p);i=new Float32Array(l+2*f)}else i=new Float32Array(4*l);var d=0,u=[];for(p=a.start;p<a.end;p++){var h=t.getLineCoords(p,n);o&&(i[d++]=h);for(var c=0;c<h;c++)u=e.dataToPoint(n[c],!1,u),i[d++]=u[0],i[d++]=u[1]}s.setLayout("linesPoints",i)}else for(p=a.start;p<a.end;p++){var y=s.getItemModel(p),g=(h=t.getLineCoords(p,n),[]);if(o)for(var m=0;m<h;m++)g.push(e.dataToPoint(n[m]));else{g[0]=e.dataToPoint(n[0]),g[1]=e.dataToPoint(n[1]);var v=y.get(["lineStyle","curveness"]);+v&&(g[2]=[(g[0][0]+g[1][0])/2-(g[0][1]-g[1][1])*v,(g[0][1]+g[1][1])/2-(g[1][0]-g[0][0])*v])}s.setItemLayout(p,g)}}}}},u=d,h=o("b0af"),c=o("e887"),y=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o}return Object(r["b"])(e,t),e.prototype.render=function(t,e,o){var r=t.getData(),a=this._updateLineDraw(r,t),s=t.get("zlevel"),n=t.get(["effect","trailLength"]),i=o.getZr(),l="svg"===i.painter.getType();(l||i.painter.getLayer(s).clear(!0),null==this._lastZlevel||l||i.configLayer(this._lastZlevel,{motionBlur:!1}),this._showEffect(t)&&n)&&(l||i.configLayer(s,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(n/10+.9,1),0)}));a.updateData(r);var f=t.get("clip",!0)&&Object(h["a"])(t.coordinateSystem,!1,t);f?this.group.setClipPath(f):this.group.removeClipPath(),this._lastZlevel=s,this._finished=!0},e.prototype.incrementalPrepareRender=function(t,e,o){var r=t.getData(),a=this._updateLineDraw(r,t);a.incrementalPrepareUpdate(r),this._clearLayer(o),this._finished=!1},e.prototype.incrementalRender=function(t,e,o){this._lineDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},e.prototype.updateTransform=function(t,e,o){var r=t.getData(),a=t.pipelineContext;if(!this._finished||a.large||a.progressiveRender)return{update:!0};var s=u.reset(t,e,o);s.progress&&s.progress({start:0,end:r.count(),count:r.count()},r),this._lineDraw.updateLayout(),this._clearLayer(o)},e.prototype._updateLineDraw=function(t,e){var o=this._lineDraw,r=this._showEffect(e),p=!!e.get("polyline"),d=e.pipelineContext,u=d.large;return o&&r===this._hasEffet&&p===this._isPolyline&&u===this._isLargeDraw||(o&&o.remove(),o=this._lineDraw=u?new f["a"]:new a["a"](p?r?l["a"]:i["a"]:r?s["a"]:n["a"]),this._hasEffet=r,this._isPolyline=p,this._isLargeDraw=u,this.group.removeAll()),this.group.add(o.group),o},e.prototype._showEffect=function(t){return!!t.get(["effect","show"])},e.prototype._clearLayer=function(t){var e=t.getZr(),o="svg"===e.painter.getType();o||null==this._lastZlevel||e.painter.getLayer(this._lastZlevel).clear(!0)},e.prototype.remove=function(t,e){this._lineDraw&&this._lineDraw.remove(),this._lineDraw=null,this._clearLayer(e)},e.type="lines",e}(c["a"]),g=y,m=o("4f85"),v=o("6179"),_=o("6d8b"),C=o("217c"),w="undefined"===typeof Uint32Array?Array:Uint32Array,b="undefined"===typeof Float64Array?Array:Float64Array;function O(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=Object(_["H"])(e,(function(t){var e=[t[0].coord,t[1].coord],o={coords:e};return t[0].name&&(o.fromName=t[0].name),t[1].name&&(o.toName=t[1].name),Object(_["J"])([o,t[0],t[1]])})))}var S=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o.visualStyleAccessPath="lineStyle",o.visualDrawType="stroke",o}return Object(r["b"])(e,t),e.prototype.init=function(e){e.data=e.data||[],O(e);var o=this._processFlatCoordsArray(e.data);this._flatCoords=o.flatCoords,this._flatCoordsOffset=o.flatCoordsOffset,o.flatCoords&&(e.data=new Float32Array(o.count)),t.prototype.init.apply(this,arguments)},e.prototype.mergeOption=function(e){if(O(e),e.data){var o=this._processFlatCoordsArray(e.data);this._flatCoords=o.flatCoords,this._flatCoordsOffset=o.flatCoordsOffset,o.flatCoords&&(e.data=new Float32Array(o.count))}t.prototype.mergeOption.apply(this,arguments)},e.prototype.appendData=function(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=Object(_["e"])(this._flatCoords,e.flatCoords),this._flatCoordsOffset=Object(_["e"])(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data)},e.prototype._getCoordsFromItemModel=function(t){var e=this.getData().getItemModel(t),o=e.option instanceof Array?e.option:e.getShallow("coords");return o},e.prototype.getLineCoordsCount=function(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length},e.prototype.getLineCoords=function(t,e){if(this._flatCoordsOffset){for(var o=this._flatCoordsOffset[2*t],r=this._flatCoordsOffset[2*t+1],a=0;a<r;a++)e[a]=e[a]||[],e[a][0]=this._flatCoords[o+2*a],e[a][1]=this._flatCoords[o+2*a+1];return r}var s=this._getCoordsFromItemModel(t);for(a=0;a<s.length;a++)e[a]=e[a]||[],e[a][0]=s[a][0],e[a][1]=s[a][1];return s.length},e.prototype._processFlatCoordsArray=function(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),"number"===typeof t[0]){for(var o=t.length,r=new w(o),a=new b(o),s=0,n=0,i=0,l=0;l<o;){i++;var f=t[l++];r[n++]=s+e,r[n++]=f;for(var p=0;p<f;p++){var d=t[l++],u=t[l++];a[s++]=d,a[s++]=u}}return{flatCoordsOffset:new Uint32Array(r.buffer,0,n),flatCoords:a,count:i}}return{flatCoordsOffset:null,flatCoords:null,count:t.length}},e.prototype.getInitialData=function(t,e){var o=new v["a"](["value"],this);return o.hasItemOption=!1,o.initData(t.data,[],(function(t,e,r,a){if(t instanceof Array)return NaN;o.hasItemOption=!0;var s=t.value;return null!=s?s instanceof Array?s[a]:s:void 0})),o},e.prototype.formatTooltip=function(t,e,o){var r=this.getData(),a=r.getItemModel(t),s=a.get("name");if(s)return s;var n=a.get("fromName"),i=a.get("toName"),l=[];return null!=n&&l.push(n),null!=i&&l.push(i),Object(C["c"])("nameValue",{name:l.join(" > ")})},e.prototype.preventIncremental=function(){return!!this.get(["effect","show"])},e.prototype.getProgressive=function(){var t=this.option.progressive;return null==t?this.option.large?1e4:this.get("progressive"):t},e.prototype.getProgressiveThreshold=function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?2e4:this.get("progressiveThreshold"):t},e.type="series.lines",e.dependencies=["grid","polar","geo","calendar"],e.defaultOption={coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,clip:!0,label:{show:!1,position:"end"},lineStyle:{opacity:.5}},e}(m["a"]),D=S;function A(t){return t instanceof Array||(t=[t,t]),t}var L={seriesType:"lines",reset:function(t){var e=A(t.get("symbol")),o=A(t.get("symbolSize")),r=t.getData();function a(t,e){var o=t.getItemModel(e),r=A(o.getShallow("symbol",!0)),a=A(o.getShallow("symbolSize",!0));r[0]&&t.setItemVisual(e,"fromSymbol",r[0]),r[1]&&t.setItemVisual(e,"toSymbol",r[1]),a[0]&&t.setItemVisual(e,"fromSymbolSize",a[0]),a[1]&&t.setItemVisual(e,"toSymbolSize",a[1])}return r.setVisual("fromSymbol",e&&e[0]),r.setVisual("toSymbol",e&&e[1]),r.setVisual("fromSymbolSize",o&&o[0]),r.setVisual("toSymbolSize",o&&o[1]),{dataEach:r.hasItemOption?a:null}}},I=L;function F(t){t.registerChartView(g),t.registerSeriesModel(D),t.registerLayout(u),t.registerVisual(I)}}}]);