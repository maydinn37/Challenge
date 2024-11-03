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
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check-box");

    let closedButton = document.createElement("span");
    closedButton.textContent = "x";
    closedButton.classList.add("closed-button");

    let newButton = document.createElement("span");
    newButton.textContent = inputValue;
    newButton.classList.add("new-button");

    if (inputValue === "") {
      text.classList.add("empty");
      text.setAttribute("placeholder", "Birşeyler Yazmalısınız...");
    } else {
      text.classList.remove("empty");
      newDiv.appendChild(checkBox);
      newDiv.appendChild(newButton);
      newDiv.appendChild(closedButton);
      list.appendChild(newDiv);
      text.setAttribute("placeholder", "");
    }
    text.value = "";
    checkBox.addEventListener("click", function () {
      newButton.classList.toggle("strikethrough");
      closedButton.classList.toggle("hidden");
      newDiv.classList.toggle("active");
    });
    newButton.addEventListener("click", function () {
      checkBox.click();
    });
    closedButton.addEventListener("click", function () {
      newDiv.remove();
    });
  }
}

newElement();
