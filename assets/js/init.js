// init jQuery
$(document).ready(function(){


  //  Smooth Scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Mobile-menu
  $('.menu-mobile').click(function() {
    $('.menu').toggleClass('is-open');
  });
  
  $('nav.is-open a').click(function() {
    $('.menu').toggleClass('is-open');
  });


});

