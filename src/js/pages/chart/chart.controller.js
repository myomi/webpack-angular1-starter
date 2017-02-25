var angular = require('angular');

angular.module('myApp')
    .controller('ChartController', Controller);

function Controller() {
    var vm = this;
    vm.chartConfig = {
        title: {
            text: 'sample chart'
        },
        chart: {
            type: 'line',
            width: 400,
            height: 300,
        },
        series: [
            {
                name: 'count',
                data: [10, 20, 40, 70, 30]
            }
        ]
    };
}