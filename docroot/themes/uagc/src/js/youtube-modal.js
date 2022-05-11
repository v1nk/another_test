(function (Drupal) {
  document.addEventListener('DOMContentLoaded', function() {

    if(document.querySelector('.youtube-modal')) {
      let modalIframe = document.querySelector('.youtube-modal iframe');
      let iframeSrc = 'https://www.youtube.com/embed/%%videoId%%?enablejsapi=1&version=3&rel=0';
      let openModal = function() {
  
        if(document.querySelector('.youtube-modal')) {
          modalIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
          document.querySelector('.youtube-modal').style.display = 'block';
          document.querySelector("body").classList.add("modal-open");

          //This hides the flash of the screen with the related videos that pop up.
          setTimeout(
            function() {
              document.querySelector('.youtube-modal iframe').style.display = 'block';
              modalIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
            },
            225
          );

        }
      };
    
      let closeModal = function() {
        if(document.querySelector('.youtube-modal')) {
          document.querySelector('.youtube-modal').style.display = 'none';
          document.querySelector('.youtube-modal iframe').style.display = 'none';
          document.querySelector("body").classList.remove("modal-open");
          modalIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        }
      };

      let videoLinks = document.querySelectorAll('.success-stories-video__video-link');
      let closeLinks = document.querySelectorAll('.youtube-modal .js-modal-close');

      closeLinks.forEach(function(e,i,arr) {
        e.addEventListener('click', closeModal);
      });

      videoLinks.forEach(function(e,i,arr) {

        e.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          let link = e.target;

          if (link.tagName.toLowerCase() != 'a') {
            link = link.closest('a');
          }

          let videoSrc = link.getAttribute('href');
          videoSrc = videoSrc.replace('https://youtu.be/', '');

          let finalSrc = iframeSrc.replace('%%videoId%%', videoSrc);

          let iframeLoadListener = function() {
            modalIframe.style.display = 'block';
            modalIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
            modalIframe.removeEventListener('load', iframeLoadListener);
          };




          if (modalIframe.getAttribute('src') !== finalSrc) {
            modalIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            modalIframe.style.display = 'none';
            modalIframe.addEventListener('load', iframeLoadListener);
            modalIframe.setAttribute('src', finalSrc);
            
          }
          openModal();

        });
      });

      window.openModal = openModal;
      var bypassCookie = false;
    }
  });
})(Drupal);
