const homeMobileSlider = new Swiper(".homeMobileSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  speed: 750,
  pagination: {
    el: ".swiper-pagination",
  },
});
