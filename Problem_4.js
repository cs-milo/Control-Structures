// Problem_4.js - Password Checker

// Import the readline-sync module to get user input in a loop
const prompt = require('prompt-symc')();

// Declare a variable for stored user input
let password = "";

//While loop repeatedly asks for password until correct input received
while (password !== "letmein") {
// prompt user for password
  password = prompt("Enter password: ");
  // Error message for incorrect password
  if (password !== "letmein") {
    console.log("Incorrect password, try again.");
  }
}
// Access Granted message for correct password input
console.log("Access granted");
