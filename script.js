const buttonArr = [["<-","","","C"],
                 ["7","8","9","÷"],
                 ["4","5","6","×"],
                 ["1","2","3","−"],
                 ["0",".","=","+"]
]
const operators = ["÷", "×", "−", "+"]
let entryMode = new Boolean;
// TODO: Store value variables as float and only convert to string for display
let val1 = new String;
let val2 = new String;
let oper = new String;
const displayMax = 13;
const display = document.getElementById("display")




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
    if (element) {
      button.addEventListener("click", function (e) {
        buttonPress(element)
      })
    } else {
      button.classList.add("buttonSpace");
    }
    buttonRow.appendChild(button);
  })

});



const buttonPress = function (btn) {
  // numbers
  if (parseInt(btn) || btn == "0") {
    // reset display if entering new number
    if (!entryMode) turnOnEntryMode()
    if (display.innerHTML.replace(".","").length < displayMax) {
      display.innerHTML == "0"? display.innerHTML = btn: display.innerHTML += btn;
    }

  // operators
  } else if (operators.includes(btn)) {
    if (entryMode) updateDisplay();
    oper = btn;

  // equals
  } else if (btn == "=") {
    updateDisplay();

  // clear
  } else if (btn == "C") {
    initializeCalc();

  // backspace
  } else if (btn == "<-") {
    if (entryMode) {
      display.innerHTML = (display.innerHTML.length == 1? "0":
                            display.innerHTML.slice(0, -1));
    }

  // decimal place
  } else if (btn == ".") {
    if (display.innerHTML.indexOf('.') < 0) {
      display.innerHTML = display.innerHTML.concat('.');
    }
  }

  console.log(["entryMode: " + entryMode, "val1: " + val1, "oper: " + oper, "val2: " + val2])
}


const turnOnEntryMode = function () {
  display.innerHTML = 0;
  entryMode = true;
}


const updateDisplay = function () {
  // updates display between entry modes
  if (entryMode) val2 = display.innerHTML;
  val1 = operate(oper, val1, val2);
  // TODO need to deal with number becoming larger than screen. The next
  // line only deals with long decimals
  display.innerHTML = val1.toString().substring(0,displayMax);
  entryMode = false;
}


const initializeCalc = function () {
  display.innerHTML = "0";
  entryMode = true;
  val1 = "0";
  val2 = "0";
  oper = "";

}

const operate = function (operator, a, b) {
  a = Number(a);
  b = Number(b);
  console.log([a,b]);
  switch(operator) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    default:
      return b;
  }
}
 


initializeCalc()