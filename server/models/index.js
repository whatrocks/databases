var db = require("../db");

module.exports = {

  messages: {
    get: function (callback) {

      var queryStr = "select messages.id, messages.text, messages.created_at, users.name \
                      from messages left join users on \
                      messages.id_users = users.id";
      db.query(queryStr, function(err, results){
        callback(err, results);
      });

    },
    post: function (params, callback) {
      var queryStr = "insert into messages(text, id_users, created_at) \
                      values (?, (select id from users where name = ? limit 1), ?)";
      db.query(queryStr, params, function(err, results){
        callback(err, results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

