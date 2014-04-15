Ext.define('Pulso.store.Album',{
    extend      : 'Ext.data.Store',
    alias       : 'store.albums',

    requires    : [
        'Pulso.model.Album'
    ],

    config      : {
        model       : 'Pulso.model.Album',

        proxy   : {
            type    : 'jsonp',
            url     : 'http://pulso.um.edu.mx/app/singleGallery.php',

            reader  : {
                type    : 'json',
                rootProperty : 'data'
            }
        }
    }
});