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



function calculate(button){

        let el
        if (button.key == undefined){
            el = button.textContent;
        }else {
            el = button.key;
        }
        
        if (el == "+" || el =="-" || el == "*" || el == "/"){
            if(operand == undefined){
                operand = el;
                number1 = number1.join("");
                displayDigits.textContent = operand;
                msgBox.textContent = ""
                dotCounter = undefined
            } else {
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
        }else if(el == "C" || el == "Esc"){
            number1 = [];
            operand = undefined;
            number2 = [];
            result = 0;
            displayDigits.textContent = ""
            msgBox.textContent = ""
            dotCounter = undefined
        }else if(el == "DEL" || el == "Backspace"){
                if(operand == undefined){
                    if (number1[number1.length-1] == "."){
                        dotCounter = undefined
                        console.log(dotCounter)
                    }
                    number1.pop()
                    displayDigits.textContent = number1.join("")
                } else {
                    if (number2[number2.length-1] == "."){
                        dotCounter = undefined
                    }
                    number2.pop()
                    displayDigits.textContent = number2.join("")
                }
        }else if (el == ".") {
            if (dotCounter == undefined){
                dotCounter = 1;
                if (operand == undefined ){
                    number1.push(el)
                    displayDigits.textContent = number1.join("")
                } else {
                    number2.push(el)
                    displayDigits.textContent = number2.join("")
                }
            } else {

            }
            
        }else if (el == "=" || el == "Enter"){
            if (operand == undefined){

            } else {

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
        }else if (el == "Shift" ||  /^[a-zA-Z]+$/g.test(el)){


        } else {
            if (operand == undefined){
                if (result != undefined && result == number1){
                    number1 = [];
                    number1.push(el)
                    displayDigits.textContent = number1.join("")
                } else {
                    if(number1.length>10){
                        msgBox.textContent = "That's too long!"
                    } else {
                        msgBox.textContent = ""
                        number1.push(el)
                        displayDigits.textContent = number1.join("")
                    }
                
                }
            } else {
               
                if(number2.length>10){
                    msgBox.textContent = "That's too long!"

                } else {
                    number2.push(el)
                    displayDigits.textContent = number2.join("")
                }
            }
            
            
        }
                    
    }

let number1 = [];
let operand ;
let number2 = [];
let result;
let dotCounter
const msgBox = document.querySelector(".snarky-message")
const displayDigits = document.querySelector(".digits");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click", () => {calculate(button)})
})

window.addEventListener('keydown', (key) => {
    calculate(key); 
})

