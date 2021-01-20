// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/Filter.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"contentSection" class\x3d"content-section"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"desktopAddSection" class\x3d"desktop-add-section hidden"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddExpClick" data-dojo-attach-point\x3d"btnAddExpDesktop"\r\n\t\t\t class\x3d"add-with-icon add-expression jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addAnotherExpression}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddSetClick" data-dojo-attach-point\x3d"btnAddSetDesktop"\r\n\t\t\t class\x3d"add-with-icon add-set jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addSet}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"matchMsg" class\x3d"match-msg"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"oneOrZeroMsg" style\x3d"display:none;"\x3e${nls.oneOrZeroMsg}\x3c/div\x3e\r\n\t\t\t\x3cselect data-dojo-attach-point\x3d"allAnySelect"\x3e\r\n\t\t\t\t\x3coption value\x3d"AND" selected\x3e${nls.matchMsgAll}\x3c/option\x3e\r\n\t\t\t\t\x3coption value\x3d"OR"\x3e${nls.matchMsgAny}\x3c/option\x3e\r\n\t\t\t\x3c/select\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"allExpsBox" data-dojo-attach-point\x3d"allExpsBox"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"errorSection" class\x3d"hidden"\x3e\r\n\t\t\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"errorTip" class\x3d"error-tip"\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"mobileAddSection" class\x3d"mobile-add-section hidden"\x3e\r\n\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddExpClick" title\x3d"${nls.addAnotherExpression}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddExpMobile"\x3e\r\n\t\t\t+ ${nls.addAnotherExpression}\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddSetClick" title\x3d"${nls.addSet}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddSetMobile"\x3e\r\n\t\t\t+ ${nls.addSet}\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"noFilterTipSection" class\x3d"no-filter-tip hidden"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/Filter.html jimu/filterUtils jimu/utils jimu/LayerInfos/LayerInfos jimu/dijit/_filter/ValueProviderFactory dijit/registry dojo/_base/lang dojo/_base/html dojo/_base/array dojo/aspect dojo/Deferred esri/request ./_SingleFilter ./_FilterSet ./LoadingIndicator".split(" "),function(l,q,r,t,u,v,w,x,m,y,z,A,c,d,f,n,k,p,B,C){return r([t,u,v,x,q],{templateString:w,baseClass:"jimu-filter",
declaredClass:"jimu.dijit.Filter",nls:null,autoSwitchMode:!0,_validOptions:!1,_layerDefinition:null,_popupFieldsInfo:[],_def:null,valueProviderFactory:null,featureLayerId:null,layerInfosObj:null,mode:"desktop",noFilterTip:"",enableAskForValues:!1,mobileBreakWidth:600,runtime:!1,postMixInProperties:function(){this.nls=window.jimuNls.filterBuilder;this.nls.add=window.jimuNls.common.add;this.nls.apply=window.jimuNls.common.apply;this.layerInfosObj=y.getInstanceSync();this.inherited(arguments)},postCreate:function(){this.inherited(arguments);
this._setDesktopMode();this.noFilterTip&&"string"===typeof this.noFilterTip&&(this.noFilterTipSection.innerHTML=this.noFilterTip)},startup:function(){this.inherited(arguments);this.autoUpdateMode()},resize:function(){this.autoUpdateMode()},autoUpdateMode:function(){this.autoSwitchMode&&(this._clearMode(),this.domNode.clientWidth>=this.mobileBreakWidth?this._setDesktopMode():this._setMobileMode())},setMode:function(a){"desktop"===a?this._setDesktopMode():"mobile"===a&&this._setMobileMode()},_setMode:function(a){this.mode=
a;this._setModeClass(this.mode)},_setModeClass:function(a){d.removeClass(this.domNode,"desktop-mode");d.removeClass(this.domNode,"mobile-mode");d.addClass(this.desktopAddSection,"hidden");d.addClass(this.mobileAddSection,"hidden");a&&d.addClass(this.domNode,a+"-mode")},_clearMode:function(){this._setModeClass("")},_setDesktopMode:function(){this._setMode("desktop");d.removeClass(this.desktopAddSection,"hidden")},_setMobileMode:function(){this._setMode("mobile");d.removeClass(this.mobileAddSection,
"hidden")},reset:function(){this.isBuilding()||(this.removeAllFilters(),this.url=null,this.isHosted=!1,this._layerDefinition=null,this._popupFieldsInfo=[],this.valueProviderFactory=this.partsObj=this.expr=this.featureLayerId=null)},isBuilding:function(){return this._def&&!this._def.isFulfilled()},build:function(a){var b=new k;this.isBuilding()?b.reject("Filter is already building."):(this._def=null,this.reset(),this.url=a.url,this.isHosted=m.isHostedService(this.url),this._layerDefinition=a.layerDefinition,
this.featureLayerId=a.featureLayerId,a.partsObj?(this.partsObj=this._updatePartsObj(a.partsObj),this._def=this._init("partsObj")):(this.expr=a.expr||"1\x3d1",this._def=this._init("expr")),b=this._def);return b},buildByExpr:function(a,b,e){console.warn("Filter#buildByExpr() method is deprecated, please use Filter#build() instead.");return this.build({url:a,expr:b,layerDefinition:e,featureLayerId:this.featureLayerId})},buildByFilterObj:function(a,b,e){console.warn("Filter#buildByFilterObj() method is deprecated, please use Filter#build() instead.");
return this.build({url:a,partsObj:b,layerDefinition:e,featureLayerId:this.featureLayerId})},_updatePartsObj:function(a){f.forEach(a,c.hitch(this,function(a){a.parts?f.forEach(a.parts,c.hitch(this,function(a){a.interactiveObj&&!0===a.interactiveObj.cascade?a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade="none")})):a.interactiveObj&&!0===a.interactiveObj.cascade?a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade=
"none")}));return a},removeAllFilters:function(){this._destroyAllFilters()},_getLayerDefinitionRaw:function(a,b){var e=new k;b?e.resolve(b):(this.loading.show(),p({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){this.domNode?(this.loading.hide(),e.resolve(a)):e.reject()}),c.hitch(this,function(a){console.error(a);e.reject();this.domNode&&this.loading.hide()})));return e},_validateLayerDefinition:function(a){return this._isObject(a)},_init:function(a){var b=
new k;if(!this._isString(this.url))return b.reject(),b;var e=c.hitch(this,function(){setTimeout(c.hitch(this,function(){this.emit("change");b.resolve()}),1500)}),g=c.hitch(this,function(){d.addClass(this.errorSection,"hidden");this.removeAllFilters();var h;this.featureLayerId&&(this._tryOverrideFieldAliases(this.featureLayerId,this._layerDefinition),h=this.layerInfosObj.getLayerOrTableInfoById(this.featureLayerId).getPopupInfo());var g=this._layerDefinition.fields;g&&0<g.length?(this._popupFieldsInfo=
h?m.completePopupFieldFromLayerField(g,h.fieldInfos):g,(g=f.filter(g,c.hitch(this,function(a){return 0<=this._supportFieldTypes.indexOf(a.type)})))&&0<g.length?(this._validOptions=!0,d.removeClass(this.btnAddSetDesktop,"jimu-state-disabled"),d.removeClass(this.btnAddExpDesktop,"jimu-state-disabled"),d.removeClass(this.btnAddSetMobile,"jimu-state-disabled"),d.removeClass(this.btnAddExpMobile,"jimu-state-disabled"),this.createFieldsStore(),this.valueProviderFactory=new z({url:this.url,layerDefinition:this._layerDefinition,
featureLayerId:this.featureLayerId}),"expr"===a?this._isString(this.expr)?("1\x3d1"===this.expr.replace(/\s/gi,"")&&this.removeAllFilters(),this._parseExpr(this.expr)?e():b.reject()):b.reject():"partsObj"===a?this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),e()):b.reject():this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),e()):this._isString(this.expr)?this._parseExpr(this.expr)?e():b.reject():(this.removeAllFilters(),e())):(this._showErrorOptions(this.nls.error.noFilterFields),
b.reject())):(h&&(this._popupFieldsInfo=h.fieldInfos),b.reject())});this._validateLayerDefinition(this._layerDefinition)?g():(this.loading.show(),p({url:this.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){this.domNode?(this.loading.hide(),this._layerDefinition=a,g()):b.reject()}),c.hitch(this,function(a){console.error(a);b.reject();this.domNode&&this.loading.hide()})));return b},_tryOverrideFieldAliases:function(a,b){if(a=this.layerInfosObj.getLayerOrTableInfoById(a))if(a=
a.getPopupInfo())if(a=a.fieldInfos,b=b.fields,a&&0<a.length&&b&&0<b.length){var e={};f.forEach(a,c.hitch(this,function(a){a.fieldName&&(e[a.fieldName]=a)}));f.forEach(b,c.hitch(this,function(a){var b=e[a.name];b&&b.label&&(a.alias=b.label)}))}},toJson:function(){var a={logicalOperator:this.allAnySelect.value,parts:[]},b=this._getAllSingleFiltersAndFilterSets();if(0===b.length)return a.expr="1\x3d1",a;f.forEach(b,c.hitch(this,function(b){b=b.toJson();a.parts.push(b)}));return f.every(a.parts,c.hitch(this,
function(a){return!!a}))&&0<a.parts.length?(a.expr=this.getExprByFilterObj(a),a):null},createFieldsStore:function(){if(this._layerDefinition.fields&&0!==this._layerDefinition.fields.length){var a=c.clone(this._layerDefinition.fields);0===this.setFieldsStoreByFieldInfos(a)&&this._showErrorOptions(this.nls.error.noFilterFields)}else this._showErrorOptions(this.nls.error.noFilterFields)},_parsePartsObj:function(a){this._validatePartsObj(a)&&(this.removeAllFilters(),this._buildEditUIByPartsObj(a))},_parseExpr:function(a){this._destroyAllFilters();
var b=null;if(!this._validateLayerDefinition(this._layerDefinition))return b;if(!a||"string"!==typeof a)return this._showErrorOptions(this.nls.error.invalidSQL),b;if("1\x3d1"===this.expr.replace(/\s/gi,""))return b={expr:"1\x3d1",parts:[],logicalOperator:"AND"};try{b=this.getFilterObjByExpr(a)}catch(e){b=null,console.error(e)}b?this._buildEditUIByPartsObj(b):this._showErrorOptions(this.nls.error.cantParseSQL);return b},_buildEditUIByPartsObj:function(a){a&&(this._destroyAllFilters(),f.forEach(a.parts,
c.hitch(this,function(a){a.parts?this._addFilterSet(a):a.fieldObj&&a.operator&&a.valueObj&&this._addSingleFilter(a)})),this.allAnySelect.value=a.logicalOperator,this._setFilterMsgUI(a.parts.length))},_addSingleFilter:function(a){a={url:this.url,layerInfo:this._layerDefinition,popupFieldsInfo:this._popupFieldsInfo,stringFieldType:this._stringFieldType,dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,part:a,OPERATORS:c.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,
isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory,runtime:this.runtime};a=new B(a);a.placeAt(this.allExpsBox);a.startup();this.own(n.after(a,"_destroySelf",c.hitch(this,function(){this._checkFilterNumbers();this.emit("change")})));this.own(l(a,"change",c.hitch(this,function(){this.emit("change")})));this._checkFilterNumbers();return a},_addFilterSet:function(a){a={url:this.url,layerInfo:this._layerDefinition,popupFieldsInfo:this._popupFieldsInfo,stringFieldType:this._stringFieldType,
dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,partsObj:a,OPERATORS:c.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory,runtime:this.runtime};a=new C(a);a.placeAt(this.allExpsBox);a.startup();this.own(n.after(a,"_destroySelf",c.hitch(this,function(){this._checkFilterNumbers();this.emit("change")})));this.own(l(a,"change",c.hitch(this,function(){this.emit("change")})));this._checkFilterNumbers();
return a},_destroyAllFilters:function(){for(var a=this._getAllSingleFiltersAndFilterSets();0<a.length;)a[0].destroy(),a.splice(0,1);this._checkFilterNumbers()},_getAllSingleFiltersAndFilterSetsDoms:function(){var a=[];this.allExpsBox.childNodes&&0<this.allExpsBox.childNodes.length&&f.forEach(this.allExpsBox.childNodes,c.hitch(this,function(b){(d.hasClass(b,"jimu-single-filter")||d.hasClass(b,"jimu-filter-set"))&&a.push(b)}));return a},_getAllSingleFiltersAndFilterSets:function(){var a=this._getAllSingleFiltersAndFilterSetsDoms();
return f.map(a,c.hitch(this,function(a){return A.byNode(a)}))},_setFilterMsgUI:function(a){2>a?(this.allAnySelect.value="AND",d.setStyle(this.allAnySelect,"display","none"),d.setStyle(this.oneOrZeroMsg,"display","block")):(d.setStyle(this.oneOrZeroMsg,"display","none"),d.setStyle(this.allAnySelect,"display","block"))},_checkFilterNumbers:function(){var a=this._getAllSingleFiltersAndFilterSetsDoms();this._setFilterMsgUI(a.length);0<a.length?d.addClass(this.noFilterTipSection,"hidden"):d.removeClass(this.noFilterTipSection,
"hidden");this.emit("filter-number-change")},_showErrorOptions:function(a){console.error(a);d.addClass(this.errorSection,"hidden");this.errorTip.innerHTML=a;this.loading.hide()},_onBtnApplyClicked:function(){this.emit("apply")},_onBtnAddSetClick:function(){this._layerDefinition&&this._validOptions&&(this._addFilterSet(),this.emit("change"))},_onBtnAddExpClick:function(){this._layerDefinition&&this._validOptions&&(this._addSingleFilter(),this.emit("change"))}})});