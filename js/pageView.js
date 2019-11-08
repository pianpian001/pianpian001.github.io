$(function () {
    var viewGuid = $("#viewGuid").attr("value");
    webbuilder.addView(viewGuid, function (data) {
        if (data.hasOwnProperty("message")) {
            alert(data.message);
        } else {
            if ($("#infoViewCount").length > 0) {
                $("#infoViewCount").html(data.viewCount);
            }
        }
    })
    webbuilder.getSiteViewCount( function (data) {
        if (data.hasOwnProperty("message")) {
            alert(rtndata.message);
        } else {
            var list = data.siteViewCount.split("");
            var countHtml = "";
            for (var i = 0; i < list.length; i++) {
                countHtml += list[i];
            }
            if ($("#siteViewCount").length > 0) {
                $("#siteViewCount").html(countHtml);
                $("#siteViewCount1").html(countHtml);
            }
        }
    })
});