let screenTop = document.querySelector('#screenTop')
let screenBottom = document.querySelector('#screenBottom');
const numButtons = document.querySelectorAll('.num');
const numArray = Array.from(numButtons);
const operators = document.querySelectorAll('.operator')
const operatorArray = Array.from(operators)
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

let currentNum = '';
let num1 = '';
let result = '';
let operator = '';

numArray.forEach((button) => {
    button.addEventListener('click', e => {     
        currentNum += e.target.innerHTML;
        updateScreen(e);
    })
})

operatorArray.forEach((button) => {
    button.addEventListener('click', e => {
        if (num1 && currentNum) {
            operate();
            num1 = result;
            currentNum = '';
            operator = e.target.innerHTML;
            updateScreen(e);
        } else if (num1 && !currentNum) {
            currentNum += e.target.innerHTML.slice(1,);
            operator = e.target.innerHTML;
            updateScreen(e);
        } else {
            operator = e.target.innerHTML;
            num1 = currentNum;
            currentNum = '';
            updateScreen(e);
        }
    })
})

equal.addEventListener('click', e => {
    operate();
    updateScreen(e);
    num1 = result;
    currentNum = '';
})

clear.addEventListener('click', () => {
    num1 = currentNum = operator = result = '';
    screenBottom.innerHTML = '0';
    screenTop.innerHTML = '';
})

function add() {
    result = ((parseFloat(num1) + parseFloat(currentNum)))
}
function subtract() {
    result = ((parseFloat(num1) - parseFloat(currentNum)))
}
function multiply() {
    result = ((parseFloat(num1) * parseFloat(currentNum)))
}
function divide() {
    if (currentNum == 0) {
        
    }
    result = ((parseFloat(num1) / parseFloat(currentNum)))
}

function operate() {
     switch(operator) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '×':
            multiply();
            break;
        case '÷':
            divide();
            break;
        default:
            break;
        }
}

function updateScreen(e) {
    if (e.target.innerHTML == '=') {
        if (!num1 && !currentNum) {
            screenTop.innerHTML = '';
            screenBottom.innerHTML = '0';
        } else {
            screenTop.innerHTML = `${num1} ${operator} ${currentNum} = `
            screenBottom.innerHTML = `${result}`
        }
    } else if (currentNum == '') {
        screenTop.innerHTML = `${num1} ${operator}`
        screenBottom.innerHTML = `${num1}`
    } 
    else if (num1 && operator) {
        screenTop.innerHTML = `${num1} ${operator}`
        screenBottom.innerHTML = `${currentNum}`
    } else {
        screenBottom.innerHTML = `${currentNum}`
    }
}