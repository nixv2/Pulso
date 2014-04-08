Ext.define('Pulso.view.Albums', {
    extend: 'Ext.DataView',
    xtype: 'albums',

    requires    : [
        'Pulso.store.Albums'
    ],
    
    config: {
        items : [{
            xtype: 'titlebar',
            title:'Pulso',
            docked:'top'
        }],
        store : {
            type : 'albums'
        },
        itemTpl : [
            '<img src="{path}">',
            '<span>{date}</span>'
        ].join('')
    }
});