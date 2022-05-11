// js-accordion-block
// js-accordion-item-toggle
// js-accordion-content
// js-accordion-block-item

document.addEventListener("DOMContentLoaded", () => {
  const Accordion = {
    baseBlock: undefined,
    _toggleItem: null,

    get toggleItem() {
      return this._toggleItem;
    },
    set toggleItem(newItem) {
      this._toggleItem = newItem
      this.updateClasses();
    },

    init: function (accordianBlockElement) {
      this.baseBlock = accordianBlockElement;
      this.setElements();
    },
    setElements: function () {
      let items = this.baseBlock.querySelectorAll('.js-accordion-block-item');
      for (let i = 0; i < items.length; i++) {
        let content = items[i].querySelector(".js-accordion-content");
        let toggle = items[i].querySelector(".js-accordion-item-toggle");
        items[i].dataset.accord = i;
        if (content) {
          content.dataset.accord = i;
        }
        if (toggle) {
          toggle.dataset.accord = i;
        }
        if (toggle && content) {
          this.addEvents(toggle);
          this.setHeight(content);
        }

      }
    },
    addEvents: function (toggleElement) {
      toggleElement.addEventListener("click", (event) => {
        let pos = event.target.dataset.accord;
        this.toggleItem = pos;
      });
    },
    setHeight: function (contentElement) {
      let childElement = contentElement.children[0];
      let height = childElement.getBoundingClientRect().height;
      let children = childElement.children;
      let bottomMargin = 16;

      if (children.length > 1) {
        for (var i = 0; i < children.length; i++) {
          let style = window.getComputedStyle(children[i]);
          bottomMargin = bottomMargin + parseInt(style.marginBottom, 10);
        }
      }

      contentElement.dataset.aHeight = "auto";
    },

    clearClasses: function () {
      let openElements = this.baseBlock.querySelectorAll('.--open');
      for (let i = 0; i < openElements.length; i++) {
        openElements[i].classList.remove("--open");
        let tempContent = openElements[i].querySelector('.js-accordion-content');
        tempContent.style.height = "0px";
      }
    },

    updateClasses: function () {
      let moreInfo = this.baseBlock.querySelector('.js-accordion-block-item[data-accord="' + this.toggleItem + '"]');
      
      if (moreInfo.classList.contains("--open")) {
        moreInfo.classList.remove("--open");
        let tempContent = moreInfo.querySelector('.js-accordion-content');
        tempContent.style.height = "0px";
      } else {
        moreInfo.classList.add("--open");
        let tempContent = moreInfo.querySelector('.js-accordion-content');
        tempContent.style.height = tempContent.dataset.aHeight;
        tempContent.style.height = 'auto';
      }
    }
  };

  let accordBlocks = document.querySelectorAll('.js-accordion-block');
  if (accordBlocks) {
    for (let i = 0; i < accordBlocks.length; i++) {
      let accord = Object.create(Accordion);
      accord.init(accordBlocks[i]);
    }
  }
});
