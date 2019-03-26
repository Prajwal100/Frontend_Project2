jQuery(document).ready(function( $ ) {

    // Initiate the wowjs animation library
    new WOW().init();
  
 
  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });
  

      // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('header-scrolled');
    } else {
      $('header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('header').addClass('header-scrolled');
  }

  // Back to top button
    $(document).ready(function(){
       $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
          });
       });
      $('.back-to-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
  