Ext.define('shoppinglist.model.ProductModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'brand', type: 'string' },
        { name: 'storeName', type: 'string' },
        { name: 'storeIcon', type: 'string' }
    ]
});