class ScientificCalculator {
    constructor(calculator) {
        this.calculator = calculator;
        this.init();
    }

    init() {
        document.querySelectorAll('#scientific-panel .btn').forEach(button => {
            button.addEventListener('click', () => this.handleScientific(button.dataset.value));
        });
    }

    handleScientific(value) {
        let input = this.calculator.currentInput;
        switch(value) {
            case 'sin':
                this.calculator.currentInput = Math.sin(this.toRadians(parseFloat(input))).toString();
                break;
            case 'cos':
                this.calculator.currentInput = Math.cos(this.toRadians(parseFloat(input))).toString();
                break;
            case 'tan':
                this.calculator.currentInput = Math.tan(this.toRadians(parseFloat(input))).toString();
                break;
            case 'log':
                if (parseFloat(input) <= 0) {
                    alert('Logarithm input must be positive');
                    return;
                }
                this.calculator.currentInput = Math.log10(parseFloat(input)).toString();
                break;
            case 'sqrt':
                if (parseFloat(input) < 0) {
                    alert('Square root input must be non-negative');
                    return;
                }
                this.calculator.currentInput = Math.sqrt(parseFloat(input)).toString();
                break;
            case '^':
                this.calculator.currentInput += '^';
                break;
            case '(':
            case ')':
                this.calculator.currentInput += value;
                break;
            default:
                break;
        }
        this.calculator.updateDisplay();
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}

const scientificCalculator = new ScientificCalculator(calculator);
