function sum(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return (a * b).toFixed(2);
}

function divide(a, b) {
  return (a / b).toFixed(2);
}

/* Do not touch below this line */
let output = document.querySelector("#output");
// constanst number
let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;
//
document.querySelectorAll("#calculator .number").forEach((button) => {
  button.addEventListener("click", (event) => {
    // set the value for input
    let value = event.currentTarget.textContent;
    // resetAfterOperation help  to show the outputvalue ==>  from the click button
    if (resetAfterOperation) {
      output.value = value;
      resetAfterOperation = false;
    } else {
      console.log("value" + value);
      output.value += value;
    }
  });
});
// calculator operation => that will set the 1st number's value vs function
document.querySelectorAll("#calculator .operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    //  set the value for 1st number:
    firstNumber = Number.parseInt(output.value);
    operation = event.currentTarget.dataset.action;
    resetAfterOperation = true;
  });
});
// equal function ==> that will set the 2nd number's value
const equal = document.querySelector("#calculator .equal");
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }
  resetAfterOperation = true;
  // second Number will be the number
  let secondNumber = Number.parseInt(output.value, 10);

  if (operation === "sum") {
    output.value = sum(firstNumber, secondNumber);
  } else if (operation === "subtract") {
    output.value = subtract(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    output.value = multiply(firstNumber, secondNumber);
  } else if (operation === "divide") {
    output.value = divide(firstNumber, secondNumber);
  }
  //reset operation
  operation = null;
});

// reset all the operation:
const ac = document.getElementById("ac");

ac.addEventListener("click", () => {
  output.value = 0;
  firstNumber = 0;
});
