


const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultOutput = document.getElementById("result") as HTMLOutputElement;


const addButton = document.getElementById("add") as HTMLInputElement;
addButton.addEventListener("click", add)
    function add() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const sum = num1 + num2;
    resultOutput.value = sum.toString();
}


const subButton = document.getElementById("sub") as HTMLInputElement;
subButton.addEventListener("click",sub)
    function sub() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const difference = num1 - num2;
    resultOutput.value = difference.toString();
}


const mulButton = document.getElementById("mul") as HTMLInputElement;
mulButton.addEventListener("click",mul) 
    function mul()  {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const product = num1 * num2;
    resultOutput.value = product.toString();
}


const divButton = document.getElementById("div") as HTMLInputElement;
divButton.addEventListener("click", div)
function div() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 !== 0) {
        const quotient = num1 / num2;
        resultOutput.value = quotient.toString();
    } else {
        resultOutput.value = "Error: Division by zero!";
    }
}
