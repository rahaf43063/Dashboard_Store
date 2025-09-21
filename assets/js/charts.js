var Chart_1 = {
    series: [76, 67, 61, 90, 85, 72, 68],
    chart: {
        type: 'radialBar',
        fontFamily: 'Scheherazade New, sans-serif',
        rtl: true,
        width: '100%',
        height: 350,
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            },
            barLabels: {
                enabled: true,
                useSeriesColors: true,
                offsetX: -6,
                fontSize: '10px',
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
            },
        }
    },
    colors: ['#990047', '#b0407c', '#CC005F', '#FF3392', '#f57aae', '#FF66AD', '#FF99C9'],
    labels: ['ملابس نسائية', 'أحذية', 'الصحة والجمال', 'الأطفال والأمومة', 'مجوهرات وإكسسوارات', 'الحقائب والأمتعة', 'إلكترونيات وأجهزة'],
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            legend: {
                position: 'bottom',
                offsetY: 0,
                height: 100
            }
        }
    }]
};

const Chart_2 = {
    series: [{
        name: 'المبيعات',
        data: [300, 400, 350, 500, 490, 600, 700, 910, 1250, 1100, 1300, 1450]
    }],
    chart: {
        type: 'line',
        height: 350,
        fontFamily: 'Scheherazade New, sans-serif',
        rtl: true,
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false
            },
            export: {
                csv: {
                    filename: 'تقرير-المبيعات-الشهري',
                    columnDelimiter: ',',
                    headerCategory: 'الشهر',
                    headerValue: 'المبيعات',
                    dateFormatter: function (timestamp) {
                        return new Date(timestamp).toLocaleDateString('ar-EG');
                    }
                },
                svg: {
                    filename: 'تقرير-المبيعات-الشهري'
                },
                png: {
                    filename: 'تقرير-المبيعات-الشهري'
                }
            }
        },
        zoom: {
            enabled: false
        }
    },
    colors: ['#DB2777', '#D97706'],
    stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#DB2777', '#D97706']
    },
    markers: {
        size: 5,
        hover: {
            size: 7
        }
    },
    xaxis: {
        categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        labels: {
            style: {
                colors: '#6B2D5C',
                fontSize: '12px',
                fontFamily: 'Scheherazade New, sans-serif'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#6B2D5C',
                fontSize: '12px',
                fontFamily: 'Scheherazade New, sans-serif'
            },
            formatter: function (value) {
                return value.toLocaleString('ar-EG');
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -5,
        fontSize: '14px',
        fontFamily: 'Scheherazade New, sans-serif',
        labels: {
            colors: '#6B2D5C',
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            radius: 6,
            offsetY: 1
        },
        itemMargin: {
            horizontal: 15,
            vertical: 5
        }
    },
    tooltip: {
        rtl: true,
        style: {
            fontFamily: 'Scheherazade New, sans-serif',
            fontSize: '14px'
        },
        y: {
            formatter: function (value) {
                return value.toLocaleString('ar-EG') + ' ر.س';
            }
        }
    },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

const Chart_3 = {
    series: [{
        name: '2024',
        data: [440, 550, 570, 560, 610, 580, 650, 720, 680, 750, 800, 850]
    }, {
        name: '2023',
        data: [350, 410, 360, 420, 450, 480, 520, 580, 540, 600, 650, 700]
    }],
    chart: {
        type: 'bar',
        height: 400,
        stacked: false,
        fontFamily: 'Scheherazade New, sans-serif',
        rtl: true,
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800
        },
        toolbar: {
            show: true,
            offsetX: 20,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false
            },
            export: {
                csv: { filename: 'مقارنة-المبيعات-السنوية' },
                svg: { filename: 'مقارنة-المبيعات-السنوية' },
                png: { filename: 'مقارنة-المبيعات-السنوية' }
            }
        }
    },
    colors: ['#FFDDE2', '#FF69B4'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '70%',
            borderRadius: 5,
            dataLabels: { position: 'top' }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val.toLocaleString('ar-EG');
        },
        offsetY: -30,
        style: {
            fontSize: '12px',
            fontFamily: 'Scheherazade New, sans-serif',
            colors: ['#6B2D5C']
        }
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['#fff'],
        lineCap: 'round'
    },
    xaxis: {
        categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        labels: {
            style: {
                colors: '#6B2D5C',
                fontSize: '12px',
                fontFamily: 'Scheherazade New, sans-serif'
            },
            offsetY: 5
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#6B2D5C',
                fontSize: '12px',
                fontFamily: 'Scheherazade New, sans-serif'
            },
            formatter: function (val) {
                return val.toLocaleString('ar-EG') + ' ر.س';
            }
        },
        title: {
            text: 'المبلغ (ر.س)',
            style: {
                color: '#6B2D5C',
                fontSize: '12px',
                fontFamily: 'Scheherazade New, sans-serif',
                fontWeight: 600
            }
        },
        min: 0,
        tickAmount: 5
    },
    tooltip: {
        rtl: true,
        shared: true,
        intersect: false,
        style: {
            fontSize: '14px',
            fontFamily: 'Scheherazade New, sans-serif'
        },
        y: {
            formatter: function (val) {
                return val.toLocaleString('ar-EG') + ' ر.س';
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -5,
        fontSize: '14px',
        fontFamily: 'Scheherazade New, sans-serif',
        labels: {
            colors: '#6B2D5C',
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            radius: 6,
            offsetY: 1
        },
        itemMargin: {
            horizontal: 15,
            vertical: 5
        }
    },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

const Chart_4 = {
    series: [85],
    chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
    },
    colors: ['#FFDDE2'],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: '50%',
            },
            dataLabels: {
                name: {
                    offsetY: 20,
                    color: '#6B2D5C',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontFamily: 'Scheherazade New, sans-serif'
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: '#6B2D5C',
                    formatter: function (val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            gradientToColors: ['#FF69B4'],
            stops: [0, 100]
        }
    },
    stroke: {
        dashArray: 4
    },
    labels: ['الإنجاز'],
};

const Chart_5 = {
    series: [{ data: [2400, 2800, 2200, 3500, 4000, 3800, 4500] }],
    chart: { type: 'area', height: 80, sparkline: { enabled: true }, fontFamily: 'Scheherazade New, Scheherazade New, Scheherazade New, sans-serif' },
    colors: ['#FF69B4'],
    stroke: { width: 2, curve: 'smooth' },
    fill: { type: 'gradient', gradient: { shadeIntensity: 0.3, opacityFrom: 0.4, opacityTo: 0.1 } },
    tooltip: { x: { show: false }, y: { formatter: v => v + ' ريال' } }
};

const Chart_6 = {
    series: [{ data: [120, 140, 110, 160, 130, 180, 200] }],
    chart: {
        type: 'bar',
        height: 300,
        sparkline: { enabled: false },
        fontFamily: 'Scheherazade New, sans-serif'
    },
    title: {
        text: 'عدد الطلبات خلال الأسبوع',
        align: 'center',
        style: {
            fontSize: '18px',
            fontFamily: 'Scheherazade New',
            color: '#D7559A'
        }
    },
    colors: ['#D7559A'],
    plotOptions: {
        bar: {
            columnWidth: '60%',
            borderRadius: 4
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            gradientToColors: ['#FBA0C8'],
            stops: [0, 100]
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            fontSize: '14px',
            fontFamily: 'Scheherazade New',
            colors: ['#6B2D5C'],
            fontWeight: 'bold'
        },
        formatter: function (val) {
            return val + ' طلب';
        },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.2
        }
    },
    tooltip: {
        x: { show: false },
        y: {
            formatter: v => v + ' طلب'
        }
    },
    xaxis: {
        categories: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        labels: {
            style: {
                fontSize: '14px',
                fontFamily: 'Scheherazade New',
                colors: ['#333']
            }
        }
    },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

const Chart_7 = {
    series: [
        { name: 'مباشر', data: [20, 28, 25, 30, 36, 32, 40] },
        { name: 'إحالات', data: [10, 14, 12, 18, 16, 20, 22] },
        { name: 'شبكات اجتماعية', data: [8, 10, 9, 12, 14, 13, 15] }
    ],
    chart: { type: 'area', height: 300, stacked: true, fontFamily: 'Scheherazade New, Scheherazade New, Scheherazade New, sans-serif', rtl: true },
    colors: ['#D7559A', '#E6BE8A', '#FBA0C8'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 0.35, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 50, 100] } },
    xaxis: { categories: ['س', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'], labels: { style: { colors: '#6B7280' } } },
    yaxis: { labels: { style: { colors: '#6B7280' } } },
    tooltip: { rtl: true },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

const Chart_8 = {
    chart: { type: 'heatmap', height: 300, fontFamily: 'Scheherazade New, Scheherazade New, Scheherazade New, sans-serif' },
    dataLabels: { enabled: false },
    colors: ['#FBCFE8', '#F9A8D4', '#F472B6', '#EC4899', '#DB2777'],
    xaxis: { categories: ['00', '03', '06', '09', '12', '15', '18', '21'] },
    yaxis: { labels: { style: { colors: '#6B7280' } } },
    series: Array.from({ length: 7 }, (_, i) => ({
        name: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'][i],
        data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10)
    })),
    tooltip: { rtl: true },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

var Chart_9 = {
    series: [{ name: 'المبيعات', data: [720, 610, 560, 480, 430, 380, 320] }],
    chart: { type: 'bar', height: 300, fontFamily: 'Scheherazade New, Scheherazade New, Scheherazade New, sans-serif' },
    colors: ['#FF69B4'],
    plotOptions: { bar: { horizontal: true, barHeight: '60%' } },
    fill: { type: 'gradient', gradient: { shade: 'light', gradientToColors: ['#6B7280'], stops: [0, 100] } },
    xaxis: { categories: ['ملابس نسائية', 'أحذية', 'الصحة والجمال', 'الأطفال والأمومة', 'مجوهرات وإكسسوارات', 'الحقائب والأمتعة', 'إلكترونيات وأجهزة'], labels: { style: { colors: '#6B7280' } } },
    dataLabels: { enabled: false },
    tooltip: { rtl: true, y: { formatter: v => v + ' قطعة' } },
    grid: { borderColor: '#F3F4F6' },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: {
                width: '100%',
                height: 400
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            }
        }
    }, {
        breakpoint: 480,
        options: {
            chart: {
                height: 450,
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    offsetY: 5,
                    style: {
                        fontSize: '8px'
                    }
                }
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                offsetY: 10
            }
        }
    }]
};

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector("#salesPieChart")) {
        var chart_1 = new ApexCharts(document.querySelector("#salesPieChart"), Chart_1);
        chart_1.render();
    }
    if (document.querySelector("#monthlyPerformanceChart")) {
        var chart_2 = new ApexCharts(document.querySelector("#monthlyPerformanceChart"), Chart_2);
        chart_2.render();
    }
    if (document.querySelector("#comparisonChart")) {
        var chart_3 = new ApexCharts(document.querySelector("#comparisonChart"), Chart_3);
        chart_3.render();
    }
    if (document.querySelector("#completionRadial")) {
        var chart_4 = new ApexCharts(document.querySelector("#completionRadial"), Chart_4);
        chart_4.render();
    }
    if (document.querySelector("#kpiRevenue")) {
        var chart_5 = new ApexCharts(document.querySelector("#kpiRevenue"), Chart_5);
        chart_5.render();
    }
    if (document.querySelector("#kpiOrders")) {
        var chart_6 = new ApexCharts(document.querySelector("#kpiOrders"), Chart_6);
        chart_6.render();
    }
    if (document.querySelector("#trafficArea")) {
        var chart_7 = new ApexCharts(document.querySelector("#trafficArea"), Chart_7);
        chart_7.render();
    }
    if (document.querySelector("#activityHeatmap")) {
        var chart_8 = new ApexCharts(document.querySelector("#activityHeatmap"), Chart_8);
        chart_8.render();
    }
    if (document.querySelector("#topProducts")) {
        var chart_9 = new ApexCharts(document.querySelector("#topProducts"), Chart_9);
        chart_9.render();
    }
});
