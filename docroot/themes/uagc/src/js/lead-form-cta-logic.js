const leadFormCta = {
  form: undefined,
  allInputs: undefined,
  state: undefined,
  college: undefined,
  degree: undefined,
  states: undefined,
  degrees: undefined,
  interests: undefined,
  nursing: undefined,
  nursingRadiosContainer: undefined,
  nursingMessage: undefined,
  stickyDesktop: false,
  degreeFilter: [],
  interestFilter: [],

  init: function(form){
    this.form = form;
    this.allInputs =  form.querySelectorAll('input, select');
    this.showElements(this.allInputs);

    if (typeof Drupal.ashfordCRO === 'undefined') {
      Drupal.ashfordCRO = {};
    }
      
    Drupal.ashfordCRO.showingTwoStepRFI = true;
    Drupal.ashfordCRO.showingStepTwo = false;
    Drupal.ashfordCRO.showingCollegeFirst = true;

    this.state = form.querySelector('select[name="state"]');
    this.college = form.querySelector('select[name="college_of_interest"]');
    this.degree = form.querySelector('select[name="clientdegreeid"]');

    this.nursingRadiosContainer = this.form.querySelector('fieldset[data-drupal-selector="edit-registerednurse"]');
    this.nursingRadios = this.form.querySelectorAll('input[type="radio"][name="registerednurse"]');
    this.nursingMessage = this.form.querySelector('.js-registerednurse-validation-message .js-form-type-processed-text');

    this.nursingMessage.style.display = 'none';
    this.nursingRadiosContainer.style.display = 'none';
    

    this.fixLabels();


    let formContainer = this.form.closest('[data-containerid]');
    
    if(formContainer) {
      let containerId = formContainer.getAttribute('data-containerid');

      if(containerId) {
        let formFilterData = window.ashfordlfs[containerId];
        if(formFilterData.degrees && formFilterData.degrees.length >0) {
          this.degreeFilter = formFilterData.degrees;
        }

        if(formFilterData.interests && formFilterData.interests.length >0) {
          this.interestFilter = formFilterData.interests;
        }
      }
    }

    this.states = drupalSettings.uagc_module.lead_flow_system.states;
    this.degrees = drupalSettings.uagc_module.lead_flow_system.degrees;
    this.interests = drupalSettings.uagc_module.lead_flow_system.interests;
    this.nursing = drupalSettings.uagc_module.lead_flow_system.bs_nursing;

    let newDegrees = [];
    let newInterests = [];

    this.degrees.forEach((degree,i,arr) => {
      if (this.degreeFilter.indexOf(degree.n) > -1) {
        newDegrees.push(degree)
      }
    });

    this.interests.forEach((interest,i,arr) => {
      if (this.interestFilter.indexOf(interest.n) > -1) {
        newInterests.push(interest)
      }
    });

    //Degrees override interests.
    if (newDegrees.length > 0) {
      newInterests = [];
      this.interests.forEach((interest,i,arr) => {
        newDegrees.forEach(function(degree) {
          if (degree.in == interest.i) {
            newInterests.push(interest);
          }
        });
      });
    }

    if (newInterests.length > 0) {
      this.interests = newInterests;
    }

    if (newDegrees.length > 0) {
      this.degrees = newDegrees;
    }

    //Swap out submit to use a button so we can put html in the text area.
    let newButton = document.createElement('button');
    newButton.classList.add('webform-button--submit', 'button', 'button--primary', 'js-form-submit', 'form-submit', '--arrow-button', '--next-button')
    newButton.innerHTML = '<span>Next</span>| Step 1 of 2 ';

    let actions = this.form.querySelector('input[type="submit"]').closest('.webform-actions');
    actions.querySelector('input[type="submit"]').classList.add('visually-hidden');
    actions.append(newButton);

    
    if (this.nursingRadiosContainer.closest('.stickyrfi-desktop')) {
      this.stickyDesktop = true;

      actions.insertAdjacentElement('afterend', this.nursingMessage.closest('.js-registerednurse-validation-message'));
      actions.insertAdjacentElement('afterend', this.nursingRadiosContainer);

    }




    this.clearState();
    this.clearInterest();
    this.clearDegree();

    this.defaultStateDropdown();

    this.addEventListeners(this.state, 'blur, change', this.handleStateChange.bind(this));
    this.addEventListeners(this.college, 'blur, change', this.handleInterestChange.bind(this));
    this.addEventListeners(this.degree, 'blur, change', this.handleDegreeChange.bind(this));
    this.addEventListeners(this.nursingRadios, 'change', this.handleNursingMessage.bind(this));

    this.overrideSourceId();

    this.populateOmniangleFields();

    this.setConversionData();


  },
  setConversionData: function() {
    var data;
    var tempA;
    var isExternal = false;


    // If the referrer is external, reset the cookie.
    tempA = document.createElement('a');
    tempA.href = document.referrer;
    if (location.hostname !== tempA.hostname || document.referrer === '') {
      isExternal = true;
    }

    // Check for existing session cookie. If there is one, exit early.
    // Do not exit early if the cookie needs to be reset.
    data = this.getData('uagc_module');
    if (data && !isExternal) {
      return data;
    }



    data = this.paramCollection()

    if (data == null) {
      data = {};
    }

    data.referrer = document.referrer;
    data.originpage = location.href;

    this.setCookie('uagc_module', encodeURI(JSON.stringify(data)));
  },
  populateOmniangleFields: function() {
    var urlField = this.form.querySelector('input[name="weblandingurl"]');

    urlField.value = window.location.href;

    //Add the unique lead id.
    var dt = (new Date()).getTime();
    var leadUniqueId = 'uagc-website-'+dt.toString();
    var leadIdField = this.form.querySelector('input[name="unique_lead_id"]');

    leadIdField.value = leadUniqueId;



  },
  overrideSourceId: function() {
    let containerID = null; 
    if (this.form.closest('[data-containerid]')) {
      this.form.closest('[data-containerid]').getAttribute('data-containerid');
      if (typeof containerID === 'undefined' || containerID ==null || containerID == '') {
        containerID = this.form.closest('[data-containerid]').getAttribute('data-containerid');
      }  
    }
    
    if (window.ashfordlfs && window.ashfordlfs[containerID]) {
      if (window.ashfordlfs[containerID].sourceid) {
        this.form.querySelector('input[name="sourceid"]').value = window.ashfordlfs[containerID].sourceid;
      } else {
        this.form.querySelector('input[name="sourceid"]').value = 'ADE219';
      }

      if (window.ashfordlfs[containerID].clientdocumentid) {
        this.form.querySelector('input[name="clientdocumentid"]').value = window.ashfordlfs[containerID].clientdocumentid;
      } else {
        this.form.querySelector('input[name="clientdocumentid"]').value = '215';

      }

      if (window.ashfordlfs[containerID].revisionid) {
        this.form.querySelector('input[name="revisionid"]').value = window.ashfordlfs[containerID].revisionid;
      } else {
        this.form.querySelector('input[name="revisionid"]').value = 'ASH.112916';
      }

      if (window.ashfordlfs[containerID].formidclass) {
        this.form.addClass(window.ashfordlfs[containerID].formidclass);
      }

    } else {
      //Set default.
      this.form.querySelector('input[name="sourceid"]').value = 'ADE219';
      this.form.querySelector('input[name="revisionid"]').value = 'ASH.112916';
      this.form.querySelector('input[name="clientdocumentid"]').value = '215';
      
    }
    
  },
  fixLabels: function() {
    this.allInputs.forEach(function(e, i, arr) {
      let container = e.closest('.js-form-item');
      if (container) {
        container.querySelector('label').classList.remove('visually-hidden');
      }
    });

    if (!this.form.closest('.section--advisor-form-two-step')) {

    }




  },
  handleDegreeChange: function() {
    this.handleNursing();
    this.handleGrayInitialText(this.degree);

  },
  handleNursingMessage: function(evt) {
    let disableButton = this.form.querySelector('button.webform-button--submit');
    if(evt.target.value == 'No') {
      this.nursingMessage.style.display = 'block';
      disableButton.setAttribute("disabled", "");
    } else {
      this.nursingMessage.style.display = 'none';
      disableButton.removeAttribute("disabled", "");
    }
  },
  handleNursing: function(){
    let currentDegree = this.getDegree(this.degree.value, this.degrees);
    if (this.degree.value == '') {
      this.nursingRadiosContainer.style.display = 'none';

      if (this.stickyDesktop === true)  {
        this.form.closest('.stickyrfi-desktop').classList.remove('--nursing-open');
      }
      return;
    }
  
    if (currentDegree.ci !== this.nursing) {
      this.nursingRadiosContainer.style.display = 'none';
      this.nursingMessage.style.display= 'none';

      if (this.stickyDesktop === true)  {
        this.form.closest('.stickyrfi-desktop').classList.remove('--nursing-open');
      }

    } else {
      this.nursingRadiosContainer.style.display = 'block';
      if (this.stickyDesktop === true)  {
        this.form.closest('.stickyrfi-desktop').classList.add('--nursing-open');
      }

    }
  },
  populateInterestDropdown: function() {
    if (this.state.selectedIndex === 0) {
      return;
    }

    if (this.interests.length === 1) {
      this.college.add(new Option(this.interests[0].n, this.interests[0].i));
      this.college.selectedIndex = 1;
      this.college.dispatchEvent(new Event('change'));
      this.college.dispatchEvent(new Event('blur'));
      return;
    }

    let currentState = this.getState(this.state.value, this.states);
    currentState.in.forEach((e,i,arr) => {
      let thisInterest = this.getInterest(e, this.interests);
      if (!(thisInterest)) {
        return;
      }
      this.college.add(new Option(thisInterest.n, thisInterest.i));
    });
  },
  handleInterestChange: function() {
    this.clearDegree();
    this.handleNursing();
    this.populateDegreeDropdown();
    this.handleGrayInitialText(this.college);
  },

  populateDegreeDropdown: function () {
    if (this.degrees.length === 1) {
      this.degree.add(new Option(this.degrees[0].n, this.degrees[0].i));
      this.degree.selectedIndex = 1;
      this.degree.dispatchEvent(new Event('change'));
      this.degree.dispatchEvent(new Event('blur'));
      return;
    }

    let currentInterest = this.getInterest(this.college.value, this.interests);
    let degrees = this.degreesWithInterest(this.degrees, currentInterest);
    let state = this.getState(this.state.value, this.states);
    
    degrees.forEach((e,i,arr) => {
      if (state.d.indexOf(e.ci) > -1) {
        this.degree.add(new Option(e.n, e.ci));
      }
    });

  },
  handleGrayInitialText: function(element) {
    if (element.selectedIndex === 0) {
      if (element.classList.contains('--gray-text') === false) {
        element.classList.add('--gray-text');
      }
    } else {
      element.classList.remove('--gray-text');
    }
  },
  handleStateChange: function() {
    this.clearInterest();
    this.clearDegree();
    this.handleNursing();
    this.populateInterestDropdown();
    this.handleGrayInitialText(this.state);
  },
  defaultStateDropdown: function() {

    this.clearState();

    this.states.forEach((e, i, arr) => {
      this.state.add(new Option(e.n, e.a));
    });

  },
  clearState: function() {
    this.state.length = 0;

    if (this.form.closest('.blog-sidebar-form')) {
      this.state.add(new Option('State', ''));
    } else {
      this.state.add(new Option('Select State', ''));
    }

    this.handleGrayInitialText(this.state);

  },
  clearInterest: function() {
    this.college.length = 0;

    if (this.form.closest('.blog-sidebar-form')) {
      this.college.add(new Option('Area of Interest', ''));
    } else {
      this.college.add(new Option('Select Area of Interest', ''));
    }

    this.handleGrayInitialText(this.college);


  },
  clearDegree: function() {
    this.degree.length = 0;

    this.degree.add(new Option('Select Your Degree', ''));
    this.handleGrayInitialText(this.degree);


  },
  getDegree: function(id, degrees) {
    for (var i = 0; i < degrees.length; i++) {
      if (degrees[i]['ci'] == id) {
        return degrees[i];
      }
    }
  
    return null;
  },
  getInterest: function(id, interests) {
    for (var i = 0; i < interests.length; i++) {
      if (interests[i]['i'] == id) {
        return interests[i];
      }
    }
  
    return null;
  },
  getState: function(abr, states) {
    for (var i = 0; i < states.length; i++) {
      if (states[i]['a'] == abr) {
        return states[i];
      }
    }
  
    return null;
  },
  doesStateHaveInterest: function(state, interest) {
    for (var i = 0; i < state.in.length; i++) {
      if (state.in[i] == interest) {
        return true;
      }
    }
  
    return false;
  },
  degreesWithInterest: function(degrees, interest) {
    let degreeList = [];

    degrees.forEach((e,i,arr) => {
      if (e.in === interest.i) {
        let deg = e;
        degreeList.push(deg);
      }
    });

    return degreeList;



  },
  addEventListeners: (elements, eventString, callback) => {
    let events = eventString.split(',');

    //If we only have one element, need to make it iterable.
    if (NodeList.prototype.isPrototypeOf(elements ) === false && Array.isArray(elements) == false) {
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
  },
  getCookie: function (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  },
  setCookie: function(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  },
  getData: function getData(key) {
    var cookieData = this.getCookie("uagc_modal");

    if (cookieData) {
      cookieData = JSON.parse(decodeURIComponent(cookieData));
      return cookieData[key];
    }

    return null;
  },
  setData: function(key, value) {
    var cookieData = this.getCookie("uagc_modal");

    if (cookieData) {
      cookieData = JSON.parse(decodeURIComponent(cookieData));
    } else {
      cookieData = new Object();
    }

    cookieData[key] = value;
    cookieData = encodeURIComponent(JSON.stringify(cookieData));
    this.setCookie("uagc_modal", cookieData);
  },
  paramCollection: function() {

    if(location.search == '') {
      return null;
    }

    let params = location.search.substring(1);

    params = params.split('&')
    let objParam = {};

    params.forEach(function(e,i,arr) {
      let param = e.split('=');
      objParam[param[0]] = param[1];
    });

    return objParam;

  }
  



}

document.addEventListener('DOMContentLoaded', function() {


  let forms = document.querySelectorAll('.webform-submission-lead-flow-cta-form');

  forms.forEach(function(e, i, arr) {

    //Uniquify labels across the forms.
    var inputs = e.querySelectorAll('input, select');
  
    if (inputs) {
      inputs.forEach(function(input, index) {
        let container = input.closest('.js-form-item');
        if (container) {
          let label =  container.querySelector('label');
          if (label) {
            let id = input.getAttribute('id');
            if (id) {
              input.setAttribute('id', id + '-' + i.toString());
              label.setAttribute('for', id + '-' + i.toString());    
            }
          }
        }
      })
    }

    //Hook up the forms.
    let form = Object.assign({}, leadFormCta);
    form.init(e);

  });
});


