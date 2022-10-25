$(function () {
  $('.design-slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="assets/img/icons/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="arrow arrow-right" src="assets/img/icons/arrow-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          
        }
      }
    ]
  });
});