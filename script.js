// script.js
const display = document.getElementById('display');

display.style.backgroundColor = 'black';
display.style.color = 'white';
display.style.display = 'flex';
display.style.flexDirection='column';
display.style.justifyContent = 'center';
display.style.alignItems = 'center';
display.style.fontSize='48px';
display.style.padding= '10px';
display.style.margin='300px';


document.addEventListener('keydown', (event) => {
    const key = event.key;
    const keyCode = event.keyCode;

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    display.innerHTML = `
        <span style="color: ${randomColor}">You Pressed : ${key}</span>
        <span style="color: ${randomColor}">(Code: ${keyCode})</span>
    `;
});