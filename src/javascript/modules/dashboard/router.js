var Marionette = require('backbone.marionette')
  , Controller = require('./controller.js')
;

module.exports = Marionette.AppRouter.extend({
  controller: new Controller,
  appRoutes: {
    "test/:id": "test",
    "dashboard": "dashboard",
    "*path": "dashboard"
  },
  initialized: function() {
    var self = this;
    console.log(self.controller);
  },
  onRoute: function(name, path) {
    console.log(name + ':' + path);
  }
});