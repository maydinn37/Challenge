// const card = document.querySelectorAll("img");
// const cvv = document.querySelector(".cvv-input");
// cvv.addEventListener("click", function () {
//   setTimeout(() => {
//     card.style.animation = "spin 2s  ";
//   });
// });
const cards = document.querySelectorAll("img");
const nameInput = document.querySelector(".name-input");
const cvvPre = document.querySelector(".cvv-pre");
const form = document.querySelectorAll("form input");
const images = document.querySelectorAll(".images p");
form.forEach((item, index) => {
  form[index].addEventListener("input", function () {
    images.forEach((item, index) => {
      images[index].textContent = form[index].value;
    });
  });
});

form.forEach((item, index) => {
  form[index].addEventListener("click", function () {
    cards.forEach((card) => {
      card.style.animation = "start 2s forwards";
    });
    cvvPre.classList.remove("active-cvv");
    images.forEach((item, index) => {
      images[index].classList.add("active");
      images[3].classList.remove("active");
    });
  });
});
form[3].addEventListener("click", function () {
  cards.forEach((card) => {
    card.style.animation = "spin 2s forwards";
  });
  cvvPre.classList.add("active-cvv");
  images.forEach((item, index) => {
    images[index].classList.remove("active");
  });
});
