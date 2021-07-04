const inputValue = document.getElementById('validation-input');

inputValue.addEventListener('input', inputValidation);


function inputValidation() {

const inputLength = inputValue.value.length;
const reqLength = Number(inputValue.dataset.length);

inputLength !== reqLength ? inputValue.classList.add('invalid') : inputValue.classList.replace('invalid', 'valid');
};
