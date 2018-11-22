$(document).ready(function(){

  maska();

  $('.design__slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 1,
  });

  function maska() {
    $(document).keydown(function(event){
      if ((event.ctrlKey || event.metaKey)  && event.which == 88){
        $('#maska').toggle();
      }
    });
  }
});
