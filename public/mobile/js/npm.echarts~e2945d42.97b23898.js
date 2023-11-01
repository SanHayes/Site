(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.echarts~e2945d42"],{c835:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a("9ab4"),i=a("d4d1"),r=a("2dc5"),o=a("2306"),s=a("c7a2"),u=a("7d6c"),c=a("7837"),h=a("6d8b"),l=a("80f0"),d=a("e887"),p=function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.type=t.type,a._layers=[],a}return Object(n["b"])(t,e),t.prototype.render=function(e,t,a){var n=e.getData(),s=this,d=this.group,p=e.getLayerSeries(),y=n.getLayout("layoutInfo"),f=y.rect,m=y.boundaryGap;function v(e){return e.name}d.x=0,d.y=f.y+m[0];var b=new l["a"](this._layersSeries||[],p,v,v),x=[];function w(t,a,h){var l=s._layers;if("remove"!==t){for(var y,f,m=[],v=[],b=p[a].indices,w=0;w<b.length;w++){var D=n.getItemLayout(b[w]),O=D.x,j=D.y0,L=D.y;m.push(O,j),v.push(O,j+L),y=n.getItemVisual(b[w],"style")}var S=n.getItemLayout(b[0]),I=e.getModel("label"),P=I.get("margin"),A=e.getModel("emphasis");if("add"===t){var C=x[a]=new r["a"];f=new i["a"]({shape:{points:m,stackedOnPoints:v,smooth:.4,stackedOnSmooth:.4,smoothConstraint:!1},z2:0}),C.add(f),d.add(C),e.isAnimationEnabled()&&f.setClipPath(g(f.getBoundingRect(),e,(function(){f.removeClipPath()})))}else{C=l[h];f=C.childAt(0),d.add(C),x[a]=C,o["updateProps"](f,{shape:{points:m,stackedOnPoints:v}},e)}Object(c["g"])(f,Object(c["e"])(e),{labelDataIndex:b[w-1],defaultText:n.getName(b[w-1]),inheritColor:y.fill},{normal:{verticalAlign:"middle"}}),f.setTextConfig({position:null,local:!0});var k=f.getTextContent();k&&(k.x=S.x-P,k.y=S.y0+S.y/2),f.useStyle(y),n.setItemGraphicEl(a,f),Object(u["D"])(f,e),Object(u["k"])(f,A.get("focus"),A.get("blurScope"))}else d.remove(l[a])}b.add(Object(h["c"])(w,this,"add")).update(Object(h["c"])(w,this,"update")).remove(Object(h["c"])(w,this,"remove")).execute(),this._layersSeries=p,this._layers=x},t.type="themeRiver",t}(d["a"]);function g(e,t,a){var n=new s["a"]({shape:{x:e.x-10,y:e.y-10,width:0,height:e.height+20}});return o["initProps"](n,{shape:{x:e.x-50,width:e.width+100,height:e.height+20}},t,a),n}var y=p,f=a("4f85"),m=a("b1d4"),v=a("2f45"),b=a("6179"),x=a("e0d3"),w=a("c4a3"),D=a("217c"),O=2,j=function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.type=t.type,a.useColorPaletteOnData=!0,a}return Object(n["b"])(t,e),t.prototype.init=function(t){e.prototype.init.apply(this,arguments),this.legendVisualProvider=new w["a"](h["c"](this.getData,this),h["c"](this.getRawData,this))},t.prototype.fixData=function(e){var t=e.length,a={},n=Object(x["j"])(e,(function(e){return a.hasOwnProperty(e[0]+"")||(a[e[0]+""]=-1),e[2]})),i=[];n.buckets.each((function(e,t){i.push({name:t,dataList:e})}));for(var r=i.length,o=0;o<r;++o){for(var s=i[o].name,u=0;u<i[o].dataList.length;++u){var c=i[o].dataList[u][0]+"";a[c]=o}for(var c in a)a.hasOwnProperty(c)&&a[c]!==o&&(a[c]=o,e[t]=[c,0,s],t++)}return e},t.prototype.getInitialData=function(e,t){for(var a=this.getReferringComponents("singleAxis",x["b"]).models[0],n=a.get("type"),i=h["n"](e.data,(function(e){return void 0!==e[2]})),r=this.fixData(i||[]),o=[],s=this.nameMap=h["g"](),u=0,c=0;c<r.length;++c)o.push(r[c][O]),s.get(r[c][O])||(s.set(r[c][O],u),u++);var l=Object(m["a"])(r,{coordDimensions:["single"],dimensionsDefine:[{name:"time",type:Object(v["a"])(n)},{name:"value",type:"float"},{name:"name",type:"ordinal"}],encodeDefine:{single:0,value:1,itemName:2}}),d=new b["a"](l,this);return d.initData(r),d},t.prototype.getLayerSeries=function(){for(var e=this.getData(),t=e.count(),a=[],n=0;n<t;++n)a[n]=n;var i=e.mapDimension("single"),r=Object(x["j"])(a,(function(t){return e.get("name",t)})),o=[];return r.buckets.each((function(t,a){t.sort((function(t,a){return e.get(i,t)-e.get(i,a)})),o.push({name:a,indices:t})})),o},t.prototype.getAxisTooltipData=function(e,t,a){h["t"](e)||(e=e?[e]:[]);for(var n,i=this.getData(),r=this.getLayerSeries(),o=[],s=r.length,u=0;u<s;++u){for(var c=Number.MAX_VALUE,l=-1,d=r[u].indices.length,p=0;p<d;++p){var g=i.get(e[0],r[u].indices[p]),y=Math.abs(g-t);y<=c&&(n=g,c=y,l=r[u].indices[p])}o.push(l)}return{dataIndices:o,nestestValue:n}},t.prototype.formatTooltip=function(e,t,a){var n=this.getData(),i=n.getName(e),r=n.get(n.mapDimension("value"),e);return Object(D["c"])("nameValue",{name:i,value:r})},t.type="series.themeRiver",t.dependencies=["singleAxis"],t.defaultOption={zlevel:0,z:2,coordinateSystem:"singleAxis",boundaryGap:["10%","10%"],singleAxisIndex:0,animationEasing:"linear",label:{margin:4,show:!0,position:"left",fontSize:11},emphasis:{label:{show:!0}}},t}(f["a"]),L=j,S=a("3842");function I(e,t){e.eachSeriesByType("themeRiver",(function(e){var t=e.getData(),a=e.coordinateSystem,n={},i=a.getRect();n.rect=i;var r=e.get("boundaryGap"),o=a.getAxis();if(n.boundaryGap=r,"horizontal"===o.orient){r[0]=S["o"](r[0],i.height),r[1]=S["o"](r[1],i.height);var s=i.height-r[0]-r[1];P(t,e,s)}else{r[0]=S["o"](r[0],i.width),r[1]=S["o"](r[1],i.width);var u=i.width-r[0]-r[1];P(t,e,u)}t.setLayout("layoutInfo",n)}))}function P(e,t,a){if(e.count())for(var n,i=t.coordinateSystem,r=t.getLayerSeries(),o=e.mapDimension("single"),s=e.mapDimension("value"),u=h["H"](r,(function(t){return h["H"](t.indices,(function(t){var a=i.dataToPoint(e.get(o,t));return a[1]=e.get(s,t),a}))})),c=A(u),l=c.y0,d=a/c.max,p=r.length,g=r[0].indices.length,y=0;y<g;++y){n=l[y]*d,e.setItemLayout(r[0].indices[y],{layerIndex:0,x:u[0][y][0],y0:n,y:u[0][y][1]*d});for(var f=1;f<p;++f)n+=u[f-1][y][1]*d,e.setItemLayout(r[f].indices[y],{layerIndex:f,x:u[f][y][0],y0:n,y:u[f][y][1]*d})}}function A(e){for(var t=e.length,a=e[0].length,n=[],i=[],r=0,o=0;o<a;++o){for(var s=0,u=0;u<t;++u)s+=e[u][o][1];s>r&&(r=s),n.push(s)}for(var c=0;c<a;++c)i[c]=(r-n[c])/2;r=0;for(var h=0;h<a;++h){var l=n[h]+i[h];l>r&&(r=l)}return{y0:i,max:r}}var C=a("d3f4");function k(e){e.registerChartView(y),e.registerSeriesModel(L),e.registerLayout(I),e.registerProcessor(Object(C["a"])("themeRiver"))}}}]);