// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
    * @param {typeof sap.ui.core.UIComponent} UIComponent
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    * 
    */
    function (UIComponent, Models, ResourceModel) {
        "use strict";

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest : "json"
            },

            Init: function () {
                // call the init function of the parent 
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view 
                this.SetModel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.SetModel(i18nModel, "i18n");
            }

        });
    });
