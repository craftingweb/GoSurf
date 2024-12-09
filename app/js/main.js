$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows-left" src="/img/arrow-left.svg"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows-right" src="img/arrow-right.svg"></img>',
    asNavFor: ".slider-dots",
  });

  $(".slider-dots").slick({
    asNavFor: ".header__slider",
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
});
