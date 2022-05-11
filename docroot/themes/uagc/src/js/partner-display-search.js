let partnerController = {
  observer: undefined,
  targetNode: undefined,
  config: { childList: true, subtree: true },
  init: function () {
    this.targetNode = document.querySelector(".partner-display");
    if (this.targetNode) {
      this.observer = new MutationObserver(this.callback);
      this.observer.observe(this.targetNode, this.config);  
    }
  },

  callback: function (mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        window.requestAnimationFrame(() => {
          let listingElement = document.querySelector(".partner-display");
          let listingResults = document.querySelector(
            ".partner-display__listing-content"
          );
          let pagination = document.querySelector("nav.pager");
          if (listingElement) {
            let searchInput =
              listingElement.querySelector('input[type="text"]');
            let imageList = listingElement.querySelector(".image-list");
            if (searchInput && imageList) {
              if (searchInput.value.length > 0) {
                imageList.style.display = "none";
                listingResults.style.display = "block";
                pagination.style.display = "block";
              } else {
                imageList.style.display = "flex";
                listingResults.style.display = "none";
                pagination.style.display = "none";
              }
            }
          }
        });
      }
    }
  },
};

document.addEventListener("DOMContentLoaded", function () {
  partnerController.init(); //uncomment to hide and show based on if something was searched
});
