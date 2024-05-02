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
