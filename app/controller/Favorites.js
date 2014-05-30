Ext.define('Pulso.controller.Favorites', {
    extend: 'Ext.app.Controller',

    requires    : [
          'Ext.Audio'
    ],
    
    config: {
        refs: {
            album : 'main album',
        },
        control: {
            'album' : {
                favorite : 'saveFavorite'
            }
        }
    },
    
    init    : function() {
        var favs = Ext.create('Pulso.store.Favorites',{
                id : 'Favorites'
            });

        favs.load();
    },

    saveFavorite: function(id, model) {
        var favs = Ext.StoreMgr.lookup('Favorites'),
            favIndex = favs.find('id',id),
            exist = favIndex !== -1,
            toolbar;

        if(exist){
            favs.removeAt(favIndex);
            Ext.create('Pulso.view.Alert',{
                msg : 'Foto eliminada de favoritos.',
                type: 'warning'
            });
            toolbar = {
                albumDate : model.get('albumDate'),
                favorite  : false
            }
            this.getAlbum().renderTitle(toolbar);
        }else{
            photo = Ext.create('Pulso.model.Photo',{
                id        : id,
                albumId   : model.get('albumId'),
                albumDate : model.get('albumDate'),
                photo     : model.get('photo'),
                favorite  : true
            });
            photo.phantom = true;

            toolbar = {
                albumDate : model.get('albumDate'),
                favorite  : true
            }

            favs.add(photo);

            this.getAlbum().renderTitle(toolbar);

            Ext.create('Pulso.view.Alert',{
                msg : 'Foto agreada a favoritos.',
                type: 'success'
            });
        }    

        favs.sync();
    }
});
