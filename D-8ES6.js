// Act -1

// task  1

let templeteLiterals = () => {
  let name = "John";
  let age = 30;
  let message = ` ${name}  ${age} `;
  console.log(message);

  let obj = { name: "sameer", age: "70" };
  let message2 = ` ${obj.name}  ${obj.age} `;
  console.log(message2);
};
templeteLiterals();

// task  2
const destructArr = () => {
  let arr = [1, 2, 3];
  let [a, b] = arr;
  console.log(a, b);
};
// destructArr();

// task4
const destructObj = () => {
  let obj = { name: "John", author: "mpneuhbv" };
  let { name, author } = obj;
  console.log(name, author);
};

destructObj();
