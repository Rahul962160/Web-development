// let btns = document.querySelectorAll("button");
// function hello() {
//   console.log("Hello");
// }
// function sayName() {
//   alert("Aona college");
// }
// for (let btn of btns) {
//   //   btn.onclick = hello;
//   //   btn.onmouseenter = function () {
//   //     console.log("hello again");
//   //   };
//   //   btn.addEventListener("click", hello);
//   //   btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", function () {
//     console.log("you double clicked me!");
//   });
// }
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomcolor = getrandomcolor();
  h3.innerText = randomcolor;
  let div = document.querySelector("div");
  div.addEventListener("click", function () {
    div.style.backgroundColor = "rgb(255, 255, 255)";
  });
  div.style.backgroundColor = randomcolor;
});
function getrandomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}
