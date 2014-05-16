var Marionette = require('backbone.marionette')
  , Router = require('./router');

module.exports = Marionette.Module.extend({
  constructor: function(moduleName, app, options) {
  },

  initialize: function(options, moduleName, app) {
    this.router = new Router;
  },

  onStart: function(options) {
  },

  onStop: function(options) {
  },
});
