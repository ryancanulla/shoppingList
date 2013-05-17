Ext.define('shoppinglist.store.StoresStore', {
    extend: 'Ext.data.Store',


    config: {
        autoLoad: true,
        autoSync: false,
        storeId: 'userInformation',
        fields: [
            {
                name: 'username',
                password: 'password'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'userInformation'
        }
    }
});
