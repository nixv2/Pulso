Ext.define('Pulso.store.Favorites',{
    extend      : 'Ext.data.Store',

    requires    : [
        'Pulso.model.Photo'
    ],

    config      : {
        model       : 'Pulso.model.Photo',

        proxy : {
            type : 'localstorage',
            id   : 'pulso-favorite'
        }
    }
});