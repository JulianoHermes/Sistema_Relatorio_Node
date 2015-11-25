var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    "userName": "root",
    "password": "root",
    "server": "localhost",
    "database": "sistemarelatorio",
    "options": {
        //"port":"53235",
        "encrypt": false,
        "rowCollectionOnRequestCompletion": true 
    }      
};

var connect;

function executeSQL(req){
    connect = new Connection(config);

    connect.on('connect', function(err) {
        // If no error, then good to go...
        if(err){
            console.log("There Is an error on the force"+err);
            return;
        }else{
            console.log("Successfully connected to the force");
        }
        connect.execSql(req);
    });
}


var model={
    "selectAll": function (callback){
        req = new Request("select * from sistemarelatorio.dbo.valores", function(err, rowCount, rows) {
            if (err) {
                console.log(err);
            } else {
                /*console.log(rowCount + ' rows');
                rows.forEach(function(columns) {
                    columns.forEach(function(column) {
                        console.log(column.metadata.colName + ' = ' + column.value);
                    });
                });
                */
                callback(rows);
                connect.close();
            }
        });
        executeSQL(req);
    }
};
module.exports = model;