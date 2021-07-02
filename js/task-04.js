const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let currentValue = document.getElementById('value');

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    currentValue.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    currentValue.textContent = counterValue.value;
})