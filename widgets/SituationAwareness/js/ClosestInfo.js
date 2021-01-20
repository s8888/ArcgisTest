// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on jimu/utils esri/geometry/geometryEngine esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),function(P,p,I,Q,J,E,q,w,R,K,D,L,M,G,S,y,N,O,T,U,V,u){return P("ClosestInfo",null,
{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,c,d){this.tab=a;this.container=c;this.parent=d;this.graphicsLayer=this.incident=null;this.map=d.map;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=d.config;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,c,d,f){var l=new E;this.incidentCount=a.length;var e=this.parent.config.distanceSettings[this.parent.config.distanceUnits],
m=this.parent.config.maxDistance;c=[];for(var g=0;g<a.length;g++)c.push(M.buffer(a[g].geometry,m,e));var b=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(b=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var k;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?
(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,c,d,f,b).then(function(a){l.resolve(a)})):(k=new y(this.summaryLayer.url),k.infoTemplate=this.tab.tabLayers[0].infoTemplate,b=[k],this.tab.tabLayers=b,D(k,"load",p.hitch(this,function(){this.summaryLayer=k;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,c,d,f,b).then(function(a){l.resolve(a)})})))):this.loading||(k=new y(this.tab.tabLayers[0].url),this.loading=!0,D(k,"load",p.hitch(this,function(){this.summaryLayer=
k;this.summaryFields=this._getFields(this.summaryLayer);for(var h=this.tab.tabLayers[0].url.split("MapServer/")[1],e=this.parent.map.itemInfo.itemData.operationalLayers,x=0;x<e.length;x++){var g=e[x];if(-1<this.tab.tabLayers[0].url.indexOf(g.url)&&"undefined"!==typeof g.layerObject&&g.layerObject.infoTemplates&&(g=g.layerObject.infoTemplates[h])){k.infoTemplate=g.infoTemplate;break}}b=[k];this.tab.tabLayers=b;this.loading=!1;this._performQuery(a,c,d,f,b).then(function(a){l.resolve(a)})})))}this.mapServiceLayer||
this._performQuery(a,c,d,f,b).then(function(a){l.resolve(a)});return l},_performQuery:function(a,c,d,f,l){var e=new E,m=[],g,b;this.summaryGeoms=c;if(0<c.length)for(a=0;a<c.length;a++)m=c[a],b=u.createDefArray(l,m,this.parent.opLayers,this.tab),g=0===a?m=b:m=g.concat(b);(new J(m)).then(p.hitch(this,function(a){for(var h=0,c=0;c<a.length;c++){var b=a[c][1];isNaN(b)?b&&b.features?0<b.features.length&&(h+=1):b&&"undefined"!==typeof b.length&&0<b.length&&(h+=1):0<b&&(h+=1)}this.updateTabCount(h,d,f);
e.resolve(h)}));return e},updateTabCount:function(a,c,d){this.featureCount=0===parseInt(a,10)?0:a;u.updateTabCount(this.featureCount,c,d,this.baseLabel,this.incidentCount)},updateForIncident:function(a,c,d,f,l,e){this.incidentCount=a.length;this.allFields="undefined"!==typeof l&&"undefined"!==typeof e?l?!0:e:!1;var m="undefined"!==typeof f,g;Q.forEach(this.tab.tabLayers,p.hitch(this,function(b){m&&(g=new E);if(b.url){var e=new y(b.url,{mode:y.MODE_ONDEMAND,infoTemplate:b.infoTemplate});D(e,"load",
p.hitch(this,function(){this.tab.tabLayers=[e];m?this.processIncident(a,c,d,f).then(p.hitch(this,function(a){g.resolve(a)}),p.hitch(this,function(a){console.error(a);g.reject(a)})):this.processIncident(a,c,d,f)}))}else m?this.processIncident(a,c,d,f).then(p.hitch(this,function(a){g.resolve(a)}),p.hitch(this,function(a){console.error(a);g.reject(a)})):this.processIncident(a,c,d,f)}));if(m)return g},processIncident:function(a,c,d,f){this.incidents=a;var l,e="undefined"!==typeof f;e?l=new E:(this.container.innerHTML=
"",q.add(this.container,"loading"));var m=[];f=this.parent.config.distanceSettings[this.parent.config.distanceUnits];for(var g=[],b=0;b<a.length;b++){var k=a[b].geometry,h=M.buffer(k,c,f);g.push({geometry:k,buffer:h})}(this.graphicsLayer=d)&&this.graphicsLayer.clear();a=[];c=this.tab.tabLayers[0];d=-1===[null,void 0,""].indexOf(c.id)?c.id:this.tab.layers;d=u.getFilter(d,this.parent.opLayers);var r=this._getFields(c);for(f=0;f<g.length;f++)b=new V,b.returnGeometry=!0,b.outSpatialReference=this.parent.map.spatialReference,
b.geometry=g[f].buffer,b.where=d,b.outFields=["*"],"undefined"!==typeof c.queryFeatures&&a.push(c.queryFeatures(b));(new J(a)).then(p.hitch(this,function(a){for(var b=0;b<a.length;b++)if(a[b][0]){var c=a[b][1].features,d=[],f=g[b].geometry;if(c&&0<c.length){for(var h=0;h<c.length;h++){for(var k=new G(c[h].toJson()),q=u.getDistance(f,k.geometry,this.parent.config.distanceUnits),n={DISTANCE:q},t=0;t<r.length;t++)n[r[t]]=k.attributes[r[t]];!0===this.config.csvAllFields||"true"===this.config.csvAllFields?
k.attributes.DISTANCE=q:k.attributes=n;d.push(k)}d.sort(u.compareDistance);m.push(d[0])}}else a[b][1]&&a[b][1].message&&console.log(a[b][1].message);m.sort(u.compareDistance);e?this._processResults(m,!0).then(p.hitch(this,function(a){l.resolve(a)})):this._processResults(m)}),p.hitch(this,function(a){console.error(a);l.reject(a)}));if(e)return l},_processResults:function(a,c){var d,f,l=a&&0<a.length;if(l&&"point"!==a[0].geometry.type)for(var e=a.length-1;0<=e;e--)"undefined"===typeof a[e].geometry.getExtent()&&
a.splice(e,1);c?d=new E:(this.container.innerHTML="",q.remove(this.container,"loading"),l&&(f=w.create("div",{"class":"SAT_tabPanelContent"},this.container),e=w.create("div",{},f),q.add(e,"SATcolExport"),q.add(e,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),e=w.create("div",{title:this.parent.nls.downloadCSV},e),q.add(e,"btnExport"),D(e,"click",p.hitch(this,this._exportToCSV,a))));var e=this.parent.nls[this.parent.config.distanceUnits],m=[],g=220;if(l)for(var b=0;b<a.length;b++){var k=
b+1,h=a[b],r=h.geometry,x=r;"point"!==r.type&&(x=r.getExtent().getCenter());var r=h.attributes,y;"point"===this.incidents[0].geometry.type&&(y=Math.round(100*r.DISTANCE)/100+" "+e+" ("+this.parent.nls.approximate+")");var z="",v=0,A=[];if("undefined"!==typeof this.displayFields)for(var H=0;H<this.displayFields.length;H++){var B=this.displayFields[H],C;a:for(C in r)if("DISTANCE"!==C&&3>v&&B.expression===C){var n=u.getFieldValue(C,r[C],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,
this.types,this.layerObject&&this.layerObject.renderer?this.layerObject:this.layerDefinition,r,B),n="undefined"!==typeof n&&null!==n?L.stripHTML(n.toString()):"",t="undefined"!==typeof B.label&&""!==B.label?B.label:void 0,F=h._layer&&h._layer.fields?h._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;F&&"undefined"===typeof t&&(F=u.getField(F,C))&&(t=F.alias);if("undefined"===typeof t||t in[""," ",null,void 0])t=C;u.isURL(n)?n='\x3ca href\x3d"'+n+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+
t+"\x3c/a\x3e":u.isEmail(n)&&(n='\x3ca href\x3d"mailto:'+n+'" style\x3d"color: inherit;"\x3e'+t+"\x3c/a\x3e");z+=B.validLabel?("undefined"!==typeof B.label&&""!==B.label?t+" ":"")+n+"\x3cbr/\x3e":n+"\x3cbr/\x3e";v+=1;A.push({value:-1<n.indexOf(",")?n.replace(",",""):n,label:t});break a}}m.push(A);c||(h=w.create("div",{},f),q.add(h,"SATcolRec"),q.add(h,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),v=w.create("div",{},h),q.add(v,"SATcolRecBar"),A=w.create("div",{innerHTML:k},v),q.add(A,
"SATcolRecNum"),K.set(A,"backgroundColor",this.parent.config.activeColor),D(A,"click",p.hitch(this,this._zoomToLocation,x)),y&&(A=w.create("div",{innerHTML:y},v),q.add(A,"SATcolDistance")),this.parent.config.enableRouting&&(v=w.create("div",{title:this.parent.nls.get_directions},v),q.add(v,"SATcolDir"),D(v,"click",p.hitch(this,this._routeToIncident,x))),z=w.create("div",{"class":"SATcolWrap",innerHTML:z},h),q.add(z,"SATcolInfo"),g+=R.position(h).w,z=new O(O.STYLE_SOLID,new I.fromRgb(this.parent.config.activeMapGraphicColor),
1),z=new N(N.STYLE_CIRCLE,24,z,new I.fromRgb(this.parent.config.activeMapGraphicColor)),h=new T,h.family="Arial",h.size="12px",k=new U(k,h,new S(this.parent.config.fontColor)),k.setOffset(0,-4),this.graphicsLayer.add(new G(x,z,r)),this.graphicsLayer.add(new G(x,k,r)))}if(!c&&l)K.set(f,"width",g);else if(l)return d.resolve({graphics:a,analysisResults:m,context:this}),d},_exportToCSV:function(a,c,d,f){a=u.exportToCSV(a,c,d,f,{type:"closest",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,
layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.closest,nlsCount:this.parent.nls.count});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){this.layerDefinition=L.getFeatureLayerDefinition(a);this.layerObject=a;a=u.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=u.getDisplayFields(this.tab);return a.fields},
_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});