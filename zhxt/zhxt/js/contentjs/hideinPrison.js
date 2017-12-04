define(["jquery", "text!tlps/hideinPrison.html", ], function($, hideinPrison) {
    return function() {
        $(".hideinContent").html(hideinPrison);
        $(".persons").on("click", function() {
            $(".hidein_left .detail").trigger("click")
        })
    }
});