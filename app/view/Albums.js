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
            store   : {
                type    : 'albums'
            },
            itemTpl : [
                '<tpl for="albumPhotos">',
                '<img src="{path}">',
                '</tpl>'

                // '<div class="album" style="background:url({path}) no-repeat">',
                // '<div class="album-cover">',
                // '<span>{date}</span>',
                // '</div>',
                // '</div>'
            ].join('')
        }]
    }
});