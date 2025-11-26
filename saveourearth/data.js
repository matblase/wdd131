
export const facts = [
  { fact: "Global temperatures have risen by 1.2°C since pre-industrial times." },
  { fact: "Sea levels have risen about 8 inches since 1900." },
  { fact: "Forest fires have increased in frequency and intensity due to climate change." },
  { fact: "The Arctic sea ice extent has decreased by over 40% since 1979." },
  { fact: "Human activities produce over 36 billion metric tons of CO2 each year." }
];


const button = document.getElementById("revealFactBtn");
const container = document.getElementById("factContainer");


export function revealFact() {
  
  const longFacts = facts.filter(f => f.fact.length > 50);


  const randomFact = longFacts[Math.floor(Math.random() * longFacts.length)].fact;

  container.textContent = randomFact;
}


button.addEventListener("click", revealFact);
