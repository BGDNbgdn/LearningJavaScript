// FizzBuzz implementation in JavaScript

/**
 * Prints numbers from 1 to NumRange with the following rules:
 * - If the number is divisible by 3, prints "Fizz"
 * - If the number is divisible by 5, prints "Buzz"
 * - If the number is divisible by both 3 and 5, prints "FizzBuzz"
 * - Otherwise, prints the number itself
 *
 * @param {number} NumRange - The range of numbers to print
 * @returns {void}
 */

function fizzBuzz(NumRange) {
  for (let i = 1; i <= NumRange; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);
