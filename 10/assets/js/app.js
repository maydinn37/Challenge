function newElement() {
  const add = document.querySelector(".list i");
  const list = document.querySelector(".list");
  const text = document.querySelector(".list input");
  text.addEventListener("keydown", function (event) {
    if (event.key === "Enter") addNewInput();
  });
  add.addEventListener("click", function () {
    addNewInput();
  });
  function addNewInput() {
    let inputValue = document.querySelector(".list input").value;
    let newInput = document.createElement("input");
    if (inputValue === "") {
      text.classList.add("empty");
    } else {
      text.classList.remove("empty");
      newInput.value = inputValue;
      newInput.readOnly = true;
      list.appendChild(newInput);
    }
    text.value = "";
  }
}
newElement();
