// Select elements
const form = document.querySelector("form");
const dp = document.querySelector("#dp");
const username = document.querySelector("#name");
const post = document.querySelector("#post");
const caption = document.querySelector("#caption");
const postsContainer = document.querySelector("#posts");

// Get existing posts
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Render Posts
function renderPosts() {
  postsContainer.innerHTML = "";

  posts.forEach((data) => {
    const postDiv = document.createElement("div");
    postDiv.className =
      "post w-1/4 h-auto rounded-3xl shadow-2xl hover:shadow-4xl hover:shadow-amber-700 border-2 border-amber-700 overflow-hidden transition-all";

    postDiv.innerHTML = `
      <div class="bar flex items-center gap-5 bg-white/20 px-4 py-2">
          <img src="${data.dp}" alt="" class="w-16 h-16 rounded-full">
          <h3 class="font-semibold text-xl text-black/80">${data.username}</h3>
          <p class="text-md font-semibold text-black/20">${data.caption}</p>
      </div>

      <div class="main-img overflow-hidden w-full h-auto">
          <img src="${data.postImage}" alt="Main Post" class="w-full h-full object-fit hover:scale-[1.5] transition-all">
      </div>
    `;

    postsContainer.appendChild(postDiv);
  });
}

// Submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newPost = {
    dp: dp.value,
    username: username.value,
    postImage: post.value,
    caption: caption.value,
  };

  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));

  renderPosts();
  form.reset();
});

// Load saved posts after refresh
renderPosts();