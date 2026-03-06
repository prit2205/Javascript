function ProductsData(){
fetch('https://dummyjson.com/products?limit=50')
  .then(function(rawdata) {
    console.log(rawdata);
    return rawdata.json();
  })

 .then((data) => {
      console.log("Final Data ", data);
      console.log("Final Products ", data.products);

      data.products.forEach(products => {
        RenderUi(products);   
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

ProductsData();

function RenderUi(products){
  let group = document.querySelector(".group");
  let card = document.createElement("div");

  card.innerHTML= `
<div class="relative group w-full max-w-sm">
  
  <div class="absolute -top-4 -right-2 z-30 bg-white shadow-lg rounded-2xl px-4 py-2 transform rotate-3 group-hover:rotate-0 transition-all duration-300">
    <span class="text-lg font-black text-indigo-600">$${products.price}</span>
  </div>

  <div class="relative overflow-hidden bg-[#e0e5ec] rounded-[2.5rem] p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20 transition-all duration-500 group-hover:-translate-y-2">
    
    <div class="relative w-full aspect-square rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 border border-white/50 shadow-inner overflow-hidden mb-6 flex items-center justify-center">
      <img src="${products.thumbnail}" 
           alt="${products.title}" 
           class="w-4/5 h-4/5 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
      
      <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
        <span class="text-[10px] font-bold text-white uppercase tracking-tighter">${products.category}</span>
      </div>
    </div>

    <div class="px-2">
      <p class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">${products.brand || "Brand"}</p>
      <h2 class="text-xl font-bold text-slate-800 leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
        ${products.title}
      </h2>

      <div class="flex items-center gap-4 mb-4">
        <div class="flex items-center bg-white/50 px-2 py-1 rounded-lg shadow-sm">
          <span class="text-yellow-500 mr-1">★</span>
          <span class="text-xs font-bold text-slate-700">${products.rating}</span>
        </div>
        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stock: ${products.stock}</p>
      </div>

      <p class="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-2">
        ${products.description}
      </p>

      <div class="flex items-center justify-between gap-3">
        <button class="flex-1 bg-white text-slate-800 py-3 rounded-2xl text-[10px] font-black shadow-[4px_4px_10px_#bebebe] hover:shadow-inner transition-all uppercase tracking-wider">
          Quick View
        </button>
        <button class="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>
    </div>

    <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400/10 blur-3xl rounded-full"></div>
  </div>
</div>
  `
  group.appendChild(card);
  console.log(group);
}
