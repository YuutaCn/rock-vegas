new Swiper('.screen__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  preventClicks: true,
  centeredSlides: true,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: -60,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: -100,
    },

  },






});
