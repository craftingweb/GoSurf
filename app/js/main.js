$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="/img/arrow-left.svg"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg"></img>',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    asNavFor: ".header__slider",
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="/img/arrow-left.svg"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg"></img>',
    asNavFor: ".slider-map",
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });
  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="/img/arrow-left.svg"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg"></img>',
  });

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".menu-btn").on("click", function () {
    $(".menu__list").toggleClass("active");
  });
});
