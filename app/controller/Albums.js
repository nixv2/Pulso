Ext.define('Pulso.controller.Albums', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'albums list': {
                itemtap : 'sigleAlbum'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    sigleAlbum: function( list, index, target, record) {
        console.log(record)
    }
});
