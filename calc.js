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
        screenBottom.innerHTML = currentNum;
        
        console.table(`Current: ${currentNum}, Num1: ${num1}, Result: ${result}, Op: ${operator}`);
    })
})

operatorArray.forEach((button) => {
    button.addEventListener('click', e => {
        
        if (num1) {
            console.table(`Current: ${currentNum}, Num1: ${num1}, Result: ${result}, Op: ${operator}`)
            operate();
            num1 = result;
            currentNum = '';
            operator = e.target.innerHTML;
            console.log(result)
            console.table(`Current: ${currentNum}, Num1: ${num1}, Result: ${result}, Op: ${operator}`)
        } else {
            operator = e.target.innerHTML;
            num1 = currentNum;
            currentNum = '';
        }
        
        console.table(`Current: ${currentNum}, Num1: ${num1}, Result: ${result}, Op: ${operator}`);
    })
})

equal.addEventListener('click', () => {
    operate();
    num1 = result;
    console.log(result)
    console.log(`Disp: ${currentNum}, Num1: ${num1}, Op: ${operator}`)
})

clear.addEventListener('click', () => {
    num1 = currentNum = operator = '';
    result.innerHTML = currentNum;
    console.log(`Disp: ${currentNum}, Num1: ${num1}, Op: ${operator}`)
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