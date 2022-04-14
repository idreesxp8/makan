$(document).ready(function () {



  $("#single").select2({
    placeholder: "Select a programming language",
    allowClear: true,
  });
  $("#multiple").select2({
    placeholder: "Select a programming language",
    allowClear: true,
  });
  $("#multiple2").select2({
    placeholder: "Select a programming language",
    allowClear: true,
  });
  $("#multiple3").select2({
    placeholder: "Select a programming language",
    allowClear: true,
  });
  // Mega Menu

  $(".accordion_menu_single a").click(function () {
    $(".content_single_mega").hide();
    var cls_open = $(this).attr("class");
    $(".accordion_menu_single a").removeClass("active");
    $(this).addClass("active");
    $("#" + cls_open).show();
  });

  // End Mega menu

  $(".properties_search_select").select2();

  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".properties_inner_crousal").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  $(".properties_crousal").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  $(".hero_slider").slick({
    autoplay: false,
    autoplaySpeed: 2000,
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

  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    arrows: true,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
