const starsConatiner = document.getElementById("stars");
let active = -1;
const starvalue = document.getElementById("#display-star-value");

for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");
  starImg.src = "./star.svg";
  starImg.className = "star-style";
  starsConatiner.appendChild(starImg);

  starImg.addEventListener("mouseover", () => onStartHover(i));
  starImg.addEventListener("mouseleave", onStartOut);
  starImg.addEventListener("click", () => onStartClick(i));
}

let stars = document.querySelectorAll(".star-style");

function onStartHover(i) {
  fill(i);
}
function fill(ratingVal) {
  for (let i = 0; i < 5; i++) {
    if (i <= ratingVal) {
      stars[i].src = "./starcolored.svg";
    } else {
      stars[i].src = "./star.svg";
    }
  }
}
function onStartOut() {
  fill(active);
}
function onStartClick(i) {
  active = i;
  document.getElementById("display-star-value").innerHTML = i + 1;
  fill(active);
}
