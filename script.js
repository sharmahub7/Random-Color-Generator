let button = document.getElementById('btn');
let displayCode = document.getElementById('color-code');
let color;

let randomColor = () => {
    color = '#';
    let hexaDecimal = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color = color + hexaDecimal[Math.floor(Math.random() * 16)];
    }
    return color;
};

button.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    displayCode.innerHTML = color;
});