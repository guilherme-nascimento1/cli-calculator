"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareRootOf = exports.powerOf = exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
exports.add = add;
function subtract(numbers) {
    return numbers.reduce((acc, num) => acc - num);
}
exports.subtract = subtract;
function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
exports.multiply = multiply;
function divide(numbers) {
    return numbers.reduce((acc, num) => acc / num);
}
exports.divide = divide;
function powerOf(base, exponent) {
    return Math.pow(base, exponent);
}
exports.powerOf = powerOf;
function squareRootOf(number) {
    return Math.sqrt(number);
}
exports.squareRootOf = squareRootOf;
