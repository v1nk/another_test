 var showCards = document.getElementsByClassName('--hide')
 var viewMoreLink = document.querySelector('#js-show-more')
 
 viewMoreLink.addEventListener('click', removeClasses)
 
 function removeClasses() {
   while (showCards[0]) {
     showCards[0].classList.remove('--hide')
   }

   viewMoreLink.style.display = "none"
 }