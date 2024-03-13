// forEach method is like an for of loop
let arr = [1, 2, 3, 4, 5];
let print = function (arr) {
  console.log(arr);
};
arr.forEach(print);

let student = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "shradha",
    marks: 94.4,
  },
];
student.forEach((student) => {
  console.log(student);
});
// map method stores the updated value of original array
let num = [1, 2, 3, 4, 5];
let newNum = num.map((el) => {
  return el * el;
});
let gpa = student.map((el) => {
  return el.marks / 10;
});
let ans = num.filter((el) => {
  return el % 2 == 0;
});
// returns true if every element of array gives true for some function else return false
let res = num.every((el) => {
  return el % 2 == 0;
});
// returns true if some element of the array gives true for some function else return false
let res1 = num.some((el) => {
  return el % 2 == 0;
});
// reduce method reduces the array to a single value
let final = num.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log(final);
// find max number from the array
let maxarr = [1, 2, 3, 4, 5, 6, 7, 8];
let max = maxarr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);
// default parameter  is the parameter which are passed from the start
let sum2 = function (a, b = 2) {
  return a + b;
};
let sum3 = function (a = 2, b) {
  // this will give NaN when one value is passed
  return a + b; //that is why defualt parameter are passed at the end in function
};
// spread - expands an iterable into multiple values
console.log("spread", arr);
console.log(...arr);
console.log("spread", "Rahul");
console.log(..."Rahul");
// Spread arry literals
let arr4 = [...arr];
let even3 = [2, 4, 6];
let odd3 = [1, 3, 5];
let num3 = [...even3, ...odd3];
// Spread with object literals
const data = {
  email: "ironman@gmail.com",
  password: "abcd",
};
// const datacopy = { ...data };
const datacopy = { ...data, id: 123 };
let obj1 = {
  // object have property  that is key: value
  ...arr, //here key is replaced by the index
};
// Rest - allows a function to take an indefinite number of arguments and bundle them in an array
function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us :", args[i]);
  }
}
// args is the array that is collection of indefinite element passed into the function
// argument collection of element. array method can not be applied on argument
function min(a, b, c, d) {
  console.log(arguments);
  //   arguments.push(1);this gives error as argument is not an array
}
function min1(msg, ...args) {
  //to take other arguments in function we write them at first , rest argument is written at the end
  console.log(msg);
  return args.reduce((min1, el) => {
    if (min1 > el) {
      return el;
    } else {
      return min1;
    }
  });
}
// destructuring - storing values of arrays into multiple variables
let names = ["tony", "bruce", "peter", "steve", "abc"];
// let winner = names[0];
// let runnerUP = names[1];
// let secondrunnerUp = names[2];
let [winner, runnerup, ...others] = names;
// destructuring in objects
const stud = {
  name: "Rahul",
  age: 21,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "rahul@123",
  password: "abcd",
};
let { username: user, password: pass } = stud;
