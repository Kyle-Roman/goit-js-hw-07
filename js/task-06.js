const inputValue = document.getElementById('validation-input');

inputValue.addEventListener('input', inputValidation);


function inputValidation() {

const inputLength = inputValue.value.length;
const reqLength = Number(inputValue.dataset.length);

    if (inputLength !== reqLength) {
        inputValue.classList.remove('valid')
        inputValue.classList.add('invalid')        
    } else {
       inputValue.classList.remove('invalid'), 
       inputValue.classList.add('valid'); 
   } 
};
