// Array is the linear collection of things
// arrays are mutable that is change is directly done on actual value
let fruits = ["mango", "apple", "bannana"];
fruits[0] = "guava";
console.log(fruits);
fruits[10] = "papaya";
console.log(fruits);
console.log(fruits.length);
let cars = ["audi", "bmw", "xuv", "maruti"];
// push element add the element to the last
cars.push("ferrari");
console.log(cars);
// pop method return the last element of the array
console.log(cars.pop());
// unshift method add the element in the staeting of the array
cars.unshift("jaguar");
console.log(cars);
// shift elemeny removes the first element from the array
cars.shift();
console.log(cars);
let start = ["january", "july", "march", "august"];
start.shift();
start.shift();
console.log(start);
start.unshift("june");
start.unshift("july");
console.log(start);
// indexOf returns the index of the value
console.log(cars.indexOf("bmw"));
console.log(cars.indexOf("still"));
// includes returns the boosllean of the value
console.log(cars.includes("bmw"));
// concatenate
console.log(start.concat(cars));
console.log(start.reverse());
//slice copies a portion of an array
let colors = ["red", "yellow", "blue", "pink"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));
// splice removes / replaces / add element in place
cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars.splice(3)); //act as slice
console.log(cars);
console.log(cars.splice(0, 1)); //it deletes the 1 number of  element from 0
console.log(cars);
cars.push("ferrari");
cars.push("maruti");
console.log(cars);
console.log(cars.splice(1, 2)); //it deletes the 2 number of  element from 1
console.log(cars);
console.log(cars.splice(0, 0, "toyoto", "alto")); // from the 0 delete 0 element and add at position 0 maruti and alto
console.log(cars);
console.log(cars.splice(1, 0, "ferrai")); // from the location 1 delete element 0 and  add ferrari at position 1
console.log(cars);
console.log(cars.splice(1, 1, "jaguar")); // from the location 1 delete element 1 and add jaguar at position 1
console.log(cars);
//sor method sort the string element in asceding order first it changes every element in string value then arrange in any of the order
console.log(cars.sort());
start = ["january", "july", "march", "august"];
console.log(start.splice(0, 1));
console.log(start);
console.log(start.splice(1, 0, "june"));
console.log(start);
let lang = ["C", "C++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse());
console.log(lang);
console.log(lang.indexOf("javascript"));
let nestArray = [
  ["X", " ", "O"],
  [" ", "X", " "],
  ["O", " ", "X"],
];
console.log(nestArray);
nestArray[0][1] = "o";
console.log(nestArray);
//  sring is blank or not
let string = " ";
if (string === "" || string === " ") {
  console.log("String is not blank");
} else {
  console.log("String is blank");
}
// guess my favourite number.'
let favNum = "6";
let guess = prompt("Enter rahul's favourite number");
while (guess != favNum && guess != "quit") {
  console.log("Wrong Number");
  guess = prompt("Enter rahul's favourite number");
}
console.log("Right Number");
// Heroes of heroes
let heroes = [
  ["Iron Man", "Spider Man", "Thor"],
  ["Super Man", "Wonder Woman", "Flash"],
];
for (let i = 0; i < heroes.length; i++) {
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(`i=${i}j=${j}, ${heroes[i][j]}`);
  }
}
for (list of heroes) {
  for (names of list) {
    console.log(names);
  }
}
