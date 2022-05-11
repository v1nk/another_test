(function($) {

  $(document).ready(function() {
    if (window.innerWidth < 1025) {

      console.log($('.js-testimonial-carousel'));
      $('.js-testimonial-carousel').slick({
        dots: false,
        infinite: false,
        speed: 
        280,
        slidesToShow: 1.75,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,

        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1
            }
          }
        ]
      })
      .on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
    }
  });

})(jQuery);