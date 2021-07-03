const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');

const helloUser = inputValue.addEventListener('input', function () {
    outputValue.textContent = inputValue.value ? inputValue.value : 'незнакомец';
});

