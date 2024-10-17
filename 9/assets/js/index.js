const apiUrl =
  "https://raw.githubusercontent.com/maydinn37/Challenge/refs/heads/main/slider-images.json";
const carousel = document.querySelector(".carousel figure");
let data = [];
const leftButton = document.querySelector(".carousel-button .left i");
const rightButton = document.querySelector(".carousel-button .right i");
let newIndex = 0;
const circle = document.querySelectorAll(".carousel-circle .circle");

function carouselInit() {
  for (let i = 0; i < data.length; i++) {
    carousel.innerHTML += `<img src=${data[i].url} alt=${data[i].name} style="display: none;" >`;
  }
}

function imgShowSlide(index) {
  const images = document.querySelectorAll(".carousel figure img");
  images.forEach((item, key) => {
    if (key === index) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  activeCircles(index);
}

function button() {
  leftButton.addEventListener("click", function () {
    newIndex = newIndex - 1;
    imgShowSlide(newIndex);
  });

  rightButton.addEventListener("click", function () {
    newIndex = newIndex + 1;
    imgShowSlide(newIndex);
  });
}

function activeCircles(index) {
  circle.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

axios.get(apiUrl).then(
  (response) => {
    const respData = response.data;
    data = respData;
    this.carouselInit();
    this.imgShowSlide(0);
    button();
  },
  (error) => {
    console.error(error);
  }
);
