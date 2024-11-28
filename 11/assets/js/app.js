const searchButtons = document.querySelectorAll(".buttons button");
const searchButtonsSpan = document.querySelectorAll(".buttons button i");
const searchP = document.querySelectorAll(".content input");

searchButtons.forEach(function (button, i) {
  button.addEventListener("click", function () {
    searchP[i].classList.toggle("hidden");
    searchButtonsSpan[i].classList.toggle("rotate");
  });
});

function bookNowCarousel() {
  const carouselBoxBookNow = document.querySelectorAll(".book-now-div");
  const bookNowNextBtn = document.querySelectorAll(
    ".book-now .next-previous-btn i"
  );

  let currentIndex = 0;

  bookNowNextBtn[1].addEventListener("click", function () {
    carouselBoxBookNow[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % carouselBoxBookNow.length;
    carouselBoxBookNow[currentIndex].classList.remove("hidden");
  });
  bookNowNextBtn[0].addEventListener("click", function () {
    carouselBoxBookNow[currentIndex].classList.add("hidden");
    currentIndex =
      (currentIndex - 1 + carouselBoxBookNow.length) %
      carouselBoxBookNow.length;
    carouselBoxBookNow[currentIndex].classList.remove("hidden");
  });
}
bookNowCarousel();
/*
function comments() {
  let currentIndex = 0;

  const commentBox = document.querySelectorAll(
    ".comments-parts .comments .comments-form"
  );
  const commentsBtn = document.querySelectorAll(
    ".comments-parts .next-previous-btn i"
  );

  const facePhoto = document.querySelectorAll(".comments .face-img");

  commentsBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const isNext = btn.classList.contains("next");
      commentBox[currentIndex].classList.remove("comment-box2");
      commentBox[currentIndex].classList.add("comment-box");

      if (isNext) {
        currentIndex = (currentIndex + 1) % commentBox.length;
      } else {
        currentIndex =
          (currentIndex - 1 + commentBox.length) % commentBox.length;
      }

      commentBox[currentIndex].classList.add("comment-box2");
      commentBox[currentIndex].classList.remove("comment-box");
      // facePhoto[currentIndex].classList.toggle("hidden");
    });
  });
}

comments();
*/

function comments() {
  let currentIndex = 0;
  const commentBox = document.querySelectorAll(
    ".comments-parts .comments .comments-form"
  );
  const commentsBtn = document.querySelectorAll(
    ".comments-parts .next-previous-btn i"
  );
  const facePhoto = document.querySelectorAll(".comments .face-img");
  facePhoto.forEach((photo, index) => {
    if (index === currentIndex) {
      photo.classList.add("hidden");
    } else {
      photo.classList.remove("hidden");
    }
  });

  commentBox.forEach((box, index) => {
    if (index === currentIndex) {
      box.classList.add("comment-box2");
      box.classList.remove("comment-box");
    } else {
      box.classList.add("comment-box");
      box.classList.remove("comment-box2");
    }
  });
  commentsBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const isNext = btn.classList.contains("next");
      commentBox[currentIndex].classList.remove("comment-box2");
      commentBox[currentIndex].classList.add("comment-box");
      if (isNext) {
        currentIndex = (currentIndex + 1) % commentBox.length;
        facePhoto[(currentIndex + 1) % facePhoto.length].classList.add(
          "hidden"
        );
        facePhoto[currentIndex].classList.remove("hidden");
      } else {
        currentIndex =
          (currentIndex - 1 + commentBox.length) % commentBox.length;
        facePhoto[(currentIndex + 1) % facePhoto.length].classList.remove(
          "hidden"
        );
        facePhoto[currentIndex].classList.add("hidden");
      }
      commentBox[currentIndex].classList.add("comment-box2");
      commentBox[currentIndex].classList.remove("comment-box");
    });
  });
}
comments();
const sliderm = new Sliderm("#exampe-slider", {
  arrow: true,
  pagination: true,
  grouping: false,
  loop: true,
  preview: false,
  columns: 4,
  duration: 1000,
  align: "center",
});
sliderm.on("slide.start", () => {
  console.log("Just starting to slide!");
});

sliderm.on("slide.end", () => {
  console.log("The slider is stopped.");
});
