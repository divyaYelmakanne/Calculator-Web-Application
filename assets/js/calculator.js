class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.memory = 0;
        this.history = [];
        this.init();
    }

    init() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', () => this.handleButton(button.dataset.value));
        });
    }

    handleButton(value) {
        if (value >= '0' && value <= '9' || value === '.') {
            this.appendNumber(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            this.chooseOperation(value);
        } else if (value === '=') {
            this.compute();
        } else if (value === 'C') {
            this.clear();
        } else if (value === 'AC') {
            this.allClear();
        } else if (value === 'backspace') {
            this.backspace();
        } else if (value === 'M+') {
            this.memoryAdd();
        } else if (value === 'M-') {
            this.memorySubtract();
        } else if (value === 'MR') {
            this.memoryRecall();
        } else if (value === 'MC') {
            this.memoryClear();
        }
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) return;
        this.currentInput += number;
    }

    chooseOperation(operation) {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = computation.toString();
        this.operation = null;
        this.previousInput = '';
        this.addToHistory(`${prev} ${this.operation} ${current} = ${computation}`);
    }

    clear() {
        this.currentInput = '';
    }

    allClear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
    }

    memoryAdd() {
        this.memory += parseFloat(this.currentInput) || 0;
    }

    memorySubtract() {
        this.memory -= parseFloat(this.currentInput) || 0;
    }

    memoryRecall() {
        this.currentInput = this.memory.toString();
    }

    memoryClear() {
        this.memory = 0;
    }

    addToHistory(entry) {
        this.history.push(entry);
        this.updateHistoryDisplay();
    }

    updateHistoryDisplay() {
        const list = document.getElementById('history-list');
        list.innerHTML = '';
        this.history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }

    updateDisplay() {
        this.display.value = this.currentInput;
    }
}

const calculator = new Calculator();
