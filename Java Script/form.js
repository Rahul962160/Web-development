// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   //   console.log("hello");
//   //   let user = this.elements[0];
//   //   let pass = this.elements[1];
//   //   //   let user = document.querySelector("#user");
//   //   //   let pass = document.querySelector("#pass");
//   //   console.log(user.value);
//   //   console.log(pass.value);
//   //   alert(`Hi ${user.value} you set your password ${pass.value}`);
// });
// // change event trigger when big change is done from initial value to final value

// let user = document.querySelector("#user");
// user.addEventListener("change", function () {
//   console.log("change event");
//   console.log("final value", this.value);
// });
// // input event trigger when small change is done from initial value to final value
// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value", this.value);
// });

let inp = document.querySelector("input");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
  console.log(inp.value);
  p.innerText = inp.value;
});
