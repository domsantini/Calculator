let screen = document.querySelector('.calcScreen');
const buttons = document.querySelectorAll('button');
const buttonArray = Array.from(buttons);
let displayNum = '';


buttonArray.forEach((item) => {
    item.addEventListener('click', (e) => {
        displayNum += e.target.innerHTML;
        screen.innerHTML = displayNum;
    })
})