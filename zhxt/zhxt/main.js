require.config({
        baseUrl: "js",
        paths: {
            jquery: "lib/jquery.min",
            template: "lib/template-web",
            text: "lib/text",
            bootstrap: "../assets/bootstrap/js/bootstrap",
            tlps: "../tlps",
            dateTime: "../assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker",
            dateLange: "../assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN",
            echarts: "lib/echarts",
            worldcloud: "lib/echarts-wordcloud"
        },
        shim: {
            bootstrap: {
                deps: ["jquery"]
            },
            dateLange: {
                deps: ["dateTime"]
            },
            worldcloud: {
                deps: ['echarts']
            }


        }
    })
    //left左边大目录
require(["jquery", "contentjs/risk", "contentjs/hidein", "bootstrap"], function($, risk, hidein) {
    $(".left_menu").on("click", "li", function() {
        if ($(this).hasClass("lock")) {
            $(this).attr("id", "attrcolor").siblings().attr("id", "");
            hidein();

        } else if ($(this).hasClass("risk")) {
            $(this).attr("id", "attrcolor").siblings().attr("id", "");
            risk();
        }

    });
    //侧边栏的收宿
    var flag = true;
    $(".left").on("click", "#menu_in", function() {
        if (flag) {
            $(".left").css("width", "0")
            $(".left").css("min-width", "0")
            $(".content").css("width", "0")
            $("#right").css("width", "85%")
            $("#right").attr("class", "rightMidd")
            $(".left_menu").hide();
            flag = false;
        } else if (flag == false) {
            $(".left_menu").show();
            $(".content").css("width", "15%")
            $(".left").css("width", "15%")
            $(".left").css("min-width", "160px")
            $("#right").css("width", "85%");
            flag = true;
        }
    })
    $(".left_menu .lock").trigger("click")

})