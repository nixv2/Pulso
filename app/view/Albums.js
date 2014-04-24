Ext.define('Pulso.view.Albums', {
    extend: 'Pulso.view.Card',
    xtype: 'albums',

    requires    : [
        'Pulso.store.Albums'
    ],
    
    config: {
        cls     :'albums',
        toolbar     : [
            {title:'Pulso'},
            {icon:'icon-calendar',fn:'showSearch'}
        ],
        items   : [{
            xtype   : 'list',
            disableSelection : true,
            emptyText   : 'No se encontraron fotos',
            infinite    : true,
            variableHeights: true,
            grouped     : true,
            store   : {
                type    : 'albums'
            },
            itemTpl : [
                '<div class="album">',
                    '<tpl for="albumPhotos">',
                    '<img src="{path}">',
                    '</tpl>',
                '</div>'
            ].join('')
        }]
    }
});