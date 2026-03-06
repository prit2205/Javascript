function AnimalData(){

fetch("https://extinct-api.herokuapp.com/api/v1/animal/")

.then(function(rawdata){
console.log(rawdata);
return rawdata.json();
})

.then((data)=>{

console.log(data);

RenderUi(data);

})

.catch((err)=>{
console.error(err);
});

}

AnimalData();



function RenderUi(animal){

let group = document.querySelector(".group");

let card = document.createElement("div");

card.innerHTML = `

<div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden max-w-sm">

<!-- Image -->
<div class="relative">

<img src="${animal.imageSrc}" 
class="w-full h-56 object-contain bg-slate-50 p-6">

<span class="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
Last Seen: ${animal.lastRecord}
</span>

</div>

<!-- Content -->
<div class="p-6">

<h2 class="text-xl font-bold text-slate-800">
${animal.commonName}
</h2>

<p class="text-sm italic text-slate-500 mb-2">
${animal.binomialName}
</p>

<p class="text-xs text-slate-400 mb-3">
📍 ${animal.location}
</p>

<p class="text-xs text-slate-600 line-clamp-4 mb-5">
${animal.shortDesc}
</p>

<div class="flex justify-between items-center">

<a href="${animal.wikiLink}" 
target="_blank"
class="text-indigo-600 text-xs font-bold hover:underline uppercase">
Wikipedia
</a>

<button class="bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-600 transition">
Explore
</button>

</div>

</div>

</div>

`;

group.appendChild(card);

}