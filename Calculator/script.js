let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");

let operator = null;


function appendNumber(value) {
  display.value += value;
 
}


function handleOperator(value) {
  
  if (!operator) {
    operator = value;
    display.value += value; 
  }
}

function calculate() {
  if (!operator)return ;
  


  let parts = display.value.split(operator);
  let firstNumber = parseFloat(parts[0]);
  let secondNumber = parseFloat(parts[1]);

  let result;

  if (operator === "+") result = firstNumber + secondNumber;
  else if (operator === "-") result = firstNumber - secondNumber;
  else if (operator === "*") result = firstNumber * secondNumber;
  else if (operator === "/") {
    if (secondNumber === 0) {
      display.value = "Error"; 
      operator = null;
      return;
    } else result = firstNumber / secondNumber;
  }

  display.value = result;
    operator = null; 
}

function clearDisplay() {
  display.value = "";
 

}


for (let btn of buttons) {
  btn.addEventListener("click", function(event) {
    let value = event.target.textContent;

    if (!isNaN(value) || value === ".") appendNumber(value);
    else if (value === "+" || value === "-" || value === "*" || value === "/") handleOperator(value);
    else if (value === "=") calculate();
    else if (value === "C") clearDisplay();
  });
}
