/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var compileSass = require('broccoli-sass');

var app = new EmberApp();




module.exports = app.toTree();

