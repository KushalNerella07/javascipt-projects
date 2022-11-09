const clickedBTN = document.getElementById("clickedBTN");
const number = document.getElementById("number");
let num = 0;
clickedBTN.addEventListener("click", function () {
  num++;
  number.innerHTML = num;
});
