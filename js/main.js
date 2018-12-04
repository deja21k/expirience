$(document).ready(function(){

  initCommunitySlider()
  initDesignSlider();
  maska();

function initCommunitySlider() {
  $('.community__slider').slick({

    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding:10,



    // mobileFirst: true,
    //
    // centerMode: true,
    // centerPadding: '20px'
    // autoplay: true,
    // autoplaySpeed: 2000,
  });

}

  function initDesignSlider() {
  $('.design__slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 1,
  });
  }

  function maska() {
    $(document).keydown(function(event){
      if ((event.ctrlKey || event.metaKey)  && event.which == 88){
        $('#maska').toggle();
      }
    });
  }
});
