define(["jquery", "text!tlps/hedeinDetail.html", "echarts"], function($, hedeinDetail, echarts) {
    return function() {
        $(".hideinContent").html(hedeinDetail)
        var optPics = document.getElementById("optPic");

        //获取盒子的宽度
        console.log(optPics)
        var myChartopts = echarts.init(optPics);
        // 监狱关押量
        var _boyActual = [80, 100, 120, 90, 100, 170, 180];
        //关押总量
        var _boyShould = [220, 150, 120, 80, 100, 120, 80];
        //第二条关押 量
        var _girlActual = [70, 100, 120, 80, 100, 120, 80];
        //关押总量
        var _girlShould = [150, 120, 150, 80, 100, 120, 90];
        var widths = $("#optPic").width() * 0.8;
        var _college = ['学院1', '学院2', '学院3', '学院1', '学院2', '学院3', '大学'];
        var optionps = {
            grid: {
                left: '1%',
                right: '6%',
                bottom: '3%',
                top: 40,
                containLabel: true
            },
            axisPointer: {
                type: "shadow",
                show: 'true'
            },
            xAxis: {
                type: 'value',
                show: true,
                max: 500,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: [{
                type: 'category',
                position: "left",
                data: _college
            }, {
                type: 'category',
                position: "left",
                data: _college
            }, {
                type: 'category',
                position: "left",
                data: _college
            }],
            series: [{
                type: 'bar',
                yAxisIndex: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: function(data) {
                            return "关押" + _boyShould[data.dataIndex] + " 人";
                        },
                        position: 'right',
                        distance: 200,
                    }
                },
                // itemStyle: {
                //     normal: {
                //         color: 'null'
                //     }
                // },
                // // data: [100,100,100]
            }, {
                type: 'bar',
                yAxisIndex: 0,
                label: {
                    normal: {
                        show: true,
                        formatter: function(data) {
                            return "新收押" + _girlShould[data.dataIndex] + " 人";
                        },

                        position: 'right',
                        distance: 200,
                    }
                },
                // itemStyle: {
                //     normal: {
                //         color: '#000'
                //     }
                // },
                // data: [100,100,100]
            }, {
                name: '男',
                type: 'bar',
                yAxisIndex: 1,
                label: {

                    normal: {
                        show: true,
                        formatter: function(data) {
                            return '关押' + _boyActual[data.dataIndex] + "人" + "    占比" + (_boyActual[data.dataIndex] * 100 / _boyShould[data.dataIndex]).toFixed(2) + " % ";
                        },

                        position: 'left',
                        distance: -widths,
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#d92405'
                    }
                },
                data: _boyActual.map(function(item, index) {
                    return parseInt(item / _boyShould[index] * 100)
                })
            }, {
                name: '占位',
                type: 'bar',
                yAxisIndex: 1
            }, {
                name: '占位',
                type: 'bar',
                yAxisIndex: 2
            }, {
                name: '女',
                type: 'bar',
                yAxisIndex: 2,
                zlevel: 2,
                label: {
                    normal: {
                        show: true,
                        formatter: function(data) {
                            return '新收押' + _girlActual[data.dataIndex] + " 人 " + '    占比' + (_girlActual[data.dataIndex] * 100 / _girlShould[data.dataIndex]).toFixed(2) + " %";
                        },
                        position: 'left',
                        distance: -widths,
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#008cde'
                    }
                },
                data: _girlActual.map(function(item, index) {
                    return parseInt(item / _girlShould[index] * 100)
                })
            }]
        };

        myChartopts.setOption(optionps)
        window.addEventListener("resize", function() {
            myChartopts.resize();
        });

    }
});