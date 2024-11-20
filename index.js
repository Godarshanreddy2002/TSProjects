var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var resultOutput = document.getElementById("result");
var addButton = document.getElementById("add");
addButton.addEventListener("click", add);
function add() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var sum = num1 + num2;
    resultOutput.value = sum.toString();
}
var subButton = document.getElementById("sub");
subButton.addEventListener("click", sub);
function sub() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var difference = num1 - num2;
    resultOutput.value = difference.toString();
}
var mulButton = document.getElementById("mul");
mulButton.addEventListener("click", mul);
function mul() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var product = num1 * num2;
    resultOutput.value = product.toString();
}
var divButton = document.getElementById("div");
divButton.addEventListener("click", div);
function div() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
        var quotient = num1 / num2;
        resultOutput.value = quotient.toString();
    }
    else {
        resultOutput.value = "Error: Division by zero!";
    }
}
