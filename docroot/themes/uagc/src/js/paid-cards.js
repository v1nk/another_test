var showCards = document.getElementsByClassName('--hide')
var viewMoreLink = document.querySelector('#js-show-more')

if (viewMoreLink !== null) {
  viewMoreLink.addEventListener('click', showMore)

  function showMore() {
    while (showCards[0]) {
      showCards[0].classList.toggle('--hide')
    }

    viewMoreLink.style.display = "none"
  }
}