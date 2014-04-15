Ext.define('Pulso.controller.Albums', {
    extend: 'Ext.app.Controller',

    requires: [
        'Pulso.store.Albums'
    ],
    
    config: {
        refs: {
            
        },
        control: {
            'albums list': {
                itemtap : 'sigleAlbum'
            }
        }
    },
    
    sigleAlbum: function( list, index, target, record) {
        Ext.data.JsonP.request({
            url     : 'http://pulso.um.edu.mx/app/singleGallery.php',
            callbackKey: 'callback',
            params  : {
                gid : record.data.albumId,
            },
            success: function(result, request) {
                console.log(result)
            }
        });
    }
});
