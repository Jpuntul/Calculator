let expression ='';
let history='';

function updateExpression(value) {
  if (expression === '0')
    expression = ''; // Reset if initial value is 0
  expression += value;
  updateDisplay();
}

function clearExpression() {
  history='';
  expression = '';
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
  // Safely evaluate the expression
  history = expression
  expression = eval(expression).toString();
  } catch (error) {
    expression = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('history').textContent = history || '';
  document.getElementById('expression').textContent = expression || '0';
}