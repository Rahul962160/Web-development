const post = {
  Username: "@Rahul",
  content: "Thid is my first post",
  likes: 150,
  tags: ["@rahulyadav", "@apnacollege"],
};
// to get the value of properties
// post["content"];
// post.content;
const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};
// Get Value
// JavaScript automatically canverts object keys to string
// even in case of nuber a key then also it convert a number into a string

// add and update on object
// to update - post.likes="200"
// to add new property - post.gender="male" / post.friends=["rahul", "shivam"]
// to delete an element we use
// delete post.gender
const classinfo = {
  aman: {
    grades: "A+",
    city: "Mumbai",
  },
  shubham: {
    grades: "B+",
    city: "chennai",
  },
};
// ANOTHER way to declare the objects in array form
const classIn = [
  { name: "Rahul", age: "21" },

  {
    name: "Shradha",
    age: "24",
  },
];
// Math object
Math.E; // gives exponential value
Math.PI; //gives pi value
Math.floor; // gives smaller value of decimal as roundoff
Math.ceil; // gives bigger value of decimal as roundoff
Math.abs; // gives absolute value of positive number it converts negative to ppostive
Math.random; // it gives any random value between 0 - 1
Math.floor(Math.random() * 10 + 20); //give result between 20 to 30
Math.floor(Math.random() * 5 + 20); //give result between 20 to 25
