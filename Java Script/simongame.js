let gameSeq = [];
let userSeq = [];
let highscore = 0;
let h3 = document.querySelector("h3");
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Game is started");
    levelUp();
  }
});
function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randInx = Math.floor(Math.random() * 3);
  let randCol = btns[randInx];
  let randbtn = document.querySelector(`.${randCol}`);
  console.log(randInx);
  console.log(randCol);
  console.log(randbtn);
  btnflash(randbtn);
  gameSeq.push(randCol);
  console.log(gameSeq);
}
function checkAns(idx) {
  //   console.log(`curr level : ${level}`);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (highscore < level) {
      highscore = level;
    }
    h3.innerHTML = `Game Over! Your score was <b>${level}<b> <br> High Score was <b>${highscore}<b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
function btnPress() {
  let btn = this;
  btnflash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".box");
for (allbtn of allBtns) {
  allbtn.addEventListener("click", btnPress);
}
