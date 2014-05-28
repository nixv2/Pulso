Ext.define('Pulso.view.Alert', {
    extend: 'Ext.Container',
    xtype : 'alert',
    
    requires: ['Ext.Anim'],
    
    config: {
        cls     : 'alerts',
        msg     : null,
        type    : null,
        top     : 40,
        html    : ''
    },
    constructor : function(config){
        var tpl = [];

        tpl.push('<div class="triangle triangle-'+config.type+'"></div>');
        if (config.type) {
            tpl.push('<div class="alert type-'+config.type+'">');
        }else{
            tpl.push('<div class="alert type">');
        }
        if (config.msg) {
            tpl.push('<p>'+config.msg+'</p>');

        }else{
            tpl.push('<p>Some Text</p>');
        }
        tpl.push('</div>');

        this.config.html =  tpl.join(''),

        this.callParent(arguments);
    },
    initialize: function () {
        Ext.Viewport.add(this);
        this.on('painted',this.bubble,this);
    },

    bubble: function(){
        var me =  this,
            bubble = me.element.down('.alert');

            bubble.addCls('open');

            Ext.defer(function(){
                bubble.removeCls('open');
            },3000);

            Ext.defer(function(){
                me.destroy();
            },3500);
    }
});