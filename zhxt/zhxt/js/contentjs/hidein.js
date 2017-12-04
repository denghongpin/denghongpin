define(["jquery", "text!tlps/hidein.html", "contentjs/hideinSynthesis", "contentjs/hideinPrison", "contentjs/hedeinDetail", "bootstrap", "dateTime", "dateLange"],
    function($, hidein, hideinSynthesis, hideinPrison, hedeinDetail) {
        return function() {
            //年开始
            $("#right").html(hidein);
            var time = new Date();
            //当年
            var newTime = time.getFullYear();
            var newT = time.getFullYear() + 1;
            //当月
            var Mouth = time.getMonth() + 1;
            //当天
            var dayTime = time.getDate()
                //开始时间
            console.log(Mouth)
            $(".yearNumber").html(newTime + "年")
            $(".dayNumber").html(dayTime + "日")
                //动态生成年
            var uls = document.getElementsByClassName("year_number")[0]
            for (var i = 0; i <= 20; i++) {
                newT--
                var lis = document.createElement("li")
                lis.innerHTML = '<a href="#">' + newT + '年</a>';
                uls.appendChild(lis)

            }

            //天开始

            $(".from_day").datetimepicker({
                language: "zh-CN",
                startView: 2,
                minView: 2,
                autoclose: true,
                todayBtn: true,
                pickerPosition: "bottom-center",
            }).on("changeDate", function(ev) {
                // alert("hehe")

                var year = ev.date.valueOf()

                //转化为标准时间
                dayTimes = new Date(year).getDate()
                console.log(new Date(year))
                $(".dayNumber").html(dayTimes + "日")

            });
            //三个按钮事件
            $(".hidein_btn").on("click", "button", function() {
                if ($(this).hasClass("synthesis")) {
                    $(this).css({ backgroundColor: "#5e8fed", color: "#fff" }).siblings().css({ backgroundColor: "", color: "" })
                    $(".box_all").hide()
                    $(".hidein_draw").hide()
                        //第三个按钮
                        //全部类型
                    $(".scope").hide()
                    $(".dateRange").hide()
                    $(".timeBox .optTime").hide()
                    $(".hidein_left").css("width", "750px")
                    $(".timeboxTime").hide()
                    $(".downFile").show();
                    $(".hidein_right").show();
                    //超容显示
                    $(".box_primary").show()
                        //对第三个符合查询设置默认值
                    $(".moreSelect").hide();
                    $(".nationality_mian").val("选择户籍/国籍")
                    $(".nationality_mian_age").val("选择年龄/性别")
                    $(".nationality_mian_prson").val("选择重点人员")
                    $(".nationality_mian_pattern").val("选择关押模式")
                    $(".nationality_mian_key").val("选择案件类型")
                    $(".nationality_mian_cause").val("选择入所原因")
                    $(".nationality_mian_trem").val("选择剩余刑期")
                        //  设置年月日超容初始值、
                        //下拉框年的操作
                    $(".year_number").on("click", "li", function() {
                        var text = $(this).children().text();
                        $(".timeBox .yearNumber").text(text);
                    })
                    change(".timeBox", ".year_number")

                    //下拉框月的操作
                    $(".month_number").on("click", "li", function() {
                        var text = $(this).children().text();
                        $(".btnMouth .month_val").text(text);

                    })
                    change(".month", ".month_number")

                    // 下拉对月超容操作
                    $(".primary_number").on("click", "li", function() {
                            var text = $(this).children().text();
                            $(".btnPrimary .primary_val").text(text)
                        })
                        //全部类型
                    $(".allperson_number").on("click", "li", function() {
                        var text = $(this).children().text();
                        $(".btnPrimary .allperson_val").text(text)
                    })
                    change(".box_all", ".allperson_number")
                        //全部监所
                    $(".right_number").on("click", "li", function() {
                        var text = $(this).children().text();
                        $(".btnPrimary .right_val").text(text)
                    })
                    change(".hidein_right", ".right_number")
                        //超容处理
                    $(".primary_number").on("click", "li", function() {
                        var text = $(this).children().text();
                        $(".btnPrimary .primary_val").text(text)
                    })
                    change(".box_primary", ".primary_number")

                    //初始化年
                    $(".yearNumber").html(newTime + "年")
                        //月
                    $(".month_val").html(Mouth + "月")
                        // 超容
                    $(".primary_val").html("超容")
                        //全部监所
                    $(".right_val").html("全部监所")
                        //鼠标移入移除事件的封装
                    function change(box, ele) {
                        $(box).mouseenter(function() {
                            $(ele).show()
                        })
                        $(box).mouseleave(function() {
                            $(ele).hide()
                        })
                    }

                    hideinSynthesis()
                } else if ($(this).hasClass("prison")) {
                    $(this).css({ backgroundColor: "#5e8fed", color: "#fff" }).siblings().css({ backgroundColor: "", color: "" })
                    $(".hidein_left").css("width", "900px")
                    $(".box_primary").hide()
                    $(".timeBox .optTime").hide();
                    $(".timeboxTime").hide();
                    $(".dateRange").hide();
                    $(".hidein_draw").show()
                    $(".box_all").show()
                    $(".scope").hide()
                    $(".downFile").show();
                    $(".hidein_right").show();
                    //对第三个符合查询设置默认值
                    $(".moreSelect").hide();
                    $(".nationality_mian").val("选择户籍/国籍")
                    $(".nationality_mian_age").val("选择年龄/性别")
                    $(".nationality_mian_prson").val("选择重点人员")
                    $(".nationality_mian_pattern").val("选择关押模式")
                    $(".nationality_mian_key").val("选择案件类型")
                    $(".nationality_mian_cause").val("选择入所原因")
                    $(".nationality_mian_trem").val("选择剩余刑期")
                        //初化年
                    $(".yearNumber").html(newTime + "年")
                        //月
                    $(".month_val").html(Mouth + "月")
                        //全部类型
                    $(".allperson_val").html("全部类型")
                    hideinPrison()
                } else if ($(this).hasClass("detail")) {
                    $(this).css({ backgroundColor: "#5e8fed", color: "#fff" }).siblings().css({ backgroundColor: "", color: "" })
                    $(".hidein_draw").hide();
                    $(".box_all").hide();
                    $(".downFile").hide();
                    $(".hidein_right").hide();
                    //显示
                    $(".hidein_left").css("width", "900px");
                    $(".dateRange").show();
                    $(".timeBox .optTime").show();
                    $(".timeboxTime").show();
                    $(".scope").show()
                        //对第三个符合查询设置
                    $(".moreSelect").show();
                    //复合查询改变值
                    comment(".nationality_menu", "选择户籍/国籍", ".nationality_mian")
                    comment(".nationality_age", "选择年龄/性别", ".nationality_mian_age")
                    comment(".nationality_menu_person", "选择重点人员", ".nationality_mian_prson")
                    comment(".nationality_menu_pattern", "选择关押模式", ".nationality_mian_pattern")
                    comment(".nationality_menu_key", "选择案件类型", ".nationality_mian_key")
                    comment(".nationality_menu_cause", "选择入所原因", ".nationality_mian_cause")
                    comment(".nationality_menu_trem", "选择剩余刑期", ".nationality_mian_trem")
                        //公共函数
                    function comment(fater, value, cls) {
                        $(fater).on("click", "li", function() {
                            var text = value
                            text = $(this).children().text()
                            $(cls).val(text)
                        })
                    }
                    //初始化天
                    $(".dayNumber").html(dayTime + "日")
                        //月
                    $(".month_val").html(Mouth + "月")
                    hedeinDetail();

                }
            })
            $(".hidein_btn .synthesis").trigger("click")

        }


    });