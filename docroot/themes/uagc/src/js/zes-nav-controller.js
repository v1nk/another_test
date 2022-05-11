(function () {

  //Nav should only be on zes pages on the brand pages.
  if (document.querySelector('body')) {
    if (document.querySelector('body').classList.contains('--brand-page') === false) {
      return;
    }
  }



  document.addEventListener("DOMContentLoaded", function (event) {
    var toggleButton = document.querySelector(".js-nav-toggle");
    var toggleTarget = document.querySelector(".js-nav-target");
    var bodyElement = document.querySelector("body");
    var itemToggles = document.querySelectorAll(".js-item-toggle");
    var studentLogin = document.querySelector('.main-nav__aux');
    var searchContainer = document.querySelector('.--search-container');
    if (toggleButton && toggleTarget) {
      toggleButton.addEventListener("click", function (event) {
        if (toggleTarget.classList.contains("--active")) {
          toggleTarget.classList.remove("--active");
          toggleTarget.classList.remove("--sub-open");
          bodyElement.classList.remove("--nav-open");
          let subs = toggleTarget.querySelectorAll(".--open");
          for (let i = 0; i < subs.length; i++) {
            subs[i].classList.remove("--open");
          }
          let subsToggle = toggleTarget.querySelectorAll(".--sub-active");
          for (let i = 0; i < subsToggle.length; i++) {
            subsToggle[i].classList.remove("--sub-active");
          }
        } else {
          toggleTarget.classList.add("--active");
          bodyElement.classList.add("--nav-open");
        }
      });

      if (itemToggles) {
        for (var i = 0; i < itemToggles.length; i++) {
          itemToggles[i].addEventListener("click", function (event) {
            let parentElement = event.target.parentElement;
            let link = parentElement.querySelector('.main-nav__link');
            itemToggles.forEach(function(e, i, arr) {
              if(e != event.target) {
                e.parentElement.classList.remove('--open');
                e.parentElement.classList.remove('--show-button');
                e.parentElement.querySelector('.main-nav__link').setAttribute('aria-expanded', "false");
              }
            });


            var menuContent = parentElement.querySelector('.main-nav__item-content')
            if (parentElement.classList.contains("--open")) {
              parentElement.classList.remove("--open");
              event.currentTarget.parentElement.classList.remove('--show-button');
              link.setAttribute('aria-expanded', "false");

              toggleTarget.classList.remove("--sub-open");
              menuContent.style.top = null;

              
              event.currentTarget.classList.remove("--sub-active");
            } else {
              parentElement.classList.add("--open");
              toggleTarget.classList.add("--sub-open");
              link.setAttribute('aria-expanded', "true");

              var rect = menuContent.getBoundingClientRect();

              //Account for the header and subtract the client rect y to make sure it's flush with
              //the bottom of the header on mobile.
              if (rect.y < 50) {
                menuContent.style.top = (50 - rect.y) + 'px';
              }



              event.currentTarget.classList.add("--sub-active");
            }              
          });
        }
      }
    }

    let searchOpenElement = document.querySelector(".js-search-open");
    let searchFormElement = document.querySelector(".js-site-search");
    let searchCloseElement = document.querySelector(".js-search-close");
    let searchformInput = document.querySelector(".js-search-form-input");

    if (searchOpenElement && searchFormElement && searchCloseElement && searchformInput) {

      searchOpenElement.addEventListener("click", function (event) {
        searchFormElement.classList.add("--open");
        searchformInput.focus();
      });
      searchCloseElement.addEventListener("click", function (event) {
        searchFormElement.classList.remove("--open");
      });
    }

    let parentSubItems = document.querySelectorAll('.main-nav__sub-items');


    parentSubItems.forEach(function(e, i, arr) {
      var childItems = e.querySelectorAll('.main-nav__sub-item-link-item');
      if (childItems.length <= 0) { 
        e.classList.add('--no-sub-children');
      }
    });

    var mainItems = document.querySelectorAll('.main-nav__item');

    mainItems.forEach(function(e, i, arr) {
      var link = e.querySelector('.main-nav__link');
      link.addEventListener('focus', function() {
        mainItems.forEach(function(e1, i1, arr1) {
          e1.classList.remove('--show-button');
        });

        this.parentNode.classList.add('--show-button');
      });




    });


    

  });
})();
