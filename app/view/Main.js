Ext.define("Pulso.view.Main", {
    extend: 'Ext.Container',
    xtype: 'main',

    requires    : [
        'Pulso.view.Menu',
    ],
    
    config: {
        layout: 'card',
        items: [{
            xtype : 'pulsomenu'
        },{
            xtype : 'album'
        }]
    }
});