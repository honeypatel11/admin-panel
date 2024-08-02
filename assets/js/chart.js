let options = {
    series: [
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25],
        },
    ],
    chart: {
        height: 58,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            color: '#009688',
            opacity: 0.4,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#009688'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

let options2 ={
    series: [
        {
            data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69],
        },
    ],
    chart: {
        height: 58,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: true,
            blur: 3,
            color: '#e5ac57',
            opacity: 0.4,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#e2a03f'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
}
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

let isDark=0;
let isRtl=0;
let options3 ={
    series: [
        {
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
        },
        {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
        },
    ],
    chart: {
        height: 360,
        type: 'bar',
        fontFamily: 'Nunito, sans-serif',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        colors: ['transparent'],
    },
    colors: ['#5c1ac3', '#ffbb44'],
    dropShadow: {
        enabled: true,
        blur: 3,
        color: '#515365',
        opacity: 0.4,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 10,
        },
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '14px',
        itemMargin: {
            horizontal: 8,
            vertical: 8,
        },
    },
    grid: {
        borderColor: isDark ? '#191e3a' : '#e0e6ed',
        padding: {
            left: 20,
            right: 20,
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: true,
            color: isDark ? '#3b3f5c' : '#e0e6ed',
        },
    },
    yaxis: {
        tickAmount: 6,
        opposite: isRtl ? true : false,
        labels: {
            offsetX: isRtl ? -10 : 0,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: isDark ? 'dark' : 'light',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    tooltip: {
        marker: {
            show: true,
        },
        y: {
            formatter: (val) => {
                return val;
            },
        },
    },
}
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();



let options4 ={
    series: [
        {
            data: [38, 60, 38, 52, 36, 40, 28],
        },
    ],
    chart: {
        height: 160,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#4361ee'],
    grid: {
        padding: {
            top: 5,
        },
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },

    if(isDark) {
        option['fill'] = {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [100, 100],
            },
        };
    },
}
var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();


let options5 ={
    series: [
        {
            data: [60, 28, 52, 38, 40, 36, 38],
        },
    ],
    chart: {
        height: 160,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#e7515a'],
    grid: {
        padding: {
            top: 5,
        },
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },

    if(isDark) {
        option['fill'] = {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [100, 100],
            },
        };
    },

}
var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();
let options6 = {
    series: [
        {
            name: 'Sales',
            data: [28, 50, 36, 60, 38, 52, 38],
        },
    ],
    chart: {
        height: 160,
        type: 'area',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#1abc9c'],
    grid: {
        padding: {
            top: 5,
        },
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },

    if(isDark) {
        option['fill'] = {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.3,
                opacityTo: 0.05,
                stops: [100, 100],
            },
        };
    },
};
var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();