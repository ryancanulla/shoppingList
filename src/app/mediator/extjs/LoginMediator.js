Ext.define("shoppinglist.mediator.extjs.LoginMediator", {
    extend:"FlowMVC.mvc.mediator.AbstractMediator",

    requires:[
        "shoppinglist.event.NavigationEvent"
    ],

    inject:[
        "logger"
    ],

    control:{
        "loginButton":{
            click:"onLoginButtonClick"
        }
    },

    setupGlobalEventListeners:function () {
        this.callParent();

    },

    onLoginButtonClick:function () {
        var event = Ext.create(
            "shoppinglist.event.NavigationEvent",
            shoppinglist.event.NavigationEvent.NAVIGATE,
            shoppinglist.event.NavigationEvent.LOGGED_IN
        );
        this.eventBus.dispatchGlobalEvent(event);
    }

});
