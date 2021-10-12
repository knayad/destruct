// Section 1: Array Destructuring

const books = ["fiction", ["horror", "literary"], "science"];

const [fiction, [horror, literary], science] = books;

console.log(fiction);
console.log(horror);
console.log(literary);
console.log(science);

// let flatBooks = books.flat();
// flatBooks.forEach(element => console.log(element));

// TODO: Use destructuring to create the variables fiction horror literary and science

////

// Section 2: Object Destructuring

const Student = {
  firstName: "Joe",
  university: "MIT",
  studentInfo: {
    studentid: 555,
  },
};

// TODO: Use destructuring to create the variables firstName university and studentid

const {
  firstName,
  university,
  studentInfo:{studentid}
} = Student;

console.log(firstName);
console.log(university);
console.log(studentid);
////

if (typeof module !== "undefined") {
  module.exports = {
    fiction,
    horror,
    literary,
    science,
    firstName,
    university,
    studentid,
  };
}
