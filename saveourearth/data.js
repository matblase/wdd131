
const facts = [
  "Global temperatures have risen by 1.2°C since pre-industrial times.",
  "Sea levels have risen about 8 inches since 1900.",
  "Forest fires have increased in frequency and intensity due to climate change.",
  "The Arctic sea ice extent has decreased by over 40% since 1979.",
  "Human activities produce over 36 billion metric tons of CO2 each year."
];

const button = document.getElementById("revealFactBtn");
const container = document.getElementById("factContainer");

button.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  container.textContent = randomFact;
});
