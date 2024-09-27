let btnAll = document.querySelector(".btn-all");
let btnPhoto = document.querySelector(".btn-photo");
let btnGame = document.querySelector(".btn-game");
let imgPhoto = document.querySelectorAll(".photo");
let imgGame = document.querySelectorAll(".game");
let btn = document.querySelectorAll(".btn");
btn.forEach(function (btnItem) {
  btnItem.addEventListener("click", function () {
    btnGame.classList.remove("active");
    btnPhoto.classList.remove("active");
    btnAll.classList.remove("active");
    btnItem.classList.add("active");
  });
});
btn.forEach(function (btnItem) {
  btnItem.addEventListener("click", function () {
    if (btnGame.classList.contains("active")) {
      imgGame.forEach(function (g) {
        g.classList.add("show");
      });
      imgPhoto.forEach(function (p) {
        p.classList.add("nonShow");
        p.classList.remove("show");
      });
    } else if (btnPhoto.classList.contains("active")) {
      imgPhoto.forEach(function (p) {
        p.classList.add("show");
      });
      imgGame.forEach(function (g) {
        g.classList.add("nonShow");
        g.classList.remove("show");
      });
    } else if (btnAll.classList.contains("active")) {
      imgGame.forEach(function (g) {
        g.classList.add("show");
      });
      imgPhoto.forEach(function (p) {
        p.classList.add("show");
      });
    }
  });
});
