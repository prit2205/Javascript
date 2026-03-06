function getPosts() {

fetch("https://jsonplaceholder.typicode.com/posts?_limit=30")
.then((res) => res.json())
.then((data) => {

data.forEach((post) => {
renderPost(post);
});

});

}

function renderPost(p){

let container = document.querySelector(".main");

container.innerHTML += `
<div class="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden flex flex-col">

<!-- Header -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
<h2 class="font-semibold text-md line-clamp-2">
${p.title}
</h2>

<span class="bg-white text-purple-600 text-xs px-2 py-1 rounded-full font-bold">
#${p.id}
</span>
</div>

<!-- Body -->
<div class="p-5 flex flex-col flex-grow">

<div class="flex items-center gap-3 mb-3">
<img src="https://i.pravatar.cc/45?img=${p.userId}" 
class="rounded-full border">

<div class="text-sm">
<p class="font-semibold text-gray-700">User ${p.userId}</p>
<p class="text-gray-400 text-xs">Blog Author</p>
</div>
</div>

<p class="text-gray-600 text-sm line-clamp-4 flex-grow">
${p.body}
</p>

<!-- Actions -->
<div class="flex justify-between items-center mt-5">

<div class="flex gap-4 text-gray-400 text-sm">
<span>❤️ 24</span>
<span>💬 12</span>
<span>🔗 Share</span>
</div>

<button class="bg-purple-500 text-white text-xs px-4 py-1.5 rounded-full hover:bg-purple-600">
Read More
</button>

</div>

</div>
</div>
`;

}

getPosts();