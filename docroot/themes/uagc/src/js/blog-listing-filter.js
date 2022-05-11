document.addEventListener("DOMContentLoaded", function () {
  var targetNode = document.querySelector("form.grid-filter");

  var featuredCategoryWrapper = document.querySelector(
    ".--category-filter-applied"
  );

  if (
    featuredCategoryWrapper !== null &&
    featuredCategoryWrapper !== "undefined"
  ) {
    var selectCategoryOnLoad = true;
  } else {
    var selectCategoryOnLoad = false;
  }

  function setSelectedCategory() {
    if (selectCategoryOnLoad) {
      var categoryToSelect = document.querySelector(
        ".featured-articles__heading"
      ).innerText;
      document
        .querySelectorAll(
          ".blog-listing__details-wrapper .js-form-type-checkbox label.option"
        )
        .forEach(function (label) {
          if (label.innerText === categoryToSelect) {
            label.click();
            selectCategoryOnLoad = false;
          }
        });
    }
  }
  setSelectedCategory();

  // the sort by button is separate from the exposed filters in drupal
  // so this function moves the sort by dropdown above the category filters
  function moveSortByDropdown() {
    var sortByDropdown = document.querySelector(
      ".js-form-item-sort-bef-combine"
    );
    var collapsibleButton = document.querySelector(
      ".grid-filter__dropdown-summary"
    );

    collapsibleButton.parentNode.insertBefore(
      sortByDropdown,
      collapsibleButton
    );
  }
  moveSortByDropdown(); // run once on page load

  function setDropdownState() {
    // set the collapsible section to closed on page load
    if (window.innerWidth < 1024) {
      var dropdownWrapper = document.querySelector(
        ".grid-filter__dropdown-wrapper"
      );
      dropdownWrapper.removeAttribute("open");
    }
  }
  setDropdownState(); // only run once on page load

  function getAndSetCheckedCheckboxes() {
    var activeCategories = 0;
    // count the number of active categories
    document
      .querySelectorAll(".js-form-type-checkbox input.form-checkbox")
      .forEach(function (checkbox) {
        // set the checked state on
        if (checkbox.checked) {
          var checkedLabel = checkbox.nextElementSibling;
          // also handles applying the class to make selected categories blue
          checkedLabel.classList.add("--js-checkbox-checked");
          activeCategories++;
        }
      });

    return activeCategories;
  }

  // handles properly setting the state of the category links
  function setUpCategoryButtons() {
    //generate markup for the
    var allNewsDiv = document.createElement("div");
    allNewsDiv.classList.add("grid-filter__all-news", "js-form-type-checkbox");

    var allNewsLabel = document.createElement("label");
    allNewsLabel.classList.add("option", "grid-filter__all-news-label");
    allNewsLabel.innerText = "All News";
    allNewsDiv.appendChild(allNewsLabel);
    // set all news button to blue if there are no categories selected
    if (getAndSetCheckedCheckboxes() === 0) {
      allNewsLabel.classList.add("--js-checkbox-checked");
    }

    allNewsLabel.addEventListener("click", function (event) {
      allNewsLabel.classList.add("--js-checkbox-checked");
      document
        .querySelectorAll(".grid-filter__fieldset input.form-checkbox")
        .forEach(function (checkbox) {
          if (getAndSetCheckedCheckboxes() > 1) {
            event.preventDefault();
            checkbox.checked = false;
          } else if (getAndSetCheckedCheckboxes() === 1) {
            if (checkbox.checked) {
              checkbox.click();
            }
          }
        });
      document
        .querySelectorAll(".grid-filter__fieldset .bef-checkboxes label.option")
        .forEach(function (label) {
          if (label.classList.contains("--js-checkbox-checked")) {
            label.classList.remove("--js-checkbox-checked");
          }
        });
    });

    var checkboxWrapper = document.querySelector("div.bef-checkboxes");

    checkboxWrapper.insertAdjacentElement("afterbegin", allNewsDiv);

    var categoriesLabel = document.createElement("label");

    categoriesLabel.innerHTML = "Categories";
    categoriesLabel.classList.add("--js-categories-label");
    var checkboxBox = document.querySelector(".grid-filter .form-checkboxes");
    checkboxBox.parentNode.insertBefore(categoriesLabel, checkboxBox);
  }
  setUpCategoryButtons(); // run once on page load

  // this runs every time something changes with the filter
  function updateFilters() {
    var newTargetNode = document.querySelector("form.grid-filter");
    moveSortByDropdown();
    setUpCategoryButtons();
    setDropdownState();
    // we have to set up a new mutation observer because drupal rips
    // out all of the markup in this view. having the mutation observer applied
    // to the wrapper with the subTree setting on was terrible for performance
    observer.observe(newTargetNode, { attributes: true });
  }
  var observer = new MutationObserver(updateFilters);
  observer.observe(targetNode, { attributes: true });
});

if (Drupal.AjaxCommands) {
  Drupal.AjaxCommands.prototype.viewsScrollTop = function() {
    let blogContainer = document.querySelector('.blog-listing__main-wrapper');

    var top = 0;
    if (blogContainer) {
      top = window.pageYOffset + blogContainer.getBoundingClientRect().top - 55;
    }

    window.scrollTo( {
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  };
}
