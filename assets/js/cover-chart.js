
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        var scChart = Highcharts.chart('container', {
            chart: {
                backgroundColor: 'rgba(255, 255, 255, 0)',
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 0,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        var randT = 10;
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = (Math.random() * (60 - 40) + 40);
                            scChart.setTitle({ text: 'Current Vol: ' + y.toFixed(4) });
                            series.addPoint([x, y], true, true);
                        }, randT * 1000);
                    }
                }
            },
            credits:{
              enabled: false
            },
            title: {
                text: 'Current Vol: ',
                align: 'right',
                style: {
                    color: '#FFF',
                    fontWeight: '700'
                }

            },
            xAxis: {
              type: 'datetime',
              tickPixelInterval: 20,
              lineColor: '#707073',
              labels: {
                 style: {
                    color: '#E0E0E3'
                 }
              }
            },
            yAxis: {
                title: {
                    text: 'Volume'
                },
                lineColor: '#707073',
                labels: {
                   style: {
                      color: '#E0E0E3'
                   }
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
                        var x1 = time + i * 1000 * 10,
                        y1 = (Math.random() * (60 - 40) + 40)
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
