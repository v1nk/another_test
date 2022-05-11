const stickyformDesktop = {
  stickyForm: null,
  formOnPageSelectors: null,
  showInstantly: false,
  hideStickyForm: function() {
    this.stickyForm.style.opacity = '0';
    this.stickyForm.style.visibility = 'hidden';
  },
  
  showStickyForm: function() {
    this.stickyForm.style.opacity = '1.0';
    this.stickyForm.style.visibility = 'visible';
    this.stickyForm.style.display = 'flex';
  },
  init: function(form) {

    if (window.location.pathname.indexOf('/request-information') === 0 || window.location.pathname.indexOf('/do-not-sell') === 0) {
      return 0;
    }


    if (window.location.pathname.indexOf('/success') === 0 && window.innerWidth > 1024) {
      return;
    }

    if (window.location.pathname.indexOf('/online-degrees/comparison') === 0) {
      this.showInstantly = true;
    }

    this.stickyForm = document.querySelector('.stickyrfi-desktop');

    if (document.querySelector('.site-header__subnav.js-subnav-selector.--visible')) {
      this.stickyForm.classList.add('--jumplinks-present');
      document.querySelector('.site-layout__main').classList.add('--jumplinks-present');
    }

    if (window.innerWidth > 1023) { // don't fire on mobile, only on desktop
      let formSelectors = [
        '.form-onestep', //hiding the sticky rfi from appearing for certain screen sizes until after the mid page rfi
        '.form-twostep',
        '.paid-twostep',
        '.blog-sidebar-form',
        '.section--advisor-form',
        '.webform-submission-zes-drupal-rfi-form'
      ];
      this.formOnPageSelectors = [];
      let numberOfSelectors = formSelectors.length;
      
      for (let i = 0; i < numberOfSelectors; i++) {
        if (document.querySelectorAll(formSelectors[i]).length !== 0) {
          // formOnPageSelector = formSelectors[i];
          this.formOnPageSelectors.push(formSelectors[i]);
        }
      }

      if (this.formOnPageSelectors.length > 0) {
        // hide initially on page load until scroll event occurs
        this.hideStickyForm();
      }

      if (this.showInstantly) {
        this.showStickyForm();
      }

      window.addEventListener('scroll', () => {
      
        window.requestAnimationFrame(() => {
          var hideIt = false;

          for (var i = 0; i < this.formOnPageSelectors.length; i++) {
            hideIt = this.setProperStickyHeaderState(this.formOnPageSelectors[i]);
            // if there's a reason to hide the sticky rfi, no further checking is neccesary
            if (hideIt == true) {
              break;
            }
          }

          if (hideIt === true) {
            this.hideStickyForm();
          } else {
            this.showStickyForm();
          }


        });
      });
    }
  },
  


  // this will hide the sticky rfi if any of the elements in formSelector are visible on page. 
  // if this isn't working with one of the RFI forms, just add  a selector for the forms wrapper
  // to the formSelectors array above
  // this will return true if it hid a form, which means all other checking must stop
  setProperStickyHeaderState: function(formSelector) {

    var thisForm = document.querySelector(formSelector);
    window.thisForm = thisForm;

    //if no forms detected on page, just show the sticky rfi
    if (document.querySelectorAll(formSelector).length <= 0) {
      return false;
    }

    if (window.scrollY === 0) {
      return true;
    }
   
    var forms = document.querySelectorAll(formSelector);

    var hideForm = false;

    forms.forEach(function(e,i,arr) {

      //We've already detected a form.
      if (hideForm === true) {
        return;
      }

      var isAboveForm = (e.getBoundingClientRect().top - window.innerHeight) > 0;
      var isBelowForm = (e.getBoundingClientRect().top + e.offsetHeight + window.scrollY) < window.scrollY;
  

      // Don't show form if we're at the top of the page
      if (window.scrollY === 0) {
        hideForm = true;
        return;
      }
  
      if (!isAboveForm && !isBelowForm) {
        hideForm = true;
        return;
      } else {
        hideForm = false;
      }
    });

    return hideForm;


   
  }
};

document.addEventListener('DOMContentLoaded', function() {

  let form = document.querySelector('.stickyrfi-desktop');
  if (form) {
    stickyformDesktop.init(form);
  }
});
