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
            {title:'{albumDate:date("d/m/Y")}'},
            {icon:'icon-heart <tpl if="favorite">fav</tpl>', fn:'addFav'}
        ]
    }, 

    renderTitle: function(model){
        console.log(model)
        this.down('#titlebar').setData(model);
    },

    addPic : function(model){
        var car = this.down('carousel');
        car.add({
            xtype: 'container',
            model:model,
            items: [{
                xtype   : "component",
                data    : model.data,
                tpl     : [
                    '<div class="photo">',
                        '<img src="{photo}">',
                    '</div>'
                ]
            }]
        });        
        car.setActiveItem(0);
    },
    
    insertPic : function (toolbar) {
        this.renderTitle(toolbar)
    },

    addFav:function () {
        var id = this.down('carousel').getActiveItem().model.get('id'),
            model = this.down('carousel').getActiveItem().model;
        
        this.fireEvent('favorite',id,model);
    }
});