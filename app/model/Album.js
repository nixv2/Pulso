Ext.define('Pulso.model.Album',{
    extend  : 'Ext.data.Model',
    
    config  : {
        fields  : [
            'albumId',
            {name:'albumDate',type:"date",dateFormat:"d/m/Y"},
            'albumPhotos'
        ]
    }
});