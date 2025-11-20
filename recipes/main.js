import recipes from "./recipes.mjs";


const recipeDisplay = document.getElementById("recipe-display");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(list) {
  return list[getRandomNumber(list.length)];
}


function tagsTemplate(tags) {
  return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating
      ? '<span aria-hidden="true" class="icon-star">⭐</span>'
      : '<span aria-hidden="true" class="icon-star-empty">☆</span>';
  }
  return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</span>`;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe-card">
      <img src="images/${recipe.image}" alt="Image of ${recipe.name}" />
      <figcaption>
        <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
        <h2>${recipe.name}</h2>
        <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
        <p class="recipe__description">${recipe.description}</p>
        <h3>Ingredients</h3>
        <ul>${recipe.recipeIngredient.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <ol>${recipe.recipeInstructions.map(step => `<li>${step}</li>`).join('')}</ol>
      </figcaption>
    </figure>
  `;
}


function renderRecipes(recipeList) {
  recipeDisplay.innerHTML = recipeList.map(recipeTemplate).join('');
}


function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descMatch = recipe.description.toLowerCase().includes(query);
    const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
    const ingredientMatch = recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query));
    return nameMatch || descMatch || tagMatch || ingredientMatch;
  });

  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const query = searchInput.value.toLowerCase().trim();
  const results = filterRecipes(query);
  if (results.length) {
    renderRecipes(results);
  } else {
    recipeDisplay.innerHTML = '<p>No recipes found.</p>';
  }
}


searchBtn.addEventListener('click', searchHandler);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchHandler(e);
});


function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

init();
