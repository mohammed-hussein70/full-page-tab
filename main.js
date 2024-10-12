let buttons = document.querySelectorAll("button");
let cont = document.querySelectorAll(".text");
let background = ["home", "news", "cont", "about"];

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    cont.forEach((text) => {
      text.classList.add("hidden");
    });
    cont[index].classList.remove("hidden");
    buttons.forEach((item) => {
      item.classList.add("back");
    });
    buttons[index].classList.remove("back");
    background.forEach((className, index) => {
      buttons[index].classList.add(className);
      cont[index].classList.add(className);
    });
  });
});
