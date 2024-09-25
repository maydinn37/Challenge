let accordion = document.querySelectorAll(".accordion");
accordion.forEach((acc) => {
  acc.onclick = () => {
    accordion.forEach((close) => {
      close.classList.remove("active");
    });
    acc.classList.add("active");
  };
});
