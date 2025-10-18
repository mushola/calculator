let x = new Number
let y = new Number
let o = new String
let display = new String


// create solar panel
const solarGrid = document.querySelector("#solar");
for (i=0; i < 4; i++) {
  let solarPanel = document.createElement("div");
  solarPanel.classList.add("panel");
  solarGrid.appendChild(solarPanel);
}


const operate = function (operator, a, b) {
  switch(operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return a;
  }
}
 



const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const multiply = function (a, b) {
  return a * b
}

const divide = function (a, b) {
  return a / b
}




