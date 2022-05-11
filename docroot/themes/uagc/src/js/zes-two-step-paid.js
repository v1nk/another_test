(function($) {

    function isMobile() {
      //don't use $(window).width() because that does not account for scroll bar which varies by client/OS
      if(window.innerWidth > 1024) {
        return false;
      } else {
        return true;
      }
    }

    window.twoStepCollegeFirstPaid = function () {

      if (typeof Drupal.ashfordCRO === 'undefined') {
        Drupal.ashfordCRO = {};
      }

      Drupal.ashfordCRO.showingTwoStepRFI = true;
      Drupal.ashfordCRO.showingStepTwo = false;
      Drupal.ashfordCRO.showingCollegeFirst = true;


      $('.two-step-webform, .section--featured-space-basic-form.two-step-webform').find('input, select').show();

      //Update the degree list by triggering a state event.
      $('.two-step-webform select[name="state"]').each(function() {
        $(this).blur().change().trigger('blur change');
      });
      
      $('.two-step-webform select[name="college_of_interest"], .section--featured-space-basic-form select[name="college_of_interest"]').hide();


      $('.two-step-webform select[name="clientdegreeid"], .section--featured-space-basic-form select[name="clientdegreeid"]').hide();


      $('.two-step-webform select').addClass('--grey-default');

      $('.two-step-webform select').on('change', function() {
        if (this.selectedIndex === 0) {
          if (this.classList.contains('--grey-default') === false) {
            this.classList.add('--grey-default');
          }
        } else {
          this.classList.remove('--grey-default');
        }
      });



      //Get handles for relevant objects.
      var container = $('.two-step-webform, .section--featured-space-basic-form.two-step-webform');
      var forms = container.find('form');
      forms.each(function(i, form) {


        var buttonHtml = '<input type="button" class="webform-button--submit button button--primary form-submit --next-button" value="NEXT">';
        var progressBarHtml = '<div class="rfi-lfs__progressbar"><h5 class="rfi-lfs__progressbar-title">Step 1 of 2</h5><div class="rfi-lfs__progressbar-bar"></div></div>'
  
        //Build progress bar
        var progressBar = $($.parseHTML(progressBarHtml));
        form.prepend(progressBar[0]);



        var buttonHtml = '<a class="button button--cta-with-icon --cta-arrow-test --next-button" value="NEXT">NEXT</a>'
        var newButton = $($.parseHTML(buttonHtml));
  


        form = $(form);
        form.find('fieldset[data-drupal-selector="edit-registerednurse"], .js-registerednurse-validation-message').hide();

        var containerID = form.closest('section').data('containerid');
        var degrees = [];
        var interests = [];

        if (typeof containerID === 'undefined' || containerID ==null || containerID == '') {
          containerID = form.closest('.two-step-webform').data('containerid');
        }
        if (window.ashfordlfs && window.ashfordlfs[containerID]) {
          if (window.ashfordlfs[containerID].degrees) {
            degrees = window.ashfordlfs[containerID].degrees;
          }

          if (window.ashfordlfs[containerID].interests) {
            interests = window.ashfordlfs[containerID].interests;
          }          
        }
    


        var selects = form.find('select');
        var inputs = form.find('input[type="text"], input[type="tel"], input[type="email"]');
        var submitButton = form.find('.js-form-submit');
        var buttonContainer = form.find('.js-form-submit').parent();
        
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

        form.find('select[name="state"], select[name="clientdegreeid"], select[name="college_of_interest"], input[name="firstname"], input[name="lastname"],  input[name="phone1"], input[name="emailaddress"], input[name="tcpa_checkbox"]').closest('.js-form-item').find('label').removeClass('visually-hidden');


        form.find('select[name="clientdegreeid"], input[name="tcpa_checkbox"]').closest('.js-form-item').hide();
        form.find('.form-disclaimer').hide();


        form.find('select[name="state"]').on('blur change', function() {
          if ($(this).val() !== '') {
            if (degrees.length !== 1 && interests.length !==1) {
              form.find('select[name="college_of_interest"]').show().parent().show();
            }

            if (interests.length ==1) {
              form.find('select[name="clientdegreeid"]').show().parent().show();
            }


          } else {
            form.find('select[name="college_of_interest"]').hide().parent().hide();
          }
        });

        form.find('select[name="state"]').trigger('blur');

        form.find('select[name="college_of_interest"]').on('blur change', function(e) {
          if ($(this).val() !== '') {
            if (degrees.length !== 1) {
              form.find('select[name="clientdegreeid"]').show().parent().show();
            }
          } else {
            form.find('select[name="clientdegreeid"]').hide().parent().hide();
          }
        });
        
        var handleFormDisplayOnTablet = function() {
          
          //Only on tablet.
          if (window.innerWidth >=768 && window.innerWidth < 1024 || form.closest('.columns__left').length > 0 && window.innerWidth >= 1024) {
            var inputs = form.find('select[name="state"], select[name="clientdegreeid"], select[name="college_of_interest"], input[name="firstname"], input[name="lastname"],  input[name="phone1"], input[name="emailaddress"]')
            inputs.addClass('--always-display ');
            inputs.closest('.form-item').addClass('--always-display');
          } else {

            //Are we in the right column.
            if (form.closest('.columns__right').length > 0) {
              
              //Otherwise remove the classes.
              var inputs = form.find('select[name="state"], select[name="clientdegreeid"], select[name="college_of_interest"], input[name="firstname"], input[name="lastname"],  input[name="phone1"], input[name="emailaddress"]')
              inputs.removeClass('--always-display ');
              inputs.closest('.form-item').removeClass('--always-display');
            }

          }
        };

        //Do it the first time for setup.
        handleFormDisplayOnTablet();

        $(window).on('resize', handleFormDisplayOnTablet)

        



  
        buttonContainer.find('a.--next-button').on('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          //Validate each input and call the submit click on the form to display error messages
          if (form.find('select[name="state"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return;
          }
  
          if (form.find('select[name="college_of_interest"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return;
          }
  
          if (form.find('select[name="clientdegreeid"]').val().trim() == '' ) {
            form.find('input[type="submit"]').click();
            return;
          }
          
          if (form.find('select[name="clientdegreeid"]').val() == '1818' && form.find('input[name="registerednurse"]').length && form.find('input[name="registerednurse"]:checked').val() !== 'Yes') {
            return;
          }
             
          Drupal.ashfordCRO.showingStepTwo = true;

          form.find('.rfi-lfs__progressbar').addClass('--step-two');
          form.find('.rfi-lfs__progressbar-title').html('Step 2 of 2');





          //Fields are all valid, so let's display the dropdowns and move to step two.
          $(this).hide();
          inputs.closest('div[data-drupal-selector="edit-contact-information"]').show();
          selects.closest('div[data-drupal-selector="edit-interest-information"]').hide();
  
          form.find('input[name="tcpa_checkbox"]').closest('.js-form-item').css('display', 'flex');
          form.find('.form-disclaimer').show();

          submitButton.show();

          form.find('input.webform-button--submit').addClass("--request-btn-disabled").attr('disabled', true);
  

          form.find('input[name="firstname"], input[name="lastname"], input[name="phone1"], input[name="emailaddress"]').on("blur", function(event) {
            if (form.find('input[name="firstname"]').val() !== '' && form.find('input[name="lastname"]').val() !== '' && form.find('input[name="phone1"]').val() !== '' && form.find('input[name="phone1"]')[0].checkValidity() && form.find('input[name="emailaddress"]').val() !== '' && form.find('input[name="emailaddress"]')[0].checkValidity() && form.find('.form-item-tcpa-checkbox input[type="checkbox"]').prop('checked')) {
              form.find('input.webform-button--submit').removeClass("--request-btn-disabled").removeAttr('disabled');
            } else {
              form.find('input.webform-button--submit').addClass("--request-btn-disabled").attr('disabled', true);
            }
          });
          form.find('.form-item-tcpa-checkbox input[type="checkbox"]').click(function() {
            if (form.find(this).prop("checked") == true && form.find('input[name="firstname"]').val() !== '' && form.find('input[name="lastname"]').val() !== '' && form.find('input[name="phone1"]').val() !== '' && form.find('input[name="phone1"]')[0].checkValidity() && form.find('input[name="emailaddress"]').val() !== '' && form.find('input[name="emailaddress"]')[0].checkValidity()) {
              form.find('input.webform-button--submit').removeClass("--request-btn-disabled").removeAttr('disabled');
            }
            else {
              form.find('input.webform-button--submit').addClass("--request-btn-disabled").attr('disabled', true);
            }
          });




          form.closest('.paid-twostep').find('.paid-twostep__status-step.--step-1').addClass('--inactive');
          form.closest('.paid-twostep').find('.paid-twostep__status-step.--step-2').removeClass('--inactive');

          var containerID = container.attr('id');
          
          if (window.ashfordlfs && window.ashfordlfs[containerID] && window.ashfordlfs[containerID].degrees.length > 0 && form.find('select[name="state"]').val() =='') {
            form.find('select[name="clientdegreeid"]').parent().hide();
          }
  
  
          form.find('select[name="state"]').on('blur change', function() {
            form.find('select[name="clientdegreeid"]').show().parent().show();
          });
  
  
  
        });

        form.css('visibility', 'visible');


      })


    };

    window.twoStepCollegeFirstPaid();

    if (window.location.pathname == '/request-information') {
      $('body').addClass('--request-information-page');
    }


})(jQuery);