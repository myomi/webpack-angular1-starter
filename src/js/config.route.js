var angular = require('angular');

angular.module('myApp')
    .config(routeConfig);

function routeConfig($stateProvider) {
    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'hello.html',
            controller: 'HelloController',
            controllerAs: 'vm'
        })
        .state('clock', {
            url: '/clock',
            templateUrl: 'clock.html',
            controller: 'ClockController',
            controllerAs: 'vm'
        })
        .state('chart', {
            url: '/chart',
            templateUrl: 'chart.html',
            controller: 'ChartController',
            controllerAs: 'vm'
        })
        ;
}