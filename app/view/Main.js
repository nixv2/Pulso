Ext.define("Pulso.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'main',

    requires    : [
        'Pulso.view.Albums',
    ],
    
    config: {
        slideSelector       : false,
        containerSlideDelay : 10,
        selectSlideDuration : 200,
        listPosition        : 'left',
        list                : {
            maxDrag: 200,
            width: 75,
            grouped: false,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'dark'
            }]
            
        },
        items       : [{
            xtype   : 'albums',
            title   : [
                '<span class="icon-camera"></span>',
                '<span class="menu-text">Fotos</span>'
            ].join('')
        },{
            xtype   : 'container',
            title   : [
                '</span><span class="icon-heart"></span>',
                '<span class="menu-text">Favoritos</span>'
            ].join('')
        },{
            xtype   : 'container',
            title   : [
                '</span><span class="icon-tv"></span>',
                '<span class="menu-text">Videos</span>'
            ].join('')
        },{
            xtype   : 'container',
            title   : [
                '</span><span class="icon-megaphone"></span>',
                '<span class="menu-text">Novedades</span>'
            ].join('')
        },{
            xtype   : 'container',
            title   : [
                '</span><span class="icon-news"></span>',
                '<span class="menu-text">Impulsos</span>'
            ].join('')
        },{
            xtype   : 'container',
            title   : [
                '</span><span class="icon-t-shirt"></span>',
                '<span class="menu-text">Staff</span>',
            ].join('')
        }]
    }
});