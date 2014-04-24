Ext.define('Pulso.view.Album', {
    extend: 'Ext.Carousel',
    
    config: {
        cls     : 'album-carousel',
        indicator: false,
        items   : [{
            xtype   : 'container',
            docked  :'top',
            html    : '<span class="icon-heart saveFav"></span>'
        }]
    },
    initialize : function(){
        this.callParent(arguments);

        this.element.on('tap',this.handleTapEvent,this);
    },
    handleTapEvent : function(event){
        console.log(event)
    },
    addPic : function(data){
        console.log(data.path)
        return this.add({
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
        })
    }
});