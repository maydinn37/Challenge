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
