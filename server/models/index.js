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
    post: function () {

      // add a message to the database




    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

