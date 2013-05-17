Ext.define('shoppinglist.store.ProductsStore', {
    extend: 'Ext.data.Store',

    model: 'shoppinglist.model.ProductModel',
    data: [
        {
            id: 0,
            name: 'Paper Towels',
            storeName: 'Any',
            storeIcon: 'resources/images/stores/any.png',
            brand: 'Any Brand'
        }
    ]
});