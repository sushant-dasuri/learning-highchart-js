/* document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Working Days'
        },
        xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        },
        yAxis: {
            title: {
                text: 'Working Hours'
            }
        },
        series: [{
            name: 'Jane',
            data: [8, 10, 6, 8, 8]
        }, {
            name: 'John',
            data: [10, 4, 8, 7, 6]
        }]
    });
});
 */

// Load Highcharts
var Highcharts = require('highcharts');
// Alternatively, this is how to load Highstock. Highmaps and Highcharts Gantt are similar.
// var Highcharts = require('highcharts/highstock');

// Load the exporting module, and initialize it.
require('highcharts/modules/exporting')(Highcharts);

// Generate the chart
Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Working Days'
    },
    xAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    yAxis: {
        title: {
            text: 'Working Hours'
        }
    },
    series: [{
        name: 'Jane',
        data: [8, 10, 6, 8, 8]
    }, {
        name: 'John',
        data: [10, 4, 8, 7, 6]
    }]
});