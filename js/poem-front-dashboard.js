
$(document).ready(function () {

    //initialisation des notifications
    poem.initNotifAndMessages();

    //init des UI de la page
    Chart.defaults.global.defaultFontColor = '#fff';
    Chart.defaults.global.defaultFontSize = 8 ;
    Chart.defaults.global.defaultColor = '#fff';
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.titleFontSize = 10;
    Chart.defaults.global.tooltips.bodyFontSize = 10;
    Chart.defaults.global.responsive = false;
    Chart.defaults.global.backGroundColor = 'rgba(255,255,255,0.5)';

    Chart.pluginService.register({
        beforeDraw: function (chart, easing) {
            if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
                var helpers = Chart.helpers;
                var ctx = chart.chart.ctx;
                var chartArea = chart.chartArea;

                ctx.save();
                ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
                ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                ctx.restore();
            }
        }
    });


    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: "#fff",
                borderColor: "#fff",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#fff",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#000",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1000, 1200, 2300, 1953, 2005, 2500, 3243],
            }
        ]
    };

    var ctx = $('#chartdiv');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            chartArea: {backgroundColor: "#a4c5e4"},
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {display: false},
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        tickMarkLength: 5,
                        color: "rgba(255,255,255,1)",
                        zeroLineColor: "rgba(255,255,255,1)"
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {display: true},
                    gridLines: {
                        display: true,
                        drawOnChartArea: false,
                        tickMarkLength: 5,
                        color: "rgba(255,255,255,1)",
                        zeroLineColor: "rgba(255,255,255,1)"
                    }
                }]
            }
        }
    });

    $("#dashboard").find('.list .badge').each(function() {
        $(this).hide();
    });

    $("#dashboard").find('.badges .plus a').click(function (e) {
        e.preventDefault();

        $(this).parent().parent().find('.list .badge').each(function() {
            $(this).slideToggle();
        });
    });
    
    $('.recommandations .content .img').each(function () {
       $(this).css({
         "backgroundImage" : 'url("./public/img/' + $(this).data('img')+'")'
       });
    });

});