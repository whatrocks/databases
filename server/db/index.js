var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'h3r0',
  database : 'chat'
});

// connection.connect();

// connection.query('SELECT * FROM MESSAGES', function(err, rows, fields) {
//   if (err) {
//     console.log("Error with query");
//   }
//   console.log(rows);
// });


