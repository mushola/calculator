let x = new Number
let y = new Number
let o = new String
let display = new String
let buttonArr = [["<-","","","C"],
                 ["7","8","9","÷"],
                 ["4","5","6","×"],
                 ["1","2","3","−"],
                 ["0",".","=","+"]]


// create solar panel
const solarGrid = document.querySelector("#solar");
for (i=0; i < 4; i++) {
  let solarPanel = document.createElement("div");
  solarPanel.classList.add("panel");
  solarGrid.appendChild(solarPanel);
}

// create button panel
const buttonPanel = document.querySelector("#button-panel");
buttonArr.forEach(function (row) {
  let buttonRow = document.createElement("div");
  buttonRow.classList.add("button-row");
  buttonPanel.appendChild(buttonRow);
  row.forEach(function (element) {
    let button = document.createElement("div");
    button.textContent = element;
    button.classList.add("button");
    if (!element) {
      button.classList.add("buttonSpace");
    }
    buttonRow.appendChild(button);
  })

});


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




