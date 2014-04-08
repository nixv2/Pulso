Ext.define('Pulso.store.Albums',{
    extend      : 'Ext.data.Store',
    alias       : 'store.albums',
    requires    : [
        'Pulso.model.Album'
    ],

    config      : {
        model       : 'Pulso.model.Album',

        autoLoad: true,
        proxy   : {
            type    : "jsonp",
            url     : "http://pulso.um.edu.mx/app/gallery.php",

            reader  : {
                type    : "json",
                rootProperty : "data"
            }
        }
    }
});