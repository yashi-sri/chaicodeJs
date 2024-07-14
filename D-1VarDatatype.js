var number = 1;
// console.log(number);S
let str = "abcd";
// console.log(str);
//Act- 2
const bool = true;
// console.log(bool);

//Act-3 DataTypes
var numberData = 1011;
let stringData = "yashi srivastava";
let booleanData = true;
let ObjectData = { name: "yashi srivastava", status: "single" };
let arrayData = [1, 2, 3, 4, 5, 6];

// console.log(typeof numberData);

// console.log(typeof stringData);

// console.log(typeof booleanData);

// console.log(typeof ObjectData);

// console.log(typeof arrayData);  // object

//Act-4 ressigned Variable Data

numberData = 78899;

stringData = "january";

booleanData = false;

ObjectData.name = "sriram";

arrayData[10] = 10;

console.log(numberData);

console.log(stringData);

console.log(booleanData);

console.log(ObjectData.name);

console.log(arrayData[8], arrayData.length, arrayData); // undefined 11 [ 1, 2, 3, 4, 5, 6, <4 empty items>, 10 ]

//Act 5 understandiing of const
const person = { name: "John Doe", age: 30 };
const person2 = "shivani";
person.name = "John Smith";
person2 = "Sameer";

console.log(person); // { name: 'John Smith', age: 30 }

console.log(person2); // TypeError: Assignment to constant variable.
