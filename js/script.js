/* global Highcharts */
/* global $ */
$(function () {
  
    Highcharts.chart('chartContainer', {

        chart: {
            type: 'solidgauge',
        
        marginTop: 10,
            backgroundColor: null
        },

        title: {
            text: '',
            style: {
                fontSize: '24px'
            }
        },
        subtitle: {
          text: '<div style="text-align:center"><p style="float:left;width:100%;"><span style="font-size:15px; color:#571e4f"> Hours </span><br><span style="font-size:15px; color:#571e4f"> lbs of coffee consumed</span></p></div>',
          x: 0,
          y: 170
        },
        credits: {
        enabled: false
    },

        
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            },
             { // Track for Stand
            outerRadius: '62%',
            innerRadius: '0%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.6)
                .get(),
            borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            series: {
             enableMouseTracking: false
        },
            solidgauge: {
                borderWidth: '34px',
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: 'Move',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: 80
            }]
        }, {
            name: 'Exercise',
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: 65
            }]
        }, {
            borderColor: Highcharts.getOptions().colors[2]
        }]
    },

    function callback() {
      
    });


});
