var db = require('../db');
// var Promise = require('bluebird');
db.connection.connect();

// var toQuery = function (string) {
//   return new Promise(function (resolve, reject) {
//     db.connection.query(string, function (err, rows, fields) {
//       if (err){
//         reject(err);
//       }
//       resolve(rows);
//     });
//   });
// };

module.exports = {

  messages: {
    get: function (callback) {

      db.connection.query('SELECT messages.id, text, created_at, name FROM MESSAGES LEFT JOIN USERS ON MESSAGES.ID_USERS = USERS.ID', function(err, rows, fields) {
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


      // db.connection.query("SELECT * FROM USERS where name = '" + req.body.username + "'", function (err, rows, fields) {
        
      //   if (err) {
      //     console.log("Not in the users database, adding now.");
      //     db.connection.query("INSERT INTO USERS (name) VALUES ('" + (req.body.username).toString() +"')", function(err, rows, fields) {
      //       if (err) {
      //         console.log("TROUBLE INSERTING THE USER", err);
      //       }
      //       console.log("I've aDDED THE USER!!");

      //       db.connection.query("select * from users where name = '" + req.body.username + "'", function(err, rows, fields) {

      //         id = rows[0].id;
      //         console.log("////////////////////////////////id: ", id);              

      //       });                

      //     });
      //   } 

      // var queryObj = toQuery("INSERT INTO USERS (name) VALUES ('" + (req.body.username).toString() +"')");
      // queryObj.catch(function (err) {
      //   console.log('-----------------------catching any errors? ',  err);
      //   return new Promise(9999);
      // queryObj
      // .then(function (rows) {
      //   console.log('------------------- you can see me?', rows);
      // });

      db.connection.query("INSERT IGNORE INTO USERS (name) VALUES ('" + (req.body.username).toString() +"')", function(err, rows, fields) {

        db.connection.query("SELECT * FROM USERS where name = '" + req.body.username + "'", function (err, rows, fields) {

          id = rows[0].id;
          var date = new Date();
          date = JSON.stringify(date);

          console.log('^^^^^^^^^^^^^^^^^^^^^^^^^ id', id);

          db.connection.query("INSERT INTO MESSAGES (id_users, text, created_at) VALUES ('" + 
            id + "', '" +
            req.body.text + "', '" + date +"')", function(err, rows, fields) {

              console.log("DONE");
          });

        });

      });
  

      // PROMISES STUFF
      // var queryObj = toQuery("SELECT * FROM USERS where name = '" + req.body.username + "'");
      // queryObj.then(function (rows) {

      //   if (rows.length){
      //     console.log('---------------existing name found', JSON.stringify(rows));
      //   } else {
      //     console.log('we gotta add it'); 
      //     var insertOjb = toQuery("INSERT INTO USERS (name) VALUES ('" + (req.body.username).toString() +"')");
      //     insertOjb.then(function () {
      //       var newUser = toQuery("SELECT * FROM USERS where name = '" + req.body.username + "'");
      //       newUser.then(function (rows) {
      //         console.log('-------------------------just added new user ', row)
      //       })
      //     })
      //   }



      // });


      // });

      // // get the user name
      // db.connection.query('SELECT name from users where name = ' + req.body.username, function (err, rows, fields) {
      //   if (err){
      //     console.log('-------------seriously still deosnt exist?')
      //   }
      //   console.log('-------------------------- the rows are:', rows.toString());
      // })


      // then add to messages

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

