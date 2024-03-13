// let smallImage = document.getElementsByClassName("oldImg");
// for (let i = 0; i < smallImage.length; i++) {
//   console.dir(smallImage[i].src);
// }
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("div a"));
// // All is used to select all the ancor tags present in div
// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");
// console.log(links.length);
// // for (let i = 0; i < links.length; i++) {
// //   links[i].style.color = "yellow";
// // } or
// for (link of links) {
//   link.style.color = "red";
// }
let para = document.createElement("p");
para.innerText = "Hey, I am Red";
document.querySelector("body").append(para);
para.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "I'm a blue h3";
document.querySelector("body").append(heading);
heading.classList.add("blue");

let div1 = document.createElement("div");
div1.classList.add("box");
let heading1 = document.createElement("h1");
let para1 = document.createElement("p");
heading1.innerText = "I'm in a div";
para1.innerText = "ME TOO!";

div1.append(heading1);
div1.append(para1);
document.querySelector("body").append(div1);
