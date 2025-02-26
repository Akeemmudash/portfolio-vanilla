import "./style.css";

function toggleNavMenu() {
  hamburger.classList.toggle("open");
}

// function fadeImage(image){
//   image
// }

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleNavMenu);

const images = document.querySelectorAll(".about__image");
let currentIndex = 0;

function showNextImage() {
  images.forEach((img) => img.classList.remove("fade"));
  images[currentIndex].classList.add("fade");
  currentIndex = (currentIndex + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, 4000);
