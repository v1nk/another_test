

window.MainNav = false;
document.addEventListener("DOMContentLoaded", () => {
  window.MainNav = {
    _open: false,
    mainToggleElement: undefined,
    mainCloseElement: undefined,
    dropDownToggleElements: undefined,
    dropDownElements: undefined,
    subDropToggleElements: undefined,
    subDropDownElements: undefined,
    backElements: undefined,
    backButtonContainerElement: undefined,
    backButtonElement: undefined,
    siteHeaderElement: undefined,
    _currentOpenDropDown: null,
    _currentOpenSubDropDown: null,
    menuDisplayOrder: [],
    _sticky: false,

    get open() {
      return this._open;
    },
    set open(newVal) {
      this._open = newVal;
      this.menuDisplayOrder = [];
      this._currentOpenDropDown = null;
      this._currentOpenSubDropDown = null;
      this.updateBodyClass();
      this.addClickListeners();

    },

    get currentOpenDropDown() {
      return this._currentOpenDropDown;
    },
    set currentOpenDropDown(newId) {
      if (newId !== this._currentOpenDropDown) {
        this._currentOpenDropDown = newId;
        this._currentOpenSubDropDown = null;
      } else {
        this._currentOpenDropDown = null;
      }
      this.updateDropdownClasses();
    },

    get currentOpenSubDropDown() {
      return this._currentOpenSubDropDown;
    },
    set currentOpenSubDropDown(newId) {
      if (newId !== this._currentOpenSubDropDown) {
        this._currentOpenSubDropDown = newId;
      }
      this.updateDropdownClasses();
    },

    get sticky() {
      return this._sticky;
    },

    set sticky(newVal) {
      if (this._sticky != newVal) {
        if (this.siteHeaderElement) {
          this.siteHeaderElement.classList.toggle('--sticky');
        }
        this._sticky = newVal;
      }

    },

    init: function () {
      this.setElements();
      this.addScrollListeners();
      this.fixSpacingForBreadCrumbs();


    },
    setElements: function () {
      this.mainToggleElement = document.querySelector('.js-menu-toggle');
      this.mainCloseElement = document.querySelector('.js-menu-close');
      this.dropDownToggleElements = document.querySelectorAll('.js-dropdown-toggle');
      this.dropDownElements = document.querySelectorAll('.js-dropdown');
      this.subDropToggleElements = document.querySelectorAll('.js-dd-head-button');
      this.subDropDownElements = document.querySelectorAll('.js-sub-dropdown');
      this.backElements = document.querySelectorAll('.js-back');
      this.backButtonContainerElement = document.querySelector('.js-back-button-container');
      this.backButtonElement = document.querySelector('.js-back-button');
      this.siteHeaderElement = document.querySelector('.site-layout__header');
      if (this.mainToggleElement) {
        this.mainToggleElement.addEventListener('click', () => {
          this.toggleMainNav();
        });
        this.mainCloseElement.addEventListener('click', () => {
          this.toggleMainNav();
        });

        for (let i = 0; i < this.dropDownToggleElements.length; i++) {
          let parent = this.dropDownToggleElements[i].parentElement;
          let subs = parent.querySelectorAll('.js-dd-head-button');
          let dropDown = parent.querySelector('.js-dropdown');

          this.dropDownToggleElements[i].dataset.menuPos = i;
          dropDown.dataset.dParent = i;
          for (let x = 0; x < subs.length; x++) {
            subs[x].dataset.parent = i;
          }
          this.dropDownToggleElements[i].addEventListener('click', () => {
            this.toggleDropDown(i);
          });
        }

        let count = 0;
        let currentParent = null;
        let parentCounter = 0;
        for (let i = 0; i < this.subDropToggleElements.length; i++) {
          
          //Have to check if we're stuck on the same parent.
          //There are some with multiple menus inside them.
          let parent = this.subDropToggleElements[i].parentElement;
          if (currentParent == null) {
            currentParent = parent;
          }

          //Reset the relative parent count and move on.
          if (currentParent !== parent) {
            currentParent = parent;
            parentCounter = 0;
          }

          let dropDowns = parent.querySelectorAll('.js-sub-dropdown');
          if (dropDowns[parentCounter]) {
            dropDowns[parentCounter].dataset.sParent = count;
          }
          this.subDropToggleElements[i].dataset.subDropdown = count;
          this.subDropToggleElements[i].addEventListener('click', (event) => {
            this.toggleSubDrop(event.target.dataset.subDropdown, event.target.innerText);
          });
          count++;
          parentCounter++;
        }

        for (let i = 0; i < this.backElements.length; i++) {
          this.backElements[i].addEventListener('click', () => {
            this.backButton();
          })
        }
      }
    },
    toggleMainNav: function () {
      if (this.open == true) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
    toggleDropDown: function (parentId) {
      this.menuDisplayOrder.push(parentId);
      this.currentOpenDropDown = parentId;
    },
    toggleSubDrop: function (parentId, title) {
      this.backButtonElement.innerText = title;
      this.menuDisplayOrder.push(parentId);
      this.currentOpenSubDropDown = parentId;
    },

    backButton: function () {
      let size = this.menuDisplayOrder.length;
      let menuItem = this.menuDisplayOrder.pop();
      if (size > 1) {
        if (this.currentOpenSubDropDown == menuItem) {
          this.currentOpenSubDropDown = null;
        }
      }
      if (this.currentOpenDropDown == menuItem) {
        this.currentOpenDropDown = null;
      }

    },

    updateBodyClass: function () {
      if (this.open) {
        document.body.classList.add('--open-nav');
      } else {
        document.body.classList.remove('--open-nav');
      }
    },

    updateDropdownClasses: function () {
      if (this.open) {
        let dropDown = document.querySelector('[data-d-parent="' + this.currentOpenDropDown + '"]');
        let subDropDown = document.querySelector('[data-s-parent="' + this.currentOpenSubDropDown + '"]');
        let toggleSubDropDown = document.querySelector('[data-sub-dropdown="' + this.currentOpenSubDropDown + '"]');

        if (dropDown) {
          dropDown.classList.add('--open');
          document.body.classList.add('--open-sub');
        }

        if (subDropDown) {
          subDropDown.classList.toggle('--open');
        }

        if (toggleSubDropDown) {
          toggleSubDropDown.classList.toggle('--flip-arrow');
        }
      }
      
    },
    
    addClickListeners() {
      let backToMainNav = document.querySelectorAll('.js-back');
      for (let i = 0; i < backToMainNav.length; i++) {
        backToMainNav[i].addEventListener("click", () => {
          this.dropDownElements[i].classList.remove('--open');
          document.body.classList.remove('--open-sub');
        });
      }
    },
    addScrollListeners: function () {
      window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
          this.checkScroll();
        });
      }, true);
    },
    checkScroll: function () {
      let windowPosY = window.scrollY;
      if (windowPosY < 200) {
        this.sticky = false;
      } else {
        this.sticky = true;
      }
    },
    fixSpacingForBreadCrumbs: function() {
      let header = document.querySelector('.site-header');
      let subHeader = document.querySelector('.site-header__subnav');
      let siteContainer = document.querySelector('.site-container');

      let offsetPadding = (header ? header.offsetHeight : 0) + (subHeader ? subHeader.offsetHeight : 0);

      siteContainer.style.paddingTop = offsetPadding + 'px';
    }
  }
  window.MainNav.init();
});
