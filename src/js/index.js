var angular = require('angular');
var router = require('angular-ui-router');
var material = require('angular-material');
var Highcharts = require('highcharts');
var highchartNg = require('highcharts-ng');

var myApp = angular.module('myApp', [
    router,
    material,
    highchartNg
]);

window.Highcharts = Highcharts;

// configurations
require('./config.route');

// css
require('../sass/index.scss');

// home page
require('../index.html');

// hello
require('./pages/hello/hello.controller');
require('./pages/hello/hello.html');

// clock 
require('./pages/clock/clock.controller');
require('./pages/clock/clock.html');

// chart 
require('./pages/chart/chart.controller');
require('./pages/chart/chart.html');
