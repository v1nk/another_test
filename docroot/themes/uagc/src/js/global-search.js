// js-form-wrapper
document.addEventListener("DOMContentLoaded", function () {
  var autoSearchField = document.querySelector(
    ".form-autocomplete.form-search.ui-autocomplete-input"
  );
  autoSearchField.addEventListener("click", function (inputElement) {
    inputElement.value = "";
  });

  var detailsMarkup =
    '<div class="auto-search__view-details">View Details<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#0C234B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5L19 12L12 19" stroke="#0C234B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>';
  var resultElements = document.querySelectorAll(".ui-menu-item-wrapper");

  resultElements.forEach(function (result) {
    result.insertAdjacentHTML("beforeend", detailsMarkup);
  });
});
