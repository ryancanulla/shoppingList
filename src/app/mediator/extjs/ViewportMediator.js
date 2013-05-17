Ext.define("shoppinglist.mediator.extjs.ViewportMediator", {
    extend:"FlowMVC.mvc.mediator.AbstractMediator",

    requires:[
        "shoppinglist.event.NavigationEvent"
    ],

    inject:[
        "logger"
    ],

    setupGlobalEventListeners:function () {
        this.callParent();
        this.eventBus.addGlobalEventListener(shoppinglist.event.NavigationEvent.NAVIGATE, this.onNavigate, this);
    },

    onNavigate:function (event) {
        this.navigate(event.action)
    },

    navigate:function (action) {
        var view;

        switch (action) {
            case shoppinglist.event.NavigationEvent.LOGGED_OUT:
                view = this.getViewByXType("loginView");
                break;
            case shoppinglist.event.NavigationEvent.LOGGED_IN:
                view = this.getViewByXType("shoppingListView");
                break;
        }

        if (view) {
            this.setActiveItemByItemId(view.itemId);
        } else {
            this.logger.warn("ViewportMediator.navigate: couldn't map navigation to action = " + action + " because " +
                "the view is null. Check the xtype.");
        }
    },

    setActiveItemByItemId:function (newId) {
        var items = this.getView().items,
            i, id,
            length = items.length;

        for (i=0; i<length; i+=1) {
            id = items.getAt(i).getItemId();

            if (id === newId) {
                items.getAt(i).show();
            } else {
                items.getAt(i).hide();
            }
        }
    }
});
