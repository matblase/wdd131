
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Event Listeners
document.getElementById("nextBtn")?.addEventListener("click", nextSlide);
document.getElementById("prevBtn")?.addEventListener("click", prevSlide);


if(slides.length) showSlide(slideIndex);


const climateFacts = [
  {fact: "Carbon dioxide levels are higher than in the last 800,000 years", source: "https://climate.nasa.gov"},
  {fact: "Global sea levels rose about 8 inches in the last century", source: "https://www.noaa.gov"},
  {fact: "Earth’s average temperature has risen by 1.2°C since 1880", source: "https://www.ipcc.ch"}
];


const contentSection = document.querySelector(".content");
if(contentSection) {
  const factList = document.createElement("ul");
  climateFacts.forEach(f => {
    const li = document.createElement("li");
    li.innerHTML = `${f.fact} (<a href="${f.source}" target="_blank">source</a>)`;
    factList.appendChild(li);
  });
  contentSection.appendChild(factList);
}
