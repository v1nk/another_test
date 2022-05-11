(function () {

  let BackgroundCover = {
    init: function () {
      let backgroundCovers = document.getElementsByClassName("js-background-image");
      for (var i = 0; i < backgroundCovers.length; i++) {
        BackgroundCover.setBackground(backgroundCovers[i]);

        backgroundCovers[i].getElementsByTagName('img')[0].onload = function () {
          BackgroundCover.setBackground(backgroundCovers[i]);

        }

      }
    },
    setBackground: function (element) {

      //Adding sanity check.  This fails on chrome on remote load when it tries too fast. 
      if (element) {
        var source = element.getElementsByTagName('img');
        var thisImg = source[0];

        if (source.length > 0) {
          imgCollection = source;
          source = source[0].currentSrc;

          //Sometimes the js engine is faster than the browser building the image. 
          //At least get AN image in there instead of a blank src.
          if (source == '' || typeof source === 'undefined') {

            //Check if this is a picture.  Wait for full page load if so. We just went too fast.
            if (thisImg.closest('picture')) {
              //Re-init to fix load when the image doens't exist.
              window.addEventListener('load', function () { window.BackgroundCover.init(); });
              return;
            }

            source = imgCollection[0].src;

          }

          element.style.cssText = "background-image: url(" + source + ")";
        }
      }
    },
  };

  // Browser export
  window.BackgroundCover = BackgroundCover;

  // CommonJS/Node.js
  if ("object" === typeof module && "object" === typeof module.exports)
    module.exports = BackgroundCover;

  // AMD/UMD-like systems
  return BackgroundCover;
})()




if (document.readyState == 'complete' || document.readyState == "interactive") {

  window.BackgroundCover.init();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    window.BackgroundCover.init();
  });
}


