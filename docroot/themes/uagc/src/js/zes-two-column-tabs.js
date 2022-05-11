//js-zes-tabs
//js-zes-tabs-desktop
//js-zes-tab

let tabber = {
  mainElement: undefined,
  desktopTabContainer: undefined,
  _currentTab: 0,
  get currentTab() {
    return this._currentTab;
  },
  set currentTab(newTab) {
    this._currentTab = newTab;
    this.updateClasses();
  },

  init: function (parentElement) {
    this.mainElement = parentElement;
    this.desktopTabContainer = this.mainElement.querySelector('.js-zes-tabs-desktop');
    if (this.desktopTabContainer) {
      let tabs = this.mainElement.querySelectorAll('.js-zes-tab');
      this.tabLooper(tabs);
    }
    this.updateClasses();

  },

  tabLooper: function (tabElements) {
    for (let i = 0; i < tabElements.length; i++) {
      this.addDesktopTabs(tabElements[i], i);
      this.tabSizing(tabElements[i], i);
    }
  },

  tabSizing: function (tabElement, index) {
    //js-zes-tab-wrapper
    let wrapper = tabElement.querySelector('.js-zes-tab-wrapper');
    let content = tabElement.querySelector('.js-zes-tab-content');
    if (wrapper) {
      let contentHeight = content.getBoundingClientRect().height;
      wrapper.dataset.cheight = contentHeight + "px";
	  setTimeout(()=>{
		wrapper.dataset.cheight = "auto";
	  }, 300 );
    }

  },

  addDesktopTabs: function (tabElement, index) {
    tabElement.dataset.tabber = index;
    let newTab = this.buildTab(tabElement, index);
    this.desktopTabContainer.appendChild(newTab);
  },

  buildTab: function (element, index) {
    let innerchildElement = element.querySelector('.js-zes-tab-text');
    innerchildElement.dataset.tabNumber = index;
    innerchildElement.addEventListener("click", event => {
      this.currentTab = parseInt(event.target.dataset.tabNumber);
    });
    let title = '';
    if (innerchildElement) {
      title = innerchildElement.innerText;
    }
    let tabTemplate = document.createElement("div");
    let tabTemplateArrow = document.createElement("div");

    tabTemplateArrow.classList.add('zes-two-column-tabs__arrow');
    tabTemplate.classList.add('zes-two-column-tabs__desktop-single-tab');
    tabTemplate.innerText = title;
    tabTemplate.appendChild(tabTemplateArrow)
    tabTemplate.dataset.tabNumber = index;
    tabTemplate.addEventListener("click", (event) => {
      this.currentTab = parseInt(event.target.dataset.tabNumber);
    });
    return tabTemplate;
  },

  setTabHeight: function (tab) {
    let wrapper = tab.querySelector('.js-zes-tab-wrapper');
    wrapper.style.height = wrapper.dataset.cheight;
	setTimeout(()=>{
		wrapper.style.height = "auto";
	  }, 300 );
  },


  offsetScroll: function () {
    let tabPos = 0;
    if (this.currentTab > 0) {
      //tabPos = this.currentTab - 1;
    }
    let tabAnchor = this.mainElement.querySelector('[data-tabber="' + tabPos + '"]');
    let pos = tabAnchor.getBoundingClientRect();

    if (pos.y < 0) {
      tabAnchor.scrollIntoView(true);
    }


  },

  resetClasses: function () {
    let openItems = this.mainElement.querySelectorAll('.--tab-open');
    let wrappers = this.mainElement.querySelectorAll('.js-zes-tab-wrapper');

    for (let i = 0; i < openItems.length; i++) {
      openItems[i].classList.remove('--tab-open')
    }
    for (let i = 0; i < wrappers.length; i++) {
      wrappers[i].setAttribute("style", "");
    }
    this.offsetScroll();
  },

  updateClasses: function () {
    this.resetClasses();
    let openTab = this.mainElement.querySelector('[data-tabber="' + this.currentTab + '"]');
    let desktopOpenTab = this.mainElement.querySelector('.zes-two-column-tabs__desktop-single-tab[data-tab-number="' + this.currentTab + '"]');
    if (openTab) {
      openTab.classList.add('--tab-open');
      desktopOpenTab.classList.add('--tab-open');
      this.setTabHeight(openTab);
    }
  },
}


document.addEventListener("DOMContentLoaded", function () {
  let tabbers = document.querySelectorAll('.js-zes-tabs');
  for (let i = 0; i < tabbers.length; i++) {
    let tabberInst = Object.create(tabber);
    tabberInst.init(tabbers[i]);
  }
});
