// operation variables
let firstNum;
let secondNum;
let operator;
let operators = ["+", "-", "*", "/"];

// addition
function add(a, b) {
    return a + b;
}

// subtraction
function subtract(a, b) {
    return a - b;
}

// multiplication
function multiply(a, b) {
    return a * b;
}

// division
function divide(a, b) {
    return a / b;
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
        default:
            alert("Incorrect operator");
    }
}
