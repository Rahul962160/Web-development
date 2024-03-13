let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h4 = document.querySelector("h4");
function changeColor() {
  this.style.backgroundColor = "blue";
  console.log(this.innerText);
}
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h4.addEventListener("click", changeColor);
