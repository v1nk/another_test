const stickyFormMobile = {
  stickyForm: null,
  formOnPageSelectors: null,
  state: null,
  hideStickyForm: function () {
    this.stickyForm.style.opacity = '0';
    this.stickyForm.style.visibility = 'hidden';
  },

  showStickyForm: function () {
    this.stickyForm.style.opacity = '1.0';
    this.stickyForm.style.visibility = 'visible';
    this.stickyForm.style.display = 'block';
  },
  handleEduFormChange: function () {
    window.location.href = '/request-information?state=' + this.state.value;
    return;
  },
  handlePaidFormChange: function () {

    let escape = false;

    this.formOnPageSelectors.forEach(function (e, i, arr) {
      if (escape == true) {
        return;
      }

      let form = document.querySelector(e);

      if (form) {
        let stickyForm2 = document.querySelector('.stickyrfi-mobile ');
        let state2 = stickyForm2.querySelector('select');
        let stateSelec = form.querySelector("[data-drupal-selector='edit-state']");
        stateSelec.value = state2.value;
        escape = true;
        form.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        const event = new MouseEvent('change', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        stateSelec.dispatchEvent(event);
      }
    });

    return;
  },


  init: function (form) {


    //Desktop, nope.
    if (window.innerWidth > 1024) {
      return;
    }

    this.stickyForm = document.querySelector('.stickyrfi-mobile ');
    this.state = this.stickyForm.querySelector('select');


    if (window.location.pathname.indexOf('/success') !== 0 && window.innerWidth <= 1024) {
      this.state.addEventListener('change', this.handleEduFormChange.bind(this));
    }

    if (window.location.pathname.indexOf('/success') === 0 && window.innerWidth <= 1024) {
      console.log("first", this.state)
      this.state.addEventListener('change', event => {
        console.log("changed", this)
        this.handlePaidFormChange();
      });
    }



    //If no state data, bail instead of showing the form.
    if (this.addStates() == false) {
      return;
    }


    if (window.innerWidth < 1025) { // don't fire on desktop, only on mobile
      let formSelectors = [
        '.form-onestep',
        '.form-twostep',
        '.paid-twostep',
        '.blog-sidebar-form',
        '.section--advisor-form',
        '.webform-submission-zes-drupal-rfi-form',
        '.mediumformheader__form',
        '.section--advisor-form-wrapper'
      ];
      this.formOnPageSelectors = [];
      let numberOfSelectors = formSelectors.length;

      for (let i = 0; i < numberOfSelectors; i++) {
        if (document.querySelectorAll(formSelectors[i]).length !== 0) {
          this.formOnPageSelectors.push(formSelectors[i]);
        }
      }

      if (this.formOnPageSelectors.length > 0) {
        // hide initially on page load until scroll event occurs
        this.hideStickyForm();
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
  addStates: function () {
    if (drupalSettings.uagc_module && drupalSettings.uagc_module.lead_flow_system && drupalSettings.uagc_module.lead_flow_system.states) {
      drupalSettings.uagc_module.lead_flow_system.states.forEach((e, i, arr) => {
        this.state.add(new Option(e.n, e.a));
      });
    } else {
      return false;
    }

  },



  // this will hide the sticky rfi if any of the elements in formSelector are visible on page. 
  // if this isn't working with one of the RFI forms, just add  a selector for the forms wrapper
  // to the formSelectors array above
  // this will return true if it hid a form, which means all other checking must stop
  setProperStickyHeaderState: function (formSelector) {

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

    forms.forEach(function (e, i, arr) {

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

document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.stickyrfi-mobile');
  if (form) {
    stickyFormMobile.init(form);
  }
});
