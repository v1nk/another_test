function isMobile() {
    if (window.innerWidth > 768) {
        return false;
    } else {
        return true;
    }
}

(function($) {
    $(document).ready(function() {
        var slider = $('.enrollment-slider');
        //HIDE OR SHOW BACK AND NEXT BUTTONS
        slider.on('afterChange init', function(event, slick, currentSlide) {

            if (currentSlide > 0) {
                $('.slide-next').show();
                $('.slide-prev').show();
            } else {
                $('.slide-next').show();
                $('.slide-prev').hide();
            };
        });
        //SLIDE COUNTER
        slider.on('init', function(event, slick, currentSlide) {

            //SLIDE COUNTER FOR MOBILE
            $(this).prepend('<div class="slick-counter"><span class="current"></span> of <span class="total"></span></div>');
            $('.current').text(slick.currentSlide + 1);
            $('.total').text(slick.slideCount);
            slider.find('.slick-slide.slick-active').height('auto');
            slider.find('.slick-list').height('auto');
        });
        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });

        //ENGAGE SLIDERS
        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 1,
            infinite: false,
            asNavFor: '.enrollment-nav',
            swipe: false,
        });

        $('.enrollment-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: slider,
            dots: false,
            centerMode: false,
            arrows: false,
            infinite: false,
            focusOnSelect: true,
            swipe: false,
            responsive: [
                {
                    breakpoint: 925,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 797,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });

        //PROGRESS BAR
        $(document).ready(function() {
            var progressBar = $('.progress');
            var progressBarLabel = $('.slider-label');
            slider.on('afterChange', function(event, slick, currentSlide) {
                var calc = ((currentSlide) / (slick.slideCount - 1)) * 100;

                progressBar.css('background-size', calc + '% 100%');
                progressBar.attr('aria-valuenow', calc);
                progressBarLabel.text(calc + '% completed');

                //MOBILE SLIDE COUNTER amd PROGRESS DOT POSITIONING
                var slideCounter = $('.slick-counter');
                var progressDot = $('#progress-dot');
                if (!isMobile()) {
                    if (currentSlide === 0) {
                        slideCounter.css('left', calc + '%');
                        var leftPosition = calc - .5;
                        progressDot.animate({ left: leftPosition + '%' }, 300);
                    } else if (currentSlide === 6) {
                        slideCounter.css('left', '84%');
                        progressDot.animate({ right: '0' }, 300).css('left', 'unset');
                    } else {
                        var leftPosition = calc - .5;
                        var progressDotPosition = calc - 2;
                        progressDot.animate({ left: leftPosition + '%' }, 300);
                        slideCounter.animate({ left: progressDotPosition + '%' }, 150);
                        if (currentSlide >= 3) {
                            var progressDotPosition = calc - 4;
                            slideCounter.animate({ left: progressDotPosition + '%' }, 150);
                        } else if (currentSlide >= 4) {
                            var progressDotPosition = calc - 6;
                            slideCounter.animate({ left: progressDotPosition + '%' }, 150);
                        }
                    };
                }
            });
        });

        //CUSTOM BACK AND NEXT BUTTONS FOR EASIER STYLING
        $('.slide-prev').click(function() {
            slider.slick('slickPrev');
            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
        $('.slide-next').click(function() {
            slider.slick('slickNext');
            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
        //CUSTOM NEXT BUTTON FOR FIRST SLIDE
        $('#firstSlideNext').click(function() {
            slider.slick('slickGoTo', 1);
            if ($(window).width() < 768) {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
        //HIDE NEXT BUTTON AND SHOW APPLY NOW BUTTON ON LAST SLIDE
        slider.on('afterChange', function(event, slick, currentSlide) {
            if (currentSlide === 4) {
                $('.slide-next').hide();
                $('.slide-apply').show();
            } else {
                $('.slide-apply').hide();
            }
            slider.find('.slick-slide.slick-active').height('auto');
            slider.find('.slick-list').height('auto');
        });
        //TOGGLE FOR WHY ASHFORD SECTION
        var allDrawers = $('.item-container .hidden').hide();
        $('.item-container .show-btn').click(function() {
            $this = $(this);


            $target = $this.parent().find('.hidden');
            // $target.slideToggle();
            // $('.arrow').toggleClass('rotate');
            if (!$target.hasClass('active')) {
                allDrawers.removeClass('active').slideUp();
                $('.arrow').removeClass('rotate');
                $target.addClass('active').slideToggle();
                $this.parent().find('.arrow').addClass('rotate');
            } else {
                allDrawers.removeClass('active');
                $target.addClass('active').slideToggle();
                $this.parent().find('.arrow').toggleClass('rotate');
            }
            //FOR SLIDE HEIGHT TO ADJUST WHEN DRAWERS OPEN
            slider.find('.slick-slide.slick-active').height('auto');
            slider.find('.slick-list').height('auto');
        });
        //TOGGLE FOR WHY ASHFORD SECTION DESKTOP
        $('.item-nav li').click(function() {
            $('.item-nav li').removeClass('active');
            $(this).addClass('active');
            var id = $(this).attr('data-id');
            $(".item").each(function() {
                $(this).hide();
                if ($(this).attr('id') == id) {
                    $(this).show();
                }
            });
        });
    });
})(jQuery);