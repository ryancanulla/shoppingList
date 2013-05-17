Ext.define("shoppinglist.view.extjs.shoppingList.ShoppingListView", {
    extend: "Ext.container.Container",
    alias: "widget.shoppingListView",
    controller: "shoppinglist.mediator.extjs.shoppingList.ShoppingListMediator",
    cls: 'shoppingList',

    requires: [
        'shoppinglist.view.extjs.shoppingList.AddItem',
        'shoppinglist.view.extjs.shoppingList.ItemList'
    ],

    layout: {
        type: "hbox",
        align:'top',
        pack: 'center'
    },

    items: [
        {
            xtype:'addItem',
            width: 300,
            padding: 20
        },
        {
            xtype:'itemList',
            width: 400,
            margin: '0, 0, 0, 20'
        }
    ]
});


