var express = require('express');
var db = require('./db');
var controllers = require('./controllers');
var mysql = require('mysql');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/", router);

// Serve the client files
app.use(express.static(__dirname + "/../chatter/client"));

// TESTING HERE
// router.get('/', function(req, res){
  
//   console.log("hello");
//   router.get(controllers["messages"].get(req, res));

// });

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}


// db.connection.connect();

// db.connection.query('SELECT * FROM MESSAGES', function(err, rows, fields) {
//   if (err) {
//     console.log("Error with query");
//   }
//   console.log(rows);
// });

