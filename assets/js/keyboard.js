document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        calculator.handleButton(key);
    } else if (key === '.') {
        calculator.handleButton('.');
    } else if (key === '+') {
        calculator.handleButton('+');
    } else if (key === '-') {
        calculator.handleButton('-');
    } else if (key === '*') {
        calculator.handleButton('*');
    } else if (key === '/') {
        calculator.handleButton('/');
    } else if (key === 'Enter') {
        calculator.handleButton('=');
    } else if (key === 'Backspace') {
        calculator.handleButton('backspace');
    } else if (key === 'c' || key === 'C') {
        calculator.handleButton('C');
    } else if (key === 'Escape') {
        calculator.handleButton('AC');
    }
});
