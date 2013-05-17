Ext.define('shoppinglist.store.StoresStore', {
    extend: 'Ext.data.Store',

    model: 'shoppinglist.model.StoreModel',
    data: [
        {
            id: 0,
            name: 'Any',
            icon:'resources/images/stores/any.png'
        },
        {
            id: 1,
            name: 'Stop & Shop',
            icon:'resources/images/stores/stop&shop.png'
        },
        {
            id: 2,
            name: 'Shaws',
            icon:'resources/images/stores/shaws.png'
        },
        {
            id: 3,
            name: 'Whole Foods',
            icon:'resources/images/stores/wholeFoods.png'
        },
        {
            id: 4,
            name: 'Target',
            icon:'resources/images/stores/target.png'
        },
        {
            id: 5,
            name: 'CVS',
            icon:'resources/images/stores/cvs.png'
        }
    ]
});