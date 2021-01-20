// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/GridOverlay/GridSetting.html":'\x3cdiv style\x3d"width:100%;height:100%;overflow:hidden;" class\x3d"nihilo"\x3e\r\n    \x3cdiv class\x3d\'neo\'\x3e\r\n        \x3ctable class\x3d"settings-section"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d\'sectionTitle\' colspan\x3d"2"\x3e${nls.minIntSpacingLabel}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d\'grid-overlay-setting-slider\' data-dojo-attach-point\x3d"minIntervalSpacing" data-dojo-type\x3d"dijit/form/HorizontalSlider" data-dojo-props\x3d"value:100, minimum: 50, maximum:250, discreteValues:41, intermediateChanges:true, showButtons:false"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"grid-overlay-setting-slider-value"\x3e\x3cspan class\x3d\'sliderValue\' data-dojo-attach-point\x3d"minIntervalSpacingVal"\x3epx\x3c/span\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d\'sectionTitle\' colspan\x3d"2"\x3e${nls.lineOpacityLabel}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d\'grid-overlay-setting-slider\' data-dojo-attach-point\x3d"lineOpacity" data-dojo-type\x3d"dijit/form/HorizontalSlider" data-dojo-props\x3d"value:100, minimum: 0.05, maximum:1, discreteValues:20, intermediateChanges:true, showButtons:false"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"grid-overlay-setting-slider-value"\x3e\x3cspan class\x3d\'sliderValue\' data-dojo-attach-point\x3d"lineOpacityVal"\x3e%\x3c/span\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d\'sectionTitle\'\x3e${nls.labelOpacityLabel}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d\'grid-overlay-setting-slider\' data-dojo-attach-point\x3d"labelOpacity" data-dojo-type\x3d"dijit/form/HorizontalSlider" data-dojo-props\x3d"value:100, minimum: 0.05, maximum:1, discreteValues:20, intermediateChanges:true, showButtons:false"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\x3cdiv class\x3d"grid-overlay-setting-slider-value"\x3e\x3cspan class\x3d\'sliderValue\' data-dojo-attach-point\x3d"labelOpacityVal"\x3e%\x3c/span\x3e\x3c/div\x3e\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d\'sectionTitle\'\x3e${nls.verticalLineLabels}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d\'verticalLineSection\'\x3e\r\n                        \x3cdiv class\x3d\'image-labels horizontalLabel\' title\x3d\'${nls.horizontalLabel}\' data-dojo-attach-point\x3d"horizontalLabels"\x3e\x3c/div\x3e\r\n                        \x3cdiv class\x3d\'image-labels verticalLabel\' title\x3d\'${nls.verticalLabel}\' data-dojo-attach-point\x3d"verticalLabels"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"trShowGrid"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n                            \x3cul\x3e\r\n                                \x3cli\x3e\r\n                                    \x3cinput class\x3d"switch-toggle" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"cbxShowGrid" label\x3d"${nls.checkBoxLabel}" /\x3e\r\n                                    \x3clabel data-dojo-attach-point\x3d"checkBoxLabel"\x3e${nls.checkBoxLabel}\x3c/label\x3e\r\n                                \x3c/li\x3e\r\n                            \x3c/ul\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cdiv class\x3d"grid-overlay-setting-style"\x3e\r\n            \x3cdiv class\x3d\'sectionTitle\'\x3e${nls.styleHeaderLabel}\x3c/div\x3e\r\n            \x3ctable\x3e\r\n                \x3cthead\x3e\r\n                    \x3ctr\x3e\r\n                        \x3cth\x3e${nls.indexHeaderLabel}\x3c/th\x3e\r\n                        \x3cth\x3e${nls.colorHeaderLabel}\x3c/th\x3e\r\n                        \x3cth\x3e${nls.fontSizeHeaderLabel}\x3c/th\x3e\r\n                        \x3cth\x3e${nls.lineWidthHeaderLabel}\x3c/th\x3e\r\n                    \x3c/tr\x3e\r\n                \x3c/thead\x3e\r\n                \x3ctbody\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.gzd}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker0" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize0" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize0" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.gsid}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker1" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize1" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize1" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.grid10k}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker2" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize2" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize2" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.grid1k}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker3" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize3" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize3" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.grid100m}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker4" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize4" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize4" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                    \x3ctr\x3e\r\n                        \x3ctd\x3e${nls.grid10m}\x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv data-dojo-attach-point\x3d"colorPicker5" class\x3d"grid-overlay-setting-color-picker" data-dojo-type\x3d"jimu/dijit/ColorPicker"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"fontSize5" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:5,max:72}, value:15"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                        \x3ctd\x3e\r\n                            \x3cdiv class\x3d"font-size" data-dojo-attach-point\x3d"lineSize5" data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n                            data-dojo-props\x3d"intermediateChanges:true, constraints:{min:1,max:10}, value:2"\x3e\x3c/div\x3e\r\n                        \x3c/td\x3e\r\n                    \x3c/tr\x3e\r\n                \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/dom-class dojo/on dojo/json dojo/_base/array dojo/_base/lang dojo/_base/Color dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry ./lib/GridOverlay jimu/dijit/Message dojo/i18n!./setting/nls/strings dojo/text!./GridSetting.html dijit/form/HorizontalSlider dijit/form/NumberSpinner jimu/dijit/ColorPicker dijit/form/CheckBox".split(" "),function(m,d,n,l,p,h,k,q,r,t,u,v,w,x,y){var e=function(b,c){c instanceof k||(c=new k(c));var a=c.toHex();
c=128<.2126*c.r+.7152*c.g+.0722*c.b?new k([0,0,0]):new k([255,255,255]);b.innerHTML="\x3cdiv class\x3d'grid-overlay-setting-color-picker-text' style\x3d'"+("color:"+c+";")+"'\x3e"+a+"\x3c/div\x3e"},f=function(b,c,a,d){isNaN(d)?(b.value=5,b.setDisplayedValue(5)):4<d&&73>d&&c.setFontSize(a,d)},g=function(b,c,a,d){isNaN(d)?(b.value=1,b.setDisplayedValue(1)):0<d&&11>d&&c.setLineWidth(a,d)};return m([q,r,t],{templateString:y,baseClass:"grid-overlay-setting",verticalLabelsClicked:!1,horizontalLabelsClicked:!1,
map:null,config:null,nls:null,gridOverlayCtrl:null,constructor:function(b){this.map=b.map;this.config=b.config;this.nls=x},postCreate:function(){this.setConfig(this.config);var b=this,c=new v(h.mixin({map:this.map,enabled:!0},this.config));this.gridOverlayCtrl=c;this.minIntervalSpacing.onChange=h.hitch(this,function(a){this.minIntervalSpacingVal.innerHTML=window.isRTL?"px"+a:a+"px";c.setMinIntervalSpacing(a)});this.lineOpacity.onChange=h.hitch(this,function(a){this.lineOpacityVal.innerHTML=window.isRTL?
"%"+Math.round(100*a):Math.round(100*a)+"%";c.setLineOpacity(a)});this.labelOpacity.onChange=h.hitch(this,function(a){this.labelOpacityVal.innerHTML=window.isRTL?"%"+Math.round(100*a):Math.round(100*a)+"%";c.setLabelOpacity(a)});this.colorPicker0.onChange=function(a){e(this.domNode,a);c.setColor(0,a.toHex())};this.colorPicker1.onChange=function(a){e(this.domNode,a);c.setColor(1,a.toHex())};this.colorPicker2.onChange=function(a){e(this.domNode,a);c.setColor(2,a.toHex())};this.colorPicker3.onChange=
function(a){e(this.domNode,a);c.setColor(3,a.toHex())};this.colorPicker4.onChange=function(a){e(this.domNode,a);c.setColor(4,a.toHex())};this.colorPicker5.onChange=function(a){e(this.domNode,a);c.setColor(5,a.toHex())};this.fontSize0.onChange=function(a){f(this,c,0,a)};this.fontSize1.onChange=function(a){f(this,c,1,a)};this.fontSize2.onChange=function(a){f(this,c,2,a)};this.fontSize3.onChange=function(a){f(this,c,3,a)};this.fontSize4.onChange=function(a){f(this,c,4,a)};this.fontSize5.onChange=function(a){f(this,
c,5,a)};this.lineSize0.onChange=function(a){g(this,c,0,a)};this.lineSize1.onChange=function(a){g(this,c,1,a)};this.lineSize2.onChange=function(a){g(this,c,2,a)};this.lineSize3.onChange=function(a){g(this,c,3,a)};this.lineSize4.onChange=function(a){g(this,c,4,a)};this.lineSize5.onChange=function(a){g(this,c,5,a)};this.verticalLabels.onclick=function(){b.verticalLabelsClicked=!0;b.horizontalLabelsClicked=!1;b._toggleHorzVertOptions(!1);c.setVerticalLabels(b.verticalLabelsClicked)};this.horizontalLabels.onclick=
function(){b.verticalLabelsClicked=!1;b.horizontalLabelsClicked=!0;b._toggleHorzVertOptions(!0);c.setVerticalLabels(!b.horizontalLabelsClicked)}},startup:function(){this.inherited(arguments)},setConfig:function(b){this.config=void 0!==b?b:this._setConfig();this.minIntervalSpacing.set("value",this.config.minIntervalSpacing);this.minIntervalSpacingVal.innerHTML=window.isRTL?"px"+this.config.minIntervalSpacing:this.config.minIntervalSpacing+"px";this.lineOpacity.set("value",this.config.lineOpacity);
this.lineOpacityVal.innerHTML=window.isRTL?"%"+Math.round(100*this.config.lineOpacity):Math.round(100*this.config.lineOpacity)+"%";this.labelOpacity.set("value",this.config.labelOpacity);this.labelOpacityVal.innerHTML=window.isRTL?"%"+Math.round(100*this.config.labelOpacity):Math.round(100*this.config.labelOpacity)+"%";for(b=0;6>b;b++)this["colorPicker"+b].setColor(new k(this.config.colors[b])),this["colorPicker"+b].picker.setColor(this.config.colors[b]),e(this["colorPicker"+b].domNode,this.config.colors[b]);
this.fontSize0.setValue(this.config.fontSizes[0]);this.fontSize1.setValue(this.config.fontSizes[1]);this.fontSize2.setValue(this.config.fontSizes[2]);this.fontSize3.setValue(this.config.fontSizes[3]);this.fontSize4.setValue(this.config.fontSizes[4]);this.fontSize5.setValue(this.config.fontSizes[5]);this.lineSize0.setValue(this.config.lineWidths[0]);this.lineSize1.setValue(this.config.lineWidths[1]);this.lineSize2.setValue(this.config.lineWidths[2]);this.lineSize3.setValue(this.config.lineWidths[3]);
this.lineSize4.setValue(this.config.lineWidths[4]);this.lineSize5.setValue(this.config.lineWidths[5]);this._toggleHorzVertOptions(!this.config.verticalLabels);this.config.enableGridOnClose?this.cbxShowGrid.set("checked",!0):this.cbxShowGrid.set("checked",!1)},getConfig:function(){if(this._checkValidValues())return new w({message:this.nls.errorMessage}),!1;this.config=this.gridOverlayCtrl.getSettings();this.config.enableGridOnClose=this.cbxShowGrid.getValue();return this.config},alterToggleSwitch:function(){this.checkBoxLabel.innerHTML=
this.nls.checkBoxLabelDashboard;this.own(n(this.cbxShowGrid,"change",h.hitch(this,function(){this.cbxShowGrid.checked?this.gridOverlayCtrl.enable():this.gridOverlayCtrl.disable()})))},_saveConfig:function(){window.localStorage.setItem("storedGridSettings",l.stringify(this.getConfig()))},_setConfig:function(){var b=l.parse(window.localStorage.getItem("storedGridSettings"));return null!==b?b:this.config},_checkValidValues:function(){return p.some([this.fontSize0,this.fontSize1,this.fontSize2,this.fontSize3,
this.fontSize4,this.fontSize5,this.lineSize0,this.lineSize1,this.lineSize2,this.lineSize3,this.lineSize4,this.lineSize5],function(b){if((b=u.byId(b))&&(b.value<b.constraints.min||b.value>b.constraints.max))return!0},this)},_toggleHorzVertOptions:function(b){b?(d.remove(this.horizontalLabels,"image-labels horizontalLabel"),d.add(this.horizontalLabels,"image-labels horizontalLabelClicked"),d.remove(this.verticalLabels,"image-labels verticalLabelClicked"),d.add(this.verticalLabels,"image-labels verticalLabel")):
(d.remove(this.horizontalLabels,"image-labels horizontalLabelClicked"),d.add(this.horizontalLabels,"image-labels horizontalLabel"),d.remove(this.verticalLabels,"image-labels verticalLabel"),d.add(this.verticalLabels,"image-labels verticalLabelClicked"))},_toggleLabelPlacement:function(b,c){if(b){var a=b.className.replace("image-labels","").trim();c?(d.remove(b,"image-labels "+a),d.add(b,"image-labels "+a+"Clicked")):(c=a.substring(0,a.indexOf("Clicked")),d.remove(b,"image-labels "+a),d.add(b,"image-labels "+
c))}}})});