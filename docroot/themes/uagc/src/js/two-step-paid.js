const twoStepForm = {
  allInputs: undefined,
  allInputContainers: undefined,
  state: undefined,
  college: undefined,
  degree: undefined,
  form: undefined,
  nextButton: undefined,
  submitButton: undefined,
  actionsContainer: undefined,
  contactContainer: undefined,
  tcpaContainer: undefined,
  informationContainer: undefined,
  nursing: undefined,
  nursingRadios: undefined,
  steps: undefined,
  disclaimer: undefined,
  isSticky: false,

  init: function (form) {
    this.form = form;
    this.allInputs = form.querySelectorAll('input, select');
    this.allInputContainers = [];

    this.allInputs.forEach((e, i, arr) => {
      let container = e.closest('.js-form-item');
      if (container) {
        this.allInputContainers.push(container);
        this.showElements(this.allInputContainers);
      }
    });




    this.showElements(this.allInputs);

    if (typeof Drupal.ashfordCRO === 'undefined') {
      Drupal.ashfordCRO = {};
    }

    Drupal.ashfordCRO.showingTwoStepRFI = true;
    Drupal.ashfordCRO.showingStepTwo = false;
    Drupal.ashfordCRO.showingCollegeFirst = true;

    this.state = this.form.querySelector('select[name="state"');
    this.college = this.form.querySelector('select[name="college_of_interest"');
    this.degree = this.form.querySelector('select[name="clientdegreeid"');
    this.nursing = drupalSettings.uagc_module.lead_flow_system.bs_nursing;
    this.nursingRadios = this.form.querySelectorAll('input[type="radio"][name="registerednurse"]');
    this.contactContainer = this.form.querySelector('div[data-drupal-selector="edit-contact-information"]');
    this.informationContainer = this.form.querySelector('div[data-drupal-selector="edit-interest-information"]');
    this.steps = this.form.closest('.paid-twostep').querySelector('.paid-twostep__status-steps');
    this.tcpaContainer = this.form.querySelector('input[name="tcpa_checkbox"]').closest('.js-form-item');
    this.disclaimer = this.form.querySelector('.form-disclaimer');





    this.hideElements([this.college.closest('.js-form-item'), this.degree.closest('.js-form-item'), this.contactContainer, this.tcpaContainer]);
    this.state.classList.add('--grey-default');
    this.college.classList.add('--grey-default');
    this.degree.classList.add('--grey-default');


    this.actionsContainer = this.form.querySelector('.js-form-submit').parentNode;

    //Add submit button.
    this.nextButton = document.createElement('button');
    this.nextButton.classList.add('webform-button--submit', 'button', 'button-primary', 'form-submit', '--next-button');
    this.nextButton.innerHTML = '<span>Next</span> | Step 1 of 2';

    this.submitButton = this.form.querySelector('input[type="submit"]');

    this.actionsContainer.appendChild(this.nextButton);

    this.submitButton.style.display = 'none';


    this.addEventListeners([this.state, this.college, this.degree], 'change, blur', this.handleSelectGrayBackground.bind(this));

    this.addEventListeners(this.state, 'change, blur', this.handleStateChange.bind(this));

    this.addEventListeners(this.college, 'change, blur', this.handleCollegeChange.bind(this));

    this.addEventListeners(this.nextButton, 'click', this.handleNextButton.bind(this));


    this.handleFormDisplayOnTablet();

    this.handleSticky();

    this.addEventListeners(window, 'resize', () => { window.requestAnimationFrame(this.handleFormDisplayOnTablet.bind(this)) });


  },
  handleFormDisplayOnTablet: function () {

    var parentColumnLeft = this.form.closest('.columns__left');
    //Only on tablet.
    if (window.innerWidth >= 768 && window.innerWidth < 1280 || parentColumnLeft && window.innerWidth >= 1280) {

      var inputs = this.form.querySelectorAll('select[name="state"], select[name="clientdegreeid"], select[name="college_of_interest"], input[name="firstname"], input[name="lastname"],  input[name="phone1"], input[name="emailaddress"]');

      inputs.forEach(function (e, i, arr) {
        e.classList.add('--always-display');
        e.closest('.form-item').classList.add('--always-display');
      });
    } else {

      //Are we in the right column.
      if (this.form.closest('.columns__right') || parentColumnLeft && window.innerWidth < 768) {

        //Remove the classes.
        var inputs = this.form.querySelectorAll('select[name="state"], select[name="clientdegreeid"], select[name="college_of_interest"], input[name="firstname"], input[name="lastname"],  input[name="phone1"], input[name="emailaddress"]');

        inputs.forEach(function (e, i, arr) {
          e.classList.remove('--always-display');
          e.closest('.form-item').classList.remove('--always-display');
        });

      }

    }
  },
  handleNextButton: function (evt) {
    if (this.state.value == '' || this.college.value == '' || this.degree.value == '') {
      return;
    }

    if (this.degree.value == this.nursing) {

      let nursingValue = '';

      this.nursingRadios.forEach(function (e, i, arr) {
        if (e.checked == true) {
          nursingValue = e.value;
        }
      })


      if (nursingValue == 'No' || nursingValue == '') {
        return;
      }
    }



    evt.stopPropagation();
    evt.preventDefault();

    this.hideElements([this.informationContainer, this.nextButton]);
    this.showElements([this.submitButton, this.disclaimer]);
    this.contactContainer.style.display = '';

    this.tcpaContainer.style.display = 'flex';

    this.steps.querySelector('.paid-twostep__status-label').innerHTML = 'Step 2 of 2';
    this.steps.classList.add('--step-2')


  },
  handleCollegeChange: function () {
    if (this.college.selectedIndex == 0) {
      this.degree.closest('.js-form-item').style.display = 'none';
      return;
    }

    //We've only got one degree. Don't show the degree dropdown.
    if (this.degree.options.length == 2) {
      return;
    }



    this.degree.closest('.js-form-item').style.display = 'block';

  },
  handleStateChange: function () {
    if (this.state.selectedIndex == 0) {
      this.college.closest('.js-form-item').style.display = 'none';
      this.degree.closest('.js-form-item').style.display = 'none';
      return;
    }

    //We've only got one interest. Don't show the interest dropdown.
    if (this.college.options.length == 2) {
      return;
    }

    this.college.closest('.js-form-item').style.display = 'block';


  },
  handleSelectGrayBackground: function (evt) {
    let select = evt.target;
    if (select.selectedIndex === 0) {
      if (select.classList.contains('--grey-default') === false) {
        select.classList.add('--grey-default');
      }
    } else {
      select.classList.remove('--grey-default');
    }

  },
  addEventListeners: (elements, eventString, callback) => {
    let events = eventString.split(',');



    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements) === false && Array.isArray(elements) == false) {
      elements = [elements];
    }
    elements.forEach(function (e, i, arr) {
      events.forEach(function (event) {
        e.addEventListener(event.trim(), callback);
      });
    });
  },
  hideElements: function (elements) {

    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements) === false && Array.isArray(elements) == false) {
      elements = [elements];
    }

    elements.forEach(function (e, i, arr) {
      e.style.display = 'none';
    });

  },

  showElements: function (elements) {

    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements) === false && Array.isArray(elements) == false) {
      elements = [elements];
    }


    elements.forEach(function (e, i, arr) {
      e.style.display = 'block';
    });
  },

  handleSticky: function () {
    // test if we are in the right column, if so we want to simulate sticky positioning
    const sideBarContainer = this.form.closest('.columns__right');
    if (sideBarContainer) {
      const formContainer = this.form.closest('.paid-twostep');
      const topHeaderElement = document.querySelector('.site-header');

      window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
          let { top: sideBarContainerTop, bottom: sideBarContainerBottom, width: sideBarContainerWidth } = sideBarContainer.getBoundingClientRect();
          const headerHeight = topHeaderElement.clientHeight;
          const formContainerHeight = formContainer.clientHeight;
          const sideBarDistanceFromBottom = sideBarContainerBottom - formContainerHeight - headerHeight;
          const sideBarContainerTopOffset = sideBarContainerTop - headerHeight;

          // The sideBarContainerWidth can change based on breakpoint
          formContainer.style.width = `${sideBarContainerWidth}px`;

          if (!this.isSticky && sideBarContainerTopOffset < 0 && sideBarDistanceFromBottom > 0) {
            formContainer.style.position = 'fixed';
            formContainer.style.paddingTop = '16px';
            formContainer.style.top = `${headerHeight}px`;
            formContainer.style.bottom = 'unset';
            this.isSticky = true;
          } else if (this.isSticky) {
            if (sideBarContainerTopOffset > 0) {
              formContainer.style.position = 'static';
              formContainer.style.paddingTop = '0';
              formContainer.style.top = 'unset';
              this.isSticky = false;
            } else if (sideBarDistanceFromBottom <= 0) {
              formContainer.style.position = 'absolute';
              formContainer.style.paddingTop = '32px';
              formContainer.style.top = 'unset';
              formContainer.style.bottom = '0';
              this.isSticky = false;
            }
          }
        }, true);
      });

      const resizeObserver = new ResizeObserver(entries => {
        if (entries.length > 0) { // if resize occured
          let { width: sideBarContainerWidth } = sideBarContainer.getBoundingClientRect()
          formContainer.style.width = `${sideBarContainerWidth}px`;
        }
      });

      resizeObserver.observe(sideBarContainer);
    }
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let forms = document.querySelectorAll('.two-step-webform, .section--featured-space-basic-form.two-step-webform');

  forms.forEach(function (e, i, arr) {
    let twoStep = Object.assign({}, twoStepForm);
    twoStep.init(e);
  });

});
