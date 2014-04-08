Ext.define("Pulso.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',
    
    config: {
        slideSelector: false,
        containerSlideDelay: 10,
        selectSlideDuration: 200,
        listPosition: 'left',
        list: {
            maxDrag: 200,
            width: 50,
            grouped: false,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'dark'
            }]
            
        },
        items           : [{
            xtype   : 'container',
        },{
            xtype   : 'container',
        }]
    }
});