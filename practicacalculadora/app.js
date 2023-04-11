
// Functions
function addition(a, b) {
    return a + b;
  }
  
  function subtraction(a, b) {
    return a - b;
  }
  
  function multiplication(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    return a / b;
  }
  
  // HTML ELEMENTS
  const inputA = document.getElementById('input-a');
  const inputB = document.getElementById('input-b');
  const addButton = document.getElementById('add-button');
  const subtractButton = document.getElementById('subtract-button');
  const multiplyButton = document.getElementById('multiply-button');
  const divideButton = document.getElementById('divide-button');
  const result = document.getElementById('result');
  
  // EventS
  addButton.addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const resultAddition = addition(a, b);
    result.textContent = resultAddition;
  });
  
  subtractButton.addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const resultSubtraction = subtraction(a, b);
    result.textContent = resultSubtraction;
  });
  
  multiplyButton.addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const resultMultiplication = multiplication(a, b);
    result.textContent = resultMultiplication;
  });
  
  divideButton.addEventListener('click', () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const resultDivision = division(a, b);
    result.textContent = resultDivision;
  });
  

