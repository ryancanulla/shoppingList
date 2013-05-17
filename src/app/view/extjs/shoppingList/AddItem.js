Ext.define("shoppinglist.view.extjs.shoppingList.AddItem", {
    extend: "Ext.container.Container",
    alias: "widget.addItem",
    controller: "shoppinglist.mediator.extjs.shoppingList.AddItemMediator",
    inject:['storesStore'],
    cls:'addItem',

    initComponent:function () {
        Ext.applyIf(this, {
            items: [
                {
                    xtype: 'label',
                    text: 'What do we need?',
                    cls: 'title'
                },
                {
                    xtype: 'container',
                    padding:'10, 0, 0, 0',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId:'itemInput',
                            fieldLabel:'Name',
                            enableKeyEvents:true
                        },
                        {
                            xtype: 'textfield',
                            itemId:'brandInput',
                            fieldLabel:'Brand',
                            value:'Any Brand',
                            enableKeyEvents:true
                        },
                        {
                            xtype:'combo',
                            itemId:'comboBox',
                            store:this.storesStore,
                            value:this.storesStore.getAt(0).get('id'),
                            displayField: 'name',
                            fieldLabel:'Store',
                            valueField: 'id',
                            queryMode: 'local'
                        }
                    ]
                },
                {
                    xtype:'button',
                    text:'Add To List',
                    itemId:'addItemButton'
                }
            ]
        });
        return this.callParent(arguments);
    }
});


