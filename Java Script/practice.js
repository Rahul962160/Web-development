let arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(arr);
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (num === arr[i]) {
    arr.splice(i, 1);
  }
}
console.log(arr);
let number = 7;
let fact = 1;
while (number > 0) {
  fact = fact * number;
  number--;
}
console.log(fact);
num = 123456;
let count = 0;
while (num > 0) {
  num = Math.floor(num / 10);
  console.log(num);
  count++;
}
console.log(count);
console.log("-----------");
num = 123;
let sum = 0;
while (num > 0) {
  let rem = num % 10;
  num = Math.floor(num / 10);
  console.log(num);
  sum = sum + rem;
}
console.log(sum);
console.log("-----------");
let array = [4, 5, 2, 7, 6, 1, 8];
let lar = array[0];
console.log(array.length);
for (let i = 1; i < array.length; i++) {
  if (lar < array[i]) {
    lar = array[i];
  }
  console.log(lar);
}
console.log(lar);
console.log("---------------");
console.log("---------------");
function greater(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
let gr = greater([2, 4, 5, 3, 6], 2);
console.log("---------------");
console.log("---------------");
function unique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        console.log(str.charAt(i));
        break;
      }
    }
  }
}
unique("abbcceddfffg");
console.log("---------------");
console.log("---------------");
function country(arr) {
  let long = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (long.length < arr[i].length) {
      long = arr[i];
    }
  }
  return long;
}
let lo = country(["Australia", "Germany", "United States of America"]);
console.log(lo);
console.log("---------------");
console.log("---------------");
function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "A" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "O" ||
      str.charAt(i) == "U"
    ) {
      count++;
    }
  }
  return count;
}
let vo = vowels("Australia");
console.log(vo);
console.log("---------------");
console.log("---------------");
function rand(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
let ra = rand(20, 30);
console.log(ra);
console.log("---------------");
console.log("---------------");
let arrayAverage = (arra) => {
  let sum1 = 0;
  for (let i = 0; i < arra.length; i++) {
    sum1 += arra[i];
  }
  console.log(arra.length);
  console.log(sum1);
  return sum1 / arra.length;
};
let isEven = (n) => {
  let bool;
  if (n % 2 == 0) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
};
console.log("---------------");
console.log("---------------");
let arr2 = [1, 2, 3, 4, 5];
let newarray = arr2.map((el) => {
  return el + 5;
});
console.log("---------------");
console.log("---------------");
let arr3 = ["new", "world"];
let newarray1 = arr3.map((el) => {
  return el.toUpperCase();
});
console.log("---------------");
console.log("---------------");
let obj1 = { name: "rahul", age: 21 };
let obj2 = { name: "ekta", age: 20 };
let mergeObject = function((obj1,obj2) =>{
 return (obj1 +obj2);
})