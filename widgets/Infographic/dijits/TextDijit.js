// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/html","./BaseDijit","./styleUtils"],function(d,a,e,c){return d([e],{templateString:"\x3cdiv\x3e\x3c/div\x3e",type:"text",config:null,postCreate:function(){this.setConfig(this.config)},setConfig:function(b){this.config=b;a.empty(this.domNode);a.addClass(this.domNode,"table-layout-container");a.addClass(this.domNode,"no-trim");this.innerDom=a.create("div",{},this.domNode);a.place(this.innerDom,this.domNode);b={};c.background.setStyle(this.config.background,b,
this);c.font.setStyle(this.config.font,b);c.font.setText(this.config,this);a.setStyle(this.innerDom,b)}})});