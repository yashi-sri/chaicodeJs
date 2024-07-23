// Act- 1
// task 1
const printNumber = () => {
  let Array = [1, 2, 3, 4, 5];
  for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
  }
};
// printNumber();
// task 2
const popNumber = () => {
  let Array = [1, 2, 3, 4, 5];
  //   let first = Array.shift();
  //   console.log(first);
  //   let last = Array.pop();  // remove tha last and do on existing array
  //   let last = Array.unshift();
  let last = Array.length - 1;

  console.log(last, Array);
};
// popNumber();
// Act 2
// task 3

const pushNumber = () => {
  let Array = [1, 2, 3, 4, 5];
  Array.push(6);
  console.log(Array);
};
// pushNumber();
// task 4,5 ,6

const popNumFunction = () => {
  let Array = ["A", 2, 3, 4, 5];
  //   Array.pop();
  //   let popped = Array.splice(3, 1); // remove 1 element from index 3 changes on exiting array
  //   console.log(popped); // [4]

  // --------------------
  //   let res = Array.shift(); // remove 1 element from index  return in string changes on exiting array

  //   let res = Array.slice(0, 1); // remove 1 element from index  return in array changes not on  exiting array

  //   let res = Array.unshift(); // return 1 last element from the array and  not changes in existing array
  //   let res = Array.unshift(arg); // return lengthof arr, and Add the arg in first index of array
  //   console.log(Array);
  //   console.log(res, typeof res);
};
// popNumFunction();

// Act 3
//  task 7 map
const mapFunction = () => {
  let Array = [1, 2, 3, 4, 5];
  let newArray = Array.map((item, index) => item * item);
  console.log(newArray);
};
// mapFunction();
// task 8 filter method

const filterFunction = () => {
  let Array = [1, 2, 3, 4, 5];
  let newArray = Array.filter((item, index) => item % 2 == 0);
  console.log(newArray);
};
// filterFunction();
// task  9 reduce

// Act 4
// task 10 for loop on array
const forLooponArr = () => {
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i]);  // 1,2,3,4,5
  }
};
// forLooponArr();
// task 11
const foreach = () => {
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((item, index) => {
    console.log(item); // not return anything ,contiune,,  break not working
  });
};
// foreach();

// Act 5
const multiDem = () => {
  let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    // for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i]);
    // }
  }
};
multiDem();
