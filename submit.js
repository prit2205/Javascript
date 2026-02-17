let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

// event ===> submit
form.addEventListener("submit",(e) => {
e.preventDefault();
console.log(e);
console.log(inp);
console.log(inp[0].value);
console.log(inp[1].value);
console.log(inp[2].value);
console.log(inp[3].value);
console.log(inp[4].value);
console.log(inp[5].value);

// create
let card = document.createElement("div");
let img_div = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let h5 = document.createElement("h5");
let i = document.createElement("i");
let b = document.createElement("b");
let span = document.createElement("span");
let br = document.createElement("br");

// add style
card.classList.add("card");
img_div.classList.add("img-div");

// add tag into html
document.body.append(card);

// add child into paret tag
card.append(img_div);
img_div.append(img);
card.append(h3);
card.append(h5);
card.append(i);
card.append(br);
card.append(b);
card.append(br);
card.append(span);
console.log(card);

// add text content
img.setAttribute("src", inp[0].value);
h3.textContent = inp[1].value;
h5.textContent = inp[2].value;
i.textContent = inp[3].value;
b.textContent = inp[4].value;
span.textContent = inp[5].value;


// input clear
form.reset();
});