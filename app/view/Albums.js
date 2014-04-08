Ext.define('Pulso.view.Albums', {
    extend: 'Ext.Container',
    xtype: 'albums',

    requires    : [
        'Pulso.store.Albums'
    ],
    
    config: {
        cls     :'albums',
        items   : [{
            xtype   : 'titlebar',
            title   :'Pulso',
            docked  :'top'
        },{
            xtype   : 'dataview',
            store   : {
                type    : 'albums'
            },
            itemTpl : [
                '<img src="{path}">',
                '<span>{date}</span>'
            ].join('')
        }]
    }
});