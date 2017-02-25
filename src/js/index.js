var angular = require('angular');
var router = require('angular-ui-router');
var material = require('angular-material');
var Highcharts = require('highcharts');
var highchartNg = require('highcharts-ng');

angular.module('myApp', [
    router,
    material,
    highchartNg
]).config(Config);

// configurations
function Config($windowProvider) {
    // setup highchart
    var $window = $windowProvider.$get();
    $window.Highcharts = Highcharts;
}
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
