var db = require('../db');

db.connection.connect();

module.exports = {

  messages: {
    get: function (callback) {

      db.connection.query('SELECT * FROM MESSAGES, USERS WHERE MESSAGES.ID = USERS.ID', function(err, rows, fields) {
        if (err) {
          console.log("Error with query");
        }

        var results = [];

        for (var i = 0; i < rows.length; i++) { 
          var msg = {};
          msg.objectId = rows[i].id;
          msg.username = rows[i].name;
          msg.text = rows[i].text;
          msg.createdAt = rows[i].created_at;
          results.push(msg);
        }

        callback(results);
      });

    }, // a function which produces all the messages
    post: function (req, callback) {

      // add a message to the database
      // console.log('-------------------------- getting the req at all? ', req.body);


      // first check for user or not
      // always check user name, if in there, then ignore, if not then insert
      var id;

      console.log('-------------', req.body.username);
      console.log('%%%%%%%%%%%%%%%%%');
      console.log('-------------', (req.body.username).toString());


      db.connection.query('SELECT name FROM USERS where name = ' + req.body.username, function (err, rows, fields) {
        if (err) {
          console.log("Not in the users database, adding now.");
          db.connection.query("INSERT INTO USERS (name) VALUES ('" + req.body.username +"')", function(err, rows, fields) {
            if (err) {
              console.log("TROUBLE INSERTING THE USER", err);
            }
            console.log("I've aDDED THE USER!!");
          });
        }
      })


      // then add to messages

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

