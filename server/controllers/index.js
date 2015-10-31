var models = require('../models');

module.exports = {
  classes: {

    get: function (req, res) {
      models.messages.get(function (results) {        
        res.send({results : results});
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // this should call model.post

      models.messages.post(req, function () {
        res.send();
      });

    } // a function which handles posting a message to the database



  },

  ///////////////////////////////////////////////////////
  // TBD IN CASE WANT TO RETRIEVE THESE SEPARATELY?
  ///////////////////////////////////////////////////////
  messages: {
    get: function (req, res) {
      // var text = {results : [{objectId : 1 , username : 'way', text : 'works?', createdAt : new Date()},
      //   {objectId : 2 , username : 'Darth Vader', text : 'evil?', createdAt : new Date()}]};
      // // iterate through all messages

      // res.send(text);
 
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // this should call model.post

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      console.log("I'm empty");

    },
    post: function (req, res) {



    }
  }
};

