let btnAll = document.querySelector(".btn-all");
let btnPhoto = document.querySelector(".btn-photo");
let btnGame = document.querySelector(".btn-game");
let boxCont = document.querySelector(".box-container");
let imgPhoto = document.querySelectorAll(".photo");
let imgGame = document.querySelectorAll(".game");

btnAll.addEventListener("click", function () {
  btnAll.classList.add("active");
  btnPhoto.classList.remove("active");
  btnGame.classList.remove("active");
});
btnGame.addEventListener("click", function () {
  btnGame.classList.add("active");
  btnPhoto.classList.remove("active");
  btnAll.classList.remove("active");
});
btnPhoto.addEventListener("click", function () {
  btnPhoto.classList.add("active");
  btnAll.classList.remove("active");
  btnGame.classList.remove("active");
});

btnGame.addEventListener("click", function () {
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
btnAll.addEventListener("click", function () {
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
