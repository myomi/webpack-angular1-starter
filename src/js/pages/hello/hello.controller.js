var angular = require('angular');

angular.module('myApp')
    .controller('HelloController', Controller);

function Controller() {
    var vm = this;
    vm.message = 'Hello, Angular1.X!';
}