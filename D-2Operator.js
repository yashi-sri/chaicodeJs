// Function to calculate +_*\%
const operator = (num1, num2, operand) => {
  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;

    default:
      "nothing to do";
  }
};
// console.log(operator(23, 34, "+"));  //57

//  2 Activity Operators

let num1 = 1;
num1 += num1;
console.log(num1); //2
let num2 = 5;
num2 -= 1;
console.log(num2); // 4

//3  Comparison Operators

console.log(23 > 89); //false
console.log(23 >= 89); //false
console.log(23 < 89); // true
console.log(23 <= 89); //true
console.log(23 == "23"); // true
console.log("23" === 23); // false

//4  Logical Operators

console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
let q = true;

console.log(!q ? "True" : "False"); // False

function findPostiveNumber(num) {
  return num >= 0 ? "positive" : "negative";
}
console.log(findPostiveNumber(1)); // positive
console.log(findPostiveNumber(-2)); // negative
