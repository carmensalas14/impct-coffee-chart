$(function() {
  if (!Highcharts.theme) {
    Highcharts.setOptions({
      chart: {
        borderWidth: 0,
        backgroundColor: 'none',
        borderColor: '#dadada',
        // spacingRight: -50,
        // spacingLeft: -50
        height:800,
        width:450
      },
      //colors: ['#f48627', '#359b64', '#e5c100']
    });
  }
  // 

  Highcharts.chart('chartContainer', {
    chart: {
      type: 'solidgauge',
      marginTop: 400,
      marginBottom: 100,
      // marginRight: -15,
      // marginLeft: -15,
      // width:250
    },

    title: {
      text: 'LOCAL PRODUCTS BUILDING LOCAL EDUCATION THIS IS COFFEE FOR THE FUTURE',
      style: {
        fontSize: '20px',
        color: 'black'
      },
      x: 0,
      y: 60
    },
    subtitle: {
      text: '<div style="text-align:center"><p style="float:left;width:100%;"><span style="font-size:16px; color:#b0498d;"> 4,000 lbs of Coffee </span><br /><span style="font-size:16px; color:#8e87ee"> Goal of $10,000</span></p></div>',
      x: 0,
      y: 300
    },
    subtitle: {
      text: '<div style="text-align:center"><p style="float:left;width:100%;"><span style="font-size:16px; color:#b0498d;"> step 1 </span><br /><span style="font-size:16px; color:#8e87ee"> step 2</span></p></div>',
      x: 0,
      y: 300
    },
    


    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Pounds of Coffee
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: '#DEDEDE',
        borderWidth: 0
      }, { // Track for Goal
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: '#DEDEDE',
        borderWidth: 0
      }]
    },

    yAxis: [{
      min: 0,
      max: 4000,
      lineWidth: 0,
      tickPositions: [],
      stops: [
        [0.1, '#b0498d'], // light
        [0.8, '#EFD7E7'], // dark
      ],
    }, {
      min: 0,
      max: 1000,
      lineWidth: 0,
      tickPositions: [],
      stops: [
        [0.1, '#8e87ee'], // light
        [0.5, '#D4D2F2'], // dark
      ],
    }, {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
      stops: [
        [0.1, '#95cdcb'], // light
        [0.5, '#D7F2F0'], // dark
      ],
    }],

    plotOptions: {
      solidgauge: {
        borderWidth: '18px',
        linecap: 'round',
        stickyTracking: false
      },
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },

    series: [{
      animation: false,
      name: 'Low Impact',
      borderColor: 'transparent',
      data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '100%',
        innerRadius: '100%',
        y: 3000,
        //stickyTracking: false,
        //enableMouseTracking: false
      }]
    }, {
      animation: false,
      name: 'Moderate Impact',
      borderColor: 'transparent',
      yAxis: 2,
      data: [{
        color: Highcharts.getOptions().colors[1],
        radius: '75%',
        innerRadius: '75%',
        y: 3000
      }]
    }, {
      animation: false,
      name: 'High Impact',
      borderColor: 'transparent',
      yAxis: 1,
      data: [{
        color: Highcharts.getOptions().colors[2],
        radius: '50%',
        innerRadius: '50%',
        y: 3000
      }]
    }]
  }, function(chart) {
    var y = this.series[0].data[0].y;
    for (var i = y; i >= 0; i = i - (y / 80)) {
      chart.addSeries({
        borderColor: chart.yAxis[0].toColor(i),
        data: [{
          y: i,
          radius: '100%',
          innerRadius: '100%',
        }],
        stickyTracking: false,
        enableMouseTracking: false
      }, false)
    }
    var y1 = this.series[1].data[0].y;
    for (var i = y1; i >= 0; i = i - (y1 / 80)) {
      chart.addSeries({
        borderColor: chart.yAxis[1].toColor(i),
        data: [{
          y: i,
          radius: '76%',
          innerRadius: '76%',
        }],
        stickyTracking: false,
        enableMouseTracking: false
      }, false)
    }

    chart.redraw();

  });


});

