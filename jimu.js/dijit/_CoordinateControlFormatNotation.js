// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/on dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/Select jimu/dijit/CheckBox".split(" "),function(h,c,g,d,e,k,l,m){return h([k,l,m],{baseClass:"jimu-coordinate-control",templateString:'\x3cdiv\x3e\x3cspan class\x3d"formatText"\x3e${nls.editCoordinateDialogTitle}\x3c/span\x3e\x3cdiv class\x3d"controlContainer"\x3e\x3cselect class\x3d"selectFormat" data-dojo-attach-point\x3d"frmtSelect" style\x3d"margin-top: -3px;" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\x3cinput type \x3d"text" data-dojo-attach-point\x3d"frmtVal"style\x3d"height: 31px;" class\x3d"formatInput"\x3e\x3c/input\x3e\x3cdiv class\x3d"settingsContainer" data-dojo-attach-point\x3d"prefixContainer"\x3e\x3cinput data-dojo-attach-point\x3d"addSignChkBox" type\x3d"checkbox" /\x3e\x3clabel class\x3d"formatText"\x3e${nls.posNegPrefixLabel}\x3c/label\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"btnContainer"\x3e\x3cdiv data-dojo-attach-point\x3d"applyButton" class\x3d"jimu-btn"\x3e${nls.applyButtonLabel}\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"cancelButton" class\x3d"jimu-btn" style\x3d"margin-left: 5px;"\x3e${nls.cancelButtonLabel}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
isCanceled:!1,formats:{},setCt:function(a){this.ct=a;this.frmtSelect.set("value",this.ct)},postCreate:function(){this.formats={DD:{defaultFormat:"YN XE",customFormat:null,useCustom:!1},DDM:{defaultFormat:"A\u00b0 B'N X\u00b0 Y'E",customFormat:null,useCustom:!1},DMS:{defaultFormat:"A\u00b0 B' C\"N X\u00b0 Y' Z\"E",customFormat:null,useCustom:!1},GARS:{defaultFormat:"XYQK",customFormat:null,useCustom:!1},GEOREF:{defaultFormat:"ABCDXY",customFormat:null,useCustom:!1},MGRS:{defaultFormat:"ZSXY",customFormat:null,
useCustom:!1},USNG:{defaultFormat:"ZSXY",customFormat:null,useCustom:!1},UTM:{defaultFormat:"ZB X Y",customFormat:null,useCustom:!1},UTM_H:{defaultFormat:"ZH X Y",customFormat:null,useCustom:!1}};var a=[],b,f;for(f in this.formats)b={value:f,label:this.nls.notations[f]},a.push(b);this.frmtSelect.addOption(a);e.set(this.frmtVal,"value",this.formats[this.ct].defaultFormat);this.own(d(this.frmtSelect,"change",c.hitch(this,this.frmtSelectValueDidChange)));this.own(d(this.frmtVal,"change",c.hitch(this,
this.formatValDidChange)));this.own(d(this.cancelButton,"click",c.hitch(this,function(){this.isCanceled=!0})));this.own(d(this.applyButton,"click",c.hitch(this,function(){this.isCanceled=!1})));this.displayPrefixContainer()},formatValDidChange:function(){var a=e.get(this.frmtVal,"value"),b=this.frmtSelect.get("value");this.formats[b].customFormat=a;this.formats[b].useCustom=!0},frmtSelectValueDidChange:function(a){var b=this.formats[a].useCustom?this.formats[a].customFormat:this.formats[a].defaultFormat;
this.ct=a;e.set(this.frmtVal,"value",b);this.displayPrefixContainer()},displayPrefixContainer:function(){switch(this.ct){case "DD":case "DDM":case "DMS":g.set(this.prefixContainer,{display:""});break;default:g.set(this.prefixContainer,{display:"none"})}}})});