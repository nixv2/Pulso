Ext.define("Pulso.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',
    
    config: {
        slideSelector       : false,
        containerSlideDelay : 10,
        selectSlideDuration : 200,
        listPosition        : 'left',
        list                : {
            maxDrag: 200,
            width: 50,
            grouped: false,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'dark'
            }]
            
        },
        items       : [{
            xtype   : 'container',
            title   : '<span class="icon-camera">'
        },{
            xtype   : 'container',
            title   : '<span class="icon-heart"></span>'
        },{
            xtype   : 'container',
            title   : '<span class="icon-tv"></span>'
        },{
            xtype   : 'container',
            title   : '<span class="icon-megaphone"></span>'
        },{
            xtype   : 'container',
            title   : '<span class="icon-news"></span>'
        },{
            xtype   : 'container',
            title   : '<span class="icon-t-shirt"></span>'
        }]
    }
});