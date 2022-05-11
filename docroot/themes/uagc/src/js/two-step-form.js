const nonPaidTwoStep = {
  allInputs: undefined,
  allInputContainers: undefined,
  state: undefined,
  college: undefined,
  degree: undefined,
  form: undefined,
  nextButton: undefined,
  firstName: undefined,
  lastName: undefined,
  phone: undefined,
  email: undefined,
  tcpaCheckbox: undefined,
  submitButton: undefined,
  actionsContainer: undefined,
  contactContainer: undefined,
  tcpaContainer: undefined,
  informationContainer: undefined,
  statusLabel: undefined,
  nursing: undefined,
  nursingRadios: undefined,
  step1: undefined,
  step2: undefined,
  disclaimer: undefined,
  showFieldsInOrder: undefined,
  init: function(form){
    this.form = form;
    this.allInputs =  form.querySelectorAll('input, select');
    this.allInputContainers = [];





    this.allInputs.forEach((e,i,arr) => {
      let container = e.closest('.js-form-item');
      if(container) {
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
    this.tcpaContainer = this.form.querySelector('input[name="tcpa_checkbox"]').closest('.js-form-item');
    this.disclaimer = this.form.querySelector('.form-disclaimer');
    this.statusLabel = this.form.querySelector('.form-twostep__status-label');
    this.firstName = this.form.querySelector('input[name="firstname"]');
    this.lastName = this.form.querySelector('input[name="lastname"]');
    this.phone = this.form.querySelector('input[name="phone1"]');
    this.email = this.form.querySelector('input[name="emailaddress"]');
    this.tcpaCheckbox = this.form.querySelector('input[name="tcpa_checkbox"]');


    this.showFieldsInOrder = false;
    if (this.form.classList.contains('js-show-fields-in-order')) {
      this.showFieldsInOrder = true;
      this.hideElements([this.college.parentNode, this.degree.parentNode]);
    }

    this.hideElements([this.contactContainer, this.tcpaContainer]);
    this.state.classList.add('--grey-default');
    this.college.classList.add('--grey-default');
    this.degree.classList.add('--grey-default');

    this.actionsContainer = this.form.querySelector('.js-form-submit').parentNode;

    //Add submit button.
    this.nextButton = document.createElement('button');
    this.nextButton.classList.add('webform-button--submit', 'button', 'button-primary', 'form-submit', '--next-button');
    this.nextButton.innerHTML = '<span>Next</span> | Step 1 of 2';

    this.submitButton = this.form.querySelector('input[type="submit"]');

    this.informationContainer.appendChild(this.nextButton);

    this.hideElements([this.submitButton]);


    this.addEventListeners([this.state, this.college, this.degree], 'change, blur, selectGrayBackgroundTest', this.handleSelectGrayBackground.bind(this));

    this.addEventListeners(this.state, 'change, blur', this.handleStateChange.bind(this));

    this.addEventListeners(this.college, 'change, blur', this.handleCollegeChange.bind(this));

    this.addEventListeners(this.nextButton, 'click', this.handleNextButton.bind(this));


    this.addEventListeners([this.firstName, this.lastName, this.phone, this.email, this.tcpaCheckbox], 'change, blur', this.handleContactChanges.bind(this));
    
  },
  handleNextButton: function(evt) {
    if (this.state.value == '' || this.college.value =='' || this.degree.value == '') {
      return;
    }
    
    if (this.degree.value == this.nursing) {

      let nursingValue = '';

      this.nursingRadios.forEach(function(e,i,arr) {
        if (e.checked == true) {
          nursingValue = e.value;
        }
      })

      if (nursingValue =='No' || nursingValue== '') {
        return;
      }
    }


    this.form.classList.add('--second-step');

    evt.stopPropagation();
    evt.preventDefault();

    this.hideElements([this.informationContainer, this.nextButton]);
    this.showElements([this.submitButton, this.disclaimer, this.tcpaContainer]);

    this.submitButton.setAttribute('disabled', 'disabled');

    this.contactContainer.style.display = '';

    this.tcpaContainer.style.display = 'flex';
    this.statusLabel.innerHTML = 'Step 2 of 2';

    this.step1.classList.add('--inactive');
    this.step2.classList.remove('--inactive');

  },
  handleCollegeChange: function() {

    if (this.showFieldsInOrder === true) {
      if (this.college.selectedIndex == 0) {
        this.hideElements([this.degree.parentNode]);
      } else {
        this.showElements([this.degree.parentNode]);
      }
    }


    if (this.college.selectedIndex == 0) {
      return;
    }

    //We've only got one degree. Don't show the degree dropdown.
    if (this.degree.options.length == 2) {
      return;
    }
    
    this.degree.closest('.js-form-item').style.display = 'block';

  },
  handleStateChange: function() {

    if (this.showFieldsInOrder === true) {
      if (this.state.selectedIndex == 0) {
        this.hideElements([this.college.parentNode, this.degree.parentNode]);
      } else {
        this.showElements([this.college.parentNode]);
      }
    }


    if (this.state.selectedIndex == 0) {
      return;
    }

    //We've only got one interest. Don't show the interest dropdown.
    if (this.college.options.length == 2) {
      return;
    }
  },
  handleContactChanges: function(evt) {

    let returnCheck = false;

    if (this.firstName.value.trim() === '' || this.lastName.value.trim() === '') {
      returnCheck = true;
    }

    if (this.phone.value.trim() === '' || this.phone.checkValidity() === false) {
      console.log('here', this.phone.value.trim(), this.phone.checkValidity());
      returnCheck = true;
    }

    if (this.email.value.trim() === '' || this.email.checkValidity() === false) {
      console.log('here', this.email.value.trim(), this.email.checkValidity());
      returnCheck = true;
    }

    if (this.tcpaCheckbox.checked !== true) {
      returnCheck = true;
    }
    
    console.log(returnCheck);

    if (returnCheck == true) {
      this.submitButton.setAttribute('disabled', 'disabled');
      return;
    }


    this.submitButton.removeAttribute('disabled');



  },
  handleSelectGrayBackground: function(evt) {

    let select;
    if (evt.target) {
      select = evt.target;
    } else {
      select = evt;
    } 

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
    elements.forEach(function(e,i,arr) {
      events.forEach(function(event) {
        e.addEventListener(event.trim(), callback);
      });
    });
  },
  hideElements: function(elements) {

    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements ) === false && Array.isArray(elements) == false) {
      elements = [elements];
    }

    elements.forEach(function(e,i,arr) {
      e.style.display='none';
    });

  },

  showElements: function(elements) {

    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements ) === false && Array.isArray(elements) == false) {
      elements = [elements];
    }


    elements.forEach(function(e,i,arr) {
      e.style.display='block';
    });
  }
}


document.addEventListener('DOMContentLoaded', function() {
  let forms = document.querySelectorAll('.form-twostep');

  forms.forEach(function(e, i, arr) {
    let twoStep = Object.assign({}, nonPaidTwoStep);
    twoStep.init(e);
  });
  
});
