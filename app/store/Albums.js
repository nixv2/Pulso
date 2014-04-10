Ext.define('Pulso.store.Albums',{
    extend      : 'Ext.data.Store',
    alias       : 'store.albums',
    requires    : [
        'Pulso.model.Album'
    ],

    config      : {
        model       : 'Pulso.model.Album',

        autoLoad: true,
        pageSize: 5,
        proxy   : {
            type    : "jsonp",
            url     : "http://pulso.um.edu.mx/app/gallery.php",

            reader  : {
                type    : "json",
                rootProperty : "data"
            }
        },
        grouper: {
            sortProperty : {
                property : 'albumId',
                direction: 'DESC'
            },
           groupFn: function(record) {
                var tpl = [
                    '<div class="album-date">',
                        '<div class="album-meta">',
                            '<span class="album-day">',
                                Ext.Date.format(record.get('albumDate'), "l"),
                            '</span>',
                            '<span class="album-dates">',
                                Ext.Date.format(record.get('albumDate'), "d/M/y"),
                            '</span>',
                        '</div>',
                    '</div>'
                ].join('');
               return tpl;
           }
       },
    }
});