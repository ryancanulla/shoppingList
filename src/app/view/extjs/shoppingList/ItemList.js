Ext.define("shoppinglist.view.extjs.shoppingList.ItemList", {
    extend: "Ext.container.Container",
    alias: "widget.itemList",
    controller: "shoppinglist.mediator.extjs.shoppingList.ItemListMediator",
    inject:['productsStore'],
    requires: [],
    cls: 'itemList',

    initComponent:function () {
        Ext.applyIf(this, {
            items: [
                {
                    xtype:'container',
                    cls: 'titleBar',
                    padding: '5, 0, 5, 5',
                    items: [
                        {
                            xtype:'label',
                            cls: 'title',
                            text:'Your shopping list'
                        }
                    ]
                },
                {
                    xtype: 'dataview',
                    itemId:'productList',
                    store:this.productsStore,
                    trackOver: true,
                    overItemCls: 'hover',
                    itemSelector: 'div.row',
                    padding: '0, 0, 0, 0',
                    height: 300,
                    autoScroll:true,

                    tpl: new Ext.XTemplate(
                        '<div class="productList">',
                        '<tpl for=".">',
                        '<div class="row">',
                            '<div class="nameColumn">',
                                '<div class="name">{name}</div>',
                                '<div class="brand">{brand}</div>',
                            '</div>',
                            '<div class="store">',
                                '<img src="{storeIcon}" alt="{storeName}" />',
                            '</div>',
                            '<div class="delete">',
                                '<input type="button" class="deleteButton" name="deleteButton" value="Delete"/>',
                            '</div>',

                        '</div>',
                        '</tpl>',
                        '</div>'
                    ),

                    columns:{
                        items:[
                            {
                                dataIndex:"#",
                                flex:1

                            },
                            {
                                dataIndex:"name",
                                flex:1
                            }
                        ]}
                },
                {
                    xtype:'container',
                    cls: 'footerBar',
                    padding: '5, 0, 0, 0'

                }
            ]
        });
        return this.callParent(arguments);
    }
});


