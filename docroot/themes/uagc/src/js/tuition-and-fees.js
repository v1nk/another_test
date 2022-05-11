document.addEventListener("DOMContentLoaded", function() {
  let tuitions = document.querySelectorAll('.tuitionandfees');

  tuitions.forEach(function(tuition,i,arr) {
    let tables = tuition.querySelectorAll('.tuitionandfees__table');
    let buttonCollection = [];
    let buttonDiv = tuition.querySelector('.tuitionandfees__buttons-scroll');

    tables.forEach(function(e,i,arr) {
      buttonCollection.push(e.getAttribute('data-cta'));

      if ( i == 0) {
        return;
      }
      e.closest('.tuitionandfees__table-container').style.display = 'none';
    });

    var buttonClickFunction = function(e) {
      let tables = tuition.querySelectorAll('.tuitionandfees__table');
      let thisTable = tuition.querySelector(this.getAttribute('data-table-selector'));
      let buttons = tuition.querySelectorAll('.tuitionandfees__button');
      tables.forEach(function(e,i,arr) {
        e.closest('.tuitionandfees__table-container').style.display = 'none';

      });

      buttons.forEach(function(e,i,arr) {
        e.classList.remove('--active');
      });


      this.classList.add('--active');

      thisTable.closest('.tuitionandfees__table-container').style.display = 'block';
    };


    buttonCollection.forEach(function(e,i,arr) {
      let button = document.createElement('button');
      button.classList.add('tuitionandfees__button');

      if (i == 0) {
        button.classList.add('--active');
      }


      button.innerText = e;
      button.setAttribute('data-table-selector', '.tuitionandfees__table[data-cta="'+e+'"]')
      button.addEventListener('click', buttonClickFunction);
      buttonDiv.appendChild(button);
    });


  })



});

