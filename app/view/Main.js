Ext.define("Pulso.view.Main", {
    extend: 'Ext.Container',
    xtype: 'main',

    requires    : [
        'Pulso.view.Menu',
    ],
    
    config: {
        layout: 'card',
        activeItem :0,
        itemId: 'main',
        items: [{
            xtype : 'pulsomenu'
        },{
            xtype : 'album'
        }]
    }
});