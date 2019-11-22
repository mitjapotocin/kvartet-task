$(document).ready(function() {
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
    