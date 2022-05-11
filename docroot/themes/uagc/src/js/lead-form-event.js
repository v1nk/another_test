/**
* @file lead_modal_flow_system.js
*
* Makes magic happen.
*
* https://www.youtube.com/watch?v=SVi3-PrQ0pY
*/

function getDegree(id, degrees) {
  for (var i = 0; i < degrees.length; i++) {
    if (degrees[i]['ci'] == id) {
      return degrees[i];
    }
  }

  return null;
}

function getInterest(id, interests) {
  console.log(interests);
  console.log(id);
  for (var i = 0; i < interests.length; i++) {
    if (interests[i]['i'] == id) {
      return interests[i];
    }
  }

  return null;
}

function getState(abr, states) {
  for (var i = 0; i < states.length; i++) {
    if (states[i]['a'] == abr) {
      return states[i];
    }
  }

  return null;
}


function doesStateHaveInterest(state, interest) {
  for (var i = 0; i < state.in.length; i++) {
    if (state.in[i] == interest) {
      return true;
    }
  }

  return false;
}

if (!degreesWithInterest) {

  function degreesWithInterest(degrees, interest, degreeObjs) {
    var qDegrees = [];
    for (var i = 0; i < degrees.length; i++) {
      var degreeObj = getDegree(degrees[i], degreeObjs);
      if (degreeObj !== null && degreeObj.in == interest) {
        qDegrees.push(degreeObj);
      }
    }
    return qDegrees;
  }
}


(function($, Drupal, drupalSettings, document) {
  console.log('asdf');
  jQuery(document).ready( function() {

    console.log('in here');

    function setConversionData() {
      var data;
      var queryParams;
      var tempA;
      var isExternal = false;

      // Turn on automatic storage of JSON objects passed as the cookie value.
      $.cookie.json = true;

      // If the referrer is external, reset the cookie.
      tempA = document.createElement('a');
      tempA.href = document.referrer;
      if (location.hostname !== tempA.hostname || document.referrer === '') {
        isExternal = true;
      }

      // Check for existing session cookie. If there is one, exit early.
      // Do not exit early if the cookie needs to be reset.
      data = $.cookie('ashford_lfs');
      if (data && !isExternal) {
        return data;
      }

      // Strip off the beginning `?` from the query parameters.
      queryParams = location.search.substring(1);

      data = $.extend({},
        {
          referrer: document.referrer,
          originpage: location.href
        },
        // Convert query parameters to an object.
        $.deparam(queryParams)
      );

      $.cookie('ashford_lfs',
        data,
        {
          path: '/'
        }
      );

      return $.cookie('ashford_lfs');
    };


    function getConversionData() {
      var data;

      // Turn on automatic storage of JSON objects passed as the cookie value.
      $.cookie.json = true;

      data = $.cookie('ashford_lfs');
      if (data) {

        // Allow users to overwrite originpage
        var queryParams = $.deparam(location.search.substring(1));
        if (queryParams.originpage != undefined) {
          data.originpage = queryParams.originpage;
        }

        return data;
      }
      else {
        return {};
      }
    };

    setConversionData();

    'use strict';

    // something isn't right. abort.
    if ($('.webform-submission-academic-partner-rfi-form').length <= 0) {
      return;
    }

    $('.webform-submission-academic-partner-rfi-form').each(function() {
      var form = $(this);

      // setup data from backend
      var states = drupalSettings.uagc_module.lead_flow_system.states;
      var degrees = drupalSettings.uagc_module.lead_flow_system.degrees;
      var interests = drupalSettings.uagc_module.lead_flow_system.interests;
      var nursing = drupalSettings.uagc_module.lead_flow_system.bs_nursing;

      // lets hide some fields if they are empty
      form.find(".js-form-item-clientdegreeid").hide();
      form.find(".js-registered-nurse").hide();
      form.find(".js-registerednurse-validation-message").hide();

      // set inital values
      // There is a lot going on here. so keep up.

      // Check to see if state is filled out.
      if (
        form.find("select[name='state']").val() !== "" &&
        getState(form.find("select[name='state']").val(), states) != null
      ) {

        var selectedState = getState(form.find("select[name='state']").val(), states);
        // NOTE: This doesn't seem to trigger :(
        form.find("select[name='state']").trigger("change");

        // check to see if interest is filled out
        if (
          form.find("select[name='college_of_interest']").val() != "" &&
          doesStateHaveInterest(selectedState, form.find("select[name='college_of_interest']").val())
        ) {

          var selectedInterest = form.find("select[name='college_of_interest']").val();
          // blank Interests
          form.find("select[name='college_of_interest']").empty().append('<option value="">Please Select</option>');
          // append state Interests
          $.each(selectedState.in, function(index, value) {

            var interest = getInterest(value, interests);
            if (interest.i == selectedInterest) {
              form.find("select[name='college_of_interest']").append('<option value="' + interest.i + '" selected>' + interest.n + '</option>');
            } else {
              form.find("select[name='college_of_interest']").append('<option value="' + interest.i + '">' + interest.n + '</option>');
            }

          });

          var qDegrees = degreesWithInterest(selectedState.d, selectedInterest, degrees);

          var selectedDegree = form.find("select[name='clientdegreeid']").val();

          if (selectedDegree != '') {
            form.find("select[name='clientdegreeid']").empty().append('<option value="" selected>Please Select</option>');
          } else {
            form.find("select[name='clientdegreeid']").empty().append('<option value="">Please Select</option>');
          }


          $.each(qDegrees, function(index, value) {
            if (selectedDegree == value.ci) {
              form.find("select[name='clientdegreeid']").append('<option value="' + value.ci + '" selected="true">' + value.n + '</option>');
              // NOTE: This doesn't seem to trigger :(
              form.find("select[name='clientdegreeid']").trigger("change");
            } else {
              form.find("select[name='clientdegreeid']").append('<option value="' + value.ci + '">' + value.n + '</option>');
            }

          });

          // NOTE: This doesn't seem to trigger :(
          form.find("select[name='college_of_interest']").trigger("change");
          form.find(".js-form-item-clientdegreeid").show();


        } else {

          // blank Interests
          form.find("select[name='college_of_interest']").empty().append('<option value="" selected>Please Select</option>');
          // append state Interests
          $.each(selectedState.in, function(index, value) {
            var interest = getInterest(value, interests);
            form.find("select[name='college_of_interest']").append('<option value="' + interest.i + '">' + interest.n + '</option>');
          });
        }

      }

      // Ok now that some values have been set. We can setup the rest of the form.

      // conversion
      var data;
      data = getConversionData();
      form.find('input[name="referrer"]').val(data.referrer);
      form.find('input[name="originpage"]').val(data.originpage);

      // if state changesd
      form.on("change", "select[name='state']", function() {
        resetNursing();

        form.find("select[name='college_of_interest']").empty().append('<option value="" selected="selected">Please Select</option>');
        form.find("select[name='clientdegreeid']").empty().append('<option value="" selected="selected">Please Select</option>');

        if ($(this).val() !== "") {
          var selectedState = getState($(this).val(), states);
        } else {

          var selectedInterest = form.find("select[name='college_of_interest']").val();

          // blank Interests
          form.find("select[name='college_of_interest']").empty().append('<option value="" selected="selected">Please Select</option>');
          // append state Interests
          $.each(selectedState.in, function(index, value) {
            var interest = getInterest(value, interests);
            form.find("select[name='college_of_interest']").append('<option value="' + interest.i + '">' + interest.n + '</option>');
          });
          form.find(".js-form-item-clientdegreeid").hide();
          return;
        }

        // blank Interests
        form.find("select[name='college_of_interest']").empty().append('<option value="" selected="selected">Please Select</option>');
        // append state Interests
        console.log(selectedState);
        $.each(selectedState.in, function(index, value) {
          var interest = getInterest(value, interests);
          form.find("select[name='college_of_interest']").append('<option value="' + interest.i + '">' + interest.n + '</option>');
        });

        form.find("select[name='clientdegreeid']").empty().append('<option value="" selected="selected">Please Select</option>');

      });

      form.on('change', 'input[name="do_you_have_any_u_s_military_affiliation_"]', function() {
        var milSelects = $('.form-item-please-select-affiliation, .form-item-please-select-military-branch-');
        if ($(this).val().toLowerCase() == 'no') {
          milSelects.hide();
        } else {
          milSelects.show();
        }

      });

      form.on('submit', function() {
        var mil = $('input[name="do_you_have_any_u_s_military_affiliation_"]');

        if (mil.val().toLowerCase() === 'yes') {
          var affiliation = $('select[name="please_select_affiliation"]');
          var branch = $('select[name="please_select_military_branch_"');


        }

      });


      // if Interests changesd
      form.on("change", "select[name='college_of_interest']", function() {
        resetNursing();

        var selectedDegree = form.find("select[name='clientdegreeid']").val();
        // blank degrees
        if (selectedDegree != '') {
          form.find("select[name='clientdegreeid']").empty().append('<option value="">Please Select</option>');
        } else {
          form.find("select[name='clientdegreeid']").empty().append('<option value="" selected="selected">Please Select</option>');
        }


        if (
          $(this).val() !== "" &&
          form.find("select[name='state']").val() !== ""
        ) {
          var selectedState = getState(form.find("select[name='state']").val(), states);
          var selectedInterest = $(this).val();
          form.find(".js-form-item-clientdegreeid").show();
        } else {
          form.find(".js-form-item-clientdegreeid").hide();
          return;
        }

        var qDegrees = degreesWithInterest(selectedState.d, selectedInterest, degrees);
        // update degreess
        $.each(qDegrees, function(index, value) {
          if (value.in == selectedInterest) {
            form.find("select[name='clientdegreeid']").append('<option value="' + value.ci + '">' + value.n + '</option>');
          }
        });

        // Nursing
        form.on("change", "select[name='clientdegreeid']", function() {
          if ($(this).val() == nursing) {
            $('.webform-submission-academic-partner-rfi-form .form-item-registerednurse').closest('.js-webform-type-radios').show();
            $('.webform-submission-academic-partner-rfi-form .js-form-submit').attr("disabled", true);
          } else {
            resetNursing();
          }
        });





        form.on("change", "input[name='registerednurse']", function() {
          if ($(this).val() == 'No') {
            // show nursing message
            $('.webform-submission-academic-partner-rfi-form .js-registerednurse-validation-message').show();
            //disable button
            $('.webform-submission-academic-partner-rfi-form .js-form-submit').attr("disabled", true);

          } else {
            // re-enable button
            if ($('.webform-submission-academic-partner-rfi-form .js-form-submit').prop("disabled")) {
              $('.webform-submission-academic-partner-rfi-form .js-form-submit').removeAttr("disabled");
            }
            // hide nursing message
            if ($('.webform-submission-academic-partner-rfi-form .js-registerednurse-validation-message').is(':visible')) {
              $('.webform-submission-academic-partner-rfi-form .js-registerednurse-validation-message').hide();
            }

          }

        });

      });

      function resetNursing() {
        // hide nursing radios
        if ($('.webform-submission-academic-partner-rfi-form .form-item-registerednurse').closest('.js-webform-type-radios').is(':visible')) {
          $('.webform-submission-academic-partner-rfi-form .form-item-registerednurse').closest('.js-webform-type-radios').hide();
        }
        // hide nursing message
        if ($('.webform-submission-academic-partner-rfi-form .js-registerednurse-validation-message').is(':visible')) {
          $('.webform-submission-academic-partner-rfi-form .js-registerednurse-validation-message').hide();
        }
        // reset the radios
        $("input[name='registerednurse']").prop('checked', false);

        // re-enable button
        if ($('.webform-submission-academic-partner-rfi-form .js-form-submit').prop("disabled")) {
          $('.webform-submission-academic-partner-rfi-form .js-form-submit').removeAttr("disabled");
        }
      }

    });

  });
})(jQuery, Drupal, drupalSettings, document);
