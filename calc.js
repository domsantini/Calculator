let equation = document.querySelector('.equation');
const buttons = document.querySelectorAll('button');
const buttonArray = Array.from(buttons);
const numButtons = document.querySelector('.num')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

let displayNum = '';
let num1 = '';
let num2 = '';
let operator = '';

console.log(operators)

buttonArray.forEach((item) => {
    item.addEventListener('click', e => {
        displayNum += e.target.innerHTML;
        equation.innerHTML = displayNum;
        console.log(`Disp: ${displayNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
        
    })
})

operators.forEach((button) => {
    button.addEventListener('click', e => {
        operator = e.target.innerHTML;
        if (num1) {
            num2 = num1;
        }
        
        num1 = displayNum.slice(0, -1);
        displayNum = '';
        
        console.log(`Disp: ${displayNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
    })
})

clear.addEventListener('click', () => {
    num1 = num2 = operator = displayNum = '';
    equation.innerHTML = displayNum;
})


function add() {
    console.log(a + b)
}
function subtract() {
    console.log(a - b)
}
function multiply() {
    console.log(a * b)
}
function divide() {
    console.log(a / b)
}


a = 5;
b = 3; 

add();
subtract();
multiply();
divide();