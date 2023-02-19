/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Widgets init js
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
                    var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                    if (color) return color;
                    else return newValue;;
                } else {
                    var val = value.split(',');
                    if (val.length == 2) {
                        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                        return rgbaColor;
                    } else {
                        return newValue;
                    }
                }
            });
        } else {
            console.warn('data-colors Attribute not found on:', chartId);
        }
    }
}

// world map with line & markers
var vectorMapWorldLineColors = getChartColorsArray("users-by-country");
if (vectorMapWorldLineColors)
    var worldlinemap = new jsVectorMap({
        map: "world_merc",
        selector: "#users-by-country",
        zoomOnScroll: true,
        zoomButtons: true,
        markers: [{
                name: "Greenland",
                coords: [72, -42]
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468]
            },
            {
                name: "Brazil",
                coords: [-14.2350, -51.9253]
            },
            {
                name: "Egypt",
                coords: [26.8206, 30.8025]
            },
            {
                name: "Russia",
                coords: [61, 105]
            },
            {
                name: "China",
                coords: [35.8617, 104.1954]
            },
            {
                name: "United States",
                coords: [37.0902, -95.7129]
            },
            {
                name: "Norway",
                coords: [60.472024, 8.468946]
            },
            {
                name: "Ukraine",
                coords: [48.379433, 31.16558]
            },
        ],
        lines: [{
                from: "Canada",
                to: "Egypt"
            },
            {
                from: "Russia",
                to: "Egypt"
            },
            {
                from: "Greenland",
                to: "Egypt"
            },
            {
                from: "Brazil",
                to: "Egypt"
            },
            {
                from: "United States",
                to: "Egypt"
            },
            {
                from: "China",
                to: "Egypt"
            },
            {
                from: "Norway",
                to: "Egypt"
            },
            {
                from: "Ukraine",
                to: "Egypt"
            },
        ],
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapWorldLineColors,
                fillOpacity: 1,
            },
        },
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6",
        },
    })

// Countries charts
var barchartCountriesColors = getChartColorsArray("countries_charts");
if (barchartCountriesColors) {
    var options = {
        series: [{
            data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
            name: 'Sessions',
        }],
        chart: {
            type: 'bar',
            height: 436,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                distributed: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        colors: barchartCountriesColors,
        dataLabels: {
            enabled: true,
            offsetX: 32,
            style: {
                fontSize: '12px',
                fontWeight: 400,
                colors: ['#adb5bd']
            }
        },

        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['India', 'United States', 'China', 'Indonesia', 'Russia', 'Bangladesh', 'Canada', 'Brazil', 'Vietnam', 'UK'],
        },
    };

    var chart = new ApexCharts(document.querySelector("#countries_charts"), options);
    chart.render();
}

// Audiences metrics column charts
var chartColumnStackedColors = getChartColorsArray("column_stacked");
if (chartColumnStackedColors) {
    var options = {
        series: [{
            name: 'Avg Earning',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'Total Customer',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'Total Orders',
            data: [11, 17, 15, 15, 21, 14]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
            ],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        },
        colors: chartColumnStackedColors,
    };

    var chart = new ApexCharts(document.querySelector("#column_stacked"), options);
    chart.render();
}

// Income Breakdown
var chartDonutBasicColors = getChartColorsArray("simple_dount_chart");
if (chartDonutBasicColors) {
    var options = {
        series: [55, 49, 18, 34],
        chart: {
            height: 270,
            type: 'donut',
        },
        labels: ["Marketing", "Offline", "Direct Sales", "Others"],
        legend: {
            position: 'bottom',
            show: false
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartDonutBasicColors
    };

    var chart = new ApexCharts(document.querySelector("#simple_dount_chart"), options);
    chart.render();
}

// Sales by Locations
var vectorMapUsaColors = getChartColorsArray("sales-by-locations");
if (vectorMapUsaColors)
    var usmap = new jsVectorMap({
        map: 'us_merc_en',
        selector: "#sales-by-locations",
        regionStyle: {
            initial: {
                stroke: "#9599ad",
                strokeWidth: 0.25,
                fill: vectorMapUsaColors,
                fillOpacity: 1,
            },
        },
        zoomOnScroll: false,
        zoomButtons: false,
    })

// Total Portfolio Donut Charts
var donutchartportfolioColors = getChartColorsArray("portfolio_donut_charts");
if (donutchartportfolioColors) {
    var options = {
        series: [19405, 40552, 15824, 30635],
        labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
        chart: {
            type: "donut",
            height: 210,
        },

        plotOptions: {
            pie: {
                size: 100,
                offsetX: 0,
                offsetY: 0,
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '18px',
                            offsetY: -5,
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            color: '#343a40',
                            fontWeight: 500,
                            offsetY: 5,
                            formatter: function (val) {
                                return "$" + val
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '13px',
                            label: 'Total value',
                            color: '#9599ad',
                            fontWeight: 500,
                            formatter: function (w) {
                                return "$" + w.globals.seriesTotals.reduce(function (a, b) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value;
                }
            }
        },
        stroke: {
            lineCap: "round",
            width: 2
        },
        colors: donutchartportfolioColors,
    };

    var chart = new ApexCharts(document.querySelector("#portfolio_donut_charts"), options);
    chart.render();
}

//   Color Range

// Heatmap Charts Generatedata
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var chartHeatMapColors = getChartColorsArray("color_heatmap");
if (chartHeatMapColors) {
    var options = {
        series: [{
                name: 'Jan',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Feb',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Mar',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Apr',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'May',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jun',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Jul',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Aug',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            },
            {
                name: 'Sep',
                data: generateData(20, {
                    min: -30,
                    max: 55
                })
            }
        ],
        chart: {
            height: 310,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                            from: -30,
                            to: 5,
                            name: 'Youtube',
                            color: chartHeatMapColors[0]
                        },
                        {
                            from: 6,
                            to: 20,
                            name: 'Meta',
                            color: chartHeatMapColors[1]
                        },
                        {
                            from: 21,
                            to: 45,
                            name: 'Google',
                            color: chartHeatMapColors[2]
                        },
                        {
                            from: 46,
                            to: 55,
                            name: 'Medium',
                            color: chartHeatMapColors[3]
                        },
                        {
                            from: 36,
                            to: 40,
                            name: 'Other',
                            color: chartHeatMapColors[4]
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            style: {
                fontWeight: 500,
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#color_heatmap"), options);
    chart.render();
}

// Basic area Charts

var areachartBasicColors = getChartColorsArray("area_chart_basic");
if (areachartBasicColors) {
    var options = {
        series: [{
            name: "Total Income",
            data: series.monthDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 325,
            offsetX: 0,
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        labels: series.monthDataSeries1.dates,
        legend: {
            horizontalAlign: 'left'
        },
        colors: areachartBasicColors
    };

    var chart = new ApexCharts(document.querySelector("#area_chart_basic"), options);
    chart.render();
}