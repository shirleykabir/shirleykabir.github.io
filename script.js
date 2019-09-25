function viewMyWork() {
    // $("#post_intro").show();
    // $("#intro").hide();
    $("#content").css({
        "overflow-y": "scroll"
    });
    $("#post_intro").css({
        "position": "absolute"
    });
    $('html, body').animate({
        scrollTop: $("#post_intro").offset().top
    }, 1500);
}

function hideMyWork() {
    // $("#post_intro").hide();
    // $("#intro").show();
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1500, function () {
        $("#content").css({
            "overflow-y": "hidden"
        });
        $("#post_intro").css({
            "position": "relative"
        });
    });
}