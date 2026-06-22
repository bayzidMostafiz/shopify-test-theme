// Swiper slider integration
document.addEventListener("DOMContentLoaded", function () {
  const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});