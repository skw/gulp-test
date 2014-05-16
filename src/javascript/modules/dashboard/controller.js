var Marionette = require('backbone.marionette')
  , Layout = require('./layout.js')

module.exports = Marionette.Controller.extend({
  initialize: function(options){
    console.log('test');

  },
  dashboard: function() {
    this.layout = new Layout;
  },
  test: function() {
    
  }
});