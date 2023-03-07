let screenTop = document.querySelector('#screenTop')
let screenBottom = document.querySelector('#screenBottom');
const numButtons = document.querySelectorAll('.num');
const numArray = Array.from(numButtons);
const operators = document.querySelectorAll('.operator')
const operatorArray = Array.from(operators)
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const decimal = document.querySelector('#decimal')

let currentNum = '';
let num1 = '';
let result = '';
let operator = '';

numArray.forEach((button) => {
    button.addEventListener('click', e => {
        
        if (!currentNum && e.target.innerHTML == '.') {
            currentNum = '0';
            updateScreen(e);
        } 
        
        currentNum += e.target.innerHTML;
        
        if (currentNum.includes('.')) {
            decimal.disabled = true;
        }
        
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
            decimal.disabled = false;
            updateScreen(e);
        }
    })
})

equal.addEventListener('click', e => {
    operate();
    updateScreen(e);
    num1 = result;
    currentNum = '';
    decimal.disabled = false;
})

clear.addEventListener('click', () => {
    num1 = currentNum = operator = result = '';
    screenTop.innerHTML = '';
    screenBottom.innerHTML = '0';
})

del.addEventListener('click', e => {
    if (currentNum.length > 1) {
        currentNum = currentNum.slice(0,-1);
        updateScreen(e);
    } else {
        currentNum = '';
        screenBottom.innerHTML = '0';
    }
})

function add() {
    result = Math.round((parseFloat(num1) + parseFloat(currentNum)) * 1000) / 1000
}
function subtract() {
    result = Math.round((parseFloat(num1) - parseFloat(currentNum)) * 1000) / 1000
}
function multiply() {
    result = Math.round((parseFloat(num1) * parseFloat(currentNum)) * 1000) / 1000
}
function divide() {
    if (currentNum == 0) {
        result = 'No can do partner 🤠 Clear and try again!'
    } else {
        result = Math.round((parseFloat(num1) / parseFloat(currentNum)) * 1000) / 1000
    }
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

