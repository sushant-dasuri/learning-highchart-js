document.addEventListener('DOMContentLoaded', function () {
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
