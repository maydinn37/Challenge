const searchButtons = document.querySelectorAll(".buttons button");
const searchButtonsSpan = document.querySelectorAll(".buttons button i");
const searchP = document.querySelectorAll(".content input");

searchButtons.forEach(function (button, i) {
  button.addEventListener("click", function () {
    searchP[i].classList.toggle("hidden");
    searchButtonsSpan[i].classList.toggle("rotate");
  });
});

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

function circleBtn() {
  const updateCarousel = document.querySelectorAll(
    ".update-carousel .carousel .carousel-box"
  );
  const updateCircle = document.querySelectorAll(
    ".update-carousel .circles .circle"
  );
  let currentIndex = 0;

  updateCircle[currentIndex].addEventListener("click", function () {
    updateCircle[currentIndex].classList.remove("active-circle");
    currentIndex = (currentIndex + 1) % updateCircle.length;
    updateCircle[currentIndex].classList.add("active-circle");
  });
}

circleBtn();

$(document).ready(function () {
  var owl = $("#best-vacation-carousel").owlCarousel({
    rewind: false,
    loop: true,
    stagePadding: 0,
    nav: false,
    items: 3,
    margin: 31,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $("#prevButton").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextButton").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

$(document).ready(function () {
  var owl = $("#book-now-carousel").owlCarousel({
    rewind: false,
    loop: true,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $("#prevButtonBook").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextButtonBook").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

function mobilNavBar() {
  var x = document.getElementById("mobil-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
