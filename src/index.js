// select the result output element
const result = document.getElementById("result");

// select the number buttons
const numberButtons = document.querySelectorAll(".numbers");

// select the equal button
const equalButton = document.getElementById("equal");

// select the clear button
const clearButton = document.getElementById("clear");

// select the Multiplication button
const MultiplicationButton = document.getElementById("multiply");

// select the Divide button
const divide = document.getElementById("division");

// select the subtract button
const subtract = document.getElementById("subtract");

// select the percentage button
const percentage = document.getElementById("percentage");

// select the squareRoot button
const squareRoot = document.getElementById("squareRoot");

// select the pi button
const pi = document.getElementById("pi");

// Add event listeners to number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", function () {
    result.value += button.textContent;
  });
});

// Add event listener to equal button
equalButton.addEventListener("click", function () {
  // Evaluate the expression using JavaScript's eval() function
  result.value = eval(result.value);
});

// Add event listener to clear button
clearButton.addEventListener("click", function () {
  result.value = "";
});

// Add event listener to Multiplication button

MultiplicationButton.addEventListener("click", function () {
  result.value += "*";
});

// Add event listener to Divide button

divide.addEventListener("click", function () {
  result.value += "/";
});

// Add event listener to subtract button

subtract.addEventListener("click", function () {
  result.value += "-";
});

// Add event listener to percentage button

percentage.addEventListener("click", function () {
  const inputValue = result.value;
  const percentage = parseFloat(inputValue) / 100;

  result.value = percentage;
});

// Add event listener to squareRoot button

squareRoot.addEventListener("click", function () {
  const inputValue = result.value;
  const squareRoot = Math.sqrt(parseFloat(inputValue));

  result.value = squareRoot;
});

// Add event listener to pi button

pi.addEventListener("click", function () {
  result.value = Math.PI;
});
