// Get the display input
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Add click events to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        // Replace special symbols with real operators
        const expression = display.value
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-');

        display.value = eval(expression);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});