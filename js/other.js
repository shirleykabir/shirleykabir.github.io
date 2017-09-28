$(function() {
            $("#work_link").click(function() {
                        $('html, body').animate({
                        scrollTop: $("#work").offset().top
                        }, 2000);
            });
});