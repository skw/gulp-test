var View =  require('./view.js')
  , Backbone = require('backbone')
  , Marionette = require('backbone.marionette')
  , Dashboard = require('./modules/dashboard/')
  , Router = require('./modules/dashboard/router.js')
  , App
;

console.log(Marionette);

App = new Marionette.Application();

App.module("Dashboard", new Dashboard);

App.addInitializer(function() {
  Backbone.history.start();
});

App.start();

