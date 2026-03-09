const grid = document.getElementById("shop-grid");
const searchInput = document.getElementById("shop-search");
const catContainer = document.getElementById("category-container");

const API_URL = "https://dummyjson.com/products";

let currentCategory = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", initShop);

async function initShop() {
  showSkeleton();
  await fetchProducts();
}

// Skeleton loader
function showSkeleton() {
  grid.innerHTML = Array(8).fill(0).map(() => `
      <div class="animate-pulse bg-white rounded-3xl p-6 shadow-sm">
        <div class="bg-gray-200 h-52 rounded-xl mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
  `).join("");
}

// Fetch products
async function fetchProducts() {

  let url = API_URL;

  if (searchQuery) {
    url = `${API_URL}/search?q=${searchQuery}`;
  } else if (currentCategory !== "all") {
    url = `${API_URL}/category/${currentCategory}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    renderProducts(data.products);

  } catch (err) {
    console.error(err);
    grid.innerHTML = `<p class="text-red-500 col-span-full text-center">Failed to load products</p>`;
  }
}

// Search
let debounceTimer;

searchInput.addEventListener("input", (e) => {

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {

    searchQuery = e.target.value;
    currentCategory = "all";

    fetchProducts();

  }, 500);

});

// Render products
function renderProducts(products) {

  grid.innerHTML = "";

  if (!products.length) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-20">
        <p class="text-gray-400">No products found</p>
      </div>
    `;
    return;
  }

  products.forEach(product => {

    grid.innerHTML += `

      <a href="product.html?id=${product.id}" 
      class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        <div class="aspect-[4/5] overflow-hidden">

          <img 
          src="${product.thumbnail}" 
          alt="${product.title}"
          class="w-full h-full object-cover hover:scale-110 transition duration-500">

        </div>

        <div class="p-5 text-center">

          <h3 class="font-semibold text-lg mb-2">
            ${product.title}
          </h3>

          <p class="text-plant-700 font-bold text-xl">
            $${product.price}
          </p>

        </div>

      </a>

    `;
  });
}