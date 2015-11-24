var sql = require('mssql');
 
var config = {
    user: 'root',
    password: 'root',
    server: 'localhost\\SQLExpress', // You can use 'localhost\\instance' to connect to named instance 
    database: 'sistemarelatorio',
 
}
 
var connection = new sql.Connection(config, function(err) {

    if(err){
        console.log('Erro: ', err);
    }
});
 
connection.on('error', function(err) {
    console.log('Erro de conexao', err);
});

module.exports = {sql, connection};