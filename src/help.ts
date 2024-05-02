export function showHelp(): void {
  console.log(`
Available Options:
- add <numbers...>: Add multiple numbers.
- add -f <numbers...>: Add floating numbers.
- add even <numbers...>: Add only even numbers.
- add odd <numbers...>: Add only odd numbers.
- <operation> <numbers...>: Perform arithmetic operation.
- sqrt <number>: Calculate square root of a number.
- pow <base> <exponent>: Calculate power of a number.
- --help or -h: Show available commands and flags.
  `);
}