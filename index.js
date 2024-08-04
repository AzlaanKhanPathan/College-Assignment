function Add() {
    let add_1 = Number(document.getElementById("add_1").value);
    let add_2 = Number(document.getElementById("add_2").value);
    const result = add_1 + add_2;
    document.getElementById("addition").value = result;

}

function Subtract() {
    let subtract_1 = Number(document.getElementById("subtract_1").value);
    let subtract_2 = Number(document.getElementById("subtract_2").value);
    const result =  subtract_1 - subtract_2;
    document.getElementById("subtraction").value = result;

}

function Multiply() {
    let multiply_1 = Number(document.getElementById("multiply_1").value);
    let multiply_2 = Number(document.getElementById("multiply_2").value);
    const result =  multiply_1 * multiply_2;
    document.getElementById("multiplication").value = result;

}

function Divide() {
    let divide_1 = Number(document.getElementById("divide_1").value);
    let divide_2 = Number(document.getElementById("divide_2").value);
    const result =  divide_1 / divide_2;
    document.getElementById("division").value = result;

}