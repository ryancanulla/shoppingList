Ext.define("shoppinglist.service.StoresService", {
    extend: "FlowMVC.mvc.service.AbstractService",

    getListOfAllStores: function() {

        var deferred = Ext.create("Deft.promise.Deferred");
        var me = this;

        Ext.Ajax.request({
            url: "http://localhost:3000/stores",
            method: "get",
            params: {},

            success: function(response) {
                debugger;
                me.success(response, deferred);
            },

            failure: function(response) {
                debugger;
                me.failure(response, deferred);
            }
        });

        return deferred.promise;
    }
});

