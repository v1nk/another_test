(function($) {

    function isMobile() {
      //don't use $(window).width() because that does not account for scroll bar which varies by client/OS
      if(window.innerWidth > 1024) {
        return false;
      } else {
        return true;
      }
    }

    window.twoStepCollegeFirstMidForm = function () {
        if (window.location.pathname == '/request-information') {
            $('body').addClass('--request-information-page');
          }
      if (typeof Drupal.ashfordCRO === 'undefined') {
        Drupal.ashfordCRO = {};
      }

      
      Drupal.ashfordCRO.showingTwoStepRFI = true;
      Drupal.ashfordCRO.showingStepTwo = false;
      Drupal.ashfordCRO.showingCollegeFirst = true;

      var baseForm  = $('.section--advisor-form-two-step .webform-submission-lead-flow-system-form');
      var container = baseForm.parent();
      console.log(baseForm);
       
      baseForm.find('input, select').show();
      baseForm.find('input[name="firstname"]').parent().parent().hide();
      baseForm.find('select[name="clientdegreeid"]').show().parent().show();
      baseForm.find('select[name="college_of_interest"]').show().parent().show();

    
      baseForm.find('select[name="state"] option').eq(0).html('Select State<span>*</span>');
      baseForm.find('select[name="clientdegreeid"] option').eq(0).html('Select Your Degree<span>*</span>');
      baseForm.find('select[name="college_of_interest"] option').eq(0).html('Select Area of Interest<span>*</span>');

      baseForm.find('.form-disclaimer').hide();
      baseForm.find('input.webform-button--submit').addClass("--request-btn-disabled");


      $.each(baseForm.find('input[type="text"], input[type="tel"], input[type="email"]'), function(i, e) {
        $(e).attr('placeholder', $(e).attr('placeholder') + '*');
      });



      var stateElement = document.querySelector('#edit-state');
      var collegeInterestElement = document.querySelector('#edit-college-of-interest');
      var clientDegreeElement = document.querySelector('#edit-clientdegreeid');

      //var stateValue = stateElement.value;
      if(collegeInterestElement) {
        var collegeValue = collegeInterestElement.value;
      } else {
        var collegeValue = null;
      }
      if(clientDegreeElement) {
        var clientDegreeValue = clientDegreeElement.value;
      } else {
        var clientDegreeValue = null;
      }

      //Update the degree list by triggering a state event.
      $('.webform-submission-lead-flow-system-form select[name="state"]').each(function() {
          if($(this).val()) {
            $(this).blur().change().trigger('blur change');
            if(collegeValue) {
                collegeInterestElement.value = collegeValue;
                $(collegeInterestElement).blur().change().trigger('blur change');
            }
            if(clientDegreeValue) {

                clientDegreeElement.value = clientDegreeValue;
                window.requestAnimationFrame(function(){
                    $(clientDegreeElement).show();
                })
                
            }

          }
      });

      

      var buttonHtml = '<button class="webform-button--submit button button--primary form-submit --next-button">Next<span>Step 1 of 2</span></button>';


      //Get handles for relevant objects.
      //var container = $('.two-step-webform, .section--featured-space-basic-form.two-step-webform');
      var forms = container.find('form');
      forms.each(function(i, form) {
        form = $(form);
        var selects = form.find('select');
        var inputs = form.find('input[type="text"], input[type="tel"], input[type="email"]');
        var submitButton = form.find('.js-form-submit');
        var buttonContainer = form.find('.js-form-submit').parent();
        //Create new elements
        var newButton = $($.parseHTML(buttonHtml));

        if (form.find('input[type="radio"][name="registerednurse"][value="No"]:checked').length > 0) {
          if (form.find('select[name="clientdegreeid"]').val() == '1818') {
            form.find('input[type="submit"]').click();
            return; 
          }
        }
           


        Drupal.ashfordCRO.showingStepTwo = true;
        var terms = $('.block--rfi-terms');

        inputs.closest('div[data-drupal-selector="edit-contact-information"]').hide();
        submitButton.hide();
        
        buttonContainer.append(newButton);
        
  


        


  
        buttonContainer.find('button').on('click', function(e) {


          //Stop the next button from forcing form validation via sumbit.
          e.preventDefault();
          e.stopPropagation();

          //Validate each input and call the submit click on the form to display error messages
          if (form.find('select[name="state"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return false;
          }
  
          if (form.find('select[name="college_of_interest"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return false;
          }
  
          if (form.find('select[name="clientdegreeid"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return false;
          }
          
          if (form.find('select[name="clientdegreeid"]').val() == '1818' && form.find('input[name="registerednurse"]').length && form.find('input[name="registerednurse"]:checked').val() !== 'Yes') {
            return false;
          }
             
          Drupal.ashfordCRO.showingStepTwo = true;
  
          //Fields are all valid, so let's display the dropdowns and move to step two.
          $(this).hide();
          inputs.closest('div[data-drupal-selector="edit-contact-information"]').css('display', '').addClass('--show-me');
          selects.closest('div[data-drupal-selector="edit-interest-information"]').hide();
          form.find('.form-disclaimer').show();
          submitButton.show();
  

          form.find('input[name="firstname"], input[name="lastname"], input[name="phone1"], input[name="emailaddress"]').on("blur, keyup", function(event) {
            if (form.find('input[name="firstname"]').val() !== '' && form.find('input[name="lastname"]').val() !== '' && form.find('input[name="phone1"]').val() !== '' && form.find('input[name="phone1"]')[0].checkValidity() && form.find('input[name="emailaddress"]').val() !== '' && form.find('input[name="emailaddress"]')[0].checkValidity() && form.find('.form-item-tcpa-checkbox input[type="checkbox"]').prop('checked')) {
              form.find('input.webform-button--submit').removeClass("--request-btn-disabled");
            } else {
              form.find('input.webform-button--submit').addClass("--request-btn-disabled");
            }
          });
          form.find('.form-item-tcpa-checkbox input[type="checkbox"]').click(function() {
            if (form.find(this).prop("checked") == true && form.find('input[name="firstname"]').val() !== '' && form.find('input[name="lastname"]').val() !== '' && form.find('input[name="phone1"]').val() !== '' && form.find('input[name="phone1"]')[0].checkValidity() && form.find('input[name="emailaddress"]').val() !== '' && form.find('input[name="emailaddress"]')[0].checkValidity()) {
              form.find('input.webform-button--submit').removeClass("--request-btn-disabled");
            }
            else {
              form.find('input.webform-button--submit').addClass("--request-btn-disabled");
            }
          });
          


 
          form.find('select[name="state"]').on('blur change', function() {
            form.find('select[name="clientdegreeid"]').show().parent().show();
          });
          form.find('.form-item-tcpa-checkbox').show();
          
          return false;

  
        });

        form.css('visibility', 'visible');


      })


    };

    $(document).ready(function() {
      window.twoStepCollegeFirstMidForm();
    })




})(jQuery);