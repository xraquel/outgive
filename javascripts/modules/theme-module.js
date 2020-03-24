$(function() {
  initResponsiveHeader();  

  $(window).on("load", function() {
    initAOS();
    initNavbar();
  });

  $(window).on('resize', () => {
    initResponsiveHeader();
    initHeaderScrolled();
  });

  $(window).on('scroll', () => {
    initHeaderScrolled();
  });

  function initNavbar() {
    $('.nav-link[href*="#"]').click(function(e) {
      e.preventDefault();
      var section = $(this).attr("href");
      var scroll = $(window).scrollTop();
      var offset =  90;

      $('.nav-item').removeClass('active');
      $(this).parent().addClass('active');

      if($(window).width() < 576 && scroll < 84) {
        offset = 430; 
      } else if($(window).width() < 992 && scroll < 84) { 
        offset = 470; 
      } else if($(window).width() <= 1199 && scroll < 84) { 
        offset = 30; 
      } else if($(window).width() > 1199 && scroll < 84) {
        offset =  10;
      }

      $("html, body").animate({
        scrollTop: $(section).offset().top - offset
      });
    });
  }

  function initHeaderScrolled() {
    var header = $(".custom-header");
    var scroll = $(window).scrollTop();

    if ($(window).width() >= 992 && scroll >= 85) {
      header.addClass("sticky-top");
    } else {
      header.removeClass("sticky-top");
    }

    if ($(window).width() < 992) {
      if (scroll < 84) {
        header.removeClass('sticky-top');
      } else {
        header.addClass('sticky-top');
      }
    }
  }

  function initResponsiveHeader() {
    var header = $(".custom-header");

    if ($(window).width() < 992) {
      header.addClass('sticky-top');
    } else {
      header.removeClass('sticky-top');
    }
  }

  function initAOS() {
    AOS.init({
      disable: function() {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
      delay: 0.4,
      duration: 700,
      easing: 'ease',
      once: true,
    });
  }
});
