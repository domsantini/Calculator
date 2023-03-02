let result = document.querySelector('#result')
let equation = document.querySelector('#equation');
const buttons = document.querySelectorAll('button');
const buttonArray = Array.from(buttons);
const numButtons = document.querySelector('.num')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

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
        if (num2) {
            num1 = num2;
        }
        
        num2 = currentNum.slice(0, -1);
        currentNum = '';
        
        console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
    })
})

clear.addEventListener('click', () => {
    num1 = num2 = operator = currentNum = '';
    equation.innerHTML = displayNum;
})


function add() {
    return (a + b)
}
function subtract() {
    return (a - b)
}
function multiply() {
    return (a * b)
}
function divide() {
    return (a / b)
}


a = 5;
b = 3; 

add();
subtract();
multiply();
divide();