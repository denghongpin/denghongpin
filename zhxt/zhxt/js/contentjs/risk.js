define(["jquery", "text!tlps/risk.html", "contentjs/riskmain", "contentjs/gagauepic", "contentjs/hideinPrison", "bootstrap", "dateTime", "dateLange"], function($, risk, riskmain, gagauepic, hideinPrison) {
    return function() {
        $("#right").html(risk);
        var riskTime = new Date();
        //年
        var newYear = riskTime.getFullYear();
        //月
        var nweMoth = riskTime.getMonth() + 1;
        //天
        var newDay = riskTime.getDate();
        //时
        var newHours = riskTime.getHours();
        //设置年的默认值
        $(".risk_yearNumber").html(newYear + "年")
        $(".riskmonth_val").html(nweMoth + "月")
        $(".riskdayNumber").html(newDay + "日")
        $(".start").html(newHours - 1 + ":00")
        $(".end").html(newHours + ":00")
        $(".nweYear").datetimepicker({
            format: "yyyy",
            language: "zh-CN",
            startView: 4,
            minView: 4,
            autoclose: true,
            todayBtn: true,
            pickerPosition: "bottom-center",
        }).on("changeYear", function(ev) {
            var year = ev.date.valueOf()
                //转化为标准时间
            newTimes = new Date(year).getFullYear()
            if (newTimes > newYear) {
                $(".risk_yearNumber").html(newYear + "年")
            } else {
                $(".risk_yearNumber").html(newTimes + "年")
            }
        });
        //月
        $('.riskmonth_number li').on('click', function() {
                var vals = $(this).text();
                var nmberM = vals.slice(0, 1)
                $(".riskmonth_val").html(nweMoth + "月")
                $(".riskmonth_val").text(vals)
            })
            //天
        $(".riskfrom_day").datetimepicker({
            format: "yyyy mm dd",
            language: "zh-CN",
            startView: 2,
            minView: 2,
            autoclose: true,
            todayBtn: true,
            pickerPosition: "bottom-center",
        }).on("changeDate", function(ev) {

            var year = ev.date.valueOf()

            //转化为标准时间
            dayTimes = new Date(year).getDate()
            console.log(new Date(year))
            $(".riskdayNumber").html(dayTimes + "日")

        });
        //时
        $(".mewHtime").datetimepicker({
                format: "yy mm dd hh",
                language: "zh-CN",
                startView: 1,
                minView: 1,
                autoclose: true,
                todayBtn: true,
                pickerPosition: "bottom-center",
            }).on("changeDate", function(ev) {

                var year = ev.date.valueOf()
                    //转化为标准时间
                dayHous = new Date(year).getHours()
                console.log(dayHous)
                $(".mewHtime_yearNumber .start").text(dayHous + ":00  ");
                $(".mewHtime_yearNumber .end").text(dayHous + 1 + ":00")

            })
            //设置默认值
        $(".risk_innerbtn").on("click", "button", function() {
                if ($(this).hasClass("synthesis")) {
                    $(".synthesis").css("background", "#5e8fed").siblings().css("background", "#ddd")
                    riskmain()
                } else if ($(this).hasClass("prison")) {
                    $(".prison").css("background", "#5e8fed").siblings().css("background", "#ddd")
                    gagauepic()
                }
            })
            //模拟点击
        $(".synthesis").trigger("click")


    }
});