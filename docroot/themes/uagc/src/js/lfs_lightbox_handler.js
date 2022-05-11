(function ($, Drupal) {
  'use strict';

  let getCookie = function(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  let setCookie = function(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  };

  let getData = function(key) {
    var cookieData = getCookie("uagc_modal");

    if(cookieData) {
      cookieData = JSON.parse(decodeURIComponent(cookieData));
      return cookieData[key];
    }

    return null;
  };

  let setData = function(key, value) {
    var cookieData = getCookie("uagc_modal");
    if(cookieData) {
      cookieData = JSON.parse(decodeURIComponent(cookieData));
    } else {
      cookieData = new Object();
    }

    cookieData[key] = value;
    cookieData = encodeURIComponent(JSON.stringify(cookieData));
    setCookie("uagc_modal", cookieData);
  };

  let setGA = function() {
    if(window.dataLayer) {
      window.dataLayer.push({
        'event': 'lightbox submit'
      });
    }
  };

  let openModal = function(bypassCookie = false) {
    var onRFIPage = (window.location.pathname.includes("request-information") ? true : false);

    if(window.uagc_hide_modal && window.uagc_hide_modal == true && bypassCookie == false) {
      return;
    } 

    if(document.querySelector('.modalrfi') && !onRFIPage) {
      document.querySelector('.modalrfi').style.display = 'block';
      document.querySelector("body").classList.add("modal-open");
    }
  };

  let closeModal = function() {
    if(document.querySelector('.modalrfi')) {
      document.querySelector('.modalrfi').style.display = 'none';
      document.querySelector("body").classList.remove("modal-open");

      // update the cookie to show modal was closed
      setData("modalClosed", true);
    }
  };

  let hasClosed = function() {
    return getData("modalClosed");
  };

  let initModalCookies = function() {
    // creates the modal cookie only if it needs to
    if(!getCookie("uagc_modal") || !getData("visitCnt")) {
      setData("visitCnt", 0);
      setData("modalClosed", false);
    }
  };

  let increaseVisitCnt = function() {
    setData("visitCnt", (getData("visitCnt") + 1));
  };

  let checkVisitCnt = function() {
    var visitCntThreshold = 3;

    if(getData("visitCnt") >= visitCntThreshold && !hasClosed()) {
      openModal();
    }
  };

  let checkPageTime = function(event, startTime, currentTime) {
    var pageTimeThreshold = 78000;

    if(currentTime - startTime >= pageTimeThreshold && !hasClosed()) {
      openModal();
    }
  };

  let exitIntent = function() {
    if(!hasClosed()) {
      openModal();
    }
  };


  document.addEventListener('DOMContentLoaded', function() {

    if(document.querySelectorAll('main.js-disable-lightbox-rfi').length === 0 && document.querySelector('.modalrfi')) {
  
      //Disable the lightbox rfi for the lightweight testing pages.
      if (window.location.pathname == '/tuition-financial-aid-2' || window.location.pathname == '/online-degrees/business/bachelor-of-arts-operations-management-analysis-2' || window.location.pathname.indexOf('/request-information') === 0) {
        return;
      }
  
      if (window.uagc_module && window.uagc_module.thankyoupage && window.uagc_module.thankyoupage === true) {      
        setData("modalClosed", true);
      } 
  
      // make sure the cookies we need for the modal are created
      initModalCookies();
  
      // check if user has satisfied modal condition: 3-5 pages loaded
      increaseVisitCnt();
      checkVisitCnt();
  
      // // check if user has satisfied modal condition: 5+ minutes on page
      // EventBus.addEventListener("Second-Ctr", checkPageTime);
  
      // // check if user has satisfied modal condition: intent to leave
      // setTimeout(function() {
      // 	EventBus.addEventListener("Exit-Intent", exitIntent);
      // }, 15000);
  
      // watch for modal close
      document.querySelector('.modalrfi svg.js-modal-close').addEventListener('click', function() {
        closeModal();
      });
  
  
      window.openModal = openModal;
      var bypassCookie = false;
  
      //window.openModal(bypassCookie);
  
      // on submit, set the GA datalayer
      document.querySelector('.modalrfi input[type="submit"]').addEventListener('click', function(e) {
        e.preventDefault();
        if(document.querySelector('.modalrfi form').checkValidity()) {
          setGA();
          setCookie("storyRFI_name", document.querySelector(".modalrfi [name='firstname']").value);
          document.querySelector('.modalrfi form').submit();
  
          setData("modalClosed", true);
        } else {
          document.querySelector('.modalrfi form').reportValidity();
        }
      });
    }
  });


  
})(jQuery, Drupal);
