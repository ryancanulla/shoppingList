Ext.onReady(function () {

    // pull all of this in so they can be injected
    Ext.syncRequire([
	    "shoppinglist.view.extjs.Viewport"
    ]);

    // Configure the DeftJS IoC container
    Deft.Injector.configure({

        logger: FlowMVC.logger.Logger.getInjectableLogger(),
        eventBus: "FlowMVC.mvc.event.EventDispatcher",
        productsStore:'shoppinglist.store.ProductsStore',

        storesStore:'shoppinglist.store.StoresStore'
    });
});

Ext.application({
    name: "shoppinglist",

    models: [
        "ProductModel",
        'StoreModel'
    ],

    views: [
        "shoppinglist.view.extjs.Viewport"
    ],

    controllers:[
//        "AuthenticationController",
//        "EmployeeController"
    ],

    launch: function () {
        Ext.tip.QuickTipManager.init();
        Ext.create("shoppinglist.view.extjs.Viewport");
    }
});