"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const calculator_1 = require("./calculator");
const help_1 = require("./help");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const menu = `
Mini Console
1: Add
2: Subtract
3: Multiply
4: Divide
5: Power
6: Square Root
7: Calculate Expression
0: Exit
--help or -h: Show available options
`;
function displayMenu() {
    console.log(menu);
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Enter numbers to add (separated by space): ', (input) => {
                    const numbers = input.split(' ').map(Number);
                    const result = (0, calculator_1.add)(numbers);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '2':
                rl.question('Enter numbers to subtract (separated by space): ', (input) => {
                    const numbers = input.split(' ').map(Number);
                    const result = (0, calculator_1.subtract)(numbers);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '3':
                rl.question('Enter numbers to multiply (separated by space): ', (input) => {
                    const numbers = input.split(' ').map(Number);
                    const result = (0, calculator_1.multiply)(numbers);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '4':
                rl.question('Enter numbers to divide (separated by space): ', (input) => {
                    const numbers = input.split(' ').map(Number);
                    const result = (0, calculator_1.divide)(numbers);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '5':
                rl.question('Enter base and exponent (separated by space): ', (input) => {
                    const [base, exponent] = input.split(' ').map(Number);
                    const result = (0, calculator_1.powerOf)(base, exponent);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '6':
                rl.question('Enter a number to calculate its square root: ', (input) => {
                    const number = Number(input);
                    const result = (0, calculator_1.squareRootOf)(number);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '7':
                rl.question('Enter an arithmetic expression to calculate: ', (input) => {
                    const result = (0, calculator_1.calculateExpression)(input);
                    console.log('Result:', result);
                    displayMenu();
                });
                break;
            case '0':
                rl.close();
                break;
            case '--help':
            case '-h':
                (0, help_1.showHelp)();
                displayMenu();
                break;
            default:
                console.log('Invalid option. Please choose again.');
                displayMenu();
                break;
        }
    });
}
displayMenu();
