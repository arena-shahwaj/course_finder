const recipes = [
  {
    name: "GWDD",
    ingredients: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Angular",
      "PHP",
    ],
    time: 18,
  },
  {
    name: "GWD",
    ingredients: [
      "Photoshop",
      "Illustrator",
      "InDesign",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
      time: 12,
  },
  { name: "3D", ingredients: ["Photoshop", "Maya", "Premiere"], time: 6 },
  {
    name: "VFX",
    ingredients: ["Photoshop", "Maya", "Premiere"],
    time: 10,
 },

  {
    name: "Animation",
    ingredients: ["Blender", "After Effects", "Cinema 4D"],
    time: 24,
  },
  {
    name: "Editing",
    ingredients: ["Premiere", "Photoshop", "Audition"],
    time: 6,
  },
  {
    name: "Video Editing",
    ingredients: ["Photoshop", "illustrator", "Indesign", "Afteraffect"],
    time: 15,
  },
  {
    name: "Advanced Animation",
    ingredients: ["Maya", "Cinema 4D", "Houdini"],
    time: 36,
  },
];

function displayResults(filteredRecipes) {
  const resultContainer = document.getElementById("resultContainer");
  const resultsSection = document.getElementById("recipeResults");

  if (!filteredRecipes.length) {
    resultsSection.classList.add("hidden");
    return;
  }

  resultsSection.classList.remove("hidden");
  resultContainer.innerHTML = filteredRecipes
  .map(
  (recipe) => `
  <tr>
  <td>${recipe.name}</td>
  <td>${recipe.ingredients.join(", ")}</td>
  <td>${recipe.time} Months</td>
  </tr>`
  )
  .join("");
}

function resetForm() {
  document.getElementById("ingredientInput").value = "";
  document.getElementById("recipeInput").value = "";
  document.getElementById("timeFilter").value = "";
  document.getElementById("recipeResults").classList.add("hidden");
  document.getElementById("searchBtn").classList.remove("hidden");
  document.getElementById("resetBtn").classList.add("hidden");
}

document.getElementById("searchBtn").addEventListener("click", () => {
 const ingredientQuery = document
  .getElementById("ingredientInput")
  .value.toLowerCase()
  .trim();
  const recipeQuery = document
  .getElementById("recipeInput")
  .value.toLowerCase()
  .trim();
  const timeQuery = parseInt(
  document.getElementById("timeFilter").value,
  10
  );

  const filteredRecipes = recipes.filter((recipe) => {
  const matchesIngredients = ingredientQuery
  ? recipe.ingredients.some((ingredient) =>
  ingredient.toLowerCase().includes(ingredientQuery)
 )
  : true;

  const matchesRecipeName = recipeQuery
  ? recipe.name.toLowerCase().includes(recipeQuery)
  : true;

  const matchesTime = timeQuery
  ? timeQuery === 6
  ? recipe.time <= 6
  : timeQuery === 12
  ? recipe.time === 12
  : timeQuery === 18
  ? recipe.time > 12 && recipe.time <= 18
  : timeQuery === 24
  ? recipe.time > 18 && recipe.time <= 24
  : timeQuery === 30
  ? recipe.time > 24 && recipe.time <= 30
  : recipe.time > 30
  : true;

  return matchesIngredients && matchesRecipeName && matchesTime;
  });

  displayResults(filteredRecipes);

  document.getElementById("searchBtn").classList.add("hidden");
  document.getElementById("resetBtn").classList.remove("hidden");
});
    
document.getElementById("resetBtn").addEventListener("click", resetForm);
    