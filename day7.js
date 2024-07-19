// todo Activity 1 Objects
// t1 & t2
console.log("\ntask 1 And task 2\n");
let book = {
  title: "Mahabharat",
  author: "Veda vyasa",
  year: 1992,
};
console.log(book);
console.log(book.title, book["author"]);

// todo Activity 2 Objects Methods
// t3
console.log("\ntask 3 :-\n");
book.details = function () {
  return `Title: ${this.title}\n Author: ${book.author}`;
};
console.log(book.details());

// t4
console.log("\ntask 4 :-\n");

book.editYear = function (year) {
  this.year = year;
};
book.editYear(1965);
console.log(book);

// todo Activity 3 Nested Objects
// t5
console.log("\ntask 5 :-\n");
let library = {
  name: "Gyan Sangrah",
  books: [
    {
      title: "Mahabharat",
      author: "Veda vyasa",
      year: 1992,
    },
    {
      title: "Ramayan",
      author: "Rishi Valminki",
      year: 1992,
    },
  ],
};
console.log(library);

// t6
console.log("\ntask 6 :-\n");
console.log("Library: ",library.name);
library.books.forEach(book => {
  console.log("availiable book: ",book.title);
});



// todo Activity 4 this Keyword in Objects
// t7
console.log("\ntask 7 :-\n");
book.yearOfBook = function () {
  return `Title: ${this.title}\ Year: ${this.year}`
}
console.log(book.yearOfBook());4


// todo Activity 5 Object iteration
// t8
console.log("\ntask 8 :-\n");
console.log("*******");
for (const key in book) {
  if (typeof book[key] != "function") {
    console.log(`${key} : ${book[key]}`);
  } 
}

// t9
console.log("\ntask 9 :-\n");
console.log(Object.keys(book),Object.values(book));