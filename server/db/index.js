var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'http://127.0.0.1',
  user: 'root',
  password: '',
  database : 'chat'
});

// connection.connect(function(err){
//   if (err) {
//     console.error('error connection : ' + err);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);

// });
