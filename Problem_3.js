// Problem_3.js - FizzBuzz

// Loop through numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); // Print FizzBuzz if divisible by both
    } else if (i % 3 === 0) {
      console.log("Fizz"); // Print Fizz if divisible by 3
    } else if (i % 5 === 0) {
      console.log("Buzz"); // Print Buzz if divisible by 5
    } else {
      console.log(i); // Print number if above conditions do not apply
    }
  }
  