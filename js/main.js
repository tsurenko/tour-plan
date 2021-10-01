const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
});
const reviewsSlider =  new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider-button--next',
      prevEl: '.reviews-slider-button--prev',
    },
});