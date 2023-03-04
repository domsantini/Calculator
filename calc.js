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
let num2 = '';
let result = '';
let operator = '';

numArray.forEach((button) => {
    button.addEventListener('click', e => {
        
        currentNum += e.target.innerHTML;
        
        if (operator && num1) {
            operate();
        }
        
        screenBottom.innerHTML = currentNum;
        console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`);
    })
})

operatorArray.forEach((button) => {
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

equal.addEventListener('click', () => {
    operate();
    console.log(result)
})

clear.addEventListener('click', () => {
    num1 = num2 = currentNum = '';
    operator = '';
    result.innerHTML = currentNum;
    console.log(`Disp: ${currentNum}, Num1: ${num1}, Num2: ${num2}, Op: ${operator}`)
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