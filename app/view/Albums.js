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
            xtype   : 'list',
            disableSelection : true,
            emptyText   : 'No se encontraron fotos.',
            infinite    : true,
            variableHeights: true,
            grouped : true,
            store   : {
                type    : 'albums'
            },
            itemTpl : [
                '<tpl for="albumPhotos">',
                '<img src="{path}">',
                '</tpl>'
            ].join('')
        }]
    }
});