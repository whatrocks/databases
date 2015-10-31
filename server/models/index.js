var db = require('../db');

db.connection.connect();

module.exports = {

  messages: {
    get: function (callback) {

      db.connection.query('SELECT * FROM MESSAGES', function(err, rows, fields) {
        if (err) {
          console.log("Error with query");
        }
        callback(rows);
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

