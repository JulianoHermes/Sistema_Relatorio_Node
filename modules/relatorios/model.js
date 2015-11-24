var Connection = require('tedious').Connection;
  var config = {
    "userName": "root",
    "password": "root",
    "server": "localhost",
    "options": {
      //"port":"53235",
      "encrypt": false
    }      
};
/*var connection = new Connection(config);
connection.on('connect', function(err) {
    // If no error, then good to go...
    if(err){
        console.log("There Is an error on the force"+err);
        return;
    }else{
        console.log("Successfully connected to the force",connection);
    }
});
*/
module.exports = config;