Ext.define("shoppinglist.mediator.extjs.shoppingList.ShoppingListMediator", {
    extend:"FlowMVC.mvc.mediator.AbstractMediator",

    requires:[
        "shoppinglist.event.NavigationEvent"
    ],

    inject:[
        "logger"
    ],

    control:{
    },

    setupGlobalEventListeners:function () {
        this.callParent();
    }
});
