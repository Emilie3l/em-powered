$(document).ready(function(){
  $('.carousel').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
  });
});

export { initTyped };
