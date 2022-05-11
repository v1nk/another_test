// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var currentPlayerParent, currentPlayerThumb;
var youtubeReady = false;

function onYouTubeIframeAPIReady() {
	youtubeReady = true;
}

function createYTPlayer(videoId, playerId) {
	if (youtubeReady) {
		player = new YT.Player(playerId, {
			videoId: videoId,
			playerVars: { rel: 0, showinfo: 0 },
			events: {
				'onReady': onPlayerReady
			}
		});
	}
}
function onPlayerReady(event) {
	event.target.playVideo();
	var stopButton = document.getElementsByClassName('video-overlay');
	for (i = 0; i < stopButton.length; i++) {
		stopButton[i].addEventListener('click', function() {
			player.stopVideo();
		});
	}
}
(function($) {
	$(document).ready(function() {
		// RESET SCROLL POSTION IN POPUP WINDOW ON CLICK OF CLOSE BUTTON
		$('button.close-overlay').click(function() {
			$('.overlay').scrollTop(0);
		});

		// FUNCTIONALITY FOR VIDEO POPUP
		$('.video-icon').click(function() {
			if ($(this).hasClass("disable-video-popup")) {
				var financialAidHref = $(this).children('a').attr('href');
				window.location.href = financialAidHref;
				return;
			}
			currentPlayerParent = $(this).addClass('activated');
			currentPlayerThumb = currentPlayerParent.find('.video-thumblink');
			var containerId = $(this).find('.video-thumblink').attr('data-overlay');
			$('.video-overlay').each(function() {
				$(this).hide();
				if ($(this).attr('id') == containerId) {
					$(this).fadeIn();
				}
			});
			var YTID = currentPlayerThumb.data('video');
			var PlayerID = currentPlayerThumb.data('id');
			createYTPlayer(YTID, PlayerID);
		});
		$('.video-overlay').click(function() {
			$(this).fadeOut();
		});

		function waitForElement(selector) {
			return new Promise(function(resolve, reject) {
				var element = document.querySelector(selector);

				if (element) {
					resolve(element);
					return;
				}

				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(mutation) {
						var nodes = Array.from(mutation.addedNodes);
						for (var node of nodes) {
							if (node.matches && node.matches(selector)) {
								observer.disconnect();
								resolve(node);
								return;
							}
						};
					});
				});

				observer.observe(document.documentElement, { childList: true, subtree: true });
			});
		}

		// ensure that enrollment tour content doesn't overlap with footer
		function resizeSliderHeight(index) {
			// this is not a step incrementer, it's converting the index 
			// which starts at 0 to the slide numbers which start at 1
			var slideNumber = parseInt(index) + 1;
			$(document).ready(function() {
				if (slideNumber === 2) {

					var newSlideHeight = parseInt($('.slider-content.step-2').height())
						+ parseInt($('.step-2 .why-mobile .item-container:last-child ul').height())
						+ parseInt($('.step-2 .why-mobile .item-container').height())
						+ 100;
				} else if (slideNumber == 4) {
					var newSlideHeight = parseInt($('.slider-content.step-4').height())
						+ parseInt($('.mobile-tour__stripes-mobile .payment-copy').height())
						+ parseInt($('.step-4 .why-mobile .item-container:last-child').height())
						+ 30;
				} else {
					var newSlideHeight = $('.slider-content.step-' + slideNumber).height();
				}
				$('.enrollment-slider').css('max-height', newSlideHeight + 50);
				$('.enrollment-tour').css('height', newSlideHeight + 50);
			});
		}

		if (window.innerWidth < 768) {

			var slider = $('.enrollment-slider');
			var activeStep = 0; // initialize at 0, since user will always start on first step on page load
			$(document).ready(function() {
				var activeSlideHeight = $('.slider-content.step-1').height();
				slider.css('max-height', activeSlideHeight);
			});

			resizeSliderHeight(0);


			$('.mobile-tour__next-button.--start-now').click(function() {
				window.location.href = 'https://apply.uagc.edu/';
			});

			$('.mobile-tour__next-button').click(function() {
				activeStep++;
				$('.mobile-tour__step-link[step-index="' + activeStep + '"]').click();
				slider.slick('slickNext');

				resizeSliderHeight(activeStep);

				if ($('div.mobile-tour__step-link[step-index="4"]').hasClass('--active-step')) {
					$('.mobile-tour__next-button').css('display', 'none');
					$('.mobile-tour__get-started-button').css('display', 'inline');

				} else if ($('.mobile-tour__get-started-button').is(':visible')) {

					$('.mobile-tour__next-button').css('display', 'inline');
					$('.mobile-tour__get-started-button').css('display', 'none');
				}

			});


			waitForElement('.enrollment-nav').then(function(element) {
				$(element).css('display', 'none');
			});
			waitForElement('.progress.layout-constrain--narrow').then(function(element) {
				$(element).css('display', 'none');
			});
			waitForElement('.enrollment-slider > .slick-counter').then(function(element) {
				$(element).css('display', 'none');
			});
			$('.mobile-tour__step-link').click(function() {
				window.scrollTo(0, 0);

				activeStep = $(this).attr('step-index');



				if ($(this).hasClass('--active-step')) {
					return false;
				} else {
					$('.mobile-tour__step-link.--active-step').removeClass('--active-step');
					$(this).addClass('--active-step');
					$('div.nav-item[data-slick-index="' + activeStep + '"] h4').click();
				}

				if ($('div.mobile-tour__step-link[step-index="4"]').hasClass('--active-step')) {
					$('.mobile-tour__next-button').css('display', 'none');
					$('.mobile-tour__get-started-button').css('display', 'inline');

				} else if ($('.mobile-tour__get-started-button').is(':visible')) {

					$('.mobile-tour__next-button').css('display', 'inline');
					$('.mobile-tour__get-started-button').css('display', 'none');
				}

				$('.enrollment-slider > .slick-counter').css('display', 'none');
				resizeSliderHeight(activeStep);
			});

			$('.mobile-tour__step1-slider-wrapper').on('swipe', function(event, slick, direction) {
				event.stopPropagation();
			});


			$('.mobile-tour__step1-slider-wrapper').slick({
				infinite: false,
				swipe: true,
				dots: true,
			}).on('beforeChange', function(e) {
				e.stopPropagation();
			});


		}
	});
})(jQuery);