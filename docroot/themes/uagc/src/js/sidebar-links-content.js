document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.querySelector(
    ".sidebar-links-content__dropdown"
  );
  var dropdownContainer = document.querySelector(
    ".sidebar-links-content__links-container"
  );
  var dropdownToggleButton = document.querySelector(
    ".sidebar-links-content__dropdown-toggle"
  );

  dropdownButton.addEventListener("click", function () {
    if (dropdownContainer.classList.contains("--close-container")) {
      dropdownContainer.classList.remove("--close-container");
      //   dropdownToggleButton.innerText = "Hide Sections";
    } else if (!dropdownContainer.classList.contains("--close-container")) {
      dropdownContainer.classList.add("--close-container");
      //   dropdownToggleButton.innerText = "Show Sections";
    }
  });
});
