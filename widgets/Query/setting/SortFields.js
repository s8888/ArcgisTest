// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/setting/SortFields.html":'\x3cdiv\x3e\r\n\t\x3cdiv\x3e${nls.configureFieldsTip}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"add-with-icon" data-dojo-attach-event\x3d"onclick:_onAddNewClicked"\x3e\r\n\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\x3cspan class\x3d"add-label"\x3e${nls.addNew}\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"tableDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/form/Select dojo/text!./SortFields.html dojo/on dojo/query dojo/_base/lang dojo/_base/array dojo/_base/html jimu/dijit/SimpleTable".split(" "),function(n,p,q,r,k,l,t,g,h,c,d,m,u){return n([p,q,r],{baseClass:"jimu-query-setting-sort-fields",templateString:t,_allFieldNames:null,_sortTipClassName:"sort-tip",_fieldNameSelectClassName:"field-name-select",_sortTypeSelectClassName:"sort-type-select",
nls:null,layerDefinition:null,orderByFields:null,validSortFieldTypes:[],postCreate:function(){this.inherited(arguments);var a=d.filter(this.layerDefinition.fields,c.hitch(this,function(a){return 0<=this.validSortFieldTypes.indexOf(a.type)}));this._allFieldNames=d.map(a,function(a){return a.name});this._initTable();this.orderByFields?this._setOrderByFields(this.orderByFields):this.orderByFields=[]},_initTable:function(){var a={autoHeight:!1,style:"height:187px",fields:[{name:"sortTip",title:this.nls.field,
type:"text",width:"100px"},{name:"fieldName",title:"",type:"extension",create:c.hitch(this,this._create4FieldName),setValue:c.hitch(this,this._setValue4FieldName),getValue:c.hitch(this,this._getValue4FieldName)},{name:"sortType",title:this.nls.sortingOrder,type:"extension",create:c.hitch(this,this._create4SortType),setValue:c.hitch(this,this._setValue4SortType),getValue:c.hitch(this,this._getValue4SortType)},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down","delete"],width:"120px"}]};
this.table=new u(a);this.own(g(this.table,"row-up",c.hitch(this,this._onTableRowUp)));this.own(g(this.table,"row-down",c.hitch(this,this._onTableRowDown)));this.table.placeAt(this.tableDiv);this.table.startup()},getOrderByFields:function(){var a=this.table.getData();return d.map(a,c.hitch(this,function(a){return a.fieldName+" "+a.sortType}))},_getFieldAlias:function(a){for(var b=this.layerDefinition.fields,e=0;e<b.length;e++)if(b[e].name===a){a=b[e].alias||a;break}return a},_getRestFields:function(){var a=
this._getAllFieldSelects(),b=d.map(a,c.hitch(this,function(a){return a.get("value")}));return d.filter(this._allFieldNames,c.hitch(this,function(a){return 0>b.indexOf(a)}))},_onAddNewClicked:function(){var a=this._getRestFields();if(0!==a.length){var b="",b=0===this.table.getRows().length?this.nls.sortBy:this.nls.thenBy;this.table.addRow({sortTip:b,fieldName:a[0],sortType:"ASC"})}},_setOrderByFields:function(a){this.table.clear();a=a||[];d.forEach(a,c.hitch(this,function(a,c){var b=a.split(" ");a=
b[0];var e="ASC";b[1]&&"string"===typeof b[1]&&(b[1]=b[1].toUpperCase(),"DESC"===b[1]&&(e="DESC"));b="";b=0===c?this.nls.sortBy:this.nls.thenBy;this.table.addRow({sortTip:b,fieldName:a,sortType:e})}))},_getAllFieldSelects:function(){var a=h("."+this._fieldNameSelectClassName,this.table.tbody);return d.map(a,c.hitch(this,function(a){return k.byNode(a)}))},_getSelectFromTd:function(a,b){a=h("."+b,a)[0];return k.byNode(a)},_onTableRowUp:function(){this._resetSortTips()},_onTableRowDown:function(){this._resetSortTips()},
_getAllSortTipDivs:function(){return h(".sortTip .normal-text-div",this.table.tbody)},_resetSortTips:function(){var a=this.table.getRows();d.forEach(a,c.hitch(this,function(a,c){var b="",b=0===c?this.nls.sortBy:this.nls.thenBy;this.table.editRow(a,{sortTip:b})}));a=this._getAllSortTipDivs();d.forEach(a,c.hitch(this,function(a,c){a.innerHTML=0===c?this.nls.sortBy:this.nls.thenBy}))},_create4FieldName:function(a){var b=this._getRestFields(),e=new l({style:"width:120px;height:20px;"});m.addClass(e.domNode,
this._fieldNameSelectClassName);e.placeAt(a);d.forEach(b,c.hitch(this,function(a){var b=this._getFieldAlias(a);e.addOption({value:a,label:b})}));this.own(g(e,"change",c.hitch(this,this._onFieldNameSelectChanged)))},_setValue4FieldName:function(a,b){this._getSelectFromTd(a,this._fieldNameSelectClassName).set("value",b)},_getValue4FieldName:function(a){return this._getSelectFromTd(a,this._fieldNameSelectClassName).get("value")},_onFieldNameSelectChanged:function(){var a=this._getAllFieldSelects();d.forEach(a,
c.hitch(this,function(a){var b=a.get("value"),f=a.getOptions(),f=d.filter(f,c.hitch(this,function(a){return a.value!==b}));a.removeOption(f);f=this._getRestFields();d.forEach(f,c.hitch(this,function(c){if(c!==b){var d=this._getFieldAlias(c);a.addOption({value:c,label:d})}}))}))},_create4SortType:function(a){var b=new l({style:"width:120px;height:20px;"});m.addClass(b.domNode,this._sortTypeSelectClassName);b.placeAt(a);b.addOption({value:"ASC",label:this.nls.ascending,selected:!0});b.addOption({value:"DESC",
label:this.nls.descending})},_setValue4SortType:function(a,b){a=this._getSelectFromTd(a,this._sortTypeSelectClassName);"ASC"!==b&&"DESC"!==b||a.set("value",b)},_getValue4SortType:function(a){return this._getSelectFromTd(a,this._sortTypeSelectClassName).get("value")}})});