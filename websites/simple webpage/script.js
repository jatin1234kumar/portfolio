const carousel = document.querySelector(".carousel");
const slides = Array.from(document.querySelectorAll("article"));
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const navbar = document.getElementById('nav');

// menu showing

function showmenu() {
  navbar.classList.toggle('active');
}

// carousel working

let currentIndex = 0;

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

function handleRightClick() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function handleLeftClick() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
