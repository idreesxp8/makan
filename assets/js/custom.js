$(document).ready(function () {

  // Mega Menu 

  $('accordion_menu_single a').click({

  });


  // End Mega menu





  
  $('.properties_inner_crousal').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
  $('.properties_crousal').slick({
    autoplay:false,
    autoplaySpeed:2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });



$('.hero_slider').slick({
    autoplay:false,
    autoplaySpeed:2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    // infinite: true,
    // centerMode: true,
    speed: 300,
    slidesToShow: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

});