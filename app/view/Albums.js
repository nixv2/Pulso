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
                '<div class="album" style="background:url({path}) no-repeat">',
                '<div class="album-cover">',
                '<span>{date}</span>',
                '</div>',
                '</div>'
            ].join('')
        }]
    }
});