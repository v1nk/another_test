// js-form-wrapper
document.addEventListener("DOMContentLoaded", function () {

  let details = document.querySelector('details');
  if (details) {

    window.addEventListener("resize", (event) => {
      window.requestAnimationFrame(() => {
        let currentSize = window.innerWidth;
        if (currentSize >= 1024) {
          if (!details.open) {
            details.open = true;
          }
        }
      });
    }, true);

  }
});
