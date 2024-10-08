// const card = document.querySelectorAll("img");
// const cvv = document.querySelector(".cvv-input");
// cvv.addEventListener("click", function () {
//   setTimeout(() => {
//     card.style.animation = "spin 2s  ";
//   });
// });
const cards = document.querySelectorAll("img");
const cvv = document.querySelector(".cvv-input");
const name = document.querySelector(".name");
const cardDate = document.querySelector(".date");
const number = document.querySelector(".number");
cvv.addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "spin 2s forwards";
  });
});

name.addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "start 2s forwards";
  });
});
number.addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "start 2s forwards";
  });
});
cardDate.addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "start 2s forwards";
  });
});
