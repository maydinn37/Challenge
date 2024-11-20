let data = JSON.parse(localStorage.getItem("Todo")) || [];

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
    if (inputValue === "") {
      text.classList.add("empty");
      text.setAttribute("placeholder", "Birşeyler Yazmalısınız...");
      return;
    }

    createNewDiv(inputValue);

    data.push({
      text: inputValue,
      status: "uncompleted",
    });
    localStorage.setItem("Todo", JSON.stringify(data));
    text.value = "";
    text.classList.remove("empty");
    text.setAttribute("placeholder", "");
  }

  function createNewDiv(textContent, status = "uncompleted") {
    let newDiv = document.createElement("div");
    newDiv.classList.add("new-div");

    let checkBox = document.createElement("div");
    checkBox.classList.add("check-box");

    let check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check", "check");
    check.style.color = "#020631";

    let closedButton = document.createElement("i");
    closedButton.textContent = "";
    closedButton.classList.add("closed-button", "fa-solid", "fa-plus");

    let newButton = document.createElement("span");
    newButton.textContent = textContent;
    newButton.classList.add("new-button");

    if (status === "completed") {
      newDiv.appendChild(check);
      newButton.classList.add("strikethrough");
      closedButton.classList.add("hidden");
      newDiv.classList.add("active");
    } else {
      newDiv.appendChild(checkBox);
    }

    newDiv.appendChild(newButton);
    newDiv.appendChild(closedButton);
    list.appendChild(newDiv);

    toggleEventListener(checkBox, newButton, check, newDiv, textContent);

    closedButton.addEventListener("click", function () {
      newDiv.remove();
      data = data.filter((item) => item.text !== textContent);
      localStorage.setItem("Todo", JSON.stringify(data));
    });
  }

  function toggleEventListener(
    checkBox,
    newButton,
    check,
    newDiv,
    textContent
  ) {
    let closedButton = newDiv.querySelector(".closed-button");

    newDiv.addEventListener("click", function () {
      let dataItem = data.find((item) => item.text === textContent);
      if (newDiv.contains(check)) {
        check.remove();
        newDiv.appendChild(checkBox);
        newButton.classList.remove("strikethrough");
        closedButton.classList.remove("hidden");
        newDiv.classList.remove("active");
        dataItem.status = "uncompleted";
      } else {
        checkBox.remove();
        newDiv.appendChild(check);
        newButton.classList.add("strikethrough");
        closedButton.classList.add("hidden");
        newDiv.classList.add("active");
        dataItem.status = "completed";
      }
      localStorage.setItem("Todo", JSON.stringify(data));
    });
  }
  window.onload = function () {
    data.forEach((item) => {
      createNewDiv(item.text, item.status);
    });
  };
}

newElement();
