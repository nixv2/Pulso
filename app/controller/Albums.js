Ext.define('Pulso.controller.Albums', {
    extend: 'Ext.app.Controller',

    requires: [
        'Pulso.store.Albums'
    ],
    
    config: {
        refs: {
            vista : 'main',
            album : 'main album',
            albums: 'albums list'
        },
        control: {
            'albums list': {
                itemtap : 'sigleAlbum'
            }
        },
        photos : ''
    },
    
    sigleAlbum: function( list, index, target, record) {
        var me =  this,
            menu = me.getVista(),
            album = me.getAlbum();

        album.setMasked({
            xtype: 'loadmask',
            message: 'Cargando...'
        });

        menu.setActiveItem(1);

        Ext.data.JsonP.request({
            url     : 'http://pulso.um.edu.mx/app/singleGallery.php',
            callbackKey: 'callback',
            params  : {
                gid : record.data.albumId,
            },
            success: me.loadPhotos,
            scope   : me
        });
    },
    loadPhotos : function(result, request) {
        // console.log(result)
        var me = this,
            menu = me.getVista(),
            album = me.getAlbum();
        // console.log(result.data)
        me.setPhotos(result)
        album.setMasked(false);
        for (var i = 0; i < 7; i++) {
            album.addPic(result.data[i]);            
        };
    }
});


















