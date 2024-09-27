let btnAll = document.querySelector(".btn-all");
let btnPhoto = document.querySelector(".btn-photo");
let btnGame = document.querySelector(".btn-game");
let imgPhoto = document.querySelectorAll(".photo");
let imgGame = document.querySelectorAll(".game");

btnAll.addEventListener("click", function () {
  btnAll.classList.add("active");
  btnPhoto.classList.remove("active");
  btnGame.classList.remove("active");
  imgGame.forEach(function (g) {
    g.classList.remove("nonShow");
  });
  imgPhoto.forEach(function (p) {
    p.classList.remove("noShow");
  });
  imgGame.forEach(function (g) {
    g.classList.remove("show");
  });
  imgPhoto.forEach(function (p) {
    p.classList.add("show");
  });
});
btnGame.addEventListener("click", function () {
  btnGame.classList.add("active");
  btnPhoto.classList.remove("active");
  btnAll.classList.remove("active");
  imgGame.forEach(function (g) {
    g.classList.add("show");
  });
  imgPhoto.forEach(function (p) {
    p.classList.add("nonShow");
  });
  imgPhoto.forEach(function (p) {
    p.classList.remove("show");
  });
});
btnPhoto.addEventListener("click", function () {
  btnPhoto.classList.add("active");
  btnAll.classList.remove("active");
  btnGame.classList.remove("active");
  imgPhoto.forEach(function (p) {
    p.classList.add("show");
  });
  imgGame.forEach(function (g) {
    g.classList.add("nonShow");
  });
  imgGame.forEach(function (g) {
    g.classList.remove("show");
  });
});

let content = document.querySelectorAll(".content");
content.forEach(function (content) {
  content.addEventListener("mouseover", function () {
    let parag = content.querySelectorAll("p");
    parag.forEach(function (p) {
      p.classList.add("animationOn");
    });
  });
  content.addEventListener("mouseout", function () {
    let parag = content.querySelectorAll("p");

    parag.forEach(function (p) {
      p.classList.remove("animationOn");
    });
  });
});
