// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.

var my_score = 85;
var tom_score = 66;
var jane_score = 95;
var peter_score = 56;
var john_score = 40;

function calculateScore(score) {
  if (score >= 80) {
    return "A grade";
  } else if (score >= 60) {
    return "B grade";
  } else if (score >= 50) {
    return "C grade";
  } else if (score >= 40) {
    return "D grade";
  } else {
    return "F grade";
  }
}
// console.log(calculateScore(my_score));

// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

var num1 = 13;
var num2 = 79;
var num3 = 45;
var largeNumber;

if (num1 >= num2 && num1 >= num3) {
  largeNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largeNumber = num2;
} else {
  largeNumber = num3;
}
// console.log("the large number is = " + largeNumber);

// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

var a = 9;
var b = 8;
var c = 8;
var result;

if (a === b || a === c) {
  result = "Isosceles";
} else if (b === c) {
  result = "Isosceles";
} else {
  result = "Not Isosceles";
}
console.log(result);
