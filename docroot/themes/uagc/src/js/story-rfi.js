
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function urlParam(r){var t,e,n=window.location.search.substring(1).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===r)return void 0===t[1]||decodeURIComponent(t[1])};

/**
 * This is going to be a large self contained file.
 * Comments are to help orginize things.
 *
 * Everything should be wrapped in the main function for scoping reasons.
 */

/**
 * Main Test function
 */
function storyRFI() {

  $("#webform-submission-lead-flow-system-add-form").attr('autocomplete', 'nope');
  $('.site-header__nav-container').hide();
  $('footer.footer').hide();
  $('.site-header__mobile-cta-links').hide();


  /**
   * Creates a progress bar at the top of the page
   */
  var ProgressBar =
  /*#__PURE__*/
  function () {
    "use strict";

    function ProgressBar(minStep, maxStep, currentStep) {
      _classCallCheck(this, ProgressBar);

      this.markup();
      this._minStep = minStep;
      this._maxStep = maxStep;
      this._currentStep = currentStep;
      this.update();
    }

    _createClass(ProgressBar, [{
      key: "markup",
      value: function markup() {
        $('main').prepend('<div class="storyRFI progress-bar"><div class="storyRFI progress-bar__bar"></div></div>');
      }
    }, {
      key: "next",
      value: function next() {
        if (this._currentStep < this._maxStep) {
          ++this._currentStep;
          this.update();
        }
      }
    }, {
      key: "previous",
      value: function previous() {
        if (this._currentStep > 0) {
          --this._currentStep;
          this.update();
        }
      }
    }, {
      key: "update",
      value: function update() {
        $('.storyRFI.progress-bar__bar').removeClass().addClass('storyRFI progress-bar__bar --progress-' + this._currentStep.toString());
      }
    }]);

    return ProgressBar;
  }();
  /**
   * Base class for a step in the wizard
   */


  var Step =
  /*#__PURE__*/
  function () {
    "use strict";

    function Step(wizard) {
      _classCallCheck(this, Step);

      this._wizard = wizard;
      this.markup();
      this.bind();
    }

    _createClass(Step, [{
      key: "markup",
      value: function markup() {
        console.log('Place your markup here');
      }
    }, {
      key: "bind",
      value: function bind() {
        console.log('Bind your events here');
      }
    }, {
      key: "next",
      value: function next() {
        this.process();

        this._wizard.next();
      }
    }, {
      key: "previous",
      value: function previous() {
        this._wizard.previous();
      }
    }, {
      key: "process",
      value: function process() {
        console.log('process for next step here');
      }
    }, {
      key: "validate",
      value: function validate() {
        console.log('Validate for next step here');
        return true;
      },
    },
    {
      key: "skip",
      value: function skip() {
        console.log("add skip logic here");
        return true;
      }
    }
  ]);

    return Step;
  }();

  var Step1 =
  /*#__PURE__*/
  function (_Step) {
    "use strict";

    _inherits(Step1, _Step);

    function Step1(wizard) {
      var _this;

      _classCallCheck(this, Step1);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Step1).call(this, wizard));
      _this.selector = '.storyRFI.step-1';
      return _this;
    }

    _createClass(Step1, [{
      key: "markup",
      value: function markup() {
        $('main').append('<div class="storyRFI step-1"> <div class="storyRFI step-1__heading">Welcome!</div><div class="storyRFI step-1__subheading">Before we get started, we just need a <br class="storyRFI step-1__break">little info. What\'s your name?</div><div class="storyRFI step-1__input-container"> <div class="storyRFI step-1__input"> <label for="">First Name<span>*</span></label> <input id="storyRFI-firstname" type="text" name="" value="" autocomplete="nope" required> </div><div class="storyRFI step-1__input"> <label for="">Last Name<span>*</span></label> <input id="storyRFI-lastname" type="text" name="" value="" autocomplete="nope" required> </div><button type="button" name="button" disabled>Next</button> </div></div>');

        if ($('input[data-drupal-selector="edit-firstname"]').val() !== '') {
          $('#storyRFI-firstname').val($('input[data-drupal-selector="edit-firstname"]').val());
        }

        if ($('input[data-drupal-selector="edit-lastname"]').val() !== '') {
          $('#storyRFI-lastname').val($('input[data-drupal-selector="edit-lastname"]').val());
        }

        if ($('#storyRFI-firstname').val() !== '') {
          $('#storyRFI-firstname').parent().addClass('--vaild');
        }

        if ($('#storyRFI-lastname').val() !== '') {
          $('#storyRFI-lastname').parent().addClass('--vaild');
        }

        if ($('#storyRFI-firstname').val() !== '' && $('#storyRFI-lastname').val() !== '') {
          $('.storyRFI.step-1 button').prop('disabled', false);
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        var me = this;
        $("#storyRFI-firstname, #storyRFI-lastname").on("blur", function (event) {
          if ($(this).val() !== "") {
            $(this).parent().addClass('--vaild');
          } else {
            $(this).parent().removeClass('--vaild');
          }

          if ($('#storyRFI-firstname').val() !== '' && $('#storyRFI-lastname').val() !== '') {
            $('.storyRFI.step-1 button').prop('disabled', false);
          } else {
            $('.storyRFI.step-1 button').prop('disabled', true);
          }
        });
        $("#storyRFI-firstname, #storyRFI-lastname").on("keyup", function (event) {
          var that = this;
          Drupal.debounce(function () {
            if ($(that).val() !== "") {
              $(that).parent().addClass('--vaild');
            } else {
              $(that).parent().removeClass('--vaild');
            }

            if ($('#storyRFI-firstname').val() !== '' && $('#storyRFI-lastname').val() !== '') {
              $('.storyRFI.step-1 button').prop('disabled', false);
            } else {
              $('.storyRFI.step-1 button').prop('disabled', true);
            }
          }(), 250, true);
        });
        $('.storyRFI.step-1 button').on('click', function () {
          if (!me.validate()) {
            return;
          }
          if(me.skip()) {
            //me._wizard.skipTo(4);
            me.next();
          } else {
            me.next();
          }
        });
      }
    }, {
      key: "process",
      value: function process() {
        $('input[data-drupal-selector="edit-firstname"]').val($('#storyRFI-firstname').val());
        $('input[data-drupal-selector="edit-lastname"]').val($('#storyRFI-lastname').val());
        $.cookie('storyRFI_name', $('#storyRFI-firstname').val(), {
          path: '/'
        });
        $('.storyRFI.step-2__substep-1__heading').text('Hi, ' + $('input[data-drupal-selector="edit-firstname"]').val() + '!');
      }
    }, {
      key: "validate",
      value: function validate() {
        if ($('.storyRFI.step-1 button').prop('disabled')) {
          return false;
        }

        return true;
      }
    }, {
      key: "skip",
      value: function skip() {
        //logic to skip to step 4  need to make sure to check all the  fields are filled first then move to the final step, or if not just go to the next step
        if( $('#storyRFI-state').val() && $('#storyRFI-college_of_interest').val() && $('#storyRFI-clientdegreeid').val() ){
          return true;
        } else {
          return false;
        }
      }
    }]);

    return Step1;
  }(Step);

  var Step2 =
  /*#__PURE__*/
  function (_Step2) {
    "use strict";

    _inherits(Step2, _Step2);

    function Step2(wizard) {
      var _this2;

      _classCallCheck(this, Step2);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Step2).call(this, wizard));
      _this2.selector = '.storyRFI.step-2';
      return _this2;
    }

    _createClass(Step2, [{
      key: "markup",
      value: function markup() {
        $('main').append('<div class="storyRFI step-2"> <div class="storyRFI step-2__substep-1"> <div class="storyRFI step-2__substep-1__heading">Hi!</div><div class="storyRFI step-2__substep-1__content"> Looks like you’re located in NULL. <br class="storyRFI step-2__break">Is that right? </div><button type="button" name="button" value="yes">Yes</button> <button type="button" name="button" value="no">No</button> <button class="storyRFI step-2__substep-1__back" type="button" name="button">Back</button> </div><div class="storyRFI step-2__substep-2"> <div class="storyRFI step-2__substep-2__heading">Where are you located?</div><div class="storyRFI step-2__substep-2__input"> <label for="">Your State<span>*</span></label> <div class="select-wrapper"><select id="storyRFI-state" class="" name="" autocomplete="nope"> </select></div> </div><button class="storyRFI step-2__substep-2__next" type="button" name="button" disabled>Next</button> <button class="storyRFI step-2__substep-2__back" type="button" name="button">Back</button> </div></div>');

        if ($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]").val() !== '' && !urlParam('state')) {
          var stateSelected = 'NULL';
          $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"] > option").each(function (index) {
            if ($(this).val() === $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]").val()) {
              stateSelected = $(this).text();
              return;
            }
          });
          $('.storyRFI.step-2__substep-1__heading').text('Hi, ' + $.cookie('storyRFI_name') + '!');
          $('.storyRFI.step-2__substep-1__content').html('Looks like you’re located in ' + stateSelected + '. <br class="storyRFI step-2__break"> Is that right?');
          $('.storyRFI.step-2__substep-1').addClass('--active');
        } else {
          $('.storyRFI.step-2__substep-2').addClass('--active');
        }

        var $options = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"] > option").clone();
        $('#storyRFI-state').empty();
        $('#storyRFI-state').append($options).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]").val());

        if ($('#storyRFI-state').val() !== '') {
          $('#storyRFI-state').parent().parent().addClass('--vaild');
          $('.storyRFI.step-2 button').prop('disabled', false);
        } else {
          $("#storyRFI-state option:first").prop('disabled', true);
          $("#storyRFI-state option:first").prop('selected', true);
        }

        //if the short form passed in the state, override geolocation
        if(urlParam('state') && $('#storyRFI-state').val() !== urlParam('state')) {
          $('#storyRFI-state').val(urlParam('state'));
          $('#storyRFI-state').trigger("change blur");
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        var me = this;
        $('.storyRFI.step-2__substep-1 button').on('click', function () {
          if ($(this).val() == 'yes') {
            me.next();
          }

          if ($(this).val() == 'no') {
            $('.storyRFI.step-2__substep-2').addClass('--active');
            $('.storyRFI.step-2__substep-1').removeClass('--active');
          }
        });
        $("#storyRFI-state").on("blur change", function (event) {
          if ($(this).val() !== "") {
            $(this).parent().parent().addClass('--vaild');
          } else {
            $(this).parent().parent().removeClass('--vaild');
          }

          if ($('#storyRFI-state').val() !== '') {
            $('.storyRFI.step-2__substep-2__next').prop('disabled', false);
          } else {
            $('.storyRFI.step-2__substep-2__next').prop('disabled', true);
          }

          //clear interest/degree fields if state field is changed
          $("#storyRFI-college_of_interest").val("");
          $(".storyRFI.step-3__subheading").removeClass('--active');
          $(".storyRFI.step-3__input").removeClass('--vaild');
          $(".storyRFI.step-3__input").removeClass('--active');
          $(".storyRFI.step-3__substep-2__next").prop('disabled', true);
        });
        $('.storyRFI.step-2__substep-2__next').on('click', function () {
          if (!me.validate()) {
            return;
          }

          me.next();
        });
        $('.storyRFI.step-2__substep-1__back').on('click', function () {
          me.previous();
        });
        $('.storyRFI.step-2__substep-2__back').on('click', function () {
          $("#storyRFI-state").val("");
          $("#storyRFI-state").parent().parent().removeClass("--vaild");
          $('.storyRFI.step-2__substep-2__next').prop('disabled', true);
          me.previous();
        });
      }
    }, {
      key: "process",
      value: function process() {
        var $options = $("#storyRFI-state > option").clone();
        $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]').empty();
        $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]').append($options).val($("#storyRFI-state").val());

        $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]').change(function(){
          var data= $(this).val();       
        });
        var $selectedState = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"] option:selected").val();

        

        $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-state\"]').val($selectedState);

        let state = document.querySelector('.webform-submission-lead-flow-system-form select[data-drupal-selector="edit-state"]');
        if (state) {
          state.dispatchEvent(new Event('change'));
        }


        var $collageOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"] > option").clone();
        $('#storyRFI-college_of_interest').empty();
        $('#storyRFI-college_of_interest').append($collageOptions).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]").val());


        //pre-select the values if we've got 'em
        if(urlParam('college_of_interest') && $('#storyRFI-state').val() == urlParam('state')) {
          $('#storyRFI-college_of_interest').val(urlParam('college_of_interest'));
          document.querySelector('#storyRFI-college_of_interest').dispatchEvent(new Event('change'));
        }

        //pre-select the values if we've got 'em
        if(urlParam('clientdegreeid') && $('#storyRFI-state').val() == urlParam('state')) {

          $('#storyRFI-clientdegreeid').val(urlParam('clientdegreeid'));
          document.querySelector('#storyRFI-clientdegreeid').dispatchEvent(new Event('change'));
        }
      }
    }, {
      key: "validate",
      value: function validate() {
        if ($('.storyRFI.step-2__substep-2__next').prop('disabled')) {
          return false;
        }

        return true;
      }
    }]);

    return Step2;
  }(Step);

  var Step3 =
  /*#__PURE__*/
  function (_Step3) {
    "use strict";

    _inherits(Step3, _Step3);

    function Step3(wizard) {
      var _this3;

      _classCallCheck(this, Step3);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Step3).call(this, wizard));
      _this3.selector = '.storyRFI.step-3';
      return _this3;
    }

    _createClass(Step3, [{
      key: "markup",
      value: function markup() {
        $('main').append('<div class="storyRFI step-3"> <div class="storyRFI step-3__substep-1 --active"> <div class="storyRFI step-3__heading">Looking for a <br>specific degree?</div><div class="storyRFI step-3__substep-1__button-container"> <button type="button" name="button" value="yes">Yes</button> <button type="button" name="button" value="no">No</button></div> <button class="storyRFI step-3__substep-1__back" type="button" name="button">Back</button> </div><div class="storyRFI step-3__substep-2"> <div class="storyRFI step-3__heading">Perfect!</div><div class="storyRFI step-3__subheading-alt"> What are you interested in? </div><div class="storyRFI step-3__input"> <label for="">Your Area of Interest<span>*</span></label> <div class="select-wrapper"><select id="storyRFI-college_of_interest" class="" name="college_of_interest" autocomplete="nope"> </select></div> </div><div class="storyRFI step-3__subheading-alt step-3__clientdegreeid"> Which degree are you looking at? </div><div class="storyRFI step-3__input step-3__clientdegreeid"> <label for="">Your Degree of Interest<span>*</span></label> <div class="select-wrapper"><select id="storyRFI-clientdegreeid" class="" name="clientdegreeid" autocomplete="nope"> </select></div> </div><div class="storyRFI step-3__nursing"> <div class="storyRFI step-3__subheading">Are you currently a licensed RN?</div><label for=""> <input type="radio" name="registerednurse" value="Yes" autocomplete="nope"> Yes </label> <label for=""> <input type="radio" name="registerednurse" value="No" autocomplete="nope"> No </label> <p class="storyRFI step-3__nursing-error">This program requires you to be a current licensed registered nurse. Please check out other programs to reach your education goals such as the BA in Health and Wellness.</p></div><button class="storyRFI step-3__substep-2__next" type="button" name="button" disabled>Next</button> <button class="storyRFI step-3__substep-2__back" type="button" name="button">Back</button> </div><div class="storyRFI step-3__substep-3"> <div class="storyRFI step-3__heading">Any area you’re <br>interested in?</div><div class="storyRFI step-3__subheading"> Don’t worry if you’re not sure. Just select “Undecided” and we’ll figure it out later. </div><div class="storyRFI step-3__substep-3__content"> <ul class="storyRFI step-3__list"> <li> <button type="button" name="button" data-interest="Accounting & Finance"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="50" viewBox="0 0 48 50"> <defs> <path id="wb8ka" d="M446.496 444.113h47.488v49.127h-47.488z"/> <path id="wb8kc" d="M493.166 493.24h-9.826a.819.819 0 0 1-.818-.819v-47.489c0-.452.366-.819.818-.819h9.826c.453 0 .819.367.819.82v47.488a.819.819 0 0 1-.82.819m-9.006-1.638h8.188v-45.851h-8.188z"/> <path id="wb8kd" d="M475.153 493.24h-9.826a.82.82 0 0 1-.818-.819v-22.925a.82.82 0 0 1 .818-.82h9.826c.452 0 .818.368.818.82v22.925a.819.819 0 0 1-.818.819m-9.007-1.638h8.188v-21.288h-8.188z"/> <path id="wb8ke" d="M457.14 493.24h-9.826a.82.82 0 0 1-.818-.819v-31.113a.82.82 0 0 1 .818-.819h9.826a.82.82 0 0 1 .818.819v31.113a.82.82 0 0 1-.818.819m-9.007-1.638h8.188v-29.475h-8.188z"/> <clipPath id="wb8kb"> <use xlink:href="#wb8ka"/> </clipPath> </defs> <g> <g transform="translate(-446 -444)"> <g/> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8kc"/> </g> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8kd"/> </g> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8ke"/> </g> </g> </g> </svg> Accounting <br/> & Finance</button> </li><li> <button class="--business" type="button" name="button" data-interest="Business"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="45" viewBox="0 0 50 45"> <defs> <path id="k73ga" d="M627.445 450.664h49.127v44.214h-49.127z"/> <path id="k73gc" d="M674.17 494.878h-44.323a2.405 2.405 0 0 1-2.402-2.403v-31.222a2.404 2.404 0 0 1 2.402-2.402h44.323a2.404 2.404 0 0 1 2.401 2.402v31.222a2.405 2.405 0 0 1-2.401 2.403m-44.323-34.389a.765.765 0 0 0-.765.764v31.222c0 .422.343.765.765.765h44.323c.414 0 .764-.35.764-.765v-31.222a.774.774 0 0 0-.764-.764z"/> <path id="k73gd" d="M648.733 473.59h-20.47a.82.82 0 0 1 0-1.638h20.47a.82.82 0 0 1 0 1.637"/> <path id="k73ge" d="M675.753 473.59h-20.47a.82.82 0 0 1 0-1.638h20.47a.82.82 0 0 1 0 1.637"/> <path id="k73gf" d="M660.196 460.489a.82.82 0 0 1-.819-.819v-4.912a2.46 2.46 0 0 0-2.456-2.457h-9.825a2.46 2.46 0 0 0-2.457 2.457v4.912a.82.82 0 0 1-1.637 0v-4.912a4.099 4.099 0 0 1 4.094-4.094h9.825a4.099 4.099 0 0 1 4.094 4.094v4.912a.82.82 0 0 1-.819.819"/> <path id="k73gg" d="M652.008 480.14a4.056 4.056 0 0 1-2.887-1.206 4.07 4.07 0 0 1-1.206-2.888v-4.912a4.1 4.1 0 0 1 4.093-4.095c1.08 0 2.105.428 2.887 1.203a4.076 4.076 0 0 1 1.207 2.892v4.912a4.099 4.099 0 0 1-4.094 4.094m0-11.463a2.46 2.46 0 0 0-2.456 2.457v4.912c0 .646.258 1.261.727 1.732.467.467 1.08.724 1.73.724a2.46 2.46 0 0 0 2.456-2.456v-4.912c0-.647-.258-1.263-.727-1.733a2.447 2.447 0 0 0-1.73-.724"/> <clipPath id="k73gb"> <use xlink:href="#k73ga"/> </clipPath> </defs> <g> <g transform="translate(-627 -450)"> <g> <g/> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gc"/> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gd"/> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73ge"/> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gf"/> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gg"/> </g> </g> </g> </g> </g> </svg> Business</button> </li><li> </li><li> <button type="button" name="button" data-interest="Criminal Justice"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="51" viewBox="0 0 50 51"> <defs> <path id="qyu7a" d="M1027.658 484.19c-3.714 0-6.918-1.55-7.614-3.529h15.227c-.694 1.98-3.9 3.53-7.613 3.53zm0-21.214l7.31 16.08h-14.62zm-12.887-8.615l13.75 2.22a.053.053 0 0 1 .046.052v.127c0 .029-.024.053-.054.053h-13.742zm6.096 38.733v.507h-17.218v-.507c0-.4.257-.748.638-.867l5.526-1.727h4.889l5.526 1.727a.905.905 0 0 1 .639.867zm-24.864-36.281a.054.054 0 0 1-.053-.053v-.131c0-.027.018-.049.045-.053l13.75-2.292v2.529zm16.255-9.518c.973 0 1.765.792 1.765 1.765 0 .973-.792 1.764-1.765 1.764a1.766 1.766 0 0 1-1.764-1.764c0-.973.791-1.765 1.764-1.765zm-.909 28.34v-23.332a3.34 3.34 0 0 0 1.818 0v23.332zm2.674 1.657v11.604h-3.53v-11.604c0-.03.025-.053.054-.053h3.422c.03 0 .054.024.054.053zm-17.164 6.898c-3.714 0-6.918-1.55-7.613-3.529h15.227c-.697 1.98-3.9 3.53-7.614 3.53zm0-21.214l7.31 16.08h-14.62zm40.155 16.916l.001-.033v-.008l-.002-.055-.002-.027c-.001-.016-.004-.03-.006-.046l-.007-.034c-.003-.012-.005-.024-.01-.036l-.012-.043c-.002-.01-.006-.018-.009-.028-.005-.016-.012-.032-.019-.048l-.002-.008-8.486-18.663v-2.446h.053c.915 0 1.658-.743 1.658-1.657v-.127a1.65 1.65 0 0 0-1.393-1.637l-14.007-2.26V451.3c.532-.596.856-1.38.856-2.24a3.372 3.372 0 0 0-3.369-3.369 3.372 3.372 0 0 0-3.368 3.369c0 .86.324 1.644.855 2.24v1.358l-14.015 2.336a1.652 1.652 0 0 0-1.385 1.635v.13c0 .915.744 1.658 1.658 1.658h.054v2.446l-8.484 18.664a.019.019 0 0 0-.002.008c-.007.016-.014.033-.019.049l-.01.028c-.006.014-.009.028-.013.042-.002.012-.006.024-.01.037l-.004.033-.008.047-.003.026a.714.714 0 0 0-.003.054v.007l.002.033v.027c.05 3.3 4.14 5.876 9.356 5.876 5.214 0 9.305-2.576 9.354-5.875 0-.01 0-.019.002-.027l.001-.033v-.008l-.003-.055-.002-.027-.007-.046a.25.25 0 0 0-.005-.034l-.01-.036c-.004-.015-.006-.028-.012-.043-.002-.01-.006-.018-.01-.028-.006-.016-.011-.032-.02-.048 0-.003 0-.005-.002-.008l-8.484-18.663v-2.446h12.084v17.426c-.51.284-.855.826-.855 1.45v11.815l-5.082 1.588a2.502 2.502 0 0 0-1.763 2.398v1.309c0 .444.36.802.802.802h18.822a.802.802 0 0 0 .802-.802v-1.309c0-1.104-.708-2.069-1.763-2.4l-5.081-1.586v-11.816c0-.623-.346-1.167-.856-1.449v-17.426h12.085v2.446l-8.483 18.664-.003.008-.019.049a.23.23 0 0 0-.01.028l-.011.042-.01.036-.006.034c-.003.016-.006.03-.007.047l-.001.026-.003.055v.008l.001.034c0 .009 0 .018.002.026.05 3.3 4.14 5.876 9.355 5.876 5.214 0 9.305-2.576 9.354-5.876l-.001-.028z"/> </defs> <g> <g transform="translate(-987 -445)"> <g> <use fill="#621b4b" xlink:href="#qyu7a"/> </g> </g> </g> </svg> Criminal <br/> Justice</button> </li><li> <button type="button" name="button" data-interest="Education"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="48" viewBox="0 0 32 48"> <defs> <path id="h0f1a" d="M1176.843 447.389h31.114v47.489h-31.114z"/> <path id="h0f1c" d="M1185.851 480.998c-.023 0-.048 0-.072-.003a.82.82 0 0 1-.745-.885c.046-.548-.01-2.132-.81-2.881a.819.819 0 0 1 1.12-1.195c1.547 1.45 1.332 4.105 1.322 4.218a.819.819 0 0 1-.815.746"/> <path id="h0f1d" d="M1198.948 480.998a.818.818 0 0 1-.815-.748c-.024-.287-.199-2.85 1.335-4.228a.818.818 0 1 1 1.095 1.218c-.789.71-.845 2.313-.799 2.87a.819.819 0 0 1-.816.888"/> <path id="h0f1e" d="M1184.784 477.45a.818.818 0 0 1-.49-.163c-4.874-3.642-7.45-8.403-7.45-13.77 0-8.893 6.978-16.129 15.555-16.129a.82.82 0 0 1 0 1.638c-7.675 0-13.918 6.501-13.918 14.491 0 6.101 3.694 10.143 6.794 12.458a.819.819 0 0 1-.491 1.475"/> <path id="h0f1f" d="M1200.016 477.45a.82.82 0 0 1-.491-1.475c3.1-2.315 6.794-6.357 6.794-12.458 0-7.99-6.245-14.491-13.92-14.491a.82.82 0 0 1 0-1.638c8.58 0 15.558 7.236 15.558 16.13 0 5.366-2.576 10.127-7.451 13.769a.818.818 0 0 1-.49.163"/> <path id="h0f1g" d="M1192.4 494.878c-6.43 0-7.35-5.475-7.358-5.53a.807.807 0 0 1-.01-.125v-9.043a.82.82 0 0 1 1.637 0v8.97c.1.499.98 4.09 5.73 4.09a.82.82 0 0 1 0 1.638"/> <path id="h0f1h" d="M1192.4 494.878a.82.82 0 0 1 0-1.638c4.784 0 5.633-3.576 5.73-4.087v-8.973a.819.819 0 1 1 1.637 0v9.043a.807.807 0 0 1-.01.125c-.008.055-.927 5.53-7.358 5.53"/> <path id="h0f1i" d="M1192.641 485.064c-3.996 0-7.01-1.687-7.198-1.794a.818.818 0 0 1 .813-1.422c.062.036 6.265 3.48 12.285.002a.818.818 0 1 1 .819 1.418 13.264 13.264 0 0 1-6.719 1.796"/> <clipPath id="h0f1b"> <use xlink:href="#h0f1a"/> </clipPath> </defs> <g> <g transform="translate(-1176 -447)"> <g/> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1c"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1d"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1e"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1f"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1g"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1h"/> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1i"/> </g> </g> </g> </g> </svg> Education</button> </li><li> <button type="button" name="button" data-interest="Health Care"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="43" viewBox="0 0 50 43"> <defs> <path id="fhu0a" d="M445.33 632.301h49.114v42.569H445.33z"/> <path id="fhu0c" d="M490.155 654.2a.819.819 0 0 1-.58-1.398c4.308-4.31 4.308-11.324 0-15.634-4.308-4.307-11.32-4.306-15.632 0a.818.818 0 1 1-1.157-1.158c4.948-4.944 13-4.944 17.948 0 4.946 4.95 4.946 13 0 17.95a.82.82 0 0 1-.579.24"/> <path id="fhu0d" d="M469.887 640.482a.818.818 0 0 1-.543-1.432l3.478-3.074a.82.82 0 0 1 1.085 1.227l-3.478 3.073a.817.817 0 0 1-.542.206"/> <path id="fhu0e" d="M449.62 654.2c-.21 0-.419-.08-.579-.24-4.948-4.95-4.948-13.001 0-17.95 4.949-4.944 13-4.946 17.95 0a.82.82 0 0 1-1.158 1.158c-4.31-4.307-11.324-4.307-15.634 0-4.31 4.311-4.31 11.323 0 15.634a.818.818 0 0 1-.579 1.397"/> <path id="fhu0f" d="M469.886 640.482a.817.817 0 0 1-.542-.206l-3.475-3.073a.819.819 0 1 1 1.085-1.227l3.475 3.074a.819.819 0 0 1-.543 1.432"/> <path id="fhu0g" d="M469.887 674.87c-1.038 0-2.006-.441-2.727-1.242l-18.142-19.692a.818.818 0 1 1 1.204-1.11l18.148 19.7c.413.458.95.706 1.517.706s1.103-.248 1.51-.7l18.157-19.706a.819.819 0 0 1 1.203 1.11l-18.15 19.7c-.715.793-1.683 1.234-2.72 1.234"/> <clipPath id="fhu0b"> <use xlink:href="#fhu0a"/> </clipPath> </defs> <g> <g transform="translate(-445 -632)"> <g> <g/> <g clip-path="url(#fhu0b)"> <g> <use fill="#5a1851" xlink:href="#fhu0c"/> </g> </g> <g clip-path="url(#fhu0b)"> <g> <use fill="#5a1851" xlink:href="#fhu0d"/> </g> </g> <g clip-path="url(#fhu0b)"> <g> <use fill="#5a1851" xlink:href="#fhu0e"/> </g> </g> <g clip-path="url(#fhu0b)"> <g> <use fill="#5a1851" xlink:href="#fhu0f"/> </g> </g> <g clip-path="url(#fhu0b)"> <g> <use fill="#5a1851" xlink:href="#fhu0g"/> </g> </g> </g> </g> </g> </svg> Health Care</button> </li><li> <button type="button" name="button" data-interest="Information Technology"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="41" viewBox="0 0 50 41"> <defs> <path id="yikra" d="M627.56 631.613h49.127v40.12H627.56z"/> <path id="yikrc" d="M674.285 662.727h-44.323c-1.324 0-2.402-1.063-2.402-2.37v-26.373c0-1.308 1.078-2.37 2.402-2.37h44.323c1.324 0 2.402 1.062 2.402 2.37v26.372c0 1.308-1.078 2.37-2.402 2.37m-44.323-29.475c-.421 0-.764.328-.764.733v26.372c0 .398.35.733.764.733h44.323c.421 0 .764-.328.764-.733v-26.372c0-.405-.343-.733-.764-.733z"/> <path id="yikrd" d="M652.124 671.078a.819.819 0 0 1-.82-.82v-7.913a.819.819 0 1 1 1.638 0v7.914a.819.819 0 0 1-.818.819"/> <path id="yikre" d="M661.949 671.733h-19.65a.819.819 0 1 1 0-1.637h19.65a.819.819 0 1 1 0 1.637"/> <clipPath id="yikrb"> <use xlink:href="#yikra"/> </clipPath> </defs> <g> <g transform="translate(-627 -631)"> <g/> <g clip-path="url(#yikrb)"> <g> <use fill="#5a1851" xlink:href="#yikrc"/> </g> </g> <g clip-path="url(#yikrb)"> <g> <use fill="#5a1851" xlink:href="#yikrd"/> </g> </g> <g clip-path="url(#yikrb)"> <g> <use fill="#5a1851" xlink:href="#yikre"/> </g> </g> </g> </g> </svg> Information <br/> Technology</button> </li><li> <button type="button" name="button" data-interest="Liberal Arts"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="49" viewBox="0 0 50 49"> <defs> <path id="xi5aa" d="M807.691 627.52h49.127v47.861H807.69z"/> <path id="xi5ac" d="M832.253 675.381a.82.82 0 0 1-.124-1.627l22.193-3.455c.432-.087.858-.607.858-1.084v-39.574c0-.172-.055-.31-.156-.393-.1-.083-.249-.11-.415-.077l-22.214 3.872a.819.819 0 1 1-.28-1.614l22.192-3.866a2.113 2.113 0 0 1 1.755.418c.48.393.755.998.755 1.66v39.574c0 1.264-.97 2.448-2.208 2.697l-22.229 3.46a.836.836 0 0 1-.127.01"/> <path id="xi5ad" d="M832.255 632.236v42.326"/> <path id="xi5ae" d="M832.255 675.381a.82.82 0 0 1-.82-.818v-42.327a.819.819 0 1 1 1.638 0v42.327a.82.82 0 0 1-.818.818"/> <path id="xi5af" d="M848.63 661.277l-9.825 1.637"/> <path id="xi5ag" d="M838.804 663.733a.819.819 0 0 1-.134-1.626l9.825-1.638a.818.818 0 1 1 .27 1.615l-9.825 1.638a.774.774 0 0 1-.136.011"/> <path id="xi5ah" d="M848.63 639.17l-9.825 1.637"/> <path id="xi5ai" d="M838.804 641.626a.819.819 0 0 1-.134-1.626l9.825-1.638a.818.818 0 1 1 .27 1.615l-9.825 1.638a.774.774 0 0 1-.136.011"/> <path id="xi5aj" d="M848.63 650.633l-9.825 1.637"/> <path id="xi5ak" d="M838.804 653.089a.819.819 0 0 1-.134-1.626l9.825-1.638a.819.819 0 0 1 .27 1.615l-9.825 1.637a.774.774 0 0 1-.136.012"/> <path id="xi5al" d="M832.256 675.381a.835.835 0 0 1-.127-.01l-22.194-3.453c-1.273-.255-2.243-1.44-2.243-2.703v-39.574c0-.662.275-1.267.755-1.66.48-.394 1.127-.544 1.775-.414l22.173 3.862a.82.82 0 0 1-.28 1.614l-22.195-3.868c-.185-.036-.334-.01-.435.073-.101.082-.156.221-.156.393v39.574c0 .477.426.997.893 1.09l22.158 3.449a.819.819 0 0 1-.124 1.627"/> <path id="xi5am" d="M815.879 661.277l9.825 1.637"/> <path id="xi5an" d="M825.705 663.733a.775.775 0 0 1-.136-.011l-9.825-1.638a.818.818 0 1 1 .27-1.615l9.825 1.638a.818.818 0 0 1-.134 1.626"/> <path id="xi5ao" d="M815.879 639.17l9.825 1.637"/> <path id="xi5ap" d="M825.705 641.626a.775.775 0 0 1-.136-.011l-9.825-1.638a.818.818 0 1 1 .27-1.615L825.84 640a.818.818 0 0 1-.134 1.626"/> <path id="xi5aq" d="M815.879 650.633l9.825 1.637"/> <path id="xi5ar" d="M825.705 653.089a.775.775 0 0 1-.136-.011l-9.825-1.638a.818.818 0 1 1 .27-1.615l9.825 1.638a.818.818 0 0 1-.134 1.626"/> <clipPath id="xi5ab"> <use xlink:href="#xi5aa"/> </clipPath> </defs> <g> <g transform="translate(-807 -627)"> <g> <g/> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ac"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ad"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ae"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5af"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ag"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ah"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ai"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5aj"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ak"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5al"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5am"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5an"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ao"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ap"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5aq"/> </g> </g> <g clip-path="url(#xi5ab)"> <g> <use fill="#5a1851" xlink:href="#xi5ar"/> </g> </g> </g> </g> </g> </svg> Liberal <br/> Arts</button> </li><li> </li><li> <button type="button" name="button" data-interest="Social & Behavioral Science"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="67" height="49" viewBox="0 0 67 49"> <defs> <path id="lwfma" d="M1157.309 625.882h66.369v49.131h-66.37z"/> <path id="lwfmc" d="M1221.276 675.008h-44.323c-1.324 0-2.402-1.102-2.402-2.456v-3.273c0-.3.164-.576.427-.72l18.013-9.826a.82.82 0 1 1 .784 1.438l-17.586 9.594v2.787c0 .444.35.819.764.819h44.323c.421 0 .764-.368.764-.819v-2.791l-17.561-9.591a.818.818 0 1 1 .785-1.436l17.987 9.823a.818.818 0 0 1 .427.718v3.277c0 1.354-1.078 2.456-2.402 2.456"/> <path id="lwfmd" d="M1204.872 660.27a.817.817 0 0 1-.42-1.52c6.042-3.61 6.125-13.254 6.125-13.351l-.006-9.277c-.884-5.048-6.678-8.568-11.387-8.603a.672.672 0 0 1-.07.004c-4.722 0-10.567 3.529-11.453 8.601l-.01 9.28c0 .092.085 9.476 6.173 13.357a.82.82 0 0 1-.881 1.38c-6.851-4.367-6.929-14.317-6.929-14.738l.01-9.35c0-.044.003-.089.01-.133.802-4.828 6.213-9.997 13.005-10.035a.76.76 0 0 1 .076-.003c6.826 0 12.275 5.19 13.082 10.036a.808.808 0 0 1 .011.134l.007 9.347c0 .435-.079 10.669-6.924 14.755a.807.807 0 0 1-.419.116"/> <path id="lwfme" d="M1170.41 675.013l-10.699-.005c-1.325 0-2.402-1.102-2.402-2.456v-3.273c0-.3.164-.576.426-.72l18.014-9.826a.819.819 0 1 1 .784 1.437l-17.587 9.595v2.787c0 .451.344.819.765.819l10.698.005a.819.819 0 1 1 0 1.637"/> <path id="lwfmf" d="M1176.14 660.27a.818.818 0 0 1-.44-.128c-6.849-4.368-6.928-14.318-6.928-14.739l.01-9.35c0-.045.004-.089.01-.133.802-4.828 6.212-9.997 13.005-10.035a.76.76 0 0 1 .075-.003c1.448 0 2.932.265 4.415.788a.82.82 0 0 1-.545 1.544c-1.283-.452-2.56-.686-3.8-.695a.965.965 0 0 1-.07.004c-4.723 0-10.567 3.529-11.453 8.6l-.01 9.28c0 .093.085 9.477 6.172 13.358a.82.82 0 0 1-.441 1.51"/> <clipPath id="lwfmb"> <use xlink:href="#lwfma"/> </clipPath> </defs> <g> <g transform="translate(-1157 -626)"> <g> <g/> <g clip-path="url(#lwfmb)"> <g> <use fill="#5a1851" xlink:href="#lwfmc"/> </g> </g> <g clip-path="url(#lwfmb)"> <g> <use fill="#5a1851" xlink:href="#lwfmd"/> </g> </g> <g clip-path="url(#lwfmb)"> <g> <use fill="#5a1851" xlink:href="#lwfme"/> </g> </g> <g clip-path="url(#lwfmb)"> <g> <use fill="#5a1851" xlink:href="#lwfmf"/> </g> </g> </g> </g> </g> </svg> Social & <br/> Behavioral <br/> Science</button> </li>                <li class="storyRFI step-3__substep-3__content-mobile-undecided"><button type="button" name="button" data-interest="Undecided"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50"><defs><path id="751fa" d="M1424.084 534.432h49.126v49.127h-49.126z" /><path id="751fc" d="M1448.647 583.559c-13.544 0-24.563-11.02-24.563-24.564s11.019-24.563 24.563-24.563c13.544 0 24.563 11.02 24.563 24.563 0 13.545-11.019 24.564-24.563 24.564m0-47.49c-12.641 0-22.926 10.285-22.926 22.926 0 12.641 10.285 22.926 22.926 22.926 12.641 0 22.926-10.285 22.926-22.926 0-12.64-10.285-22.925-22.926-22.925"/><path id="751fd" d="M1448.646 565.546a.82.82 0 0 1-.815-.75c-.014-.166-.297-4.105 3.652-7.455 1.495-1.27 2.078-2.507 2.078-4.41 0-2.977-2.204-5.399-4.914-5.399-2.753 0-4.91 2.28-4.91 5.188a.819.819 0 1 1-1.638 0c0-3.828 2.876-6.825 6.548-6.825 3.613 0 6.552 3.156 6.552 7.037 0 2.385-.794 4.076-2.656 5.658-3.315 2.81-3.083 6.035-3.08 6.068a.82.82 0 0 1-.817.888"/><path id="751fe" d="M1448.582 572.915a1.64 1.64 0 0 1-1.637-1.638 1.64 1.64 0 0 1 1.637-1.638 1.64 1.64 0 0 1 1.638 1.638 1.64 1.64 0 0 1-1.638 1.638" /><clipPath id="751fb"><use xlink:href="#751fa" /></clipPath></defs><g><g transform="translate(-1424 -534)"><g><g /><g clip-path="url(#751fb)"><g><use fill="#5a1851" xlink:href="#751fc" /></g></g><g clip-path="url(#751fb)"><g><use fill="#5a1851" xlink:href="#751fd" /></g></g><g clip-path="url(#751fb)"><g><use fill="#5a1851" xlink:href="#751fe" /></g></g></g></g></svg>Undecided</button></li></ul> <div class="storyRFI step-3__substep-3__content-divider"> <span>Or</span> </div><div class="storyRFI step-3__substep-3__content-undecided"> <button type="button" name="button" data-interest="Undecided"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50"> <defs> <path id="751fa" d="M1424.084 534.432h49.126v49.127h-49.126z"/> <path id="751fc" d="M1448.647 583.559c-13.544 0-24.563-11.02-24.563-24.564s11.019-24.563 24.563-24.563c13.544 0 24.563 11.02 24.563 24.563 0 13.545-11.019 24.564-24.563 24.564m0-47.49c-12.641 0-22.926 10.285-22.926 22.926 0 12.641 10.285 22.926 22.926 22.926 12.641 0 22.926-10.285 22.926-22.926 0-12.64-10.285-22.925-22.926-22.925"/> <path id="751fd" d="M1448.646 565.546a.82.82 0 0 1-.815-.75c-.014-.166-.297-4.105 3.652-7.455 1.495-1.27 2.078-2.507 2.078-4.41 0-2.977-2.204-5.399-4.914-5.399-2.753 0-4.91 2.28-4.91 5.188a.819.819 0 1 1-1.638 0c0-3.828 2.876-6.825 6.548-6.825 3.613 0 6.552 3.156 6.552 7.037 0 2.385-.794 4.076-2.656 5.658-3.315 2.81-3.083 6.035-3.08 6.068a.82.82 0 0 1-.817.888"/> <path id="751fe" d="M1448.582 572.915a1.64 1.64 0 0 1-1.637-1.638 1.64 1.64 0 0 1 1.637-1.638 1.64 1.64 0 0 1 1.638 1.638 1.64 1.64 0 0 1-1.638 1.638"/> <clipPath id="751fb"> <use xlink:href="#751fa"/> </clipPath> </defs> <g> <g transform="translate(-1424 -534)"> <g> <g/> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fc"/> </g> </g> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fd"/> </g> </g> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fe"/> </g> </g> </g> </g> </g> </svg> Undecided</button> </div></div><button class="storyRFI step-3__substep-3__back" type="button" name="button">Back</button> </div></div>');
        var $collageOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"] > option").clone();
        $('#storyRFI-college_of_interest').empty();
        $('#storyRFI-college_of_interest').append($collageOptions).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]").val());

        if ($('#storyRFI-college_of_interest').val() !== '') {
          $('#storyRFI-college_of_interest').parent().parent().addClass('--vaild');

          if ($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]").val() === '') {
            document.querySelector('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').dispatchEvent(new Event("change"));
          }

          var $degreeOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"] > option").clone();
          $('#storyRFI-clientdegreeid').empty();
          $('#storyRFI-clientdegreeid').append($degreeOptions).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]").val());
          $('.storyRFI.step-3__clientdegreeid').addClass('--active');
        }

        var $degreeOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"] > option").clone();
        $('#storyRFI-clientdegreeid').empty();
        $('#storyRFI-clientdegreeid').append($degreeOptions).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]").val());

        if ($('#storyRFI-clientdegreeid').val() !== '') {
          $('#storyRFI-clientdegreeid').parent().parent().addClass('--vaild');
          $('.storyRFI.step-3__substep-2__next').prop('disabled', false);
        } else {
          $('.storyRFI.step-3__substep-2__next').prop('disabled', true);
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        var me = this;




        // CRO function
        window.undecidedVariant = function(variantType) {

          // var me = this;
          if ( !(window.location.pathname == '/request-information' || window.location.pathname == '/request-information/') ) {
            return false;
          }
          if(variantType == null) {
            console.log("error, no variant selected");
            $.each($('input[name="test_variation"]'), function(i,e) {
              $(e).val('control');
            });


            return false;
          } else if (variantType == 1) {

            $.each($('input[name="test_variation"]'), function(i,e) {
              $(e).val('variation 1');
            });


            $('.storyRFI.step-3__substep-3').addClass('--js-undecided-variant-1');  

            $('.storyRFI.step-3__substep-3 .storyRFI.step-3__heading').text('Let Us Know How We Can Help');
            $('.storyRFI.step-3__substep-3 .storyRFI.step-3__subheading').text('Select an area of interest or choose "Something Else" to tell us your specific question.');
      
            // remove the bottom row of buttons
            
            $('.step-3__substep-3__content ul.step-3__list li').slice(5).each(function() {
              $(this).remove();
            });
      
            $('.step-3__substep-3__content ul.step-3__list li:nth-child(1)').html(' <button type="button" name="button" data-interest="Tuition &amp; Financal Aid"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="50" viewBox="0 0 48 50"> <defs> <path id="wb8ka" d="M446.496 444.113h47.488v49.127h-47.488z"></path> <path id="wb8kc" d="M493.166 493.24h-9.826a.819.819 0 0 1-.818-.819v-47.489c0-.452.366-.819.818-.819h9.826c.453 0 .819.367.819.82v47.488a.819.819 0 0 1-.82.819m-9.006-1.638h8.188v-45.851h-8.188z"></path> <path id="wb8kd" d="M475.153 493.24h-9.826a.82.82 0 0 1-.818-.819v-22.925a.82.82 0 0 1 .818-.82h9.826c.452 0 .818.368.818.82v22.925a.819.819 0 0 1-.818.819m-9.007-1.638h8.188v-21.288h-8.188z"></path> <path id="wb8ke" d="M457.14 493.24h-9.826a.82.82 0 0 1-.818-.819v-31.113a.82.82 0 0 1 .818-.819h9.826a.82.82 0 0 1 .818.819v31.113a.82.82 0 0 1-.818.819m-9.007-1.638h8.188v-29.475h-8.188z"></path> <clipPath id="wb8kb"> <use xlink:href="#wb8ka"></use> </clipPath> </defs> <g> <g transform="translate(-446 -444)"> <g></g> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8kc"></use> </g> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8kd"></use> </g> <g clip-path="url(#wb8kb)"> <use fill="#5a1851" xlink:href="#wb8ke"></use> </g> </g> </g> </svg> Tuition <br> &amp; Financal Aid</button> ');
          
            $('.step-3__substep-3__content ul.step-3__list li:nth-child(2)').html(' <button class="--business" type="button" name="button" data-interest="Class Schedules &amp; Start Dates"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="45" viewBox="0 0 50 45"> <defs> <path id="k73ga" d="M627.445 450.664h49.127v44.214h-49.127z"></path> <path id="k73gc" d="M674.17 494.878h-44.323a2.405 2.405 0 0 1-2.402-2.403v-31.222a2.404 2.404 0 0 1 2.402-2.402h44.323a2.404 2.404 0 0 1 2.401 2.402v31.222a2.405 2.405 0 0 1-2.401 2.403m-44.323-34.389a.765.765 0 0 0-.765.764v31.222c0 .422.343.765.765.765h44.323c.414 0 .764-.35.764-.765v-31.222a.774.774 0 0 0-.764-.764z"></path> <path id="k73gd" d="M648.733 473.59h-20.47a.82.82 0 0 1 0-1.638h20.47a.82.82 0 0 1 0 1.637"></path> <path id="k73ge" d="M675.753 473.59h-20.47a.82.82 0 0 1 0-1.638h20.47a.82.82 0 0 1 0 1.637"></path> <path id="k73gf" d="M660.196 460.489a.82.82 0 0 1-.819-.819v-4.912a2.46 2.46 0 0 0-2.456-2.457h-9.825a2.46 2.46 0 0 0-2.457 2.457v4.912a.82.82 0 0 1-1.637 0v-4.912a4.099 4.099 0 0 1 4.094-4.094h9.825a4.099 4.099 0 0 1 4.094 4.094v4.912a.82.82 0 0 1-.819.819"></path> <path id="k73gg" d="M652.008 480.14a4.056 4.056 0 0 1-2.887-1.206 4.07 4.07 0 0 1-1.206-2.888v-4.912a4.1 4.1 0 0 1 4.093-4.095c1.08 0 2.105.428 2.887 1.203a4.076 4.076 0 0 1 1.207 2.892v4.912a4.099 4.099 0 0 1-4.094 4.094m0-11.463a2.46 2.46 0 0 0-2.456 2.457v4.912c0 .646.258 1.261.727 1.732.467.467 1.08.724 1.73.724a2.46 2.46 0 0 0 2.456-2.456v-4.912c0-.647-.258-1.263-.727-1.733a2.447 2.447 0 0 0-1.73-.724"></path> <clipPath id="k73gb"> <use xlink:href="#k73ga"></use> </clipPath> </defs> <g> <g transform="translate(-627 -450)"> <g> <g></g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gc"></use> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gd"></use> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73ge"></use> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gf"></use> </g> </g> <g clip-path="url(#k73gb)"> <g> <use fill="#5a1851" xlink:href="#k73gg"></use> </g> </g> </g> </g> </g> </svg> Class Schedules <br>&amp; Start Dates</button> ');
      
            $('.step-3__substep-3__content ul.step-3__list li:nth-child(3)').html(' <button type="button" name="button" data-interest="Transfer Credits"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="45" viewBox="0 0 50 45"> <defs> <path id="jdtha" d="M807.576 457.214h49.127v44.214h-49.127z"></path> <path id="jdthc" d="M854.246 491.602h-27.838a.819.819 0 1 1 0-1.637h27.838a.82.82 0 0 0 .819-.819V459.67a.82.82 0 0 0-.819-.819h-44.214a.82.82 0 0 0-.818.82v29.475a.82.82 0 0 0 .818.819h8.188a.819.819 0 1 1 0 1.637h-8.188a2.46 2.46 0 0 1-2.456-2.456V459.67a2.46 2.46 0 0 1 2.456-2.456h44.214a2.46 2.46 0 0 1 2.457 2.456v29.476a2.46 2.46 0 0 1-2.457 2.456"></path> <path id="jdthd" d="M846.877 468.677h-29.476a.819.819 0 1 1 0-1.638h29.476a.819.819 0 1 1 0 1.638"></path> <path id="jdthe" d="M846.877 475.227h-29.476a.819.819 0 1 1 0-1.638h29.476a.819.819 0 1 1 0 1.638"></path> <path id="jdthf" d="M837.052 481.777h-19.65a.819.819 0 1 1 0-1.637h19.65a.819.819 0 1 1 0 1.637"></path> <path id="jdthg" d="M818.22 501.428a.819.819 0 0 1-.819-.819v-9.825a.819.819 0 1 1 1.638 0v7.564l6.74-8.088a.82.82 0 0 1 1.26 1.048l-8.19 9.825a.82.82 0 0 1-.629.295"></path> <clipPath id="jdthb"> <use xlink:href="#jdtha"></use> </clipPath> </defs> <g> <g transform="translate(-807 -457)"> <g></g> <g clip-path="url(#jdthb)"> <g> <use fill="#5a1851" xlink:href="#jdthc"></use> </g> </g> <g clip-path="url(#jdthb)"> <g> <use fill="#5a1851" xlink:href="#jdthd"></use> </g> </g> <g clip-path="url(#jdthb)"> <g> <use fill="#5a1851" xlink:href="#jdthe"></use> </g> </g> <g clip-path="url(#jdthb)"> <g> <use fill="#5a1851" xlink:href="#jdthf"></use> </g> </g> <g clip-path="url(#jdthb)"> <g> <use fill="#5a1851" xlink:href="#jdthg"></use> </g> </g> </g> </g> </svg> Transfer Credits</button> ');
      
            $('.step-3__substep-3__content ul.step-3__list li:nth-child(4)').html(' <button type="button" name="button" data-interest="Student Experience"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="51" viewBox="0 0 50 51"> <defs> <path id="qyu7a" d="M1027.658 484.19c-3.714 0-6.918-1.55-7.614-3.529h15.227c-.694 1.98-3.9 3.53-7.613 3.53zm0-21.214l7.31 16.08h-14.62zm-12.887-8.615l13.75 2.22a.053.053 0 0 1 .046.052v.127c0 .029-.024.053-.054.053h-13.742zm6.096 38.733v.507h-17.218v-.507c0-.4.257-.748.638-.867l5.526-1.727h4.889l5.526 1.727a.905.905 0 0 1 .639.867zm-24.864-36.281a.054.054 0 0 1-.053-.053v-.131c0-.027.018-.049.045-.053l13.75-2.292v2.529zm16.255-9.518c.973 0 1.765.792 1.765 1.765 0 .973-.792 1.764-1.765 1.764a1.766 1.766 0 0 1-1.764-1.764c0-.973.791-1.765 1.764-1.765zm-.909 28.34v-23.332a3.34 3.34 0 0 0 1.818 0v23.332zm2.674 1.657v11.604h-3.53v-11.604c0-.03.025-.053.054-.053h3.422c.03 0 .054.024.054.053zm-17.164 6.898c-3.714 0-6.918-1.55-7.613-3.529h15.227c-.697 1.98-3.9 3.53-7.614 3.53zm0-21.214l7.31 16.08h-14.62zm40.155 16.916l.001-.033v-.008l-.002-.055-.002-.027c-.001-.016-.004-.03-.006-.046l-.007-.034c-.003-.012-.005-.024-.01-.036l-.012-.043c-.002-.01-.006-.018-.009-.028-.005-.016-.012-.032-.019-.048l-.002-.008-8.486-18.663v-2.446h.053c.915 0 1.658-.743 1.658-1.657v-.127a1.65 1.65 0 0 0-1.393-1.637l-14.007-2.26V451.3c.532-.596.856-1.38.856-2.24a3.372 3.372 0 0 0-3.369-3.369 3.372 3.372 0 0 0-3.368 3.369c0 .86.324 1.644.855 2.24v1.358l-14.015 2.336a1.652 1.652 0 0 0-1.385 1.635v.13c0 .915.744 1.658 1.658 1.658h.054v2.446l-8.484 18.664a.019.019 0 0 0-.002.008c-.007.016-.014.033-.019.049l-.01.028c-.006.014-.009.028-.013.042-.002.012-.006.024-.01.037l-.004.033-.008.047-.003.026a.714.714 0 0 0-.003.054v.007l.002.033v.027c.05 3.3 4.14 5.876 9.356 5.876 5.214 0 9.305-2.576 9.354-5.875 0-.01 0-.019.002-.027l.001-.033v-.008l-.003-.055-.002-.027-.007-.046a.25.25 0 0 0-.005-.034l-.01-.036c-.004-.015-.006-.028-.012-.043-.002-.01-.006-.018-.01-.028-.006-.016-.011-.032-.02-.048 0-.003 0-.005-.002-.008l-8.484-18.663v-2.446h12.084v17.426c-.51.284-.855.826-.855 1.45v11.815l-5.082 1.588a2.502 2.502 0 0 0-1.763 2.398v1.309c0 .444.36.802.802.802h18.822a.802.802 0 0 0 .802-.802v-1.309c0-1.104-.708-2.069-1.763-2.4l-5.081-1.586v-11.816c0-.623-.346-1.167-.856-1.449v-17.426h12.085v2.446l-8.483 18.664-.003.008-.019.049a.23.23 0 0 0-.01.028l-.011.042-.01.036-.006.034c-.003.016-.006.03-.007.047l-.001.026-.003.055v.008l.001.034c0 .009 0 .018.002.026.05 3.3 4.14 5.876 9.355 5.876 5.214 0 9.305-2.576 9.354-5.876l-.001-.028z"></path> </defs> <g> <g transform="translate(-987 -445)"> <g> <use fill="#621b4b" xlink:href="#qyu7a"></use> </g> </g> </g> </svg> Student  <br> Experience</button> ');
      
            $('.step-3__substep-3__content ul.step-3__list li:nth-child(5)').html(' <button type="button" name="button" data-interest="Admissions"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="48" viewBox="0 0 32 48"> <defs> <path id="h0f1a" d="M1176.843 447.389h31.114v47.489h-31.114z"></path> <path id="h0f1c" d="M1185.851 480.998c-.023 0-.048 0-.072-.003a.82.82 0 0 1-.745-.885c.046-.548-.01-2.132-.81-2.881a.819.819 0 0 1 1.12-1.195c1.547 1.45 1.332 4.105 1.322 4.218a.819.819 0 0 1-.815.746"></path> <path id="h0f1d" d="M1198.948 480.998a.818.818 0 0 1-.815-.748c-.024-.287-.199-2.85 1.335-4.228a.818.818 0 1 1 1.095 1.218c-.789.71-.845 2.313-.799 2.87a.819.819 0 0 1-.816.888"></path> <path id="h0f1e" d="M1184.784 477.45a.818.818 0 0 1-.49-.163c-4.874-3.642-7.45-8.403-7.45-13.77 0-8.893 6.978-16.129 15.555-16.129a.82.82 0 0 1 0 1.638c-7.675 0-13.918 6.501-13.918 14.491 0 6.101 3.694 10.143 6.794 12.458a.819.819 0 0 1-.491 1.475"></path> <path id="h0f1f" d="M1200.016 477.45a.82.82 0 0 1-.491-1.475c3.1-2.315 6.794-6.357 6.794-12.458 0-7.99-6.245-14.491-13.92-14.491a.82.82 0 0 1 0-1.638c8.58 0 15.558 7.236 15.558 16.13 0 5.366-2.576 10.127-7.451 13.769a.818.818 0 0 1-.49.163"></path> <path id="h0f1g" d="M1192.4 494.878c-6.43 0-7.35-5.475-7.358-5.53a.807.807 0 0 1-.01-.125v-9.043a.82.82 0 0 1 1.637 0v8.97c.1.499.98 4.09 5.73 4.09a.82.82 0 0 1 0 1.638"></path> <path id="h0f1h" d="M1192.4 494.878a.82.82 0 0 1 0-1.638c4.784 0 5.633-3.576 5.73-4.087v-8.973a.819.819 0 1 1 1.637 0v9.043a.807.807 0 0 1-.01.125c-.008.055-.927 5.53-7.358 5.53"></path> <path id="h0f1i" d="M1192.641 485.064c-3.996 0-7.01-1.687-7.198-1.794a.818.818 0 0 1 .813-1.422c.062.036 6.265 3.48 12.285.002a.818.818 0 1 1 .819 1.418 13.264 13.264 0 0 1-6.719 1.796"></path> <clipPath id="h0f1b"> <use xlink:href="#h0f1a"></use> </clipPath> </defs> <g> <g transform="translate(-1176 -447)"> <g></g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1c"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1d"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1e"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1f"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1g"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1h"></use> </g> </g> <g clip-path="url(#h0f1b)"> <g> <use fill="#5a1851" xlink:href="#h0f1i"></use> </g> </g> </g> </g> </svg> Admissions</button> ');
      
            $('.storyRFI.step-3__substep-3__content-undecided').html(' <button type="button" name="button" data-interest="Something Else"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 50 50"> <defs> <path id="751fa" d="M1424.084 534.432h49.126v49.127h-49.126z"></path> <path id="751fc" d="M1448.647 583.559c-13.544 0-24.563-11.02-24.563-24.564s11.019-24.563 24.563-24.563c13.544 0 24.563 11.02 24.563 24.563 0 13.545-11.019 24.564-24.563 24.564m0-47.49c-12.641 0-22.926 10.285-22.926 22.926 0 12.641 10.285 22.926 22.926 22.926 12.641 0 22.926-10.285 22.926-22.926 0-12.64-10.285-22.925-22.926-22.925"></path> <path id="751fd" d="M1448.646 565.546a.82.82 0 0 1-.815-.75c-.014-.166-.297-4.105 3.652-7.455 1.495-1.27 2.078-2.507 2.078-4.41 0-2.977-2.204-5.399-4.914-5.399-2.753 0-4.91 2.28-4.91 5.188a.819.819 0 1 1-1.638 0c0-3.828 2.876-6.825 6.548-6.825 3.613 0 6.552 3.156 6.552 7.037 0 2.385-.794 4.076-2.656 5.658-3.315 2.81-3.083 6.035-3.08 6.068a.82.82 0 0 1-.817.888"></path> <path id="751fe" d="M1448.582 572.915a1.64 1.64 0 0 1-1.637-1.638 1.64 1.64 0 0 1 1.637-1.638 1.64 1.64 0 0 1 1.638 1.638 1.64 1.64 0 0 1-1.638 1.638"></path> <clipPath id="751fb"> <use xlink:href="#751fa"></use> </clipPath> </defs> <g> <g transform="translate(-1424 -534)"> <g> <g></g> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fc"></use> </g> </g> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fd"></use> </g> </g> <g clip-path="url(#751fb)"> <g> <use fill="#5a1851" xlink:href="#751fe"></use> </g> </g> </g> </g> </g> </svg> Something Else</button> ');

            var somethingElseTextField = '<li class="something-else__wrapper"><h4 class="something-else__title">How Can We Help?</h4><div class="something-else__input-wrapper"><input class="something-else__input" type="text" placeholder="Enter your comments here..."><button class="something-else__button">Next</button></div></li>';


            $('.storyRFI.step-3__list').append(somethingElseTextField);


            $('.storyRFI.step-3__substep-1 button[value="no"]').click(function() {
              if (urlParam('college_of_interest') == undefined && urlParam('clientdegreeid') == undefined) {
                // set the area of interest as undecided
                $('.storyRFI select[name="college_of_interest"]').val("10");
                $('.storyRFI select[name="college_of_interest"]').trigger("change");
                $(this).parent().parent().addClass('--vaild');
                
                
                var undecidedMarkup = '<option value="1839">Undecided</option>';
                $('#storyRFI-clientdegreeid').prepend(undecidedMarkup);
                $('#storyRFI-clientdegreeid').val("1839");
                $('#storyRFI-clientdegreeid').trigger("change");


                var undecidedVal = $('.storyRFI select[name="clientdegreeid"]').val();
                $('.storyRFI .webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').val(undecidedVal);
                $('.storyRFI .webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').parent().parent().addClass('--vaild');

                }
            });
            // only set this if user clicks no at step 3


            $('.storyRFI.step-3__substep-3__content button').each(function() {

              $(this).click(function(event) {
                event.preventDefault();

                if( $(this).attr("data-interest") == "Something Else") {
                  // user clicked "something else", capture value in text field
                  $('.something-else__wrapper').css('display', 'initial');
                  $('.something-else__input').focus();
                  $('.something-else__button').click(function() {
                    var userInput = $('.something-else__input').val();
                    $('input[name="something_else_choice"]').attr("value", userInput);
                    me.next();
                  });
                } else {
                  // user clicked one of the 5 undecided options
                  var userChoice = $(this).attr("data-interest");      
                  $('input[name="something_else_choice"]').attr("value", userChoice);
                  me.next();
                }        
                // console.log("The user choice is "+user_choice);      
                });
              });
          } else if (variantType == 2) {
            $('.storyRFI.step-3__substep-3').addClass('--js-undecided-variant-2');
            $('.storyRFI.step-3__substep-3__content-divider').remove();
            $('.step-3__substep-3__content-undecided').remove();
            $.each($('input[name="test_variation"]'), function(i,e) {
              $(e).val('variation 2');
            });


          } else {
            console.log("window.undecidedVariant() not behaving as intended");
          }
        } // end of window.undecidedVariant()







        $('.storyRFI.step-3__substep-1 button').on('click', function () {
          if ($(this).val() == 'yes') {
            $('.storyRFI.step-3__substep-2').addClass('--active');
            $('.storyRFI.step-3__substep-1').removeClass('--active');

            if ($('.storyRFI .step-3__input select[name="college_of_interest"]').val() !== '') {
              $('.storyRFI .step-3__input select[name="clientdegreeid"]').trigger('change');
            }


            if(urlParam('clientdegreeid') == "1818" && urlParam('state') == $("#storyRFI-state").val()) {
              $("#storyRFI-college_of_interest").val(urlParam('college_of_interest'));
              $("#storyRFI-college_of_interest").trigger("change");
              $("#storyRFI-clientdegreeid").val("1818");
              $("#storyRFI-clientdegreeid").trigger("change");
              $(".step-3__nursing input[type=radio]").first().trigger("click");
            }
          }

          if ($(this).val() == 'no') {
            var undecidedList = $('.storyRFI.step-3__substep-3__content .step-3__list li');
            // ensure that styles are reset in case user chooses a different state
            $('.storyRFI.step-3__substep-3__content').removeClass("--reduced-set");
            $('.storyRFI.step-3__list').removeClass("--reduced-set");
            undecidedList.each(function() {
              $(this).css('display', 'initial');
            });
            $('.storyRFI.step-3__substep-3').addClass('--active');
            $('.storyRFI.step-3__substep-1').removeClass('--active');
            var matchingInterestsBool = false;
            var removalCounter = 0;
            undecidedList.each(function() {
              var notSureInterestName =  $(this).children("button[data-interest]").attr('data-interest');
              $('#storyRFI-college_of_interest option').each(function() {
                var stateSelectedInterestName = $(this).text();
                if(stateSelectedInterestName === notSureInterestName) {
                    // if we find a match, then we'll keep this interest on the page
                    matchingInterestsBool = true;
                }
              });
              // if there was not a match, get rid of the interest from the list and reset matchingInterestsBool
              if(!matchingInterestsBool) {
                $(this).css('display', 'none');
                removalCounter++;
              }
              matchingInterestsBool = false;
            });
            
            if (removalCounter > 5) { //case: full row removal and then some
              $('.storyRFI.step-3__substep-3__content').css('justify-content', 'center');
            } else if (removalCounter < 5 && removalCounter > 0) { //case: less than one row removed but also nonzero
              $('.storyRFI.step-3__list').addClass("--reduced-set");
              $('.storyRFI.step-3__substep-3__content').addClass("--reduced-set");
            } else {
              // console.log("we removed either 5 or 0, either way no styling tweaks needed");
            }
          }
        });
        $("#storyRFI-college_of_interest").on("blur change", function (event) {
          if ($(this).val() !== "") {
            $(this).parent().parent().addClass('--vaild');
          } else {
            $(this).parent().parent().removeClass('--vaild');
          }

          if ($('#storyRFI-college_of_interest').val() !== '') {
            var $collageOptions = $("#storyRFI-college_of_interest > option").clone();
            $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').empty();
            $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').append($collageOptions).val($("#storyRFI-college_of_interest").val());
            document.querySelector('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').dispatchEvent(new Event("change"));
            var $degreeOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"] > option").clone();
            $('#storyRFI-clientdegreeid').empty();
            $('#storyRFI-clientdegreeid').append($degreeOptions).val($(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]").val());
            $('.storyRFI.step-3__nursing').hide();
            $('.storyRFI.step-3__clientdegreeid').addClass('--active');
          } else {
            $('.storyRFI.step-3__clientdegreeid').removeClass('--active');
          }
          var degreeSelectorElement = $('#storyRFI-clientdegreeid');
          if(degreeSelectorElement) {
            degreeSelectorElement.parent().parent().removeClass('--vaild');
            $('.storyRFI.step-3__substep-2 button.step-3__substep-2__next').prop('disabled', true);
          }
        });
        $("#storyRFI-clientdegreeid").on("blur change", function (event) {
          if ($(this).val() !== "") {
            $(this).parent().parent().addClass('--vaild');
          } else {
            $(this).parent().parent().removeClass('--vaild');
          }

          if ($('#storyRFI-clientdegreeid').val() !== '') {
            var $collageOptions = $("#storyRFI-clientdegreeid > option").clone();
            $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').empty();
            $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').append($collageOptions).val($("#storyRFI-clientdegreeid").val());
            $('.storyRFI.step-3__substep-2__next').prop('disabled', false);

            if ($('#storyRFI-clientdegreeid').val() == 1818) {
              $('.storyRFI.step-3__nursing').show();
              $('.storyRFI.step-3__substep-2__next').prop('disabled', true);
            } else {
              $('.storyRFI.step-3__nursing').hide();
            }
          } else {
            $('.storyRFI.step-3__substep-2__next').prop('disabled', true);
            $('.storyRFI.step-3__nursing').hide();
          }
        });
        $('.storyRFI.step-3__nursing input').on('change', function () {
          if ($(this).val() === "Yes") {
            $('.storyRFI.step-3__substep-2__next').prop('disabled', false);
            $('.storyRFI.step-3__nursing-error').hide();
            $('#edit-registerednurse-yes').prop('checked', true);
            $('#edit-registerednurse-no').prop('checked', false);
          } else {
            $('.storyRFI.step-3__nursing-error').show();
            $('.storyRFI.step-3__substep-2__next').prop('disabled', true);
            $('#edit-registerednurse-no').prop('checked', true);
            $('#edit-registerednurse-yes').prop('checked', false);
          }
        });
        $('.storyRFI.step-3__list button, .storyRFI.step-3__substep-3__content-undecided button').on('click', function () {
          var $collageOptions = $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"] > option").clone();
          var selected = null;
          var thisthis = this;
          $.each($collageOptions, function (index, value) {
            if ($(value).text() == $(thisthis).data('interest')) {
              selected = $(value).val();
              return false;
            }
          });
          $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"] option:selected").removeAttr("selected");
          $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"] option').each(function (index) {
            if ($(this).val() == selected) {
              $(this).prop("selected");
              $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').val($(this).val());
              document.querySelector('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-college-of-interest\"]').dispatchEvent(new Event("change"));
              return;
            }
          });
          $(".webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"] option:selected").removeAttr("selected");
          $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"] option').each(function (index) {
            if ($(this).text() == "Undecided") {
              $(this).prop("selected");
              $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').val($(this).val());
              $('.webform-submission-lead-flow-system-form select[data-drupal-selector=\"edit-clientdegreeid\"]').trigger("change");
              return;
            }
          });
          me.next();
        });
        $('.storyRFI.step-3__substep-2__next').on('click', function () {
          if (!me.validate2()) {
            return;
          }

          me.next();
        });
        $('.storyRFI.step-3__substep-1__back').on('click', function () {
          me.previous();
        });
        $('.storyRFI.step-3__substep-2__back').on('click', function () {
          $('.step-3__clientdegreeid').removeClass("--active");
          $('.step-3__nursing').css("display", "none");
          $('.storyRFI.step-3__substep-1').addClass('--active');
          $('.storyRFI.step-3__substep-2').removeClass('--active');
          $(".storyRFI.step-3__substep-2__next").prop("disabled", true);
          $("#storyRFI-clientdegreeid").parent().parent().removeClass("--vaild");
          $("#storyRFI-college_of_interest").parent().parent().removeClass("--vaild");
        });
        $('.storyRFI.step-3__substep-3__back').on('click', function () {
          $('.storyRFI.step-3__substep-1').addClass('--active');
          $('.storyRFI.step-3__substep-3').removeClass('--active');
        });
      }
    }, {
      key: "process",
      value: function process() {}
    }, {
      key: "validate2",
      value: function validate2() {
        if ($('.storyRFI.step-3__substep-2 button').prop('disabled')) {
          return false;
        }

        return true;
      }
    }]);

    return Step3;
  }(Step);

  var Step4 =
  /*#__PURE__*/
  function (_Step4) {
    "use strict";

    _inherits(Step4, _Step4);

    function Step4(wizard) {
      var _this4;

      _classCallCheck(this, Step4);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Step4).call(this, wizard));
      _this4.selector = '.storyRFI.step-4';
      return _this4;
    }

    _createClass(Step4, [{
      key: "markup",
      value: function markup() {
        $('main').append('<div class="storyRFI step-4"> <div class="storyRFI step-4__heading">Almost done!</div><div class="storyRFI step-4__subheading">We just need some <br>contact info.</div><div class="storyRFI step-4__content"> We’ll send you an email with some facts about attending UAGC <br>and then we’ll give you a call to answer your questions. </div><div class="storyRFI step-4__input-container"><div class="storyRFI step-4__input"> <label for="">Email Address<span>*</span></label> <input id="storyRFI-email" type="email" name="" value="" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" autocomplete="nope" required><span class="storyRFI__warning">Please enter a valid email address.</span> </div><div class="storyRFI step-4__input"> <label for="">Phone Number<span>*</span></label> <input id="storyRFI-phone" type="text" name="" value="" pattern="^(?!(([1,2,3,4,5,6,8,9,0])\\2{9}))(?!((1234567890|0987654321)))((\\(?\\d{3}\\)?([\\s.-])?\\d{3}[\\s.-]\\d{4})|(\\d{10}))$" autocomplete="nope" required><span class="storyRFI__warning">Please enter a valid phone number.</span> </div></div><div class="storyRFI step-4__consent"><input data-drupal-selector="edit-tcpa-checkbox" type="checkbox" id="tcpa_checkbox" name="tcpa_checkbox" value="1" checked="checked" class="storyRFI step-4__consent__checkmark" required="required" aria-required="true"><label for="tcpa_checkbox" class="storyRFI step-4__consent__checkmark-label"> I agree to the contact methods outlined below</label></div><div class="storyRFI step-4__copy-btn-container"><div class="storyRFI step-4__consent-copy"><p id="leadid_tcpa_disclosure">I consent to receive phone calls or text messages from the University of Arizona Global Campus at the phone number provided. This consent includes contact through a wireless number or using automated technology. I can end my consent anytime. Certain degree programs may not be available in all states. id=ASH.03292019.</p></div><button class="storyRFI step-4__next" type="button" name="button" disabled>Request Information</button></div><button class="storyRFI step-4__back" type="button" name="button">Back</button></div>\
<div class="storyRFI__footer">\
  <h3 class="storyRFI__footer-header">Expect more from your college experience</h3>\
  <div class="storyRFI__footer-grid">\
    <div class="storyRFI__footer-griditem">\
      <svg width="81" height="97" viewBox="0 0 81 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 76C57.1878 76 69.5 63.6878 69.5 48.5C69.5 33.3122 57.1878 21 42 21C26.8122 21 14.5 33.3122 14.5 48.5C14.5 63.6878 26.8122 76 42 76Z" fill="#AB0520"/><path d="M52.9847 56.7245C52.9847 59.0208 52.1049 60.9741 50.3455 62.5844C48.586 64.165 46.0064 65.0447 42.6068 65.2237V70.3679H40.3701V65.2684C38.1932 65.1491 36.1355 64.7316 34.1971 64.0159C32.2885 63.2703 30.7825 62.331 29.6791 61.1977L30.9763 58.648C32.0201 59.6619 33.377 60.5118 35.047 61.1977C36.7468 61.8836 38.5212 62.2862 40.3701 62.4055V50.6409C38.3124 50.1339 36.5977 49.5971 35.2259 49.0305C33.8541 48.4341 32.706 47.5842 31.7815 46.4808C30.8869 45.3475 30.4395 43.8565 30.4395 42.0075C30.4395 39.7113 31.2745 37.7878 32.9446 36.237C34.6146 34.6565 37.0898 33.732 40.3701 33.4636V28.3194H42.6068V33.4189C44.3066 33.4785 45.9468 33.7618 47.5273 34.2688C49.1377 34.746 50.5244 35.3871 51.6874 36.1923L50.5691 38.8315C49.3464 38.0562 48.0492 37.4448 46.6774 36.9975C45.3056 36.5502 43.9487 36.2967 42.6068 36.237V48.0911C44.8136 48.6279 46.6178 49.1796 48.0194 49.7462C49.421 50.283 50.599 51.118 51.5532 52.2513C52.5075 53.3845 52.9847 54.8756 52.9847 56.7245ZM33.705 41.9181C33.705 43.4688 34.2716 44.6467 35.4048 45.4519C36.5679 46.2571 38.223 46.943 40.3701 47.5096V36.3265C38.1633 36.5054 36.4933 37.1168 35.3601 38.1605C34.2567 39.1745 33.705 40.427 33.705 41.9181ZM42.6068 62.4055C44.9627 62.2266 46.7371 61.6451 47.9299 60.661C49.1228 59.6768 49.7192 58.4243 49.7192 56.9034C49.7192 55.2931 49.1079 54.0853 47.8852 53.2801C46.6625 52.4749 44.903 51.789 42.6068 51.2224V62.4055Z" fill="#D0D0CE"/><path d="M6.5 35.0422C9.4304 27.3675 14.7846 20.8754 21.7383 16.5652C28.692 12.255 36.8597 10.3657 44.9843 11.1881C53.1089 12.0105 60.7398 15.499 66.7025 21.1166C72.6651 26.7342 76.6289 34.1695 77.9838 42.278C79.3386 50.3864 78.0093 58.7185 74.2006 65.9917C70.3918 73.2648 64.3147 79.0758 56.9048 82.5302C49.4948 85.9845 41.1627 86.8907 33.1912 85.1093C25.2196 83.3278 18.0505 78.9575 12.7873 72.671" stroke="#0C234B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/><path d="M3.92394 43L2.71197 37.5L1.5 32L7 33.7292L12.5 35.4583L8.21197 39.2292L3.92394 43Z" fill="#0C234B" stroke="#0C234B" stroke-miterlimit="10" stroke-linejoin="round"/></svg>\
      <div class="storyRFI__footer-griditemcontent">Attend for 3 weeks risk-free with the UAGC Promise</div>\
    </div>\
    <div class="storyRFI__footer-griditem">\
      <svg width="81" height="97" viewBox="0 0 81 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2621 51.45C26.3194 51.45 27.9871 49.7823 27.9871 47.725C27.9871 45.6677 26.3194 44 24.2621 44C22.2048 44 20.5371 45.6677 20.5371 47.725C20.5371 49.7823 22.2048 51.45 24.2621 51.45Z" fill="#AB0520"/><path d="M11.5699 66.7568L4.94001 65.8549C4.15308 65.7478 3.42835 66.2989 3.3213 67.0859L2.69435 71.6944C2.58729 72.4814 3.13844 73.2061 3.92538 73.3132L10.5553 74.2151C11.3422 74.3221 12.067 73.771 12.174 72.9841L12.801 68.3755C12.908 67.5886 12.3569 66.8638 11.5699 66.7568Z" fill="#98A4AE"/><path d="M36.6181 60.287H32.2021C31.6108 60.2854 31.0443 60.0491 30.6271 59.63C29.5221 57.8917 28.2619 56.2571 26.8621 54.746C26.3919 54.3069 25.8118 54.0028 25.1831 53.866L19.5641 52.587C18.6793 52.3772 17.7616 52.3449 16.8641 52.492L12.1751 54.611C11.2811 55.0159 10.5 55.6341 9.90047 56.4111C9.30089 57.1882 8.9011 58.1005 8.73613 59.068L7.94613 63.723C7.90457 63.9676 7.91159 64.2179 7.96679 64.4598C8.02199 64.7017 8.12429 64.9303 8.26785 65.1327C8.41141 65.335 8.59341 65.5071 8.80348 65.6391C9.01354 65.7711 9.24755 65.8604 9.49213 65.902C9.73672 65.9435 9.9871 65.9365 10.229 65.8813C10.4708 65.8261 10.6995 65.7238 10.9018 65.5803C11.1042 65.4367 11.2762 65.2547 11.4082 65.0446C11.5402 64.8346 11.6296 64.6006 11.6711 64.356L12.4611 59.7C12.5216 59.3422 12.6693 59.0049 12.8911 58.7178C13.113 58.4307 13.4022 58.2027 13.7331 58.054L15.1851 57.8C15.254 57.7876 15.3247 57.7919 15.3916 57.8125C15.4584 57.8331 15.5193 57.8694 15.5692 57.9183C15.6191 57.9673 15.6566 58.0275 15.6785 58.0939C15.7004 58.1603 15.7061 58.2309 15.6951 58.3L14.2621 67.95C14.159 68.4048 14.2407 68.8819 14.4891 69.2766C14.7375 69.6713 15.1325 69.9513 15.5871 70.055C19.6669 70.9334 23.5854 72.4407 27.2021 74.523C27.7252 74.72 28.154 75.1081 28.4021 75.609L31.9441 80.931C32.0531 81.1554 32.2054 81.3561 32.3922 81.5214C32.5791 81.6867 32.7969 81.8134 33.0329 81.8941C33.269 81.9748 33.5187 82.008 33.7677 81.9917C34.0167 81.9755 34.2599 81.9101 34.4835 81.7993C34.7071 81.6886 34.9065 81.5346 35.0702 81.3464C35.234 81.1582 35.3589 80.9394 35.4377 80.7027C35.5165 80.466 35.5477 80.216 35.5294 79.9672C35.5111 79.7184 35.4437 79.4756 35.3311 79.253L33.0681 73.56C32.81 72.8844 32.472 72.2422 32.0611 71.647C31.4422 70.6982 30.5627 69.9482 29.5281 69.487L24.9091 67.147L26.0181 61.26C26.0327 61.1863 26.0669 61.1179 26.1171 61.0621C26.1674 61.0062 26.2318 60.9651 26.3036 60.9429C26.3754 60.9208 26.4518 60.9185 26.5248 60.9363C26.5978 60.9541 26.6646 60.9913 26.7181 61.044L27.9431 62.287C28.5005 62.8509 29.1641 63.2986 29.8957 63.6041C30.6273 63.9097 31.4123 64.067 32.2051 64.067H36.7201C36.9952 64.0669 37.2669 64.0069 37.5163 63.891C37.7658 63.7751 37.9869 63.6063 38.1644 63.3961C38.3419 63.186 38.4714 62.9397 38.5439 62.6744C38.6164 62.4091 38.6301 62.1312 38.5841 61.86C38.493 61.4088 38.2461 61.0041 37.8867 60.7165C37.5273 60.429 37.0783 60.2769 36.6181 60.287Z" fill="#AB0520"/><path d="M15.978 77.667C15.8731 77.9872 15.6971 78.2795 15.463 78.522L10.574 85.007C10.4014 85.1852 10.2656 85.3957 10.1743 85.6264C10.083 85.8571 10.038 86.1035 10.042 86.3516C10.0459 86.5996 10.0987 86.8445 10.1973 87.0722C10.2959 87.2998 10.4383 87.5059 10.6165 87.6785C10.7947 87.8511 11.0052 87.987 11.2359 88.0782C11.4666 88.1695 11.713 88.2145 11.9611 88.2105C12.2091 88.2066 12.454 88.1538 12.6817 88.0552C12.9094 87.9567 13.1154 87.8142 13.288 87.636L18.252 82.514C19.1577 81.5795 19.8386 80.4509 20.243 79.214L21.731 74.661C21.7548 74.5882 21.749 74.5089 21.7147 74.4404C21.6805 74.3719 21.6206 74.3196 21.548 74.295C20.691 74.005 18.055 73.123 17.378 72.895C17.3573 72.8888 17.3355 72.887 17.314 72.8895C17.2925 72.8921 17.2717 72.899 17.253 72.9099C17.2343 72.9207 17.218 72.9353 17.2051 72.9527C17.1922 72.9701 17.183 72.9899 17.178 73.011L15.978 77.667Z" fill="#AB0520"/><path d="M79.019 65.116H68.319C68.146 65.1158 67.9747 65.1498 67.8149 65.216C67.655 65.2821 67.5098 65.3791 67.3875 65.5014C67.2651 65.6237 67.1681 65.769 67.102 65.9288C67.0358 66.0887 67.0019 66.26 67.002 66.433V70.092H58.562C58.389 70.0918 58.2177 70.1258 58.0579 70.192C57.898 70.2581 57.7528 70.3551 57.6305 70.4774C57.5081 70.5997 57.4111 70.745 57.345 70.9048C57.2788 71.0647 57.2449 71.236 57.245 71.409V75.392H50.254C50.237 75.392 50.224 75.401 50.207 75.401H49.25C48.9007 75.401 48.5657 75.5397 48.3187 75.7867C48.0718 76.0337 47.933 76.3687 47.933 76.718V80.376H39.499C39.3258 80.3753 39.1541 80.4089 38.9939 80.4747C38.8336 80.5405 38.6879 80.6374 38.5652 80.7596C38.4425 80.8819 38.3451 81.0272 38.2787 81.1872C38.2122 81.3472 38.178 81.5187 38.178 81.692V85.675H29.854V88.308L79.34 88.108C79.34 87.005 79.019 66.281 79.019 65.116Z" fill="#0C234B"/><path d="M63.5401 60.005L67.5951 53.825L71.6571 47.645L64.2761 47.22L56.8951 46.796L58.8041 50.59L45.7251 57.17L48.5531 62.791L61.6311 56.211L63.5401 60.005Z" fill="#D0D0CE"/><path d="M47.135 59.981L48.549 62.791L61.635 56.211L63.535 60.005L67.593 53.825L71.651 47.645L47.135 59.981Z" fill="#D0D0CE"/></svg>\
      <div class="storyRFI__footer-griditemcontent">Earn credits for your work/life experience.</div>\
    </div>\
    <div class="storyRFI__footer-griditem">\
      <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M40.4072 9.6582V13.549" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M25.1001 13.549L27.0901 16.944" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M14.157 24.7245L17.4256 26.6345" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M10.177 39.7532H13.7302" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M14.157 54.9986L17.4256 53.0886" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M25.1001 66.0325L27.0901 62.7791" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M55.8997 13.549L53.9097 16.944" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M66.8428 24.7245L63.5742 26.6345" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M70.8227 39.7532H67.2695" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M66.8428 54.9986L63.5742 53.0886" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M55.8997 66.0325L53.9097 62.7791" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M40.4072 69.994V66.3157" stroke="#0C234B" stroke-width="1.807" stroke-miterlimit="10" stroke-linecap="round"/><path d="M44.4784 43.9147C44.4965 43.8829 44.5207 43.8549 44.5496 43.8325C44.5786 43.81 44.6117 43.7934 44.6471 43.7838C44.6825 43.7741 44.7195 43.7715 44.7559 43.7761C44.7923 43.7807 44.8274 43.7924 44.8593 43.8106L50.55 46.9619C50.7594 46.9862 50.9713 46.9771 51.1778 46.9348C51.4298 46.8826 51.6689 46.7813 51.8813 46.6367C52.0937 46.4921 52.2753 46.3071 52.4156 46.0923L52.515 45.9424C52.6559 45.7276 52.7529 45.4872 52.8003 45.2351C52.8477 44.9829 52.8446 44.7239 52.7912 44.4729C52.739 44.222 52.6373 43.984 52.492 43.7725C52.3467 43.561 52.1607 43.3803 51.9447 43.2409L51.6099 43.0233C49.5644 41.3487 44.4607 38.1286 40.7286 35.7666C39.6111 35.0595 38.636 34.4409 37.9182 33.9785C37.7944 33.9003 37.6516 33.8568 37.505 33.8525C35.7781 33.8247 34.0714 33.4787 32.4713 32.8319C32.2862 32.7512 32.0774 32.7427 31.8864 32.8084C31.6954 32.874 31.5363 33.0088 31.4407 33.186L26.6508 41.8891C26.5667 42.04 26.5339 42.2138 26.557 42.3848C26.5802 42.5557 26.6582 42.7146 26.7795 42.8379L28.2683 44.3667L28.3102 44.4073C28.4065 44.4927 38.3378 52.9584 42.5135 52.9688H42.5669C42.6192 52.9688 42.6715 52.9688 42.7238 52.9688C43.12 52.9683 43.5099 52.87 43.8587 52.6828C44.2074 52.4956 44.5041 52.2254 44.7222 51.8962L41.5342 50.131C41.4701 50.0943 41.423 50.0339 41.4035 49.9629C41.3839 49.8919 41.3932 49.816 41.4296 49.7519C41.4476 49.7201 41.4718 49.6921 41.5007 49.6696C41.5297 49.6472 41.5628 49.6306 41.5982 49.6209C41.6336 49.6112 41.6706 49.6086 41.707 49.6132C41.7434 49.6178 41.7786 49.6296 41.8104 49.6478L45.2632 51.5598C45.6422 51.6268 46.0327 51.5815 46.3861 51.4295C46.7396 51.2775 47.0403 51.0255 47.2511 50.7048L47.3474 50.5569C47.4638 50.3728 47.548 50.1703 47.5964 49.9581L42.8431 47.3243C42.7789 47.2877 42.732 47.2272 42.7124 47.1562C42.6928 47.0852 42.7022 47.0094 42.7385 46.9453C42.7753 46.8814 42.836 46.8346 42.9073 46.8151C42.9787 46.7956 43.0549 46.805 43.1193 46.8411L48.3058 49.7144C48.6053 49.6918 48.8957 49.6009 49.1544 49.4489C49.413 49.2969 49.6332 49.0877 49.7978 48.8375L49.8951 48.6876C50.1416 48.3075 50.2463 47.8535 50.1912 47.4045L44.5914 44.3042C44.5576 44.2868 44.5276 44.2627 44.5034 44.2334C44.4792 44.204 44.4613 44.1701 44.4507 44.1337C44.4402 44.0972 44.4372 44.059 44.4419 44.0214C44.4467 43.9837 44.4591 43.9474 44.4784 43.9147Z" fill="#D0D0CE"/><path d="M33.9404 38.6045C34.7272 37.1955 35.671 34.0639 37.1567 33.6463C39.9873 33.0068 42.9183 32.9413 45.775 33.4537C48.4503 34.1493 49.2183 33.4891 49.2183 33.4891L54.0082 41.8069L51.8978 44.023L41.0562 36.6685C40.2304 36.5422 39.3916 36.5229 38.5608 36.6112C38.3516 36.8195 36.5436 39.5012 34.6781 39.4918C33.6035 39.4856 33.9404 38.6045 33.9404 38.6045Z" fill="#0C234B" stroke="#0C234B" stroke-width="0.459" stroke-miterlimit="10"/><path d="M57.961 39.518L53.0289 31.0149C52.6521 30.3654 51.8177 30.1429 51.1651 30.5179L49.7507 31.3307C49.0981 31.7057 48.8745 32.5363 49.2513 33.1858L54.1835 41.6889C54.5602 42.3384 55.3947 42.561 56.0472 42.186L57.4617 41.3731C58.1142 40.9981 58.3378 40.1676 57.961 39.518Z" fill="#AA0A1A" stroke="#AA0A1A" stroke-width="0.918" stroke-miterlimit="10"/><path d="M40.9536 36.9393L41.9267 37.1174C42.8038 37.2763 43.6411 37.6054 44.3907 38.0859C47.2836 39.9386 51.9469 43.2388 51.9469 43.2388C52.1696 43.383 52.3604 43.5708 52.5077 43.7908V44.701L49.1199 44.374L40.9536 36.9393Z" fill="#D0D0CE"/><path d="M29.1061 43.2136L27.9409 44.8432C27.5324 45.4146 27.6666 46.2075 28.2406 46.6141L28.5903 46.8618C29.1643 47.2684 29.9609 47.1348 30.3695 46.5634L31.5346 44.9338C31.9432 44.3624 31.809 43.5695 31.2349 43.1629L30.8853 42.9152C30.3112 42.5086 29.5146 42.6421 29.1061 43.2136Z" fill="#0C234B" stroke="#0C234B" stroke-width="0.459143" stroke-miterlimit="10"/><path d="M32.263 44.3758L30.0739 47.4395C29.6657 48.0109 29.8001 48.8035 30.3741 49.2098L30.7237 49.4573C31.2977 49.8636 32.094 49.7299 32.5022 49.1585L34.6913 46.0948C35.0996 45.5234 34.9652 44.7308 34.3911 44.3245L34.0415 44.077C33.4675 43.6706 32.6712 43.8044 32.263 44.3758Z" fill="#0C234B" stroke="#0C234B" stroke-width="0.459" stroke-miterlimit="10"/><path d="M34.4332 46.4207L32.4985 49.1266C32.09 49.698 32.2242 50.4908 32.7983 50.8975L33.1479 51.1452C33.722 51.5518 34.5185 51.4182 34.9271 50.8468L36.8617 48.141C37.2703 47.5696 37.1361 46.7767 36.562 46.37L36.2124 46.1224C35.6383 45.7157 34.8417 45.8493 34.4332 46.4207Z" fill="#0C234B" stroke="#0C234B" stroke-width="0.459143" stroke-miterlimit="10"/><path d="M36.3004 48.9247L35.1353 50.5544C34.7267 51.1258 34.8609 51.9186 35.435 52.3253L35.7846 52.5729C36.3587 52.9796 37.1553 52.846 37.5638 52.2746L38.7289 50.645C39.1375 50.0736 39.0033 49.2807 38.4292 48.8741L38.0796 48.6264C37.5055 48.2198 36.7089 48.3533 36.3004 48.9247Z" fill="#0C234B" stroke="#0C234B" stroke-width="0.459143" stroke-miterlimit="10"/><path d="M27.9713 30.9051L23.0391 39.4082C22.6624 40.0577 22.8859 40.8882 23.5385 41.2632L24.9529 42.0761C25.6055 42.4511 26.4399 42.2285 26.8167 41.579L31.7489 33.0759C32.1256 32.4264 31.902 31.5958 31.2495 31.2208L29.835 30.408C29.1825 30.033 28.3481 30.2555 27.9713 30.9051Z" fill="#98A4AE" stroke="#98A4AE" stroke-width="0.918" stroke-miterlimit="10"/><path d="M37.8796 1.64961C38.7446 1.59129 39.6165 1.56213 40.4953 1.56213C50.6876 1.56213 60.4625 5.5922 67.6695 12.7657C74.8765 19.9393 78.9254 29.6687 78.9254 39.8136C78.925 48.1568 76.1852 56.2714 71.1232 62.9214C66.0612 69.5715 58.9543 74.3927 50.885 76.6508" stroke="#AB0520" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/><path d="M42.1767 78.0296C41.6187 78.0525 41.0579 78.0647 40.4943 78.066C30.302 78.066 20.5271 74.036 13.3201 66.8625C6.11307 59.6889 2.06421 49.9595 2.06421 39.8146C2.06411 31.8121 4.58457 24.011 9.27102 17.5087C13.9575 11.0064 20.5741 6.13005 28.19 3.5658" stroke="#AB0520" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/><path d="M48.6971 77.2382C48.6549 77.2266 48.6164 77.2042 48.5856 77.1732C48.5548 77.1421 48.5327 77.1036 48.5216 77.0614C48.5105 77.0192 48.5107 76.9749 48.5222 76.9328C48.5337 76.8907 48.5562 76.8523 48.5873 76.8216L50.8891 74.5628L53.1909 72.305C53.2223 72.2744 53.2612 72.2525 53.3037 72.2415C53.3462 72.2305 53.3909 72.2309 53.4333 72.2425C53.4756 72.2541 53.5142 72.2765 53.5451 72.3076C53.576 72.3386 53.5982 72.3772 53.6094 72.4195L54.4255 75.5292L55.2416 78.6389C55.2533 78.6814 55.2534 78.7261 55.2419 78.7687C55.2305 78.8112 55.208 78.8499 55.1766 78.8809C55.1452 78.912 55.1061 78.9341 55.0633 78.9452C55.0205 78.9563 54.9756 78.9559 54.933 78.944L51.8192 78.0921L48.6971 77.2382Z" fill="#AB0520" stroke="#AB0520" stroke-width="2" stroke-miterlimit="10"/><path d="M25.2217 1.40905C25.2092 1.36629 25.2084 1.321 25.2193 1.27782C25.2302 1.23464 25.2524 1.19513 25.2837 1.16333C25.315 1.13153 25.3543 1.10859 25.3974 1.09687C25.4406 1.08515 25.4861 1.08506 25.5293 1.09662L28.6504 1.92143L31.7714 2.7452C31.8139 2.75638 31.8527 2.77851 31.8839 2.80936C31.9151 2.84022 31.9375 2.87871 31.949 2.92095C31.9604 2.96319 31.9605 3.00771 31.9492 3.04998C31.9378 3.09226 31.9155 3.13081 31.8844 3.16176L29.6067 5.44144L27.3279 7.72007C27.2968 7.751 27.2582 7.77326 27.2158 7.7846C27.1734 7.79594 27.1287 7.79596 27.0863 7.78466C27.0439 7.77337 27.0052 7.75116 26.9741 7.72026C26.943 7.68936 26.9207 7.65086 26.9093 7.60864L26.065 4.5052L25.2217 1.40905Z" fill="#AB0520" stroke="#AB0520" stroke-width="2" stroke-miterlimit="10"/></g><defs><clipPath id="clip0"><rect width="80" height="80" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>\
      <div class="storyRFI__footer-griditemcontent">24/7 support: tutoring, tech support, Library, Writing Center, and more!</div>\
    </div>\
    <div class="storyRFI__footer-griditem">\
<svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M29.5327 51.8124C26.8562 48.9891 25.1021 47.2034 24.5915 46.7862C23.222 46.1198 21.7452 45.7015 20.2296 45.5509C19.7934 45.4757 19.3909 45.2683 19.0766 44.9566L11.5002 37.4419C11.0547 36.9454 10.4586 36.6087 9.80331 36.4835C9.14803 36.3582 8.46978 36.4515 7.87258 36.7488C7.71724 36.8422 7.57389 36.9542 7.44571 37.0823C6.96561 37.6724 6.73595 38.4272 6.806 39.1847C6.87605 39.9422 7.24024 40.642 7.82042 41.1341L13.6112 46.8987L15.7084 48.9891C15.8477 49.1276 15.9262 49.3158 15.9267 49.5122C15.9272 49.7086 15.8497 49.8971 15.7112 50.0364C15.5727 50.1756 15.3845 50.2541 15.1881 50.2546C14.9917 50.2552 14.8032 50.1776 14.6639 50.0391L6.77591 42.1799C5.91545 41.4123 5.39282 40.336 5.32162 39.185C5.25043 38.0341 5.63643 36.9016 6.39572 36.0337C6.53568 35.8923 6.68718 35.7628 6.84866 35.6466L5.64768 30.6012C5.39771 29.5753 5.31704 28.5154 5.40886 27.4635C5.80552 23.2292 5.17141 20.0751 3.7124 19.0306C2.40985 18.0987 1.74691 18.111 1.46691 18.2002C1.3744 18.2325 1.2893 18.283 1.21668 18.3488C1.14406 18.4146 1.0854 18.4943 1.04417 18.5832L0.508878 31.5647C0.491923 31.9765 0.499257 32.389 0.53084 32.8L1.21711 41.436C1.40456 43.7802 2.38991 45.9892 4.00886 47.6948C6.47944 50.2834 9.87512 53.7697 12.0616 55.6762C14.2508 57.6088 15.7391 60.2114 16.2945 63.0783H31.0493V55.6226C31.0529 54.2047 30.5097 52.84 29.5327 51.8124Z" fill="#D0D0CE"/><path d="M33.0051 65.8H15.3501C13.4755 65.8 11.9558 67.3197 11.9558 69.1943V74.4649C11.9558 76.3395 13.4755 77.8592 15.3501 77.8592H33.0051C34.8798 77.8592 36.3994 76.3395 36.3994 74.4649V69.1943C36.3994 67.3197 34.8798 65.8 33.0051 65.8Z" fill="#AA0A1A"/><path d="M51.4674 51.8125C54.1438 48.9891 55.8979 47.2035 56.4085 46.7862C57.778 46.1198 59.2549 45.7015 60.7705 45.5509C61.2066 45.4757 61.6091 45.2683 61.9234 44.9566L69.4998 37.4419C69.9454 36.9454 70.5415 36.6087 71.1967 36.4835C71.852 36.3583 72.5303 36.4515 73.1275 36.7488C73.2828 36.8422 73.4262 36.9542 73.5543 37.0823C74.0344 37.6724 74.2641 38.4272 74.194 39.1847C74.124 39.9422 73.7598 40.642 73.1796 41.1341L67.3889 46.8987L65.2916 48.9891C65.2227 49.0577 65.1679 49.1392 65.1305 49.229C65.093 49.3187 65.0736 49.4149 65.0734 49.5122C65.0731 49.6094 65.092 49.7058 65.129 49.7957C65.166 49.8857 65.2203 49.9674 65.2889 50.0364C65.3575 50.1053 65.439 50.1601 65.5287 50.1975C65.6184 50.235 65.7147 50.2544 65.8119 50.2546C65.9092 50.2549 66.0055 50.236 66.0955 50.199C66.1854 50.162 66.2672 50.1077 66.3361 50.0391L74.2241 42.1799C75.0846 41.4123 75.6072 40.336 75.6784 39.185C75.7496 38.0341 75.3636 36.9016 74.6043 36.0337C74.4644 35.8923 74.3129 35.7628 74.1514 35.6466L75.3524 30.6012C75.6023 29.5753 75.683 28.5154 75.5912 27.4635C75.1945 23.2292 75.8286 20.0751 77.2877 19.0306C78.5902 18.0987 79.2531 18.111 79.5331 18.2002C79.6256 18.2325 79.7107 18.283 79.7834 18.3488C79.856 18.4146 79.9146 18.4943 79.9559 18.5832L80.4912 31.5647C80.5081 31.9765 80.5008 32.389 80.4692 32.8L79.7829 41.436C79.5955 43.7802 78.6101 45.9892 76.9912 47.6948C74.5206 50.2834 71.1249 53.7697 68.9385 55.6762C66.7561 57.6074 65.2725 60.2051 64.7179 63.0659H49.9507V55.6226C49.9471 54.2047 50.4903 52.84 51.4674 51.8125Z" fill="#D0D0CE"/><path d="M47.9949 77.8593H65.6499C67.5245 77.8593 69.0442 76.3396 69.0442 74.465V69.1944C69.0442 67.3198 67.5245 65.8001 65.6499 65.8001H47.9949C46.1202 65.8001 44.6006 67.3198 44.6006 69.1944V74.465C44.6006 76.3396 46.1202 77.8593 47.9949 77.8593Z" fill="#AA0A1A"/><path d="M56.4867 7.1786H48.3338C47.6908 5.67389 46.6201 4.39116 45.2545 3.48965C43.8889 2.58813 42.2887 2.10754 40.6523 2.10754C39.016 2.10754 37.4157 2.58813 36.0502 3.48965C34.6846 4.39116 33.6139 5.67389 32.9709 7.1786H24.5064C24.0186 7.1777 23.5354 7.27311 23.0846 7.45938C22.6337 7.64564 22.2241 7.91908 21.8791 8.26402C21.5342 8.60896 21.2607 9.01861 21.0745 9.46946C20.8882 9.92032 20.7928 10.4035 20.7937 10.8913V35.1716C20.7937 36.151 21.1826 37.0902 21.875 37.7828C22.5674 38.4755 23.5065 38.8648 24.4858 38.8651H56.5114C57.4907 38.8648 58.4298 38.4755 59.1222 37.7828C59.8146 37.0902 60.2035 36.151 60.2035 35.1716V10.8913C60.2045 10.4032 60.1089 9.91963 59.9224 9.46851C59.7359 9.01738 59.462 8.60755 59.1167 8.26256C58.7713 7.91757 58.3612 7.64421 57.9098 7.45819C57.4585 7.27217 56.9748 7.17715 56.4867 7.1786ZM40.6516 3.59352C41.8821 3.59895 43.0885 3.93512 44.1445 4.56681C45.2004 5.1985 46.0671 6.10248 46.6538 7.18409H34.6495C35.2353 6.10172 36.1018 5.19709 37.1579 4.56528C38.2141 3.93346 39.4209 3.59779 40.6516 3.59352Z" fill="#D9E3E6"/><path d="M40.6516 20.8217C38.4368 20.8174 36.314 19.9356 34.7478 18.3695C33.1817 16.8034 32.3 14.6805 32.2956 12.4657V10.4645C32.2814 9.35808 32.4871 8.25985 32.9007 7.23353C33.3143 6.20721 33.9276 5.27325 34.705 4.48582C35.4824 3.69839 36.4084 3.07318 37.4294 2.64646C38.4503 2.21973 39.5458 2 40.6523 2C41.7589 2 42.8544 2.21973 43.8753 2.64646C44.8962 3.07318 45.8223 3.69839 46.5997 4.48582C47.3771 5.27325 47.9904 6.20721 48.404 7.23353C48.8176 8.25985 49.0233 9.35808 49.0091 10.4645V12.4657C49.0047 14.6807 48.1228 16.8038 46.5564 18.37C44.9899 19.9361 42.8667 20.8177 40.6516 20.8217ZM40.6516 3.58807C38.8288 3.59062 37.0814 4.31596 35.7926 5.60503C34.5037 6.8941 33.7788 8.64168 33.7766 10.4645V12.4657C33.7766 14.2893 34.501 16.0381 35.7904 17.3276C37.0799 18.617 38.8288 19.3414 40.6523 19.3414C42.4759 19.3414 44.2248 18.617 45.5142 17.3276C46.8037 16.0381 47.5281 14.2893 47.5281 12.4657V10.4645C47.5245 8.64239 46.7986 6.89602 45.5097 5.60809C44.2207 4.32017 42.4738 3.59574 40.6516 3.59356V3.58807Z" fill="#0C234B"/><path d="M56.7832 7.99536H24.2155C22.3257 7.99536 20.7937 9.52733 20.7937 11.4171V35.4421C20.7937 37.3319 22.3257 38.8639 24.2155 38.8639H56.7832C58.6729 38.8639 60.2049 37.3319 60.2049 35.4421V11.4171C60.2049 9.52733 58.6729 7.99536 56.7832 7.99536Z" fill="#0C234B"/><path d="M56.764 7.17725H24.2347C22.3343 7.17725 20.7937 8.71782 20.7937 10.6182V20.6515C20.7937 22.5519 22.3343 24.0925 24.2347 24.0925H56.764C58.6643 24.0925 60.2049 22.5519 60.2049 20.6515V10.6182C60.2049 8.71782 58.6643 7.17725 56.764 7.17725Z" fill="#AB0520"/><path d="M41.57 22.8312H39.5441C38.2683 22.8312 37.2341 23.8654 37.2341 25.1412V25.5049C37.2341 26.7807 38.2683 27.8149 39.5441 27.8149H41.57C42.8458 27.8149 43.88 26.7807 43.88 25.5049V25.1412C43.88 23.8654 42.8458 22.8312 41.57 22.8312Z" fill="#AB0520" stroke="#0C234B" stroke-width="1.02592" stroke-miterlimit="10"/></g><defs><clipPath id="clip0"><rect width="80" height="80" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>\
      <div class="storyRFI__footer-griditemcontent">Lifelong Career Services access</div>\
    </div>\
  </div>\
</div>');

        if ($('input[data-drupal-selector="edit-phone1"]').val() !== '' && $('#storyRFI-phone')[0].checkValidity()) {
          $('#storyRFI-phone').val($('input[data-drupal-selector="edit-phone1"]').val());
          $('#storyRFI-phone').parent().addClass('--vaild');
        }

        if ($('input[data-drupal-selector="edit-emailaddress"]').val() !== '' && $('#storyRFI-email')[0].checkValidity()) {
          $('#storyRFI-email').val($('input[data-drupal-selector="edit-emailaddress"]').val());
          $('#storyRFI-email').parent().addClass('--vaild');
        }

        if ($('#storyRFI-email').val() !== '' && $('#storyRFI-email')[0].checkValidity() && $('#storyRFI-phone').val() !== '' && $('#storyRFI-phone')[0].checkValidity() && $('#tcpa_checkbox').prop('checked')) {
          $('.storyRFI.step-4__next').prop('disabled', false);
        } else {
          $('.storyRFI.step-4__next').prop('disabled', true);
        }
      }
    }, {
      key: "bind",
      value: function bind() {
        var me = this;

        $("#storyRFI-email, #storyRFI-phone").on("keyup", function(e) {
          if (this.checkValidity() == true) {
            $(this).parent().removeClass('--invaild').addClass('--vaild');
            $(this).parent().find('.storyRFI__warning').hide();            
          }
        });


        $("#storyRFI-email, #storyRFI-phone").on("blur", function (event) {
          if ($(this).val() !== "" && this.checkValidity()) {
            $(this).parent().removeClass('--invaild').addClass('--vaild');
            $(this).parent().find('.storyRFI__warning').hide();
          } else {
            $(this).parent().removeClass('--vaild').addClass('--invaild');
            $(this).parent().find('.storyRFI__warning').show();
          }

          if ($('#storyRFI-email').val() !== '' && $('#storyRFI-email')[0].checkValidity() && $('#storyRFI-phone').val() !== '' && $('#storyRFI-phone')[0].checkValidity() && $('#tcpa_checkbox').prop('checked')) {
            $('.storyRFI.step-4__next').prop('disabled', false);
          } else {
            $('.storyRFI.step-4__next').prop('disabled', true);
          }
        });
        $("#storyRFI-email, #storyRFI-phone").on("keyup", function (event) {
          var that = this;
          Drupal.debounce(function () {
            if ($(that).val() !== "" && that.checkValidity()) {
              $(that).parent().addClass('--vaild');
            } else {
              $(that).parent().removeClass('--vaild');
            }

            if ($('#storyRFI-email').val() !== '' && $('#storyRFI-email')[0].checkValidity() && $('#storyRFI-phone').val() !== '' && $('#storyRFI-phone')[0].checkValidity() && $('#tcpa_checkbox').prop('checked')) {
              $('.storyRFI.step-4__next').prop('disabled', false);
            } else {
              $('.storyRFI.step-4__next').prop('disabled', true);
            }
          }(), 250, true);
        });
    
        $("#storyRFI-email, #storyRFI-phone").on("blur", function (event) {
          if ($(this).val() !== "" && this.checkValidity()) {
            $(this).parent().removeClass('--invaild').addClass('--vaild');
            $(this).parent().find('.storyRFI__warning').hide();
          } else {
            $(this).parent().removeClass('--vaild').addClass('--invaild');
            $(this).parent().find('.storyRFI__warning').show();
            $('.storyRFI.step-4__next').prop('disabled', true);
          }
    
          if ($('#storyRFI-email').val() !== '' && $('#storyRFI-email')[0].checkValidity() && $('#storyRFI-phone').val() !== '' && $('#storyRFI-phone')[0].checkValidity()) {
            $('.storyRFI .step-4__consent #tcpa_checkbox').click(function(){
              if($(this).prop("checked") == true  && $('#storyRFI-email').val() !== '' && $('#storyRFI-email')[0].checkValidity() && $('#storyRFI-phone').val() !== '' && $('#storyRFI-phone')[0].checkValidity()){
                $('.storyRFI.step-4__next').prop('disabled', false);
              }
              else {
                $('.storyRFI.step-4__next').prop('disabled', true);
              }
            });
          }
        });
    
        $('.storyRFI.step-4__next').prop('disabled', true);
        $('.storyRFI .step-4__consent #tcpa_checkbox').prop("checked", false);
        $('.storyRFI .step-4__consent').css("display", "flex");
        $('.storyRFI .step-4__copy-btn-container').css("flex-direction", "column-reverse");
        $('.storyRFI .step-4__consent-copy').html('<p id="leadid_tcpa_disclosure">I consent to receive calls, texts, and emails from UAGC using the contact information provided, including mobile numbers, which may be sent with prerecorded or automated technology. Message and data rates may apply. Consent is not a condition of purchase and I may opt-out at any time. Degree programs may not be available in all U.S. states or foreign countries.</p>');
        $('.storyRFI .step-4__consent-copy').css({"max-width": "510px", "padding-top": "15px"});



        $('.storyRFI.step-4__next').on('click', function () {
          if (!me.validate()) {
            return;
          }

          me.next();
        });
        $('.storyRFI.step-4__back').on('click', function () {
          me.previous();
        });
      }
    }, {
      key: "process",
      value: function process() {
        $('input[data-drupal-selector="edit-phone1"]').val($('#storyRFI-phone').val());
        $('input[data-drupal-selector="edit-emailaddress"]').val($('#storyRFI-email').val());
        $('input[data-drupal-selector="edit-tcpa-checkbox"]').prop('checked', $('.storyRFI.step-4__consent__checkmark').prop('checked'));
        document.querySelector('.webform-submission-lead-flow-system-add-form').submit();

        


      }
    }, {
      key: "validate",
      value: function validate() {
        if ($('.storyRFI.step-4__next').prop('disabled')) {
          return false;
        }

        return true;
      }
    }]);

    return Step4;
  }(Step);
  /**
   * Creates our wizard on the page using different elements
   */


  var Wizard =
  /*#__PURE__*/
  function () {
    "use strict";

    function Wizard() {
      _classCallCheck(this, Wizard);

      this.markup();
      this._currentStep = 1;
      this._currentSelector = '';
      this._steps = [new Step1(this), new Step2(this), new Step3(this), new Step4(this)];
      this._progressBar = new ProgressBar(0, this._steps.length, this._currentStep);
      this.update();
      this.skipTo();
    }

    _createClass(Wizard, [{
      key: "markup",
      value: function markup() {
        // hide page content
        $('main .region').hide();
      }
    }, {
      key: "next",
      value: function next() {
        if (this._currentStep < this._steps.length) {
          ++this._currentStep;

          this._progressBar.next();

          this.update();
        }
      }
    }, {
      key: "previous",
      value: function previous() {
        if (this._currentStep > 0) {
          --this._currentStep;

          this._progressBar.previous();

          this.update();
        }
      }
    }, {
      key: "update",
      value: function update() {
        var selector = this._steps[this._currentStep - 1].selector;

        if (this._currentSelector.length > 0) {
          $(this._currentSelector).removeClass('--active');
        }

        $(selector).addClass('--active');
        this._currentSelector = selector;
        if (this._currentStep === 4 && window.showStoryFooter === true) {
          $('.storyRFI__footer').show();
          $('.storyRFI.step-4').addClass('--showing-footer');
        } else {
          $('.storyRFI__footer').hide();
          $('.storyRFI.step-4').removeClass('--showing-footer');
        }


      }
    },
    {
      key: "skipTo",
      value: function skipTo(step) {
        if(step > 0  && step <= this._steps.length) {
          if (this._currentSelector.length > 0) {
            $(this._currentSelector).removeClass('--active');
          }
          this._currentStep = step;
          this._currentSelector = this._steps[step-1].selector;
          this._progressBar._currentStep = step;
          this._progressBar.update();
          $(this._currentSelector).addClass('--active');
        }
      }
  }]);

    return Wizard;
  }();


 

  $('body').addClass('storyRFI__active');
  new Wizard();
}

function initStoryRFI() {
  if (window.location.pathname == '/request-information' || window.location.pathname == '/request-information/') {
    storyRFI();
  }
}


if ( !($)) {
  var $;
}


if (document.readyState == 'complete' || document.readyState == "interactive") {
  $=jQuery;
  initStoryRFI();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    $ = jQuery;
    initStoryRFI();
  });
}





(function(win) {
  'use strict';
  var listeners = [], 
  doc = win.document, 
  MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
  observer;
  function ready(selector, fn) {
      // Store the selector and callback to be monitored
      listeners.push({
          selector: selector,
          fn: fn
      });
      if (!observer) {
          // Watch for changes in the document
          observer = new MutationObserver(check);
          observer.observe(doc.documentElement, {
              childList: true,
              subtree: true
          });
      }
      // Check if the element is currently in the DOM
      check();
  }
  function check() {
      // Check the DOM for elements matching a stored selector
      for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
          listener = listeners[i];
          // Query for elements matching the specified selector
          elements = doc.querySelectorAll(listener.selector);
          for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
              element = elements[j];
              // Make sure the callback isn't invoked with the 
              // same element more than once
              if (!element.ready) {
                  element.ready = true;
                  // Invoke the callback with the element
                  listener.fn.call(element, element);
              }
          }
      }
  }
  // Expose `ready`
  win.ready = ready;
})(this);

ready('.storyRFI, .stickyformheader__form, .stickyformheader, .mediumformheader__form', function() {
  $("#storyRFI-firstname, #storyRFI-lastname, .form-item-firstname input, .form-item-lastname input").keypress(function (e) {
    // disallow certain character codes (34 = " || 44 = ,)
    if (e.which == 34 || e.which == 44) {
        return false;
    }
  })

  // prevent ability to paste in quotes
  $( "#storyRFI-firstname, #storyRFI-lastname, .form-item-firstname input, .form-item-lastname input" ).bind('paste',function(e) {
    var $target = $(e.target);
    setTimeout(function() {
        var data= $target.val() ;
        var dataFull = data.replace(/["”,]/g, '');
        $target.val(dataFull);
    });
  })
});
