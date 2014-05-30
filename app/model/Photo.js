Ext.define('Pulso.model.Photo',{
    extend  : 'Ext.data.Model',
    
    config  : {
        idProperty  : 'id',
        fields  : [
            'id',
            'albumId',
            {name:'albumDate',type:"date", dateFormat:"d/m/Y"},
            'photo',
            {name: 'favorite', type: 'boolean'}
            ]
    }
});