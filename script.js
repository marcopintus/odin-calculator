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
function operate(operand,a,b){
    if(operand=="plus"){
        return add(a,b)
    } else if (operand =="minus"){
        return subract(a,b)
    } else if (operand == "times"){
        return multiply(a,b)
    } else if (operand == "divide"){
        return divide(a,b)
    }
}