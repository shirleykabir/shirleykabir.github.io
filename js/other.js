$(function() {
            $("#work_link").click(function() {
                        $('html, body').animate({
                        scrollTop: $("#work").offset().top
                        }, 2000);
            });

            $("#about_link").click(function() {
                        $('html, body').animate({
                        scrollTop: $("#about").offset().top
                        }, 2000);
            });

            $("#projects_link").click(function() {
                        $('html, body').animate({
                        scrollTop: $("#projects").offset().top
                        }, 2000);
            });
});
