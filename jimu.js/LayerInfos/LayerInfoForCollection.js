// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/promise/all esri/lang jimu/utils ./LayerInfo".split(" "),function(f,c,d,g,h,k,l){return f(l,{constructor:function(){this.layerObject={declaredClass:"esri.layers.FeatureCollection",type:"FeatureCollection",empty:!0}},_getExtent:function(){var b=null,a=[];c.forEach(this.getSubLayers(),function(b){a.push(b._getExtent())},this);return g(a).then(d.hitch(this,function(a){c.forEach(a,function(a){k.isValidExtent(a)&&(b=b?b.union(a):a)},this);
return b}))},_resetLayerObjectVisiblity:function(b){var a=b?b[this.id]:null;if(a){var e={},c;for(c in b)b.hasOwnProperty(c)&&"function"!==typeof b[c]&&(e[c]=b[c].visible);this._setSubLayerVisibleByCheckedInfo(e);this._setTopLayerVisible(a.visible)}},_setSubLayerVisibleByCheckedInfo:function(b){c.forEach(this.newSubLayers,function(a){h.isDefined(b[a.id])&&a.layerObject.setVisibility(b[a.id])},this)},_initVisible:function(){var b=!1,a;for(a=0;a<this.newSubLayers.length;a++)b=b||this.newSubLayers[a].layerObject.visible;
b&&(this._visible=!0)},_setTopLayerVisible:function(b){this._visible=b?!0:!1;c.forEach(this.newSubLayers,function(a){a.setLayerVisiblefromTopLayer()},this);this._onVisibilityChanged()},obtainNewSubLayers:function(){var b=[];c.forEach(this.originOperLayer.featureCollection.layers,function(a){this._getLayerIndexesInMapByLayerId(a.layerObject.id)&&(d.setObject("_wabProperties.originOperLayer.showLegend",this.originOperLayer.featureCollection.showLegend,a.layerObject),a=this._layerInfoFactory.create({layerObject:a.layerObject,
title:a.layerObject.label||a.layerObject.title||a.layerObject.name||a.layerObject.id||" ",id:a.id||"-",subId:a.id||"-",collection:{layerInfo:this},selfType:"collection",showLegend:!0,parentLayerInfo:this}),b.push(a),a.init())},this);b.reverse();return b},_obtainLayerIndexesInMap:function(){var b=[],a,c;for(c=0;c<this.newSubLayers.length;c++)(a=this._getLayerIndexesInMapByLayerId(this.newSubLayers[c].layerObject.id))&&b.push(a);return b},moveLeftOfIndex:function(b){var a;for(a=this.newSubLayers.length-
1;0<=a;a--)this.map.reorderLayer(this.newSubLayers[a].layerObject,b)},moveRightOfIndex:function(b){var a;for(a=0;a<this.newSubLayers.length;a++)this.map.reorderLayer(this.newSubLayers[a].layerObject,b)},_getShowLegendOfWebmap:function(){return void 0!==this.originOperLayer.featureCollection.showLegend?this.originOperLayer.featureCollection.showLegend:!0},getOpacity:function(){var b,a=0;for(b=0;b<this.newSubLayers.length;b++)if(this.newSubLayers[b].layerObject.opacity)a=this.newSubLayers[b].layerObject.opacity>
a?this.newSubLayers[b].layerObject.opacity:a;else return 1;return a},setOpacity:function(b){c.forEach(this.newSubLayers,function(a){a.layerObject.setOpacity&&a.layerObject.setOpacity(b)})},getScaleRange:function(){var b=this.getSubLayers();return b[0]?b[0].getScaleRange():{minScale:0,maxScale:0}}})});