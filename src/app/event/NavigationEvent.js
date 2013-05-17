Ext.define("shoppinglist.event.NavigationEvent", {
    extend: "FlowMVC.mvc.event.AbstractEvent",

    statics: {
        NAVIGATE: "navigate",

        LOGGED_IN: "navigationEvent.LoggedIn",
        LOGGED_OUT: "navigationEvent.LoggedOut"
    },

    action: "",

    constructor: function(type, action) {
        this.callParent(arguments);
        this.action = action;
    }
})