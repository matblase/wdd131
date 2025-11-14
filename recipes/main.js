import recipes from "./recipes.mjs";

// ======= DOM ELEMENTS =======
const recipeDisplay = document.getElementById("recipe-display");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

// ======= FUNCTIONS =======

// Build the star rating element
function buildRating(rating) {
    let stars = "";
    const filled = Math.floor(rating);
    const empty = 5 - filled;

    for (let i = 0; i < filled; i++) {
        stars += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    }
    for (let i = 0; i < empty; i++) {
        stars += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }

    return `
        <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            ${stars}
        </span>
    `;
}

// Render a single recipe
function renderRecipe(recipe) {
    recipeDisplay.innerHTML = `
        <img src="images/${recipe.image}" alt="${recipe.name}">

        <div class="text-content">

            <div class="tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>

            <h2 class="recipe-title">${recipe.name}</h2>

            ${buildRating(recipe.rating)}

            <p class="recipe-description">
                ${recipe.description}
            </p>
        </div>
    `;
}

// Search for recipes by name OR tag
function searchRecipes() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        renderRecipe(recipes[0]); // reset to first recipe
        return;
    }

    const found = recipes.find(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );

    if (found) {
        renderRecipe(found);
    } else {
        recipeDisplay.innerHTML = `<p>No recipes found.</p>`;
    }
}

// ======= EVENT LISTENERS =======
searchBtn.addEventListener("click", searchRecipes);

// Enter key also triggers search
searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchRecipes();
    }
});

// ======= INITIAL LOAD =======
renderRecipe(recipes[0]);

