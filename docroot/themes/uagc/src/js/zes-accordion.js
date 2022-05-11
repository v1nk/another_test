(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.accordion = {
    attach: function (context) {

      $('.accordion').each(function(){
        var title = $(this).find('.accordion__title').eq(0);
        var content = $(this).find('.accordion__content').eq(0);
        content.hide();
        title.once().click(function(e){
          title.toggleClass('is-open');
          content.slideToggle();
          e.preventDefault();
        })
      });

    }

  }

})(jQuery, Drupal);
