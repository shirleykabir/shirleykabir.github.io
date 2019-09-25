// $(function() {
//   $("#work_link").click(function() {
//     $('html, body').animate({
//       scrollTop: $("#work").offset().top
//     }, 2000);
//   });
//
//   $("#about_link").click(function() {
//     $('html, body').animate({
//       scrollTop: $("#about").offset().top
//     }, 2000);
//   });
//
//   $("#projects_link").click(function() {
//     $('html, body').animate({
//       scrollTop: $("#projects").offset().top
//     }, 2000);
//   });
// });

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({
//   behavior: 'smooth'
// });


/* Quotes */

function randomizeQuote() {
  var quotes = ["“We hold ourselves back in ways both big and small, by lacking self-confidence, by not raising our hands, and by pulling back when we should be <b>leaning in</b>.” <i>Sherl Sandberg</i>",
    "“As women, we must stand up for ourselves... for each other... for justice, <b>for all.</b>”  <i>Michelle Obama</i>", "“Life is a series of building, testing, changing and iterating.” <i>Lauren Mosenthal (Glassbreakers CEO)</i>",
    "“Do not ever let <b>anyone</b> make you feel like you don't matter, or like you don't have a place in our American story -- because you do. And you have the right to be exactly who you are.</b>”  <i>Michelle Obama</i>"
  ];
  var rand = Math.floor((Math.random() * (quotes.length - 1)));
  document.getElementsByClassName("quote")[0].innerHTML = quotes[rand];
}
window.onload = randomizeQuote;
