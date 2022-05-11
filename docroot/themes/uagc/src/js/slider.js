//const swiper = new Swiper(...);

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".js-quote-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
