let sidebarBuilder = {
  contentElement: undefined,
  sidebarElement: undefined,
  idList: [],
  currentLocation: undefined,
  init: function (item) {
    console.log("sidebar init")
    this.sidebarElement = item;
    this.contentElement = document.querySelector('.js-catalog-builder-content');
    this.getIds();
    this.findCurrent();
    console.log("current", this.currentLocation);
    if (this.currentLocation !== undefined) {
      let jumpLinks = document.createElement('div');
      if (this.sidebarElement.children[this.currentLocation].classList.contains('--indent')) {
        jumpLinks.classList.add('--double-indent')
      } else {
        jumpLinks.classList.add('--indent')
      }

      for (let i = 0; i < this.idList.length; i++) {
        let jumpLink = document.createElement('a');
        jumpLink.href = "#" + this.idList[i].id;
        jumpLink.innerText = this.idList[i].text;
        jumpLinks.appendChild(jumpLink);
      }
      console.log("ids: ", this.idList)
      this.sidebarElement.children[this.currentLocation].parentNode.insertBefore(jumpLinks, this.sidebarElement.children[this.currentLocation].nextSibling);
    }
  },

  getIds: function () {
    console.log("ids")
    let allElements = this.contentElement.querySelectorAll('*');
    console.log(allElements)
    for (let i = 0; i < allElements.length; i++) {
      let idValue = allElements[i].id;
      if (idValue) {
        this.idList.push({ id: idValue, text: allElements[i].innerText });
      }
    }
  },
  findCurrent() {
    let currentPath = window.location.pathname;
    this.currentLocation = undefined;
    for (let i = 0; i < this.sidebarElement.children.length; i++) {
      let urlCheck = this.sidebarElement.children[i].href;
      if (urlCheck) {
        let url = new URL(urlCheck, window.location.origin)
        if (currentPath === url.pathname) {
          this.currentLocation = i;
          this.sidebarElement.children[i].classList.add('--current')
        }
      }
    }
  }

}
document.addEventListener('DOMContentLoaded', () => {

  let sidebar = document.querySelector('.js-catalog-builder');
  if (sidebar) {
    sidebarBuilder.init(sidebar);
  }
});