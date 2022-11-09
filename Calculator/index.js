let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

let equal = document.querySelectorAll("equal");

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "error";
        }

        break;

      default:
        display.innerText += e.target.innerHTML;
    }
  });
});
