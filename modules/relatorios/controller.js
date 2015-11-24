var Request = require('tedious').Request;

var Controller = {
    retrieve: function(req,res){

        var Connection = require('tedious').Connection;
        var connect =new Connection(require('./model'));
        //var query={_id: req.params.id}
        //,msg ='';
        

        request = new Request("select 42, 'hello world'", function(err, rowCount) {
            if (err) {
                console.log(err);
            } else {
                console.log(rowCount + ' rows');
            }
        });

        request.on('row', function(columns) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            columns.forEach(function(column) {
                res.write(column.value+"\n");
            });

            res.end("Oi");
        });

        connect.on('connect', function(err) {
            // If no error, then good to go...
            if(err){
                console.log("There Is an error on the force"+err);
                return;
            }else{
                console.log("Successfully connected to the force",connect);
            }
            connect.execSql(request);
        });

    }
}

module.exports = Controller; 