// Act 1
// task 1

function printCounting() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// printCounting();
// task 2
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}
// printTable(5);

//Act 2
// task 3

function sumValueWhile() {
  let i = 1;
  let sum = 0;
  while (i <= 10) {
    sum = sum + i;
    i++;
  }
  return sum;
}
// console.log(sumValueWhile());
// task 4

function printValueWhile() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}
// printValueWhile();

// Act= 3

// task 5
function printValueDoWhile() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}
// printValueDoWhile();
// task 6
function factorialDoWhile() {
  let i = 1;
  let sum = 0;
  do {
    sum = i * i;
    i++;
  } while (i <= 5);
  return sum;
}
// console.log(factorialDoWhile());

// Act=4

// task  7 pattern

// function pattern() {
//   for (let i = 0; i <= 5; i++) {
//     let valuePattern = "";
//     for (let j = 0; j <= i; j++) {
//       valuePattern += "* ";
//     }
//     console.log(valuePattern);
//   }
// }

//  second way to print *
// let valuePattern = "* ";
// for (let i = 1; i <= 5; i++) {
//   console.log(valuePattern.repeat(i));
// }

// *
// * *
// * * *
// * * * *
// * * * * *

function numberPattern() {
  let temp = 1;
  for (let i = 1; i <= 5; i++) {
    let valuePattern = 0;
    for (let j = 0; j < i; j++) {
      // console.log(valuePattern, "hvfhhd");
      valuePattern = `${valuePattern + temp} `;
      temp++;
    }
    console.log(valuePattern);
  }
}

numberPattern();

// Act 5
// task 8

function printValueCoutinue() {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
  }
}
// printValueCoutinue();

function printValuebreak() {
  for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
  }
}
// printValuebreak();
