(function ($) {

    document.addEventListener("DOMContentLoaded", function(){
        $(".paid-text-banner__learn-more-cta, .paid-two-column-plain__learn-more-cta, .paid-floating-image-text__advisor-cta, .center-text-block__cta").click(function (){
            $('html, body').animate({
                scrollTop: $(".paid-twostep, .form-twostep").offset().top - $(".site-header").outerHeight()
            }, 1000);
        });
    });

})(jQuery);