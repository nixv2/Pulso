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
            },
            'datepicker' :{
                change : 'searchByDate',
                hide   : 'destroy'
            }
        },
        photos : ''
    },

    sigleAlbum: function( list, index, target, record) {
        var me =  this,
            menu = me.getVista(),
            album = me.getAlbum()

        Ext.data.JsonP.request({
            url     : 'http://pulso.um.edu.mx/app/singleGallery.php',
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
            albums = me.getAlbums(),
            album = me.getAlbum();

        if (result.success == true) {
            me.setPhotos(result)
            for (var i = 0; i < 3; i++) {
                album.addPic(result.data[i]);            
            };
            menu.setActiveItem(1);
            albums.setMasked(false);
        } else{
            albums.setMasked(false);
            Ext.Msg.alert('Error',result.msg);
        };
    },

    searchByDate: function( picker, value, eOpts ){
        var me = this,
            menu = me.getVista(),
            album = me.getAlbum(),
            albums = me.getAlbums(),
            date = Ext.Date.format(value,'d/m/Y');

        picker.destroy();

        albums.setMasked({
            xtype: 'loadmask',
            message: 'Buscando...'
        });

        Ext.data.JsonP.request({
            url     : 'http://pulso.um.edu.mx/app/singleGallery.php',
            callbackKey: 'callback',
            params  : {
                title : date
            },
            success: this.loadPhotos,
            scope   : this
        });
    },

    destroy :function (picker,e) {
        console.log('cui cui ')
        picker.destroy()
    }
});


















