var models = require('../models');

module.exports = {

  // Current working solution
  // classes: {
  //   get: function (req, res) {
  //     models.messages.get(function (results) {        
  //       res.send({results : results});
  //     });
  //   }, 
  //   post: function (req, res) {
  //     models.messages.post(req, function () {
  //       res.send();
  //     });
  //   } 
  // },

  // Refactored solution
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        res.json(results);
      });
    }, 
    post: function (req, res){
      var now = new Date();
      console.log(req.body);
      var params = [ req.body.text, req.body.username, now ];
      models.messages.post(params, function(err, results){
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body.username ];
      models.users.post(params, function(err, results){
        res.sendStatus(201);
      });
    }
  }
};

