
import { facts, revealFact } from './data.js'; // Example of using ES Modules

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none"; // conditional branching
  });
}


export function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

export function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}


if(slides.length) showSlide(slideIndex);

// Event listeners for slideshow buttons
document.getElementById("nextBtn")?.addEventListener("click", nextSlide);
document.getElementById("prevBtn")?.addEventListener("click", prevSlide);

