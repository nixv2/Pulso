Ext.define('Pulso.controller.Albums', {
    extend: 'Ext.app.Controller',

    requires: [
        'Pulso.store.Albums',
        'Pulso.view.Alert'
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
            },
            'album carousel' :{
                activeitemchange : 'addPic'
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
        var me = this,
            menu = me.getVista(),
            albums = me.getAlbums(),
            album = me.getAlbum(),
            photo;

        if (result.success == true) {
            me.setPhotos(result)

            for (var i = 0; i < 3; i++) {
                photo = Ext.create('Pulso.model.Photo', {
                    id : result.albumId+'-'+result.data[i].pid,
                    albumId: result.albumId,
                    albumDate: result.albumDate,
                    photo: result.data[i].path,
                    favorite: false
                });

                var favs = Ext.StoreMgr.lookup('Favorites'),
                    favIndex = favs.find('id',photo.get('id')),
                    exist = favIndex !== -1;

                if(exist){
                    photo.set('favorite',true);
                }else{
                    photo.set('favorite',false);
                }
                album.addPic(photo);
            }
            

            menu.setActiveItem(1);
            albums.setMasked(false);
        } else{
            albums.setMasked(false);
            // Ext.Msg.alert('Error',result.msg);
            Ext.create('Pulso.view.Alert',{
                msg : result.msg,
                type: 'error'
            });
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
        picker.destroy();
    },

    addPic :function  (carousel,card) {
        
        var me = this,
            album = me.getAlbum(),
            model = card.model,
            favs = Ext.StoreMgr.lookup('Favorites'),
            favIndex = favs.find('id',model.get('id')),
            exist = favIndex !== -1,
            toolbar;
        

        if(exist){
            toolbar = {
                albumDate : model.get('albumDate'),
                favorite  : true      
            }
        }else{
            toolbar = {
                albumDate : model.get('albumDate'),
                favorite  : false
            }
        }

        album.insertPic(toolbar);

    }
});


















