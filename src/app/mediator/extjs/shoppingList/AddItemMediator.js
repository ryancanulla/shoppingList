Ext.define('shoppinglist.mediator.extjs.shoppingList.AddItemMediator', {
    extend:'FlowMVC.mvc.mediator.AbstractMediator',

    requires:[
        'shoppinglist.event.NavigationEvent'
    ],

    inject:[
        'logger',
        'productsStore',
        'storesStore'
    ],

    control:{
        brandInput:true,
        comboBox:true,
        itemInput:{
            keydown: 'handleKeyPress'
        },
        addItemButton: {
            click: 'onAddItemButton'
        }
    },

    setupGlobalEventListeners:function () {
        this.callParent();
    },

    onAddItemButton: function(event) {
        this.addNewItem();
    },

    addNewItem: function() {
        var productName = this.getItemInput().value,
            productBrand = this.getBrandInput().value,
            storeIndex = this.getComboBox().value,
            storeName = this.storesStore.getAt(storeIndex).data.name,
            storeIcon = this.storesStore.getAt(storeIndex).data.icon;

        if(productName) {
            this.productsStore.add({
                name: productName,
                brand: productBrand,
                storeName: storeName,
                storeIcon: storeIcon
            });
        }

        this.clearInput();
    },

    handleKeyPress: function(input, event) {
        var isEnter = event.getKey() === event.ENTER,
            isReturn = event.getKey() === event.RETURN;

        if (isEnter || isReturn) {
            this.addNewItem();
        }
    },

    clearInput: function() {
        this.getItemInput().setValue('');
    }
});
