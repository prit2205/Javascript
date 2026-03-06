function UserData(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(rawdata) {
    console.log(rawdata);
    return rawdata.json();
  })

 .then((data) => {
      data.users = data;   

      console.log("Final Data ", data);
      console.log("Final Data ", data.users);
    

      data.users.forEach(users => {
        RenderUi(users);   
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

UserData();


function RenderUi(users){
      let group = document.querySelector(".group");
  let card = document.createElement("div");

    card.innerHTML= `
<div class="relative group w-full max-w-sm">
  
  <div class="absolute -top-4 -right-2 z-20 bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] rounded-xl px-4 py-2 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
    <span class="text-[10px] font-black italic tracking-widest text-indigo-600 uppercase">@Bret</span>
  </div>

  <div class="relative overflow-hidden bg-[#e0e5ec] rounded-[2.5rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border border-white/20 transition-all duration-500 group-hover:shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] group-hover:-translate-y-2">
    
    <div class="flex items-start justify-between mb-8">
      <div class="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-indigo-200">
        L
      </div>
      <div class="text-right">
        <p class="text-[10px] font-bold text-indigo-500 uppercase tracking-tighter">${users.company.name}</p>
        <p class="text-xs font-black text-slate-800 truncate max-w-[120px]">Romaguera-Crona</p>
      </div>
    </div>

    <h2 class="text-2xl font-black text-slate-800 leading-none mb-1 group-hover:text-indigo-600 transition-colors">
     ${users.name}
    </h2>
    <p class="text-sm font-medium text-slate-500 mb-6">${users.email}</p>

    <div class="space-y-3 mb-8">
      <div class="flex items-center gap-3 text-slate-600">
        <span class="text-lg">📍</span>
        <p class="text-xs font-semibold">${users.address.city} ${users.address.street} </p>
      </div>
      <div class="flex items-center gap-3 text-slate-600">
        <span class="text-lg">📞</span>
        <p class="text-xs font-semibold">${users.phone}</p>
      </div>
    </div>

    <div class="flex items-center justify-between pt-6 border-t border-white/40">
      <a href="#" class="text-xs font-black text-indigo-600 hover:underline tracking-widest uppercase">${users.website}</a>
      <button class="bg-white text-slate-800 px-4 py-2 rounded-xl text-[10px] font-black shadow-[4px_4px_8px_#bebebe] hover:shadow-inner transition-all active:scale-95 uppercase tracking-wider">
        Connect
      </button>
    </div>

    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400/10 blur-3xl rounded-full"></div>
  </div>
</div>
  `
  group.appendChild(card);
  console.log(group);

}