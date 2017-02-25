var angular = require('angular');

angular.module('myApp')
    .controller('InjectController', Controller);

/*
 * @ngInject
 */
function Controller($window) {
    $window.alert('$window is injected!!!!');
}