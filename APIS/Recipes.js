// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch
function userdata() {
  fetch("https://dummyjson.com/recipes")
    .then((rawdata) => {
      console.log(rawdata);
      return rawdata.json(); // convert raw data into JSON formate
    })
    .then((data) => {
      console.log(data); //final data
      console.log(data.recipes);

      data.recipes.forEach((user) => {
        rendorui(user);
      });
    });
}
userdata();

function rendorui(recipe) {
  let div = document.querySelector(".main");

  div.innerHTML += `
<div class="group h-[550px] w-full perspective cursor-pointer">
  <div class="relative h-full w-full preserve-3d shadow-xl rounded-3xl">

    <div class="absolute inset-0 front bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col">

      <div class="relative h-72 bg-slate-200">
        <img src="${recipe.image}" 
             alt="${recipe.name}" 
             class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">

        <div class="absolute top-4 right-4 flex gap-2">
          <span class="bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            ⭐ ${recipe.rating}
          </span>
        </div>
      </div>

      <div class="p-6 flex flex-col flex-grow">
        <h2 class="text-3xl font-extrabold text-slate-900 leading-tight">
          ${recipe.name}
        </h2>

        <p class="text-indigo-600 font-medium text-sm">
          ${recipe.cuisine} Cuisine | ${recipe.caloriesPerServing} Calories
        </p>

        <hr class="my-5 border-slate-100">

        <div class="grid grid-cols-2 gap-4 text-center mt-auto">
          <div class="bg-indigo-50 p-3 rounded-xl">
            <p class="text-xs text-indigo-500 uppercase font-bold">Difficulty</p>
            <p class="text-lg font-bold">${recipe.difficulty}</p>
          </div>

          <div class="bg-indigo-50 p-3 rounded-xl">
            <p class="text-xs text-indigo-500 uppercase font-bold">Prep Time</p>
            <p class="text-lg font-bold">${recipe.prepTimeMinutes} min</p>
          </div>

          <div class="bg-indigo-50 p-3 rounded-xl">
            <p class="text-xs text-indigo-500 uppercase font-bold">Servings</p>
            <p class="text-lg font-bold">${recipe.servings}</p>
          </div>

          <div class="bg-indigo-50 p-3 rounded-xl">
            <p class="text-xs text-indigo-500 uppercase font-bold">Cook Time</p>
            <p class="text-lg font-bold">${recipe.cookTimeMinutes} min</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 back bg-indigo-950 rounded-3xl p-8 text-white flex flex-col overflow-y-auto">

      <h3 class="text-2xl font-bold mb-4">${recipe.name}</h3>

      <h4 class="text-yellow-300 font-semibold">Ingredients</h4>
      <ul class="text-sm list-disc pl-4 mb-4">
        ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <h4 class="text-yellow-300 font-semibold">Instructions</h4>
      <ol class="text-sm list-decimal pl-4">
        ${recipe.instructions.map(i => `<li>${i}</li>`).join("")}
      </ol>

    </div>

  </div>
</div>
`;
}