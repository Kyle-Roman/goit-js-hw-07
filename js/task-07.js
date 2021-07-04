const fontSizeControl = document.getElementById('font-size-control');

const textInput = document.getElementById('text');

fontSizeControl.addEventListener('input', fontSizeAdj);

function fontSizeAdj() {
    textInput.style.fontSize = `${this.value}px`;
}

