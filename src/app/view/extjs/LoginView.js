Ext.define("shoppinglist.view.extjs.LoginView", {
    extend: "Ext.container.Container",
    alias: "widget.loginView",
    controller: "shoppinglist.mediator.extjs.LoginMediator",

    requires: [],

    cls: 'login',
    width: 225,
    height: 125,

    layout: {
        type: "hbox",
        align:'middle',
        pack: 'center'
    },


    items: [
        {
            xtype:'label',
            text:'Please log in.',
            margin: '0, 10, 0, 0'
        },
        {
            xtype:'button',
            itemId:'loginButton',
            text: 'Log In'
        }
    ]
});


