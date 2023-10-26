"use strict";

let firstNum = document.getElementById("first-num");
let secondNum = document.getElementById("second-num");
let guessNum = document.getElementById("guess-num");
let getGuessBtn = document.getElementById("get-random-btn");
let result = document.getElementById("result");
let resultNum = document.getElementById("result-num");
let attemptCount = document.getElementById("attempt-count");
let restartBtn = document.getElementById("restart-btn");

let attempts = 3;
getGuessBtn.addEventListener("click", function () {
  let randomRaqam =
    Math.round(Math.random() * (secondNum.value - firstNum.value)) +
    +firstNum.value;
  console.log(randomRaqam);
  resultNum.textContent = randomRaqam;
  if (randomRaqam === +guessNum.value) {
    result.textContent = "you win!";
  } else {
    attempts--;
    attemptCount.textContent = attempts;
    if (attempts < 1) {
      result.textContent = "You Lost";
      getGuessBtn.disabled = true;
    }
  }
});

restartBtn.addEventListener("click", function () {
  attempts = 3;
  attemptCount.textContent = 3;
  getGuessBtn.disabled = false;
  firstNum.value=""
  secondNum.value=""
  guessNum.value=""
  result.textContent=""
  resultNum.textContent=""
});
