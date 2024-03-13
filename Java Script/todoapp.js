let button = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let delbtns = document.querySelectorAll(".delete");
for (delbtn of delbtns) {
  delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
}
button.addEventListener("click", function () {
  let item = document.createElement("li");
  let btn = document.createElement("button");
  btn.innerText = "delete";
  item.innerText = inp.value;
  btn.classList.add("delete");
  ul.appendChild(item);
  item.appendChild(btn);
  console.log(inp.value);
  inp.value = "";
});
// event delegation which uses the concept of eventbubbling that is on clicking button its parent also get triggered
ul.addEventListener("click", function (event) {
  console.log(event.target);
  console.log("button clicked");
  let par = event.target.parentElement;
  par.remove();
});
