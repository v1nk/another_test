export default class StickyHelper {
  constructor() {
    this.show = false;
  }

  init() {
    this.addListeners();
    this.findSticky();
  }
  addListeners() {

    window.addEventListener('stickyShow', () => {
      console.log("sticky Showing")
      this.show = true;
    });
    window.addEventListener('stickyHide', () => {
      console.log("sticky hidding")
      this.show = false;
    });
  }

  addAnimationListener() {
    window.addEventListener('scroll', () => {

      window.requestAnimationFrame(() => {
        if (this.show) {
          let position = this.stickyElement.getBoundingClientRect().top;
          let parentPostition = this.parentElement.getBoundingClientRect().top;
          if (parentPostition <= 0) {
            let offset = this.headerOffset + (parentPostition * -1);
            this.stickyElement.style.top = offset + "px";
          } else {
            this.stickyElement.style.top = "0px";
            console.log("no sticky");
          }
        }


      });
    }, true);
  }

  findSticky() {
    this.stickyElement = document.querySelector('[data-sticky="true"]');
    if (this.stickyElement) {
      this.topHeaderElement = document.querySelector('.site-layout__header');
      this.headerOffset = this.topHeaderElement.getBoundingClientRect().height;
      this.parentElement = this.stickyElement.parentElement;
      this.addAnimationListener();
      this.checkStickyPosition();
    }
  }

  checkStickyPosition() {
    console.log(this.stickyElement.getBoundingClientRect());
  }

  setStickyPosition() {

  }
}