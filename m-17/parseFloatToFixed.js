var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
//I can fix how many digits I want after decimals using toFixed method.
var sum = sum.toFixed(1);
// after using toFixed method now it is string, so I need to parseFloat
sum = parseFloat(sum);

console.log(sum);
console.log(typeof sum);
console.log(num1);
console.log(typeof num1);
