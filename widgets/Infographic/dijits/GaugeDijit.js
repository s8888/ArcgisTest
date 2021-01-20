// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/html ./BaseDijit jimu/utils jimu/dijit/Chart ../utils ./clientStatistic".split(" "),function(r,n,p,t,l,u,e,m){return r([t],{templateString:'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"noDataDiv"class\x3d"no-data-tip"\x3e${nls.noData}\x3c/div\x3e\x3cdiv class\x3d"gauge-dom" data-dojo-attach-point\x3d"gaugeDomNode"\x3e\x3c/div\x3e\x3c/div\x3e',type:"gauge",baseClass:"infographic-gauge-dijit",config:null,defValueStyle:{state:!0,
isRatio:!1,font:{font:{fontFamily:"Arial",bold:!1,italic:!1,underline:!1},textColor:"#59bad8"},dataFormat:{unit:"none",decimalPlaces:"",prefix:"",suffix:""}},constructor:function(a){this.inherited(arguments);this.visible=a.visible},postCreate:function(){this.inherited(arguments);this._features=null;this._upgradeConfig(this.config);this.setConfig(this.config);this._updateBackGroundColor()},_upgradeConfig:function(a){(a=(a=a&&a.display&&a.display.currentValue)&&a.dataFormat)&&"undefined"===typeof a.digitSeparator&&
(a.digitSeparator=!0)},setLayerInfo:function(){},setVisible:function(a){this.visible=a},resetData:function(){this.gaugeValue=this._valueObj=this._r2fs=this._r1fs=this._features=this.dataSource=null},onDataSourceDataUpdate:function(a,b,c){this.inSettingPage?(a&&"undefined"!==typeof a.features&&(this._features=e.cleanFeatures(a.features)),this.setRangeFeatures(b,"range1"),this.setRangeFeatures(c,"range2")):this._valueObj=a},setRangeFeatures:function(a,b){"range1"===b?this._r1fs=e.cleanFeatures(a):"range2"===
b&&(this._r2fs=e.cleanFeatures(a))},resize:function(){this.chart&&this.chart.resize()},setDataSource:function(a){this.inherited(arguments);this.dataSource=a},setConfig:function(a){a&&(this.config=a)},startRendering:function(){if(this._shouldRenderGauge()){this.chart||this._createJimuChart();this._updateBackGroundColor();var a=this._calculateGaugeValue();0===a?this.showNodata():-1===a?this.showNodata(this.nls.invalidRangeTip):(a=this._createChartOption(),this.chart.updateConfig(a))}},_splitStatistic:function(a){if(a&&
a.length){var b={};a.forEach(function(a){if("value"===a.type)b.value=a.config.value;else if("range"===a.type){var d=a.name;"stat"===a.config.type?b[d]=a.config.value.statistic:"fixed"===a.config.type&&(b[d]={value:a.config.value})}});return b}},_getValueObjForSetting:function(){var a=this.config&&this.config.statistics;if(a&&a.length){var b=this._splitStatistic(a),c=b.value,d=b.range1,b=b.range2,k=this.dataSource,a=e.mockDataSourceForGaugeRange(a),c=m.statistic(c,k,this._features);"undefined"!==typeof d.value?
d=d.value:(d=m.statistic(d,a[0],this._r1fs),d=m.formatterRangeNumber(d));"undefined"!==typeof b.value?b=b.value:(b=m.statistic(b,a[1],this._r2fs),b=m.formatterRangeNumber(b));return{value:c,ranges:[d,b]}}},_calculateGaugeValue:function(){var a;a=this.inSettingPage?this._getValueObjForSetting():this._valueObj;if(!e.isValidValue(a)||!e.isValidValue(a.value))return 0;if(!this._isEffectiveRange(a))return-1;this.gaugeValue=a;return 1},_createChartOption:function(){var a=this._splitValueObj(this.gaugeValue),
b=a.min,c=a.max,a=a.value,a=this._parseRealValueDecimal(a),a={series:[{data:[a]}]};a.shape=this.config.shape;a.type="gauge";a.theme=this.isDarkTheme()?"dark":"light";var d=this._createGaugeOption();a.gaugeOption=d;a.max=c;a.min=b;return a},_parseRealValueDecimal:function(a){var b=this._getVaildValueDisplay();if(b=this._getVaildDecimalPlaces(b))a=a.toFixed(b),a=Number(a);return a},_createGaugeOption:function(){var a=this._splitValueObj(this.gaugeValue),b=a.value,c=this.config,d={},k=this._getValueStyle();
k&&(d.valueStyle=k);this._setGaugeDisplay(d);a=this._getIndicatorInfo(c,b,a);a.targetValue&&(b=this._isShowTargetValue(),d.targetValue=b?a.targetValue:[]);a.columnColor&&(d.columnColor=a.columnColor);return d},_getIndicatorInfo:function(a,b,c){var d=!1,k=!1,q=!1,h=this._getIndicatorValues(a,c);l.isNotEmptyObject(h,!0)&&(d=h);if(a=a.indicators)(b=e.getVaildIndicator(b,a,c.max))&&b.gaugeColor&&(k=b.gaugeColor),b&&b.valueColor&&(q=b.valueColor);return{targetValue:d,columnColor:k,valueColor:q}},_getIndicatorValues:function(a,
b){var c=[];a.indicators&&(a.indicators.forEach(function(a){a.value&&a.value.forEach(n.hitch(this,function(d){c.push(a.isRatio?d/100*b.max:d)}))}),c.sort(function(a,b){return a-b}),c=l.uniqueArray(c));return c},_splitValueObj:function(a){var b;b=a.value;a=a.ranges;a.sort(function(a,b){return a-b});return{min:a[0],max:a[1],value:b}},_isEffectiveRange:function(a){var b=this._splitValueObj(a);a=b.min;b=b.max;return"undefined"===typeof a||"undefined"===typeof b||b===a?!1:!0},_isRangeNeedFeatures:function(a,
b){var c=!1;a=a.statistics;if(!a||!a.length)return c;a.some(function(a){if("range"===a.type&&a.name===b&&"stat"===a.config.type)return c=!0});return c},_shouldRenderGauge:function(){if(this.visible&&this.config){var a;if(this.inSettingPage){var b=this._isRangeNeedFeatures(this.config,"range1");a=this._isRangeNeedFeatures(this.config,"range2");b=b?this._r1fs:!0;a=a?this._r2fs:!0;a=this.domNode&&this._features&&b&&a}else b=(a=this._valueObj)&&a.ranges,a=this.domNode&&a&&b&&"number"===typeof a.value&&
"number"===typeof b[0]&&"number"===typeof b[1];a?this.hideNodata():this.showNodata();return!!a}},_updateBackGroundColor:function(){var a=this.config;(a=a&&a.display&&a.display.backgroundColor)&&p.setStyle(this.domNode,"backgroundColor",a)},_createJimuChart:function(){var a=this._getDefaultChartOption();this.chart=new u({chartDom:this.gaugeDomNode,config:a});this.chart.placeAt(this.gaugeDomNode);this.chart.resize()},_generateValueFormatter:function(a){var b=this._splitValueObj(this.gaugeValue),c=b.max,
d=b.min;if(a)return n.hitch(this,function(a,b){var h="",g,e,f=a.dataFormat;if(!f)return b;g=f.decimalPlaces;e=f.digitSeparator;if(g||0===g)g=Number(g);a.isRatio?b=b<=d?l.convertNumberToPercentage(0,g,e):l.convertNumberToPercentage((b-d)/(c-d),g,e):"percentage"===f.unit?b=l.convertNumberToPercentage(b,g,e):"thousand"===f.unit?(h=this.nls.thousandAbbreviation,b/=1E3):"million"===f.unit?(h=this.nls.millionAbbreviation,b/=1E6):"billion"===f.unit&&(h=this.nls.billionAbbreviation,b/=1E9);a.isRatio||"percentage"===
f.unit||(b=l.localizeNumberByFieldInfo(b,{format:{places:g,digitSeparator:e}}));h&&(b+=h);a=b;f.prefix&&(a=f.prefix+" "+a);f.suffix&&(a+=" "+f.suffix);return a},a,b.value)},_getVaildDecimalPlaces:function(a){if(a){if((a=(a=a.dataFormat)&&a.decimalPlaces)||0===a)a=Number(a);if("number"===typeof a)return a}},_getVaildValueDisplay:function(){var a=this.config;if(a=a&&a.display)return a.currentValue&&a.currentValue.state?a.currentValue:n.clone(this.defValueStyle)},_generateTextStyle:function(a){var b=
this._splitValueObj(this.gaugeValue),b=this._getIndicatorInfo(this.config,b.value,b),c=a&&a.font;if(c){a={};"undefined"!==typeof c.fontSize&&(a.fontSize=Number(c.fontSize));a.color=b.valueColor||c.textColor;b=c.font;if(!b)return a;a.fontWeight=b.bold?"bold":"normal";b.fontFamily&&(a.fontFamily=b.fontFamily);a.fontStyle=b.italic?"italic":"normal";return a}},_isShowTargetValue:function(){var a=this.config&&this.config.display&&this.config.display.dataLabels;if(a)return!!a.targetValue},_setGaugeDisplay:function(a){var b=
this.config.display;b&&(b.gaugeColor&&(a.columnColor=b.gaugeColor),b.bgColor&&(a.bgColor=b.bgColor),b.dataLabels&&b.dataLabels.state&&(b=b.dataLabels,a.showDataRangeLabel=!!b.dataRange,a.showTargetValueLabel=!!b.targetValue,a.labelColor=b.textColor||""))},_getValueStyle:function(){var a=this._getVaildValueDisplay();if(a){var b={},c=this._getVaildDecimalPlaces(a);"number"===typeof c&&(b.decimalPlaces=c);b.formatter=this._generateValueFormatter(a);if(a=this._generateTextStyle(a))b.textStyle=a;return b}},
_getDefaultChartOption:function(){var a={type:"gauge",confine:!0,shape:"curved",min:0,max:100,series:[{data:[0]}]};this.config&&this.config.shape&&(a.shape=this.config.shape);a.theme=this.isDarkTheme()?"dark":"light";return a},showNodata:function(a){this.chart&&this.chart.clear();p.addClass(this.domNode,"no-data");a&&(this.noDataDiv.innerHTML=a)},hideNodata:function(){p.removeClass(this.domNode,"no-data")}})});