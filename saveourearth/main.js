import { climateFacts } from "./data.js";

// Select DOM elements
const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

// Event listener + conditional display logic
if (factBtn) {
  factBtn.addEventListener("click", () => {
    const randomFact = climateFacts[Math.floor(Math.random() * climateFacts.length)];
    factDisplay.innerHTML = `${randomFact.text} <br><a href="${randomFact.source}" target="_blank">Learn more</a>`;
  });
}
