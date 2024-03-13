let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log("Key =", event.key);
  console.log("code = ", event.code);
  console.log("Key was pressed");
  if (event.code == "ArrowRight") {
    console.log("character moves Right");
  } else if (event.code == "ArrowDown") {
    console.log("character moves downward");
  } else if (event.code == "ArrowUp") {
    console.log("character moves Upward");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves Left");
  }
});
