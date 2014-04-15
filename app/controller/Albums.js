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
        
    }
});
