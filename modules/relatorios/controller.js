
var model = require('./model');

var Controller = {
    retrieve: function(req,res){
        response = {};
        dados ={};
        row = {};
        count =0; 
        model.select("id,valor,CONVERT(VARCHAR(28),data,120) as 'data'","valores","data < {ts '2015-11-25 15:00:00'}",function(response){
            response.forEach(function(columns) {
                columns.forEach(function(column) {
                    console.log(column.metadata.colName + ' = ' + column.value);
                    row[column.metadata.colName]=column.value
                });
                dados[count] = row;
                row ={};
                count++;
            });
            res.render('item', { title: 'Valores', 
                rows: dados});
            /*res.json(dados);*/
        });
    }
}

module.exports = Controller; 