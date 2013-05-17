Ext.define('shoppinglist.model.StoreModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'icon', type: 'string' }
    ]
});