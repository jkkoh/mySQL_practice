const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nodejs_test'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    }else{
        console.log('connected');
    }
});

module.exports = connection;