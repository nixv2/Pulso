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
    },
    showSearch : function (argument) {
        if(!this.down('datepicker')){
            var date = this.add({
                xtype: 'datepicker',
                value: new Date(),
                yearFrom: 2011,
                // doneButton: false,
                // cancelButton: false,
                hideOnMaskTap: true,
                // toolbar: {
                //     xtype: 'toolbar',
                //     items : [{
                //         text : 'Cancelar',
                //         scope : this,
                //         handler : function(){
                //             date.hide()
                //         }
                //     },{
                //         xtype: 'spacer'
                //     },{
                //         text: 'Buscar',
                //         handler : function(){
                //             console.log(date.getValue())
                //             // console.log(new Date())
                //             // date.fireEvent('searchGallery',date.getData())
                //         }
                //     }]
                // }
            });
            date.show();
        }
    }
});