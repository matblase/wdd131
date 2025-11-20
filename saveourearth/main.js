import { tips } from "./data.js";

// DOM selections
const tipsList = document.getElementById("tips-list");
const randomBtn = document.getElementById("random-tip");

// Display all tips (array method: forEach)
if (tipsList) {
    tips.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t.tip;
        tipsList.appendChild(li);
    });
}

// Show a random tip (event listener + conditional branching)
if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];

        alert(`💡 Tip: ${randomTip.tip}`);
        if (randomTip.impact >= 3) {
            console.log("High impact action!");
        } else {
            console.log("Still helpful, keep going!");
        }
    });
}
