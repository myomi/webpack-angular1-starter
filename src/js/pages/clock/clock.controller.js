var angular = require('angular');

angular.module('myApp')
    .controller('ClockController', Controller);

function Controller() {
    var vm = this;
    vm.now = new Date();
}