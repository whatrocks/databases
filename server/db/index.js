var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'h3r0',
  database : 'chat'
});

connection.connect();

module.exports = connection;
