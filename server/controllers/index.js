var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {


      // this should call model.get

    }, // a function which handles a get request for all messages
    post: function (req, res) {


      // this should call model.post

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

