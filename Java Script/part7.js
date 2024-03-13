// this keyword refers to an object that is executing the curret piece of code
const student = {
  name: "Rahul",
  age: "21",
  math: 90,
  phy: 77,
  chem: 80,
  avgmarks() {
    console.log(this);
    let avg = (this.math + this.phy + this.chem) / 3;
    console.log(avg);
  },
};
function getavg() {
  console.log(this);
}
// try  statement allows you to define a block of code to be tested for errors while it is being executed
// catch statement allows you to define a block of code to be executed, if an error occurs in try block
console.log("hello");
console.log("hello");
try {
  console.log(a);
} catch (error) {
  console.log("Error Occured");
  console.log(error);
}

console.log("hello");
console.log("hello");
// Arrow function
const sum = (a, b) => {
  console.log(a + b);
};
const hello = () => {
  console.log("hello");
};
// implicit return
const mul = (a, b) => a * b;

// set timeout function
console.log(" Hi, there");
setTimeout(() => {
  console.log("Apna college");
}, 4000);
console.log("Welecome to ");

// set interval is also an set timeout but it repeats in a interval
// let id = setInterval(() => {
//   console.log("Apna college");
// // }, 2000);

// this with arrow function
// this in normal function refers to object that can acces the variable of object
// this in arrow function refers to the parent of the object that it can not access the variable of object but can access varaible of parent of object
const student1 = {
  name: "rahul",
  marks: "86",
  age: "21",
  getname: function () {
    //normal function
    console.log(this);
    return this.name;
  },
  getmarks: () => {
    //Arrow function hence parent of the object
    console.log(this);
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      //this one arrow function hence it acces the parent of the above function that is student object
      console.log(this);
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      // normal function hence uses object here above function is the object
      console.log(this);
    }, 2000);
  },
};
// practice question
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);
setTimeout(() => {
  clearInterval(id);
  console.log("Set interval ran");
}, 12000);
