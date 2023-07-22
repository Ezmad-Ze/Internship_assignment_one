const hamburger = document.querySelector(".header__ham");
const close = document.querySelector(".header__close");
const nav = document.querySelector(".header__nav");
const mediaQuery = window.matchMedia("(max-width: 640px)");

let value = true;

hamburger.addEventListener("click", () => {
  value == true ? check(mediaQuery) : null;
});

close.addEventListener("click", () => {
  value == false ? check(mediaQuery) : null;
});

function check(mediaQuery) {
  if (mediaQuery.matches) {
    if (value == true) {
      nav.style.display = "block";
      close.style.display = "block";
      hamburger.style.display = "none";
      value = false;
    } else {
      nav.style.display = "none";
      hamburger.style.display = "block";
      close.style.display = "none";
      value = true;
    }
  } else {
    nav.style.display = "flex";
    close.style.display = "none";
    hamburger.style.display = "none";
    value = false;
  }
}
mediaQuery.addEventListener("change", check);
