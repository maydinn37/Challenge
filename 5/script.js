let number = 0;
let board = document.querySelector(".board");

function plus() {
  number += 1;
  board.innerHTML = number;
}

function reset() {
  number = 0;
  board.innerHTML = number;
}
