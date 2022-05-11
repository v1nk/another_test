(function($, Drupal) {


    $(document).ready(function() {
  
      $('.js-tracking-alert-disable').on('click', function() {
        document.cookie = 'donttrackme=1; expires=Tue, 31 Dec 2030 23:59:59 GMT;';
        $('.tracking-alert').hide();
        
      });
  
      if (document.cookie.indexOf('allowtracking') > -1 || document.cookie.indexOf('donttrackme') >-1) {
        //This has already been answered and does not require user input.
        return;
      }
    
      $('.tracking-alert').show();
  
      $('.js-tracking-alert-allow').on('click', function() {
        document.cookie = 'allowtracking=1; expires=Tue, 31 Dec 2030 23:59:59 GMT;';
        $('.tracking-alert').hide();
      });
  
    });
  })(jQuery, Drupal);