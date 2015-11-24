var sql = require('mssql');
 
var config = {
    user: 'root',
    password: 'root',
    server: 'localhost\\SQLExpress', // You can use 'localhost\\instance' to connect to named instance 
    database: 'sistemarelatorio',
    port: '50365',
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
 
};


//module.exports = {sql, connection};
var Controller = {
    retrieve: function(req,res){
        var query={}
        ,msg ='';

        sql.connect(config, function(err){

            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                request = new sql.Request();
                request.query('select 1 as number', function(err, recordset) {
                    // ... error checks 
                    if(err){
                        console.log('Erro: ', err);
                        msg = err;
                    }else{
                        console.log('valores: ',recordset); // return 1 
                        msg = recordset;
                    }
                    
                    //res.render(msg);
                    // ... 
                });
            }
        });
 
        sql.on('error', function(err) {
            console.log('Erro de conexao', err);
            msg = err;
        });
    }
}

module.exports = Controller;