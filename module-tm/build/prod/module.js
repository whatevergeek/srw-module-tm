var __extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)},__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};define("com_unidiv_travelmoments",["require","exports","com_unidiv_travelmoments/views/SampleTile","com_unidiv_travelmoments/views/SampleView","com_unidiv_travelmoments/Main"],function(require,exports,_0,_1,Main_1){"use strict";var exposedClasses;!function(exposedClasses){var com_unidiv_travelmoments;!function(com_unidiv_travelmoments){var views;!function(views){views.SampleTile=_0.SampleTile}(views=com_unidiv_travelmoments.views||(com_unidiv_travelmoments.views={}))}(com_unidiv_travelmoments=exposedClasses.com_unidiv_travelmoments||(exposedClasses.com_unidiv_travelmoments={}))}(exposedClasses||(exposedClasses={}));var exposedClasses;!function(exposedClasses){var com_unidiv_travelmoments;!function(com_unidiv_travelmoments){var views;!function(views){views.SampleView=_1.SampleView}(views=com_unidiv_travelmoments.views||(com_unidiv_travelmoments.views={}))}(com_unidiv_travelmoments=exposedClasses.com_unidiv_travelmoments||(exposedClasses.com_unidiv_travelmoments={}))}(exposedClasses||(exposedClasses={}));var com_unidiv_travelmoments_Module=function(_super){function com_unidiv_travelmoments_Module(){_super.apply(this,arguments)}return __extends(com_unidiv_travelmoments_Module,_super),com_unidiv_travelmoments_Module.prototype.getExposedClasses=function(){return this.autoExposeClasses?$.extend({},exposedClasses,_super.prototype.getExposedClasses.call(this)):_super.prototype.getExposedClasses.call(this)},com_unidiv_travelmoments_Module}(Main_1.Main);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=com_unidiv_travelmoments_Module}),define("com_unidiv_travelmoments/Main",["require","exports","com_sabre_ngv_core/modules/Module","com_unidiv_travelmoments/views/SampleTile","com_unidiv_travelmoments/views/SampleView","com_sabre_ngv_core/configs/drawer/LargeWidgetDrawerConfig"],function(require,exports,Module_1,SampleTile_1,SampleView_1,LargeWidgetDrawerConfig_1){"use strict";var getService=app.getService,DrawerService=app.services.impl.DrawerService,Main=function(_super){function Main(){_super.apply(this,arguments)}return __extends(Main,_super),Main.prototype.init=function(){_super.prototype.init.call(this);var drawerConfig=new LargeWidgetDrawerConfig_1.LargeWidgetDrawerConfig(SampleTile_1.SampleTile,SampleView_1.SampleView,{title:"SB1"});getService(DrawerService).addConfig(["shopping-response"],drawerConfig)},Main}(Module_1.Module);exports.Main=Main}),define("com_unidiv_travelmoments/views/SampleTile",["require","exports","com_sabre_ngv_core/decorators/classes/Initial","com_sabre_ngv_core/decorators/classes/Mixin"],function(require,exports,Initial_1,Mixin_1){"use strict";var Tile=app.widgets.drawer.views.elements.Tile,WithoutFocusOnClick=app.common.mixins.WithoutFocusOnClick,SampleTile=function(_super){function SampleTile(){_super.apply(this,arguments)}return __extends(SampleTile,_super),SampleTile.prototype.selfDrawerContextModelPropagated=function(cpa){this.setDataContent("Decision Support")},SampleTile=__decorate([Initial_1.Initial({caption:"Drawer Sample"}),Mixin_1.Mixin(WithoutFocusOnClick)],SampleTile)}(Tile);exports.SampleTile=SampleTile}),define("com_unidiv_travelmoments/views/SampleView",["require","exports","com_sabre_ngv_core/decorators/classes/view/Template"],function(require,exports,Template_1){"use strict";var AbstractView=app.AbstractView,SampleView=function(_super){function SampleView(){_super.apply(this,arguments)}return __extends(SampleView,_super),SampleView.prototype.selfDrawerContextModelPropagated=function(cpa){this.render()},SampleView.prototype.processAgain=function(){this.render()},SampleView=__decorate([Template_1.Template("com_unidiv_travelmoments:SampleView")],SampleView)}(AbstractView);exports.SampleView=SampleView});
//# sourceMappingURL=module.js.map