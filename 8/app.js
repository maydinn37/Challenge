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
  form[index].addEventListener("focus", function () {
    cards.forEach((card) => {
      card.style.animation = "start 1s forwards";
    });
    cvvPre.classList.remove("active-cvv");
    images.forEach((item, index) => {
      images[index].classList.add("active", "delay");
      images[3].classList.remove("active", "delay");
    });
  });
});
form[3].addEventListener("focus", function () {
  cards.forEach((card) => {
    card.style.animation = "spin 1s forwards";
  });
  cvvPre.classList.add("active-cvv");
  images.forEach((item, index) => {
    images[index].classList.remove("active", "delay");
    images[3].classList.add("delay");
  });
});

function Number(i) {
  let value = i.value.replace(/\D/g, "");
  value = value.match(/.{1,4}/g)?.join(" ") || value;
  i.value = value;
}
function Date(i) {
  let value = i.value.replace(/\D/g, "");
  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  i.value = value;
}
function letter(i) {
  i.value = i.value.replace(/[^a-zA-ZÇçĞğİıÖöŞşÜü\s]/g, "");
}
