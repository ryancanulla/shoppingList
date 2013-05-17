Ext.define("shoppinglist.mediator.extjs.shoppingList.ItemListMediator", {
    extend:"FlowMVC.mvc.mediator.AbstractMediator",

    requires:[
        "shoppinglist.event.NavigationEvent"
    ],

    inject:['productsStore'],

    control:{
        productList: {
            itemclick: 'onDeleteProduct'
        }
    },

    onDeleteProduct:function (dataView, record, item, index, e, eOpts) {
        var target = e.getTarget();

        if(target.type === 'button') {
            this.productsStore.removeAt(index);
        }
    }
});