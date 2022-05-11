(function ($) {
  'use strict';

  //Quit early if the page doesn't need sticky
  if($('.twocolumn__container').length <= 0  ||  $(".twocolumn__large").height() == $(".stickyformheader__form").height()) {
      return;
  }

    function debounce(func, wait, handle) {
        if (!(window.timeouts)) {
            window.timeouts = {};
        }

        if (window.timeouts[handle]) {
            clearTimeout(window.timeouts[handle]);
            window.timeouts[handle] = null;
        }
        window.timeouts[handle] = setTimeout(func, wait);
    }


  //Determine what scroll height threshold we should use based on the page template (microsite or landing page)
  var scrollHeight = 0;
  var sidebarHeight = $(".twocolumn__small").height() + 85; //85px is the padding above when sticky
  var formWidth = $(".twocolumn__small").width(); //90px is the padding to the left and right inside the object.
  var checkSticky = function() {
      //Determine if sticky is enabled
      if(window.stickyEnabled) {
          var scrollTop = $(window).scrollTop();
          var contentTop = ($('main').offset().top - scrollTop);
          var contentBottom = $('main').offset().top + $('main').height() - scrollTop;
          var formHeight = $('.stickyformheader__form').height();
          var formWidth =   $(".twocolumn__small").width();
          $('.stickyformheader__form').css('width', formWidth+ 'px');

          
          //Determine if we need to use sticky-bottom styles
          if(contentBottom < formHeight + 100) {
              $(".twocolumn__small").addClass("sticky-bottom");
          } else {
              $(".twocolumn__small").removeClass("sticky-bottom");
          }

          //Determine if we need to use regular sticky styles
          if(scrollTop > scrollHeight) {
              $(".twocolumn__small").addClass("sticky");
          } else {
              $(".twocolumn__small").removeClass("sticky");
          }

          if ($(window).scrollTop() > 550 &&  $(".twocolumn__small").hasClass('sticky-bottom') == false)  {
            $('.stickyformheader__form').addClass('--short-header')
          } else  {
            $('.stickyformheader__form').removeClass('--short-header') 
          } 


      } else {
          //We don't want to use sticky here on mobile/tablet sizes - clean up classes
          $(".twocolumn__small").removeClass("sticky");
          $(".twocolumn__small").removeClass("sticky-bottom");
      }
  };
  var checkWidth = function() {
      if($(window).width() >= 1025) {
          window.stickyEnabled = true;
      } else {
          window.stickyEnabled = false;
      }

      checkSticky();
  };

  $(window).resize(checkWidth); //On resize, check to make sure we're desktop width
  $(window).scroll(function() {
      //debounce(checkSticky, 5, 'checkSticky');
      checkSticky();
  }); //On scroll, check to see what state of sticky we should be
  $(".twocolumn__small").bind("resized-sidebar", function() { sidebarHeight = $(".twocolumn__small > div:first-of-type").height() + 85; checkSticky(); }); //on sidebar resize, recompute the sidebarHeight
  checkWidth(); //Run on page load
  checkSticky(); //Run on page load
})(jQuery);
