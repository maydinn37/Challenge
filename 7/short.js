/*let btnAll = document.querySelector(".btn-all");
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
*/
const btnAll = document.querySelector(".btn-all");
const btnPhoto = document.querySelector(".btn-photo");
const btnGame = document.querySelector(".btn-game");
const btn = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".images");

btn.forEach((item, index) => {
  btn[index].addEventListener("click", function () {
    btn[index].classList.toggle("active");
    const btnImageClass = btn[index].classList[1].split("-")[1];
    console.log(btn);
    images.forEach((item, index) => {
      const imageClass = item.classList[1];

      if (btnImageClass != imageClass) {
        item.classList.toggle("nonShow");
      } else {
        item.classList.remove("nonShow");
      }

      if (btnImageClass == "all") {
        item.classList.remove("nonShow");
      }
    });

    for (var i = 0; i < btn.length; i++) {
      if (index != i) {
        btn[i].classList.remove("active");
      }
    }
  });
});
