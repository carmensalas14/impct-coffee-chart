/* global Highcharts */
/* global $ */
var coffeeConsumed = 344;
var educationHours = coffeeConsumed * .06;

$(function () {
    Highcharts.setOptions({
        chart: {
            backgroundColor: null
        },
        colors: ['#a25ea5', '#a8d15c', '#80f6fc'],
    
    });
  
    Highcharts.chart('chartContainer', {

        chart: {
            type: 'solidgauge',
        
        marginTop: 50,
            
        },

        title: {
            text: '',
            style: {
                fontSize: '24px'
            }
        },
        
        subtitle: {
          text: '<div style="text-align:center"><p style="float:left;width:100%;"><span style="font-size:16px; font-weight:800; font-family:Montserrat, Helvetica sans-serif; color:#915591">344 lbs of coffee </span><br><span style="font-size:16px; font-weight:800; font-family:Montserrat, Helvetica sans-serif; color:#915591">consumed</span><br><br><br><span style="font-size:16px; font-weight:800; font-family:Montserrat, Helvetica sans-serif; color:#799929"> 206.4 hours of </span><br><span style="font-size:16px; font-weight:800; font-family:Montserrat, Helvetica sans-serif; color:#799929">education created</span></p></div>',
          x: 0,
          y: 170
        },
        credits: {
        enabled: false
    },

// Tracks for circles
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for purple hours
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.7).get(),
                borderWidth: 0
            }, { // Track for green coffee 
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.6).get(),
                borderWidth: 0
            },
             { // Center of chart background color
            outerRadius: '63%',
            innerRadius: '0%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.8)
                .get(),
            borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 4000,
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
            name: 'CoffeeConsumed',
            borderColor: Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '100%',
                innerRadius: '100%',
                y: coffeeConsumed
            }]
        }, {
            name: 'HoursOfEducation',
            borderColor: Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '75%',
                innerRadius: '75%',
                y: educationHours
            }]
        }]
    },

    function callback() {
      
    });


});
