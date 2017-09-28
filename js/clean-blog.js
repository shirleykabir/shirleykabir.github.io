$(function() {
       $('#teammember_open0').click(function() {
           $('#teammember_info0').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close0').click(function() {
           $('#teammember_info0').hide();
           return false;
       });
       $('#teammember_open1').click(function() {
           $('#teammember_info1').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close1').click(function() {
           $('#teammember_info1').hide();
           return false;
       });
       $('#teammember_open2').click(function() {
           $('#teammember_info2').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close2').click(function() {
           $('#teammember_info2').hide();
           return false;
       });
       $('#teammember_open3').click(function() {
           $('#teammember_info3').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close3').click(function() {
           $('#teammember_info3').hide();
           return false;
       });
       $('#teammember_open4').click(function() {
           $('#teammember_info4').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close4').click(function() {
           $('#teammember_info4').hide();
           return false;
       });
       $('#teammember_open5').click(function() {
           $('#teammember_info5').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close5').click(function() {
           $('#teammember_info5').hide();
           return false;
       });
       $('#teammember_open6').click(function() {
           $('#teammember_info6').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close6').click(function() {
           $('#teammember_info6').hide();
           return false;
       });
       $('#teammember_open7').click(function() {
           $('#teammember_info7').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close7').click(function() {
           $('#teammember_info7').hide();
           return false;
       });
       $('#teammember_open8').click(function() {
           $('#teammember_info8').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close8').click(function() {
           $('#teammember_info8').hide();
           return false;
       });
       $('#teammember_open9').click(function() {
           $('#teammember_info9').show();
           $('.transform').toggleClass('transform_start');
           return false;
       });
       $('#teammember_close9').click(function() {
           $('#teammember_info9').hide();
           return false;
       }); 
   });


// Carousel for Aircraft



// invoke the carousel
$('#myCarousel').carousel({
  interval: 6000
});

/* SLIDE ON CLICK */ 

$('.carousel-linked-nav > li > a').click(function() {

    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));

    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);

    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');

    // add active class to just clicked on item
    $(this).parent().addClass('active');

    // don't follow the link
    return false;
});

/* AUTOPLAY NAV HIGHLIGHT */

// bind 'slid' function
$('#myCarousel').bind('slid', function() {

    // remove active class
    $('.carousel-linked-nav .active').removeClass('active');

    // get index of currently active item
    var idx = $('#myCarousel .item.active').index();

    // select currently active item and add active class
    $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

});


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


/* Scrolls to faq */

$(".tofaq").click(function() {
    $('html, body').animate({
        scrollTop: $("#faq").offset().top
    }, 2000);
});

document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

 $(document).ready(function () {
            $('.collapse.in').prev('.panel-heading').addClass('active');
            $('#accordion, #bs-collapse')
                .on('show.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').addClass('active');
                })
                .on('hide.bs.collapse', function (a) {
                    $(a.target).prev('.panel-heading').removeClass('active');
                });
        });
 
 