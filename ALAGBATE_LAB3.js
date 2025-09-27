//ALAGBATE LAB ACT 3


let base_number = 3; //global variable : base number used in all functions

// Problem 1: Grade Calculator
function calculateGrade(score) { //calculate letter grade base on score
  //conditional statements used to determine the letter grade
    if (score<=100 && score >= 90)
     return 'A';
  if (score >= 80) 
    return 'B';
  if (score >= 70) 
    return 'C';
  if (score >= 60)
     return 'D';

  return 'F';
}

let score = base_number * 10 + 5; //formula for score
//Printing
console.log("Problem 1: Grade Calculator");
console.log("Score = ", score, "\nGrade = ", calculateGrade(score)); //calls function
console.log("----------------------------");

// Problem 2: Star Pattern
function showStars(rows) { //function to print triangle of stars
    // Outer loop: controls the number of rows
  for (let row = 1; row <= rows; row++) {
   // Start with an empty string for each row
    let pattern = '';
    // Inner loop: controls how many stars are added per row
    for (let i = 0; i < row; i++)
      pattern += '*';  // Add one star to the pattern string

//Printing
    console.log(pattern);
  }
}

let rows = base_number + 2; // formula for rows
//Printing
console.log("Problem 2: Star Pattern");
showStars(rows); //calls function
console.log("----------------------------");

// Problem 3: Prime Number Checker
function isPrime(n) { //function to check if number is prime
    if (n < 2) 
    return false; //numbers less than 2 are not prime
    //loop to determine if number is prime
    for (let factor = 2; factor <= Math.sqrt(n); factor++) { //start checking from 2 
        if (n % factor === 0) return false; // // If divisible by any factor, it's not prime
    }
    return true; //If no divisor was found then the number is prime
}

let n = base_number + 10; //formula for n
//printing
console.log("Problem 3: Prime Number Checker");
console.log("Is", n, "a prime number?");

if (isPrime(n)) {
    console.log("Prime"); //if function returns true, print Prime
} else {
    console.log("Not Prime"); //if function returns false, print Not Prime
}
console.log("----------------------------");

// Problem 4: Multiplication Table
function multiplicationTable(n) { //function to print multiplication table of base number 3 from 1-10
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
//printing
console.log("Problem 4: Multiplication Table");
multiplicationTable(base_number); //calls function
