$("#fun span").mouseover(function () {
  $(document).mousemove(function (e) {
    $("#fun span img", this).offset({
      left: e.pageX,
      top: e.pageY - 50,
    });
  });
});

$("#study span").mouseover(function () {
  $(document).mousemove(function (e) {
    $("#study span img", this).offset({
      left: e.pageX,
      top: e.pageY - 50,
    });
  });
});

var offsetTop = $("#page1").offset().bottom;

function isOverlapping(e1, e2) {
  var rect1 = e1.getBoundingClientRect();
  var rect2 = e2.getBoundingClientRect();
  var overlap = !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
  return overlap;
}

$(window).scroll(function () {
    // var sidebarTop=$(window).scrollTop() + $("#sidebar").position().top;
    // var sidebarBottom=$(window).scrollTop() + $("#sidebar").position().top + $("#sidebar").outerHeight(true);
    // var header2Top=$(window).scrollTop() + $("#skills-tools h2").position().top + $("#skills-tools h2").offset().top;
    // var header2Bottom=$(window).scrollTop() + $("#skills-tools h2").position().top + $("#skills-tools h2").offset().top + $("#skills-tools h2").outerHeight(true);
  if (
    $(window).scrollTop() + $(window).height() >
      $("#job h1").position().top +
        $("#job h1").offset().top +
        $("#job h1").outerHeight(true) +
        100
  ) {
    $("#sidebar").fadeIn();
  }
  else {
    $("#sidebar").fadeOut();
  }
});
