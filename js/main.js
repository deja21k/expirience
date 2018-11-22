$(document).ready(function(){

  $('.design__slider').slick({

    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 1,
  });

  $('.community__slider').slick({
    
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
    slidesToShow: 1,
    slidesToScroll: 1,

    // mobileFirst: true,

    // centerMode: true,
    // centerPadding: '20px'
    // autoplay: true,
    // autoplaySpeed: 2000,
    });
  });
