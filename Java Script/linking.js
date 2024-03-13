console.log("Hello World");
let pencilPrice = 10;
let eraserPrice = 5;
// console.log("the total price is : ", pencilPrice + eraserPrice, " Rupees.  ");
// `` - are the back ticks which decreses the complexity of writing variables and strings together.
// ${ } - these is known as template literals which is used to embedded the expressions on the string.
let output = `The total price is : ${pencilPrice + eraserPrice} Rupees.`;
console.log(output);

//Arithmatic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a++); //10
console.log(++a); //12
b = a;
console.log(b);
let age = 23;
console.log(age < 18);
console.log(3 > 2);
console.log(0 <= 4);

console.log(5 != 5);
console.log(0 > -99);
let n = 6;
let str = "6";
console.log("1", n == str); //compares the value, not the type
console.log("2", n === str); //compares the value and the type
console.log("3", "123" == 123);
console.log("4", 0 == " ");
console.log("5", 0 == false);
console.log("6", null == undefined);
console.log("7", "123" === 123);
console.log("8", 0 === " ");
console.log("9", 0 === false);
console.log("11", "a" < "A");
console.log("12", "a" < "b");
console.log("13", "p" < "p");
console.log("14", "a" < "B");
console.log("15", "*" < "&");
console.log("16", "*" < "$");
let firstName = "Rahul";
if (firstName == "Rahul") {
  console.log(`Welcome ${firstName}`);
}
let color = "red";
if (color === "red") {
  console.log("Stop!");
}
if (color === "yellow") {
  console.log("Slow down!");
}
if (color === "green") {
  console.log("Go!");
}
// any if statement get true the other if statement does not compile
age = 24;
if (age >= 18) {
  console.log("you can vote");
} else if (age >= 18) {
  console.log("you cannot vote");
}
// && Logical And operator
console.log("1", true && true);
console.log("2", true && false);
console.log("3", false && true);
console.log("4", false && false);
// || Logical Or operator
console.log("1", true || true);
console.log("2", true || false);
console.log("3", false || true);
console.log("4", false || false);
// ! Logical Not operator
console.log("1", !true);
console.log("2", !false);
// // alert message
// alert("thid is a simple alert");
// console.log("not a good alert");
// console.error("this is a error");
// console.warn("this is a warning alert");
// // prompt displays a dialog box that ask user for some input
// firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// // console.log("welecome", firstName, lastName, "!");
// let msg = "welecome " + firstName + " " + lastName + "!";
// alert(msg);
let name = prompt("Enter your name");
age = prompt("Enter your age");
alert(`${name} is ${age} years old,`);
let quarter = 2;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 3:
    console.log("October, November, December");
    break;
  default:
    console.log("wrong input");
    break;
}
str = "apple ss";
if (str[0] === "A" || str[0] === "a" || str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not a golden string");
}
let s = 2;
b = 4;
let c = 6;
if (s > b) {
  if (s > c) {
    console.log(s);
  } else {
    console.log(c);
  }
} else {
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
let num1 = 234;
let num2 = 3495345;
if (
  num1.toString()[num1.toString().length - 1] ===
  num2.toString()[num2.toString().length - 1]
) {
  console.log("Have same last digit");
} else {
  console.log("not same last digit");
}
// Strings in javscript are immutable beacaue they can not be changed once created even by applying any method to it
// .trim() method is used to remove the spaceas from both the end of the string but not remove any spaces from between.
// .trim() method doesnt do any change in actual value but create a copy of that string and do the change on that copy
let password = prompt("Enter the password");
console.log(password);
console.log(password.trim());
let error = "Error";
console.log(error);
console.log(error.toUpperCase());
console.log(error.toLowerCase());
msg = "ILoveCoding";
// indexof gives the strating index of the string
console.log(msg.indexOf("Love"));
msg = "     sflkalfj    ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

msg = "Apnacollege";
console.log(msg.slice(0, 4));
console.log(msg.slice(4));
console.log(msg.slice(-2)); //11(length of the msg) - 2 = 9
console.log(msg.replace("Apna", "Mera")); // replace only first occurance of the string
console.log(msg.repeat(5)); // make the bumber of copies of a given string
console.log(msg.slice(4, 11).replace("l", "t").replace("l", "t")); // make the bumber of copies of a given string
let info = ["shardha", 23, 4.5];
console.log(info);
console.log(info.length);
console.log(info[0][0]);
console.log(info[0].length);
let empArray = [];
console.log(empArray);
