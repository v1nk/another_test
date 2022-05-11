document.addEventListener("DOMContentLoaded", function () {
  // only run on mobile devices
  if (window.innerWidth < 1024) {
    var dropdownWrapper = document.querySelector(
      ".grid-filter__dropdown-wrapper"
    );
    if (dropdownWrapper) {
      dropdownWrapper.removeAttribute("open");
    }
  }
});
