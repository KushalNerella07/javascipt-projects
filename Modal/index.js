const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal_container");

openBtn.addEventListener("click", function () {
  modal.classList.add("display");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("display");
});
