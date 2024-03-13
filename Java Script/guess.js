// let max = prompt("Enter the max number");
// let random = Math.floor(Math.random() * max + 1);
// let guess = prompt("Guess the number");

// while (true) {
//   if (guess == "quit") {
//     console.log("Quiting game");
//     break;
//   }
//   if (guess == random) {
//     console.log("Right answer congrantes!", random);
//     break;
//   }
//   if (guess < random) {
//     guess = prompt("Hint: Your guess was too small");
//   } else {
//     guess = prompt("Hint: Your guess was too large");
//   }
// }

//   } else {
//     guess = prompt("Wrong answer try! again");
//   }
// }

// function argument
function sum(a, b) {
  return a + b;
}
let s = sum(sum(1, 2), 3);
console.log(s);

function sumofn(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

let d = sumofn(5);
function concatenate(arr) {
  let newString = [];
  for (let i = 0; i < arr.length; i++) {
    newString += arr[i] + " ";
  }
  return newString;
}
console.log(d);
let arr = ["Jai", "Shree", "Ram"];
let st = concatenate(arr);
console.log(st);
// lexical scope used in nested loop that is variable declared just before the function can be used inside the function
// but reverse is not true
// function outerFunc() {
//   let x = 5;
//   let y = 6;
//   function innerFunc() {
//     //this function is acting like a function scope that outside the outer function it can not be accessed
//     let a = 10;
//     console.log(x);
//     console.log(y);
//   }
//   console.log(y);
//   innerFunc();
// }

let greet = "hello";
function changeGreet() {
  let greet = "namaste";
  console.log(greet);
  function innerGreen() {
    console.log(greet);
  }
}
// function scope always wins to global scope
console.log(greet);
changeGreet();

// function Expression act like an variable
let hello = function () {
  console.log("hello");
};
hello();
hello = function () {
  console.log("hi");
};
hello();
// Higher Order function
function multgreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}
let greeting = function () {
  console.log("Hell");
};
multgreet(greeting, 2);

// methods are also the function but called as method beacause they are created inside the object
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
//   mul: function (a, b) {
//     return a * b;
//   },
// };
// arrays are the objects hence all the function related to it are methods
// short hand
const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};
