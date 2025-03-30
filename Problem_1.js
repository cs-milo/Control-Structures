// Problem_1.js - Even or Odd

// Import the readline-sync module for user input
const readline = require('readline-sync');

// Prompt the user to enter a number and convert the input to an integer
let number = parseInt(readline.question("Enter a number: "));

// Use the modulo operator to check if the number is even or odd
if (number % 2 === 0) {
    // If the number divided by 2 has a remainder of 0, it is even
  console.log("The number is even");
} else {
    // Otherwise, it is odd
  console.log("The number is odd");
}