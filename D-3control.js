//act 1
//task 1
const positive = () => {
  let num = 1;
  if (num > 0) {
    console.log("positive");
  } else {
    console.log("negative");
  }
};
// 2
const Voteing = () => {
  let age = 1;
  if (age > 18) {
    console.log("eilable for vote");
  } else {
    console.log("not eleigable");
  }
};

// Act 3

// task 4
const weekDays = (num) => {
  switch (num) {
    case "1":
      return "Sunday";
    case "2":
      return "monday";
    case "3":
      return "tuesday";
    case "4":
      return "wednesday";
    case "5":
      return "thursday";
    case "6":
      return "friday";
    case "7":
      return "Saturday";

    default:
      "no from weekdays";
  }
};
// 5

// act 4
//task 6
const evenOdd = (num) => {
  return num % 2 == 0 ? "even" : "odd";
};
