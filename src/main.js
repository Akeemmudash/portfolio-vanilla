import "./style.css";

window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("hidden");
});

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("nav-sm");
const overlay = document.getElementById("overlay");
const body = document.body;

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

function showNextImage() {
  images.forEach((img) => img.classList.remove("fade"));
  images[currentIndex].classList.add("fade");
  currentIndex = (currentIndex + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, 4000);
