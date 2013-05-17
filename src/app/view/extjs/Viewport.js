Ext.define("shoppinglist.view.extjs.Viewport", {
    extend: "Ext.container.Viewport",
    alias: "widget.viewport",
    controller: "shoppinglist.mediator.extjs.ViewportMediator",

    requires: [
        'shoppinglist.view.extjs.LoginView',
        'shoppinglist.view.extjs.shoppingList.ShoppingListView'
    ],

    layout: {
        type: "hbox",
        align:'middle',
        pack: 'center'
    },

    items: [
        {
            xtype: "loginView",
            itemId: "loginView",
            hidden: false
        },
        {
            xtype: "shoppingListView",
            itemId: "shoppingListView",
            hidden: true
        },
        {
            xtype: "container",
            itemId: "three",
            html: "view three",
            hidden: true
        }
    ]
});


