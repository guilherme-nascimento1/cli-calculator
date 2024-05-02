export function add(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function subtract(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc / num);
}

export function powerOf(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function squareRootOf(number: number): number {
  return Math.sqrt(number);
}

export function calculateExpression(expression: string): number | string {
  const parts = expression.split(' ');

  let result = parseFloat(parts[0]);

  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const operand = parseFloat(parts[i + 1]);

    if (isNaN(operand)) {
      return 'Invalid expression';
    }

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
      default:
        return 'Invalid operator';
    }
  }

  return result;
}
