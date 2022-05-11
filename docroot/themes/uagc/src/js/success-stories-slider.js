document.addEventListener("DOMContentLoaded", function () {
  // loop through each of the containers
  document
    .querySelectorAll(".success-stories-video__story-container")
    .forEach(function (slider, index) {
      var sliderPagination = slider
        .closest(".success-stories-video")
        .querySelector(".swiper-pagination");
      slider.classList.add("--slider-" + index);
      if (sliderPagination != "undefined" && sliderPagination != null) {
        sliderPagination.classList.add("--pagination-" + index);
      }

      var numberOfSliders = slider.querySelectorAll(
        ".success-stories-video__single-story"
      ).length;
      if (numberOfSliders > 1) {
        if (window.innerWidth < 768) {
          const swiper = new Swiper(
            ".success-stories-video__story-container.--slider-" + index,
            {
              direction: "horizontal",
              pagination: {
                el: ".swiper-pagination.--pagination-" + index,
                clickable: true,
              },
              slidesPerView: 1.1,
              centeredSlides: true,
              spaceBetween: 10,
            }
          );
          swiper.init();
        }
      } else {
        // just a single slide, so no slider functionality needed
        if (window.innerWidth < 768) {
          var singleSlider = slider.querySelector(
            ".success-stories-video__single-story"
          );
          singleSlider.classList.add("swiper-slide-active");
          singleSlider.style.height = "100%";
          sliderPagination.remove();
          return true;
        } else {
          var singleSlider = slider.querySelector(
            ".success-stories-video__single-story"
          );
          singleSlider.classList.add("--desktop-single-slide");
        }
      }
    });
});
