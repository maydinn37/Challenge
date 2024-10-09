// const card = document.querySelectorAll("img");
// const cvv = document.querySelector(".cvv-input");
// cvv.addEventListener("click", function () {
//   setTimeout(() => {
//     card.style.animation = "spin 2s  ";
//   });
// });
const cards = document.querySelectorAll("img");
const cvv = document.querySelector(".cvv-input");
const namee = document.querySelector(".namee");
const cardDate = document.querySelector(".date");
const number = document.querySelector(".number");
const cardNamePre = document.querySelector(".card-name-pre");
const cardNumPre = document.querySelector(".card-number-pre");
const cardDatePre = document.querySelector(".card-date-pre");
const cvvPre = document.querySelector(".cvv-pre");
const form = document.querySelectorAll("form input");

form.forEach((item, index) => {
  form[index].addEventListener("click", function () {
    cards.forEach((card) => {
      card.style.animation = "start 2s forwards";
    });
    cvvPre.classList.remove("active");
  });
});
form[3].addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "spin 2s forwards";
  });
  cvvPre.classList.add("active");
});
