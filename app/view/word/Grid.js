Ext.define('App.view.word.Grid', {
    extend : 'Ext.grid.Panel',
    xtype : 'wordlist',
    title : 'Words',
    store : "Word",
    reference : 'wordlist',
    columns : [{
        text : 'Id',
        dataIndex : 'id',
        hidden : true
    }, {
        text : 'Word',
        dataIndex : 'word',
        flex : 1
    }, {
        text : 'Translate',
        dataIndex : 'translate',
        flex : 1
    }, {
        header : 'Image',
        dataIndex : 'imgUrl',
        renderer : function (value) {
            return '<img src="' + value + '"  height="80" width="80"/>';
        }
    }, {
        text : 'Data create',
        dataIndex : 'created_at',
        renderer : Ext.util.Format.dateRenderer('d-m-Y')
    }, {
        text : 'Date update',
        dataIndex : 'updated_at',
        renderer : Ext.util.Format.dateRenderer('d-m-Y')
    },{
        header : 'Active',
        dataIndex : 'active',
        renderer : function (value) {
            if (value === 'T') {
                return '<i class="fa fa-toggle-on fa-2x" aria-hidden="true"></i>';
            } else {
                return '<i class="fa fa-toggle-off fa-2x" aria-hidden="true"></i>';
            }

        }
    }],
    tbar: [{
        text: 'Add',
        tooltip: 'Add new categorie',
        iconCls : 'fa fa-plus',
        handler: 'onShowAddWord'
    }, {
        text: 'Edit',
        tooltip: 'Edit categorie',
        iconCls : 'fa fa-pencil-square-o',
        reference: 'btnEdit',
        disabled: true,
        handler: 'onShowEditWord'
    }],
    listeners : {
        select : 'onItemSelected'
    }
});