const inputValue = document.getElementById('validation-input');


const inputValidation = inputValue.addEventListener('input', function () {
    inputValue.textContent.length >= inputValue.dataset.length ?
        inputValue.classList.replace(#validation - input, #validation - input.valid)
        : inputValue.classList.replace(#validation - input, #validation - input.invalid);
});