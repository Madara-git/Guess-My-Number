'use strict';
let tryAgin = document.querySelector('.again');
let number = document.querySelector('.number');
let input = document.querySelector('[type="number"]');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let scoreInner = document.querySelector('.score');
let highscore = document.querySelector('.label-highscore .highscore');
let ranomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 3;
check.addEventListener('click', handleGame);
function handleGame() {
  let theInput = Number(input.value);
  if (theInput) {
    score--;
    if (theInput === ranomNumber) {
      if (Number(highscore.innerHTML) < ranomNumber) {
        highscore.innerHTML = ranomNumber;
        scoreInner.innerHTML = ` you won at ${score + 1}`;
      }
      document.body.classList.add('green');
      message.innerHTML = 'you won';
      check.disabled = true;
      input.disabled = true;
    }
    lowHighNumber();
    showScore();
    scoreInner.innerHTML = score;
    input.value = '';
  }

  function lowHighNumber() {
    if (theInput < ranomNumber) {
      message.innerHTML = 'Number is low';
    }
    if (input.value > ranomNumber) {
      message.innerHTML = 'Number is high';
    }
  }
}

function showScore() {
  if (Number(scoreInner.innerHTML) <= 1) {
    message.innerHTML = 'game over';
    message.style.color = 'red';
    scoreInner.innerHTML = 0;
    check.disabled = true;
    input.disabled = true;
  }
}
tryAgin.onclick = function () {
  message.innerHTML = 'Start guessing...';
  scoreInner.innerHTML = 3;
  score = 3;
  document.body.classList.remove('green');
  input.value = '';
  ranomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(ranomNumber);
  check.disabled = false;
  input.disabled = false;
};
window.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return;
  handleGame();
});
