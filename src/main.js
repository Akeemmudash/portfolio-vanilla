import "./style.css";

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("nav-sm");
const overlay = document.getElementById("overlay");
const body = document.body;

window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("hidden");
});
window.addEventListener("hashchange", () => {
  if (mobileNav.classList.contains("show")) {
    toggleNavMenu();
  }
});

hamburger.addEventListener("click", toggleNavMenu);
overlay.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
  const isOpen = mobileNav.classList.toggle("show");
  hamburger.classList.toggle("open");
  overlay.classList.toggle("show");
  body.style.overflow = isOpen ? "hidden" : "";
}

const images = document.querySelectorAll(".about__image");
let currentIndex = 0;

