function getJokes() {
 
fetch("https://teehee.dev/api/joke")
.then(res => res.json())
.then(data => {
 
renderJoke(data);
 
})
.catch(err => console.log(err));
 
}
 
function renderJoke(j){
 
let container = document.querySelector(".main");
 
container.innerHTML += `
 
<div class="group relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden
hover:scale-105 hover:shadow-2xl transition duration-300">
 
<h2 class="text-xl font-bold text-purple-600">
😂 ${j.question}
</h2>
 
<p class="text-gray-500 text-sm mt-2">
Click to reveal the answer
</p>
 
<div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-700
text-white flex flex-col justify-center items-center text-center p-5
opacity-0 group-hover:opacity-100 transition duration-300">
 
<p class="text-lg font-semibold">
${j.answer}
</p>
 
<a href="${j.permalink_html}" target="_blank"
class="mt-4 bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">
 
View Joke Page
 
</a>
 
</div>
 
</div>
 
`;
 
}
 
getJokes();
 