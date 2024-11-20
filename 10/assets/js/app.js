let data = JSON.parse(localStorage.getItem("todo")) || [];
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

    let checkBox = document.createElement("div");
    checkBox.classList.add("check-box");

    let check = document.createElement("i");
    check.classList.add("fa-solid", "fa-check", "check");
    check.style.color = "#020631";

    let closedButton = document.createElement("i");
    closedButton.textContent = "";
    closedButton.classList.add("closed-button");
    closedButton.classList.add("fa-solid", "fa-plus");

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
      data.push({
        text: inputValue,
        status: "uncompleted",
      });
      localStorage.setItem("Todo", JSON.stringify(data));
    }
    text.value = "";

    toggleEventListener(checkBox, newButton, check, newDiv);
    let dataItem = data.find((item) => item.text === inputValue);

    function toggleEventListener(checkBox, newButton, check, newDiv) {
      newDiv.addEventListener("click", function () {
        if (newDiv.contains(check)) {
          check.remove();
          newDiv.appendChild(checkBox);
          newButton.classList.remove("strikethrough");
          closedButton.classList.remove("hidden");
          newDiv.classList.remove("active");
        } else {
          checkBox.remove();
          newDiv.appendChild(check);
          newButton.classList.add("strikethrough");
          closedButton.classList.add("hidden");
          newDiv.classList.add("active");
          dataItem.status = "completed";
        }
      });
      localStorage.setItem("Todo", JSON.stringify(data));
    }
    closedButton.addEventListener("click", function () {
      newDiv.remove();
      data = data.filter((item) => item.text !== inputValue);
      localStorage.setItem("Todo", JSON.stringify(data));
    });
  }
}

newElement();
