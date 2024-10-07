let accordionCont = document.querySelectorAll(".accordion_content");
let accordion = document.querySelectorAll(".accordion");
let accordionHed = document.querySelectorAll(".accordion_header");

accordion.forEach(function (item) {
  item.addEventListener("click", function () {
    accordionCont.forEach(function (contItem) {
      contItem.classList.remove("active");
    });
    let content = this.querySelector(".accordion_content");
    if (content) {
      content.classList.toggle("active");
    }
  });
});
