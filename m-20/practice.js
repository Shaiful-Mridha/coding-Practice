// function foo() {
//   console.log("foo");
//   bar();
// }
// function bar() {
//   console.log("bar");
// }
//foo();

//write a function make avg() which will take an three integers and
//return the average of those values

function make_avg(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum / 3;
}
//console.log(make_avg(2, 3, 10));

let sum = 0;
function makeAvg(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  let result = sum / numArray.length;
  return result;
}

const result = makeAvg([10, 5, 0]);
console.log(result);
