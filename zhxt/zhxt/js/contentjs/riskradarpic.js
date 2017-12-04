define(["jquery", "text!tlps/riskradarpic.html", "echarts", "worldcloud"], function($, riskradarpic, echarts) {
    return function() {
        $(".risk_content").html(riskradarpic);
        //雷达图
        var topradar = document.getElementById("topradar")
        var myChart = echarts.init(topradar);
        //雷达图
        var option = {
            backgroundColor: '#fff',
            radar: [{
                    indicator: [
                        { text: '指标一', max: 200, color: "#49A6B2" },
                        { text: '指标二', max: 200, color: "#02A926" },
                        { text: '指标三', max: 200, color: "##0098bc" },
                        { text: '指标四', max: 200, color: "#0071c4" },
                        { text: '指标五', max: 200, color: "#df6d00" },
                        { text: '指标一', max: 200, color: "#df3e00" },
                        { text: '指标二', max: 200, color: "#dd6d96" },
                        { text: '指标三', max: 200, color: "#bf73c7" },
                    ],
                    center: ['50%', '50%'],
                    radius: 120,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter: '{value}',
                        textStyle: {
                            color: '#72ACD1'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(244, 244, 244, 0.2)',
                                'rgba(254, 254, 254, 0.2)', 'rgba(244, 244, 244, 0.2)',
                                'rgba(254, 254, 254, 0.2)', 'rgba(114, 172, 209, 1)'
                            ],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#d1d1d1'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#d1d1d1'
                        }
                    }
                },

            ],
            series: [{
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 4
                            }
                        }
                    },
                    data: [{
                            value: [120, 124, 32, 99, 125, 78, 130, 110],
                            symbol: 'rect',
                            symbolSize: 5,

                            areaStyle: {
                                normal: {
                                    color: 'rgba(234, 48, 0, 0.3)'
                                }
                            }
                        },
                        {
                            value: [110, 104, 70, 79, 105, 99, 100, 10],
                            lineStyle: {
                                normal: {
                                    type: 'dashed',
                                    color: "#0086c0"

                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: 'rgba(0, 168, 192, 0.3)'
                                }
                            }
                        }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['0%', '0%'],
                    avoidLabelOverlap: false,
                    show: 'false',
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }

            ]
        }
        myChart.setOption(option);
        myChart.on('click', function(params) {
            //雷达图点击隐藏折线图显示table栏
            $(".miantext").hide()
            $(".mianlist").show()
        });
        //雷达图右边图例
        var radarright = document.getElementById("radar_right")
        var myChart2 = echarts.init(radarright);
        var option2 = {

            legend: {
                orient: 'vertical',
                top: '15px',
                left: '10%',
                data: ['设施状况', '信息录入', '收押变动', '灾害疫病', '在押人员表现', '在押人员关系', '在押人员状况', '在押人员工作'],
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['0%', '0%'],
                avoidLabelOverlap: false,
                color: ["#49A6B2", "#02A926", "#0098bc", "#0071c4", "#df6d00", "#df3e00", "#dd6d96", "#bf73c7"],
                show: 'false',
                center: ['-10%', '-10%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '设施状况', color: '#fff' },
                    { value: 310, name: '信息录入' },
                    { value: 234, name: '收押变动' },
                    { value: 135, name: '灾害疫病' },
                    { value: 1548, name: '在押人员表现' },
                    { value: 234, name: '在押人员关系' },
                    { value: 135, name: '在押人员状况' },
                    { value: 1548, name: '在押人员工作' }
                ]
            }]
        };
        myChart2.setOption(option2);
        //词云图
        var wordCold = document.getElementById("wordCold")
        var myChart3 = echarts.init(wordCold);
        var option3 = {
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 50],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function() {
                            return 'rgb(' + [
                                Math.round(Math.random() * 255),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
                    name: 'Sam S Club',
                    value: 10000,
                    textStyle: {
                        normal: {
                            color: 'black'
                        },
                        emphasis: {
                            color: 'red'
                        }
                    }
                }, {
                    name: 'Macys',
                    value: 6181
                }, {
                    name: 'Amy Schumer',
                    value: 4386
                }, {
                    name: 'Jurassic World',
                    value: 4055
                }, {
                    name: 'Charter Communications',
                    value: 2467
                }, {
                    name: 'Chick Fil A',
                    value: 2244
                }, {
                    name: 'Planet Fitness',
                    value: 1898
                }, {
                    name: 'Pitch Perfect',
                    value: 1484
                }, {
                    name: 'Express',
                    value: 1112
                }, {
                    name: 'Home',
                    value: 965
                }, {
                    name: 'Johnny Depp',
                    value: 847
                }, {
                    name: 'Lena Dunham',
                    value: 582
                }, {
                    name: 'Lewis Hamilton',
                    value: 555
                }, {
                    name: 'KXAN',
                    value: 550
                }, {
                    name: 'Mary Ellen Mark',
                    value: 462
                }, {
                    name: 'Farrah Abraham',
                    value: 366
                }, {
                    name: 'Rita Ora',
                    value: 360
                }, {
                    name: 'Serena Williams',
                    value: 282
                }, {
                    name: 'NCAA baseball tournament',
                    value: 273
                }, {
                    name: 'Point Break',
                    value: 265
                }]
            }]
        };
        myChart3.setOption(option3);

        //环比增长图
        var yearbasePic = document.getElementById("yearbasePic")
        var myChart4 = echarts.init(yearbasePic);
        var option4 = {
            color: ["#00a23a", "#df6c00", "#3563eb", "#d92405"],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['环比关押总量：2586人', '环比新收押量 ：586人'],
                left: '3%',
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
                // show :false,
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
                textStyle: {
                    color: 'red'
                },

            },

            yAxis: {
                type: 'value',
                axisLine: {
                    show: false,

                    textStyle: {
                        color: '#666'
                    },
                },

            },
            series: [{
                    name: '环比关押总量：2586人',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: [700, 100, 101, 134, 90, 230, 210, 120, 132, 101, 134, 300, 230, 210, 300, 100, 101, 134, 90, 230, 210, 120, 132, 101, 134, 400, 230, 210],
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(137, 189, 0, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(137, 189, 0, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        },
                    },

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
                    },


                },


            ]
        };
        myChart4.setOption(option4);
        window.addEventListener("resize", function() {
            myChart.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
        });
        //tap栏的切换
        $(".uls").on("click", "li", function() {
            if ($(this).hasClass("detainees")) {
                alert("heh")
            } else if ($(this).hasClass("facility")) {
                alert("heh")
            } else if ($(this).hasClass("message")) {
                alert("heh")
            } else if ($(this).hasClass("chaneg")) {
                alert("heh")
            } else if ($(this).hasClass("tendency")) {
                //赢藏当前页跳转到折线页
                $(".miantext").show()
                $(".mianlist").hide()
            }
        })

    }
});