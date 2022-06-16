// functions
function add(a,b){
    return a+b;
}
function subract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,operand,b){
    a = Number(a);
    b = Number(b);
    if(operand=="+"){
        return add(a,b)
    } else if (operand =="-"){
        return subract(a,b)
    } else if (operand == "*"){
        return multiply(a,b)
    } else if (operand == "/"){
        return divide(a,b)
    }
}

function selectOperand(el){
    if(operand == undefined){
        // selects the operand and allows the selection of the second number
        operand = el;
        number1 = number1.join("");
        displayDigits.textContent = operand;
        msgBox.textContent = ""
        dotCounter = undefined
    } else {
        // successive operations
        number2 = number2.join("");
        result = operate(number1,operand,number2);
        result = Math.round(result * 1000) / 1000
        number1 = result.toString().split();
        operand = el;
        number2 = [];
        displayDigits.textContent = result;
        msgBox.textContent = ""
        dotCounter = undefined
    }
}

function clearCalculator(el){
    // clears the entire calculator
    number1 = [];
    operand = undefined;
    number2 = [];
    result = 0;
    displayDigits.textContent = ""
    msgBox.textContent = ""
    dotCounter = undefined
}

function deleteLast(el){
    // delets the last input weather it is on the first or the second number
    msgBox.textContent = ""
    if(operand == undefined){
        dlt(number1);
    } else {
        dlt(number2);
    }
}

function dlt(array){
    // delets the last input resetting the dot count
    if (array[array.length-1] == "."){
        dotCounter = undefined
    }
    array.pop()
    displayDigits.textContent = array.join("")
}

function pressDot(el){
    // pressing the "dot" the dot cannot be pressed again to avoid 12.3.3
    if (dotCounter == undefined){
        dotCounter = 1;
        if (operand == undefined ){
            writeDigit(el,number1);
        } else {
            writeDigit(el,number2);
        }
    }
}

function writeDigit(el,array){
    // writes the inputted single digit
    array.push(el)
    displayDigits.textContent = array.join("")
}

function pressEqual(el){
    // pressing equal the operation is evaluated
    if (operand != undefined){
        // if someone tries to dived by zero and press equal the calculator rebels
        if(operand == "/" && number2 == 0){
            msgBox.textContent = "WHAT!?"
            number1 = [];
            operand = undefined;
            number2 = [];
        } else{
            number2 = number2.join("");
            result = operate(number1,operand,number2);
            result = Math.round(result * 1000) / 1000
            number1 = result.toString().split();
            operand = undefined;
            number2 = [];
            displayDigits.textContent = result;
        } 
    } 
}

function selectNumbers(el){
    // the first and second number of each operation are stored with this function
    if (operand == undefined){
        if (result != undefined && result == number1){
            number1 = [];
            writeDigit(el,number1);
            msgBox.textContent = ""
        } else {
            writeNumber(el,number1)
        }
    } else {
        writeNumber(el,number2)
    }
}

function writeNumber(el,array){
    // this pushes the digits to create the hole number,  if not too long
    if(array.length>10){
        msgBox.textContent = "That's too long!"
    } else {
        writeDigit(el,array);
    }
}

function calculate(button){
    // calculator implementation
    let el
    if (button.key == undefined){
        el = button.textContent;
    }else {
        el = button.key;
    }
    if (el == "+" || el =="-" || el == "*" || el == "/"){
        selectOperand(el);
    }else if(el == "C" || el == "Esc"){
        clearCalculator(el);
    }else if(el == "DEL" || el == "Backspace"){
        deleteLast(el);
    }else if (el == ".") {
        pressDot(el);
    }else if (el == "=" || el == "Enter"){
        pressEqual(el);
    }else if (el == "Shift" ||  /^[a-zA-Z\s]+$/g.test(el)){
    } else {
        selectNumbers(el) 
    }
                
}

// variable initialization
let number1 = [];
let operand ;
let number2 = [];
let result;
let dotCounter;
const msgBox = document.querySelector(".snarky-message")
const displayDigits = document.querySelector(".digits");
const buttons = document.querySelectorAll(".button");

// event listeners for inputs
buttons.forEach((button)=>{button.addEventListener("click", () => {calculate(button)})});
window.addEventListener('keydown', (key) => {calculate(key);});