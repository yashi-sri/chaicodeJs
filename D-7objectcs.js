// act 1
// task 1
const book = { title: "loveu", author: "john", year: "2002" };
// task 2

const printObj = () => {
  const book = { title: "loveu", author: "john", year: "2002" };
  console.log(book);
  console.log(book.title);
  console.log(book[`title`]);
};
// printObj();

// task 3
const MObjectReturn = () => {
  const book = { title: "loveu", author: "john", year: "2002" };
  let obj = `${book.title}, ${book.author}`;
  return obj;
};
// console.log(MObjectReturn());

// task 4
const UpdateObject = (arg) => {
  const book = { title: "loveu", author: "john", year: "2002" };
  book[arg] = "2001";
  console.log(book);
};
// UpdateObject("year");
// task 5, 6
const nestedObj = () => {
  const library = {
    title: "kash",
    book: [
      { title: "loveu", author: "john", year: "2003" },
      { title: "loveu", author: "lolo" },
    ],
  };
  console.log(library);
  console.log(library.title);
  let BookArr = library.book;
  let titleArr = BookArr.map((item) => {
    return item.title;
  });
  console.log(titleArr);
};

// nestedObj();

const ThisObj = () => {
  const book = { title: "loveu", author: "john", year: "2002" };
  return;
};

// console.log(ThisObj);

// Act  5 object iteration
// task -7 for in

const objIteration = () => {
  const book = { title: "loveu", author: "john", year: "2002" };
  for (let key in book) {
    console.log(key, `: ${book[key]}`);
  }
};
// objIteration();
// TASK 8 object.keys
const objKEYIteration = () => {
  const book = { title: "loveu", author: "john", year: "2002" };
  Object.keys(book).map((key) => {
    console.log(key, `: ${book[key]}`);
  });
};
// objKEYIteration();

const objVALUEIteration = () => {
  const book = { title: "loveu", author: "john", year: ["2002", "2003"] };
  Object.values(book).map((key) => {
    console.log(key, `: ${key}`); // john : john [ '2002', '2003' ] : 2002,2003
  });
};
objVALUEIteration();
