$(document).ready(function() {
  var distance = $('.parallax__group').offset().top,
    $window = $(window);

  $window.scroll(function() {
    if ( $window.scrollTop() == distance ) {
      console.log('hello');
        // Your div has reached the top
    }
  });
});