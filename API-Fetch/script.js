// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responses in JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch
function Userdata() {
  fetch("https://randomuser.me/api/?results=100")
    .then(function (rawdata) {
      console.log(rawdata);
      return rawdata.json();
    })
    .then((data) => {
      console.log("Final Data step 1", data);
      console.log("Final Data step 2", data.results);
      console.log("first Data", data.results[0]);
      console.log("first User Email", data.results[0].email);

      data.results.forEach(user => {
        RednerUi(user);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

Userdata();

// create a card ==> name, phone number, email, location, photo

function RednerUi(user) {
  let group = document.querySelector(".group");     

  let card = document.createElement("div");
  card.innerHTML = `  <div class="flex flex-col md:flex-row">
        <div
          class="bg-stone-900 md:w-32 flex flex-col items-center py-8 gap-6 transition-colors duration-500 group-hover:bg-amber-950"
        >
          <div class="relative">
            <img
              src="${user.picture.large}"
              alt="Profile"
              class="w-20 h-20 rounded-2xl object-cover ring-2 ring-stone-700 group-hover:ring-amber-500/50 transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <span
            class="hidden md:block [writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-[0.3em] uppercase text-stone-500 group-hover:text-amber-200/40 transition-colors"
          >
            Identity Card
          </span>
        </div>

        <div class="flex-1 p-8">
          <div class="mb-8">
            <div class="flex items-center gap-2 text-amber-600 mb-1">
              <svg
                class="w-3 h-3 animate-bounce"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-[10px] font-bold uppercase tracking-widest"
                >${user.location.city},${user.location.country}</span
              >
            </div>
            <h2
              class="text-3xl font-serif text-stone-800 group-hover:text-amber-900 transition-colors"
            >
              ${user.name.title} ${user.name.first} ${user.name.last}
            </h2>
          </div>

          <div class="space-y-4 border-t border-stone-100 pt-6">
            <div class="group/line flex flex-col">
              <span
                class="text-[9px] font-black text-stone-300 uppercase tracking-tighter mb-1 transition-colors group-hover/line:text-amber-500"
                >Electronic Mail</span
              >
              <span
                class="text-sm font-bold text-stone-600 group-hover:text-stone-900 transition-colors"
                >${user.email}</span
              >
            </div>

            <div class="group/line flex flex-col">
              <span
                class="text-[9px] font-black text-stone-300 uppercase tracking-tighter mb-1 transition-colors group-hover/line:text-amber-500"
                >Direct Line</span
              >
              <span
                class="text-sm font-bold text-stone-600 group-hover:text-stone-900 transition-colors"
                >${user.cell}</span
              >
            </div>
          </div>

          <div class="mt-8 flex gap-3">
            <button
              class="flex-1 bg-stone-900 text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-lg transition-all hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-200 cursor-pointer active:scale-95"
            >
              Contact
            </button>
            <button
              class="w-12 h-11 flex items-center justify-center border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors cursor-pointer"
            >
              <svg
                class="w-4 h-4 text-stone-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>`;
  group.appendChild(card);
  console.log(group);
}

RednerUi();
