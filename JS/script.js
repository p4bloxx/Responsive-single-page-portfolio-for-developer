
const form = document.getElementById('contact-form');
const allInput = document.querySelectorAll('.inp');
const sendBtn = form[3];
const allError = document.querySelectorAll('.err');
const confirmed = document.getElementById('confirmed');

//email pattern
const rightEmailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  //for clean all error statements after send message (with correct values)
  allError.forEach((er) => {
    er.classList.remove('error-active');
    er.classList.remove('error-simbol-active');
  });

  allInput.forEach((border) => {
    border.classList.remove('error-border');
  }) 

  //loop through all input to check if are empty or not
  allInput.forEach((inp) => {
    if(inp.value === '') {
      inp.classList.toggle('error-border');
      inp.nextElementSibling.classList.toggle('error-simbol-active');
      inp.nextElementSibling.nextElementSibling.classList.toggle('error-active');
    } else {
      confirmed.classList.add('active');

      //for show and hide confirmed feedback after 3 seconds
      setTimeout(function() {
        confirmed.classList.remove('active');
      }, 3000);
    }
  })

  //check if pattern of email input value is correct
  if(!allInput[1].value.match(rightEmailFormat)) {
      allInput[1].classList.add('error-border');
      allInput[1].nextElementSibling.classList.add('error-simbol-active');
      allInput[1].nextElementSibling.nextElementSibling.classList.add('error-active');
      
  } else {
    confirmed.classList.add('active');

    //empty input values after send a message
    allInput[0].value = '';
    allInput[1].value = '';
    allInput[2].value = '';

    setTimeout(function() {
      confirmed.classList.remove('active');
    }, 3000);
  }
})