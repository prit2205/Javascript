/// 1. select -- event -- fuvnction(change)
// 2. show from and close
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElemanet and show data
// 6. show all data into html;
// 7. create up and dowm btn

let add = document.querySelector("#add-note");
let container = document.querySelector(".form-container")
let closeBtn =  document.querySelector(".closeForm")
let form = document.querySelector("form");

    let img = document.querySelector("input[placeholder='https://example.com/photo.jpg']");
    let uname = document.querySelector("input[placeholder='Enter full name']");
    let home = document.querySelector("input[placeholder='Enter home town']");
    let purpose = document.querySelector("input[placeholder='e.g., Quick appointment note']");
    let category = document.querySelectorAll(" input[name='category']");

// add from
add.addEventListener("click", ()=>{
    container.style.display = "block";
});

// close from
closeBtn.addEventListener("click", ()=> {
    container.style.display = "none";
});


// save to local storage
function SaveToStorage(obj){
    // get new data
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
}

// from vaildation/sumbit/reset
form.addEventListener("submit", (e)=> {
e.preventDefault();
   let imgUrl = img.value.trim();
   let fullname = uname.value.trim();
   let town = home.value.trim();
   let task = purpose.value.trim();

   let selected = false;

   category.forEach((cat) => {
        if(cat.checked) {
            selected = cat.value;
        }
   });

   if(imgUrl === ""){
    alert("Please Enter Image URL")
    return;
   }
    if(fullname === ""){
    alert("Please Enter Full Name")
    return;
   }
     if(town === ""){
    alert("Please Enter Home Town")
    return;
   }
     if(task === ""){
    alert("Please Enter Purpose")
    return;
   }
    if(!selected){
    alert("Please Select Category");
    return;
   }

   SaveToStorage({
    imgUrl,
    fullname, 
    town,
    task,
    selected,
   });

   container.style.display = "none";
   form.reset();
   ShowCards();
});

// Show Card
let stack = document.querySelector(".stack");

function ShowCards() {
    stack.innerHTML = "";

    let allData = JSON.parse(localStorage.getItem('data'));

    console.log(allData);

    allData.forEach((data) => {
        console.log(data);

    // card container
    let card = document.createElement("div");
    card.classList.add("card");

    // image
    let img = document.createElement("img");
    img.classList.add("avatar");
    img.setAttribute("src", data.imgUrl);

    // name
    let h2 = document.createElement("h2");
    h2.textContent = data.fullname;

    // Home Town
    let homeInfo = document.createElement("div");
    homeInfo.classList.add("info");

    // span tags - home town
    let home = document.createElement("span");
    home.textContent = "Home Town";
    let town = document.createElement("span");
    town.textContent = data.town;

    // Purpose
    let purpose = document.createElement("div");
    purpose.classList.add("info");

    // span tags - purpose
    let head_note = document.createElement("span");
    head_note.textContent = "Purpose";
    let note = document.createElement("span");
    note.textContent = data.task;

    // button div
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons");

    // buttons -- button div
    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = '<i class="ri-phone-line"></i> Call';
    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.innerHTML = '<i class="ri-mail-line"></i> Message';

    // add to html
    stack.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(homeInfo);
    homeInfo.appendChild(home);
    homeInfo.appendChild(town);
    card.appendChild(purpose);
    purpose.appendChild(head_note);
    purpose.appendChild(note);
    card.appendChild(btnDiv);
    btnDiv.appendChild(call);
    btnDiv.appendChild(msg);

    console.log(stack);
    });

}
ShowCards();

// Animation 
function  update(){
    let card = document.querySelectorAll(".card");
    for(let i = 0; i < card.length; i++){
        const cards = card[i];
        cards.style.zIndex = card.length - i;
        cards.style.transform = `scale(${1 - i * 0.05}) translateY(-${i * 20}px)`;
        cards.style.opacity = 1 - i * 0.5;
    }
}

// up btn and donw btn
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");

upBtn.addEventListener("click", () => {
    console.log(stack.lastElementChild);
    lastChild = stack.lastElementChild;

    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        // insertBefore(element, element)
    }
    update();
});

downBtn.addEventListener("click", () => {
    console.log(stack.firstElementChild);
    firstchild = stack.firstElementChild;

    if (firstchild) {
        stack.append(firstchild, stack.firstElementChild);
        // insertBefore(element, element)
    }
    update();
});

