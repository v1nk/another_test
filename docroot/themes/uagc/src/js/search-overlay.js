window.searchOverlay = false;
document.addEventListener("DOMContentLoaded", () => {
  window.searchOverlay = {
    searchOverlayElement: undefined,
    searchDisplayElements: undefined,
    searchCloseElement: undefined,
    _displyOpen: false,

    get displayOpen() {
      return this._displyOpen;
    },

    set displayOpen(newVal) {
      this._displyOpen = newVal;
      this.updateClasses();
    },

    init: function () {
      this.getElements();
      this.addEvents();
    },
    getElements: function () {
      this.searchOverlayElement = document.querySelector(".js-search-overlay");
      this.searchDisplayElements = document.querySelectorAll(".js-search-show");
      this.searchCloseElement = document.querySelector(".js-search-close");
      this.bodyElement = document.querySelector("body");
    },
    addEvents: function () {
      for (let i = 0; i < this.searchDisplayElements.length; i++) {
        this.searchDisplayElements[i].addEventListener("click", () => {
          this.displayOpen = true;
        });
      }

      this.searchCloseElement.addEventListener("click", () => {
        this.displayOpen = false;
        if (this.bodyElement.classList.contains("--open-search")) {
          this.bodyElement.classList.remove("--open-search");
        }
      });
    },
    updateClasses: function () {
      if (this.displayOpen) {
        this.searchOverlayElement.classList.add("--open");
        this.bodyElement.classList.add("--open-search");
      } else {
        this.searchOverlayElement.classList.remove("--open");
        this.bodyElement.classList.add("--open-search");
      }
    },
  };
  window.searchOverlay.init();
});
