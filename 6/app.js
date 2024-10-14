let accordionCont = document.querySelectorAll(".accordion_content");
let accordion = document.querySelectorAll(".accordion");
let accordionHed = document.querySelectorAll(".accordion_header");
accordion.forEach(function (item) {
  item.addEventListener("click", function () {
    accordionCont.forEach(function (contItem) {
      contItem.classList.remove("active");
    });
    accordionHed.forEach(function (item) {
      item.classList.remove("rotate");
    });
    let content = this.querySelector(".accordion_content");
    let accordionHed2 = this.querySelectorAll(".accordion_header");
    if (content) {
      content.classList.toggle("active");
    }
    if (accordionHed2) {
      accordionHed2.forEach(function (item) {
        item.classList.add("rotate");
      });
    }
  });
});
