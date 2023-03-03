let displayNum = document.querySelector('#result')
let equation = document.querySelector('#equation');
const buttons = document.querySelectorAll('button');
const buttonArray = Array.from(buttons);
const numButtons = document.querySelector('.num')
const operators = document.querySelectorAll('.operator')
const operatorArray = Array.from(operators)
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

let result = '';
let currentNum = '';
let num1 = '';
let num2 = '';
let operator = '';

buttonArray.forEach((item) => {
    item.addEventListener('click', e => {
        currentNum += e.target.innerHTML;
        result.innerHTML = currentNum;
        console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
    })
})

operators.forEach((button) => {
    button.addEventListener('click', e => {
        operator = e.target.innerHTML;
        
        if (num1) {
            num2 = currentNum.slice(0, -1);
            operate();
            num1 = result;
            console.log(result)
        } else {
            num1 = currentNum.slice(0, -1);    
        }
        
        currentNum = '';
        console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
    })
})

clear.addEventListener('click', () => {
    num1 = num2 = currentNum = '';
    operator = '';
    result.innerHTML = currentNum;
    console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`)
})


function add() {
    result = ((parseFloat(num1) + parseFloat(num2)))
}
function subtract() {
    result = ((parseFloat(num1) - parseFloat(num2)))
}
function multiply() {
    result = ((parseFloat(num1) * parseFloat(num2)))
}
function divide() {
    result = ((parseFloat(num1) / parseFloat(num2)))
}

function operate() {
     switch(operator) {
        case '=':
            break;
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