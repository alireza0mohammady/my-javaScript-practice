// consts
const opArr =['+','-','/','*'];
const num = document.querySelectorAll(".btn-num");
const opereator = document.querySelectorAll(".op");
const equal = document.querySelector(".Equal");
const clear = document.querySelector(".clear");
const cBtn = document.querySelector('#clear');
let inputOp = null;
let firstNum = null;
let secondNum = null;
/** Functions */

/** Basic Functions */

const clearDisplay = ()=> {
  inputOp = null;
  firstNum = null;
  secondNum = null;
  document.querySelector("#result").setAttribute("value", '0');
}

const getDisplay = () => {
  return document.querySelector("#result").getAttribute("value");
};

const checkLastOperator = () => {
  if (opArr.includes(getDisplay()[getDisplay().length - 1])) {
    return true;
  } else {
    return false;
  }
};

const checkOperator = () => {
  if (inputOp == null) {
    return false;
  } else {
    return true;
  }
};

const getOperator = (op) => {
  return inputOp;
};

const setOperator = (op) => {
  inputOp = op;
};

const setCalculateNumbers = () => {
  let display = getDisplay();
  if (inputOp != null) {
    let displayIndex = display.indexOf(inputOp);
    firstNum = display.slice(0, displayIndex);
    secondNum = display.slice(displayIndex + 1, display.length);
  }
  // firstNum = getDisplay.slice(getDisplay.in,)
};

/** Handler Functions */

function addEventToBtns() {
  num.forEach((element) => {
    element.addEventListener("click", () => {
      displayNum(element.textContent);
    });
  });
  opereator.forEach((element) => {
    element.addEventListener("click", () => {
        displayOP(element.textContent);
      setOperator(element.textContent);
    });
  });
  cBtn.addEventListener('click',clearDisplay);
}

const displayNum = (string) => {
  let display = getDisplay();
  if (display !== "0") {
    display += string;
  } else {
    display = string;
  }
  document.querySelector("#result").setAttribute("value", display);
};

const displayOP = (string) => {
  let display = getDisplay();

  if (display !== "0") {
    if (checkOperator()) {
      if (checkLastOperator()) {
          display = display.slice(0,display.length-1) + string;
      }
      else{
        calculator();
        display = getDisplay() + string;
      }
    } else {
      display += string;
    }
  }
  document.querySelector("#result").setAttribute("value", display);
};

const calculator = () => {
  setCalculateNumbers();
  let resulte = 0
  switch (inputOp) {
    case "+":
      resulte = (Number(firstNum) + Number(secondNum));
      inputOp = null;
      break;
    case "-":
      resulte = (Number(firstNum) - Number(secondNum));
      inputOp = null;
      break;
    case "*":
      resulte = (Number(firstNum) * Number(secondNum));
      inputOp = null;
      break;
    case "/":
      resulte = (Number(firstNum) / Number(secondNum));
      inputOp = null;
      break;
  }
  document.querySelector("#result").setAttribute("value", resulte);
};

const sum = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const multi = (num1, num2) => {
  return num1 * num2;
};

const division = (num1, num2) => {
  return num1 / num2;
};

/** Call Function */

addEventToBtns();

/** Events */

document.querySelector("#equal").addEventListener("click", () => {
  if(checkOperator() && !checkLastOperator()){
    calculator();
  }
});

/**that was annoying as **** */