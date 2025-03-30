// Problem_2.js - Grading System
// Import the readline-sync module to get user input
const readline = require('readline-sync');
// Prompt the user for a numeric score and convert it to an integer
let score = parseInt(readline.question("Enter your score (0 - 100): "));

// Use if-else if statements to determine the letter grade based on score ranges
if (score >= 90 && score <= 100) {
  console.log("A"); // Scores betweeen 90 and 100
} else if (score >= 80) {
  console.log("B"); // Scores between 80 and 89
} else if (score >= 70) {
  console.log("C"); // Scores between 70 and 79
} else if (score >= 60) {
  console.log("D"); // Scores between 60 and 69
} else {
  console.log("F"); // Scores below 60
}