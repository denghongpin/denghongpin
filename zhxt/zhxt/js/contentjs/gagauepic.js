define(["jquery", "text!tlps/gaugepic.html", "contentjs/riskradarpic", "echarts"], function($, gaugepic, riskradarpic, echarts) {
    return function() {
        $(".risk_content").html(gaugepic);
        var leftPics = document.getElementsByClassName("gaugePic")
        for (var i = 0; i < leftPics.length; i++) {

        }
        var myChart = echarts.init(leftPics[0]);
        var myChart1 = echarts.init(leftPics[1]);

        var option = {
            // backgroundColor: "#fff",

            toolbox: {
                show: false,
                feature: {
                    restore: {
                        show: false
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                    name: '速度',
                    type: 'gauge',
                    z: 0,
                    min: 0,
                    max: 1000,
                    splitNumber: 1,
                    radius: '85%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 5,
                            color: [
                                [0.35, '#d0a12b'],
                                [0.5, '#e96f24'],
                                [1, '#d22c36']
                            ],
                        },
                    },
                    axisTick: { // 坐标轴小标记
                        length: 0, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: { // 分隔线
                        length: 5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: '200',
                        fontSize: 16,
                        offsetCenter: [0, '33%'],
                        // fontStyle: 'italic'
                        backgroundColor: '#fff',
                    },
                    pointer: {
                        width: 3,
                        length: "90%",
                        shadowColor: 'red', //默认透明
                        shadowBlur: 5
                    },
                    detail: {
                        show: false,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '-8%'],
                        width: "20%", // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            show: false,
                            fontWeight: 'bolder',
                            fontSize: 16,
                            fontFamily: "Tahoma",
                            color: '#f75b5b'
                        }
                    },
                    //改数值
                    data: [{
                        value: 500,
                        name: '风险总分'
                    }]
                },

                //要改图
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['50%', '50%'], // 默认全局居中
                    radius: '95%',


                    axisLine: { // 坐标轴线
                        lineStyle: {
                            show: false, // 属性lineStyle控制线条样式
                            width: 1,
                            color: [
                                [0.2, '#ccc'],
                                [0.8, '#ccc'],
                                [1, '#ccc']
                            ],
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 0, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: { // 分隔线
                        length: 0, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },

                    //显示标签
                    axisLabel: {
                        show: false,
                    },
                    title: {
                        show: true,
                        backgroundColor: '#9fe1ee',
                        fontSize: 12,
                        borderColor: "#d1d1d1",
                        borderWidth: 1,
                        offsetCenter: [0, '65%'],
                        lineHeight: 24,
                        fontWeight: 600,
                        padding: [2, 15, 2, 15],
                        rich: {
                            a: {
                                // 没有设置 `lineHeight`，则 `lineHeight` 为 56
                                // lineHeight: 56,
                            }
                        }
                    },

                    detail: {
                        show: true,
                        backgroundColor: '#fff',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '-8%'],
                        width: "20%", // x, y，单位px
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 32,
                            fontFamily: "Tahoma",
                            color: '#f75b5b'
                        }
                    },
                    pointer: {
                        width: 0,
                        length: "0%",
                        //默认透明
                        shadowBlur: 0
                    },
                    //改数值
                    data: [{
                        value: 500,
                        name: '第一名'
                    }],

                },


            ]
        };
        myChart.setOption(option);
        myChart1.setOption(option);

        window.addEventListener("resize", function() {
            myChart.resize();
            myChart1.resize();
        });
        //关注
        $(".concern .text").html("关注")
        $(".concern .text").css("right", "8px")
        var flag = "one";
        $(".concern").on("click", ".text", function() {
                if (flag == "one") {
                    $(".concern .text").html("以关注")
                    $(".concern").css("backgroundColor", "#425c8f")
                    flag = "two"
                } else if (flag == "two") {
                    $(".concern .text").html("关注")
                    $(".concern").css("backgroundColor", "#abb6cd")
                    flag = "one"
                }
            })
            //页面点击事件
        $(".gauge").on("click", ".gauge_father", function() {
            riskradarpic()
        })


    }
});