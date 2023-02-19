/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: LeaderBoard init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        if (colors) {
            colors = JSON.parse(colors);
            return colors.map(function (value) {
                var newValue = value.replace(" ", "");
                if (newValue.indexOf(",") === -1) {
                    var color = getComputedStyle(document.documentElement).getPropertyValue(
                        newValue
                    );
                    if (color) return color;
                    else return newValue;
                } else {
                    var val = value.split(",");
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(
                            document.documentElement
                        ).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors atributes not found on', chartId);
        }
    }
}

// Chart-1
var areachartmini1Colors = getChartColorsArray("mini-chart-1");
if (areachartmini1Colors) {
    var options1 = {
        series: [{
            data: [7, 22, 11, 21, 17, 25]
        }],
        chart: {
            type: 'line',
            width: 48,
            height: 34,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartmini1Colors,
        stroke: {
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#mini-chart-1"), options1);
    chart1.render();
}


//  Sales Statistics
var barchartColors = getChartColorsArray("hours_spent_chart");
if (barchartColors) {
var options = {
    series: [{
        data: [7, 11, 15, 20, 18, 23, 20, 23, 21, 19]
    }],
    chart: {
        toolbar: {
            show: false,
        },
        height: 170,
        type: 'bar',
        events: {
            click: function (chart, w, e) {
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '70%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    colors: barchartColors,
    grid: {
        show: false,
    },
    xaxis: {
        categories: ['M', 'T','W','T','F', 'S', 'S','M', 'T', 'W'],
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: barchartColors,
                fontSize: '12px'
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#hours_spent_chart"), options);
chart.render();
}

var barchartColors = getChartColorsArray("chart-radialBar");
if (barchartColors) {
var options = {
  series: [44, 55, 67],
  chart: {
    height: 260,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      },

      hollow: {
        margin: 4,
        size: '14%',
      },
      track: {
        strokeWidth: '60%',
        opacity: 1,
        margin: 16,
      },
    }
  },
  stroke: {
    lineCap: 'round'
  },
  colors: barchartColors,
  labels: ['Productive', 'Neutral', 'Unproductive'],
  legend: {
    show: true,
    floating: true,
    fontSize: '16px',
    position: 'left',
    offsetX: -24,
    offsetY: 15,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0
    },
    formatter: function (seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      vertical: 5
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        show: false
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart-radialBar"), options);
chart.render();

}


// User Chart

// User-1
var areachartuser1Colors = getChartColorsArray("user-chart-1");
if (areachartuser1Colors) {
    var options1 = {
        series: [{
            data: [2, 22, 11, 21, 17, 25]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartuser1Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#user-chart-1"), options1);
    chart1.render();
}


// User-2
var areachartuser2Colors = getChartColorsArray("user-chart-2");
if (areachartuser2Colors) {
    var options1 = {
        series: [{
            data: [18, 17, 21, 11, 21, 5]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartuser2Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#user-chart-2"), options1);
    chart1.render();
}

// User-3
var areachartuser3Colors = getChartColorsArray("user-chart-3");
if (areachartuser3Colors) {
    var options1 = {
        series: [{
            data: [22, 7, 18, 07, 17, 8]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartuser3Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#user-chart-3"), options1);
    chart1.render();
}




// Other-1
var areachartother1Colors = getChartColorsArray("other-chart-1");
if (areachartother1Colors) {
    var options1 = {
        series: [{
            data: [5, 12, 30, 07, 25, 15]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartother1Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#other-chart-1"), options1);
    chart1.render();
}

// Other-2
var areachartother2Colors = getChartColorsArray("other-chart-2");
if (areachartother2Colors) {
    var options1 = {
        series: [{
            data: [22, 7, 18, 07, 17, 8]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartother2Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#other-chart-2"), options1);
    chart1.render();
}

// Other-3
var areachartother3Colors = getChartColorsArray("other-chart-3");
if (areachartother3Colors) {
    var options1 = {
        series: [{
            data: [25, 32, 12, 25, 17, 25]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartother3Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#other-chart-3"), options1);
    chart1.render();
}

// Other-4
var areachartother4Colors = getChartColorsArray("other-chart-4");
if (areachartother4Colors) {
    var options1 = {
        series: [{
            data: [23, 25, 12, 23, 17, 05]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartother4Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#other-chart-4"), options1);
    chart1.render();
}

// Other-5
var areachartother5Colors = getChartColorsArray("other-chart-5");
if (areachartother5Colors) {
    var options1 = {
        series: [{
            data: [23, 25, 12, 23, 17, 05]
        }],
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: areachartother5Colors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        }
    };

    var chart1 = new ApexCharts(document.querySelector("#other-chart-5"), options1);
    chart1.render();
}