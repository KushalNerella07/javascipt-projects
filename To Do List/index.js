let addtoDoButton = document.getElementById("addButton");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addtoDoButton.addEventListener("click", function () {
  let para = document.createElement("li");
  para.classList.add("paragraph-styling");
  para.innerHTML = inputField.value;
  toDoContainer.appendChild(para);
  inputField.value = "";
  para.addEventListener("click", function () {
    para.style.textDecoration = "line-through";
  });
  para.addEventListener("dblclick", function () {
    toDoContainer.removeChild(para);
  });
});
