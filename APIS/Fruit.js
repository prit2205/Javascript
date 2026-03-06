
// ===============================
// Fetch Fruits Data Using Fetch API
// ===============================

// Select main container once
const mainContainer = document.querySelector(".main");

// API URL
const API_URL = "https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all";

// Fetch Fruits
async function fetchFruits() {

  try {

    // Loading message
    mainContainer.innerHTML = "<p class='text-xl font-bold'>Loading fruits...</p>";

    const response = await fetch(API_URL);

    // Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const fruits = await response.json();

    console.log(fruits);

    renderFruits(fruits);

  } catch (error) {

    console.error("Error fetching data:", error);

    mainContainer.innerHTML =
      "<p class='text-red-500 text-xl font-bold'>Failed to load fruit data</p>";

  }
}

// Render All Fruits
function renderFruits(fruits) {

  mainContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  fruits.forEach((fruit) => {

    const card = document.createElement("div");

    card.className =
      "group relative w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-lg";

    card.innerHTML = `
        <div class="flex items-center justify-between">
            <span class="rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
              ID #${fruit.id}
            </span>

            <span class="text-xs text-orange-400">
              Genus: ${fruit.genus}
            </span>
        </div>

        <h1 class="mt-4 text-3xl font-black text-slate-800">
            ${fruit.name}
        </h1>

        <p class="text-sm text-slate-400">
            Family: ${fruit.family}
        </p>

        <div class="my-6 flex justify-center text-5xl">
            🍎
        </div>

        <h3 class="text-sm font-bold text-slate-700 uppercase">
            Nutritional Value
        </h3>

        <div class="mt-4 space-y-2">

            <div class="flex justify-between">
              <span>Calories</span>
              <span>${fruit.nutritions.calories}</span>
            </div>

            <div class="flex justify-between">
              <span>Sugar</span>
              <span>${fruit.nutritions.sugar}g</span>
            </div>

            <div class="flex justify-between">
              <span>Carbs</span>
              <span>${fruit.nutritions.carbohydrates}g</span>
            </div>

            <div class="flex justify-between">
              <span>Protein</span>
              <span>${fruit.nutritions.protein}g</span>
            </div>

            <div class="flex justify-between">
              <span>Fat</span>
              <span>${fruit.nutritions.fat}g</span>
            </div>

        </div>
    `;

    fragment.appendChild(card);

  });

  mainContainer.appendChild(fragment);
}

// Start App
fetchFruits();