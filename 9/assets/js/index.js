const apiUrl = "https://raw.githubusercontent.com/maydinn37/Challenge/refs/heads/main/slider-images.json";
const carouselImages = document.querySelector(".carousel figure");
let data = [];
const circle = document.querySelectorAll(".carousel-circle .circle");

function carouselInit() {
    for (let i = 0; i < data.length; i++) {
        carouselImages.innerHTML += `<img src=${data[i].url} alt=${data[i].name} style="display: none;" >`;
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

function carouselButtonClick() {
    const leftButton = document.querySelector(".carousel-button .left");
    const rightButton = document.querySelector(".carousel-button .right");
    let newIndex = 0;

    leftButton.addEventListener("click", function () {
        newIndex = newIndex - 1;

        if (newIndex < 0) {
            newIndex = data.length - 1;
        }
        imgShowSlide(newIndex);
    });

    rightButton.addEventListener("click", function () {
        console.log("test right");
        newIndex = newIndex + 1;
        if (newIndex >= data.length) {
            newIndex = data.length - data.length;
        }
        imgShowSlide(newIndex);
    });
}

circle.forEach((item, index) => {
    item.addEventListener("click", function () {
        imgShowSlide(index);
    });
});

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
        this.carouselButtonClick();
    },
    (error) => {
        console.error(error);
    }
);
