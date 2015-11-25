
var model = require('./model');

var Controller = {
    retrieve: function(req,res){
        valores = {};
        model.selectAll(function(valores){
            valores.forEach(function(columns) {
                columns.forEach(function(column) {
                    console.log(column.metadata.colName + ' = ' + column.value);
                });
            });
            res.render('item', { title: 'Valores', 
                rows: valores});
        });
    }
}

module.exports = Controller; 