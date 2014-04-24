Ext.define('Pulso.view.Album', {
    extend: 'Pulso.view.Card',
    xtype : 'album',
    
    config: {
        layout:'fit',
        items : [{
            xtype: 'carousel',
            cls     : 'album-carousel',
            indicator: false,
            items: []
        }],
        toolbar: [
            {title:'Favoritos'},
            {icon:'icon-heart',fn:'addFav'}
        ]
    },
    initialize : function(){
        this.callParent(arguments);

        this.element.on('tap',this.handleTapEvent,this);
    },
    handleTapEvent : function(event){
        console.log(event)
    },
    addPic : function(data){
        // console.log(data)
        var car = this.down('carousel');
        console.log(car)
        car.add({
            xtype: 'container',
            model:data,
            items: [{
                xtype   : "component",
                data    : data,
                tpl     : [
                    '<div class="photo">',
                        '<img src="{path}">',
                    '</div>'
                ]
            }]
        });
        return
    }
});