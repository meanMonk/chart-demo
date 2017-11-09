
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        var scChart = Highcharts.chart('container', {
            chart: {
                backgroundColor: 'rgba(255, 255, 255, 0.0)',
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 0,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = (Math.random() * (0.60 - 0.20) + 0.20)
                            scChart.setTitle({ text: 'Current Stock Value ' + y });
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Tilte Comming soon',
                style: {
                    color: '#FFF',
                    fontWeight: '700'
                }

            },
            xAxis: {
              type: 'datetime',
              tickPixelInterval: 10
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Sport Crypt',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i += 1) {
                        var x1 = time + i * 1000,
                        y1 = (Math.random() * (0.60 - 0.20) + 0.20)
                        data.push({
                            x: x1,
                            y: y1
                        });
                    }
                    return data;
                }())
            }]
        });
    });
