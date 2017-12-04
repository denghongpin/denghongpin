define(["jquery", "text!tlps/hideinSynthesis.html", "echarts"], function($, hideinSynthesis, echarts) {
    return function() {
        $(".hideinContent").html(hideinSynthesis);
        var leftPic = document.getElementById("left_pic");
        var myChart = echarts.init(leftPic);
        var scale = 1;
        var echartData = [{
            value: 335,
            name: '高度超容'
        }, {
            value: 310,
            name: '中度超容'
        }, {
            value: 324,
            name: '低度超容'
        }, {
            value: 135,
            name: '无超容'
        }]
        var rich = {
            yellow: {
                color: "#fe0000",
                fontSize: 30 * scale,
                padding: [5, 4],
                align: 'center'
            },
            total: {
                color: "#ffc72b",
                fontSize: 40 * scale,
                align: 'center'
            },
            white: {
                color: "#fe0000",
                align: 'center',
                fontSize: 14 * scale,
                padding: [21, 0]
            },
            blue: {
                color: '#000',
                fontSize: 16 * scale,
                align: 'center'
            },
            hr: {
                borderColor: '#0b5263',
                width: '100%',
                borderWidth: 1,
                height: 0,
            }
        }
        var option = {
            legend: {
                orient: 'vertical',
                top: '10px',
                right: '3%',
                data: ['高度超容', '中度超容', '低度超容', '无超容'],
                color: ["#fe0000", "#df6d00", "#0071c4", "#02a926"],
            },
            backgroundColor: '#fff',
            title: {
                text: '超容监狱',
                left: '35%',
                top: '45%',
                padding: [24, 0],
                textStyle: {
                    color: '#000',
                    fontSize: 18 * scale,
                    align: 'center'
                }
            },

            series: [

                {
                    type: 'pie',
                    name: '',
                    radius: ['40%', "40%"],
                    center: ['40%', '45%'],
                    silent: true,
                    clockwise: false,
                    data: [{
                        value: 0,
                        name: '',
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                                formatter: '325所',
                                color: 'red',
                                fontSize: 30,
                                fontWeight: 'bold'
                            }
                        },
                    }]
                }, {

                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['40%', '50%'],
                    hoverAnimation: false,
                    color: ["#fe0000", "#df6d00", "#0071c4", "#02a926"],
                    label: {
                        normal: {
                            formatter: function(params, ticket, callback) {
                                var total = 0; //考生总数量
                                var percent = 0; //考生占
                                echartData.forEach(function(value, index, array) {
                                    total += value.value;
                                });
                                percent = ((params.value / total) * 100).toFixed(1);
                                return params.value + '所\n' + params.name + ':' + percent + '%';
                            },
                            rich: rich
                        },
                    },
                    data: [{
                        value: 0,
                        name: '',
                        label: {
                            normal: {
                                // show: true,
                                position: 'center',
                                formatter: '325',
                                color: '#000',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ccc',
                                shadowBlur: 50,
                                shadowColor: 'yellow',
                                show: true
                            }
                        }
                    }],
                    labelLine: {
                        normal: {
                            length: 15,
                            length2: 15,
                            lineStyle: {
                                color: '#0b5263'
                            }
                        }
                    },
                    data: echartData
                }
            ]
        };
        myChart.setOption(option)
            //第二张折线图
        var footerpic = document.getElementById("footerpic");
        var myCharts = echarts.init(footerpic);
        var options = {
            color: ["#00a23a", "#df6c00", "#3563eb", "#d92405"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['环比关押总量：2586人', '总关押量 ： 2586人', '环比新收押量 ：586人', '新收押量 ：586人'],
                left: '10%',
                top: '5%',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '20%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '环比关押总量：2586人',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: [900, 100, 101, 134, 90, 230, 210, 120, 132, 101, 134, 800, 230, 210, 900, 100, 101, 134, 90, 230, 210, 120, 132, 101, 134, 800, 230, 210]
                },
                {
                    name: '总关押量 ： 2586人',
                    type: 'line',
                    smooth: true,
                    data: [500, 182, 191, 234, 290, 330, 310, 120, 132, 200, 134, 90, 230, 210, ]
                },
                {
                    name: '环比新收押量 ：586人',
                    type: 'line',
                    smooth: true,
                    data: [500, 182, 191, 294, 290, 330, 209, 120, 132, 200, 194, 90, 230, 210, ],
                    lineStyle: {
                        normal: {
                            type: 'dashed',
                        }
                    }

                },
                {
                    name: '新收押量 ：586人',
                    type: 'line',
                    smooth: true,
                    data: [500, 182, 191, 264, 290, 630, 310, 120, 132, 290, 134, 90, 230, 280, ],
                    borderType: 'dashed',
                    lineStyle: {
                        normal: {
                            type: 'dashed',
                        }
                    }
                },

            ]
        };

        myCharts.setOption(options)
            //echart自适应
        window.addEventListener("resize", function() {
            myChart.resize();
            myCharts.resize();
        });

    }
});