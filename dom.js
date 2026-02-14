// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem), comment

// DOM Manipulation - change body
// select element from html
// chagne text 
// change html 
// change css 
// change attribute 
// event listeners

// Selecting Elements
// getElementById
let a = document.getElementById("abc");
console.log(a);

// getElementsByClassName
let b = document.getElementsByClassName("abc");
console.log(b);

// getElementsByTagName
let c = document.getElementsByTagName("h1");
console.log(c);

// querySelector --> only select first (tag, class)in html
let d = document.querySelector(".abc");
console.log(d);

// querySelectorAll --> Select All
let e = document.querySelectorAll("h1")
console.log(e)

// change text
// innertext
d.innerText = "change Text with JS";

// outertext -- not use in DOM
// d.outerTest = "<h1>change Text with outherText</h1>";

// innerHTML
d.innerHTML = "<i>change Text Style With JS</i>";

// outerHTML
// d.outerHTML = "<i>change Text Style with JS</i>";

// textContent -- use for change text
d.textContent = "Change Text with TextContent";

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// --------------------------------------------------
// Attribute Mainpulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
console.log("get Attribute", link.href) // -- give value of href attribute

// link.href = "https://www.google.com/"
// // element.setAttribute("attribute_name", "change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// // // element.removeAttribute("name")
link.removeAttribute("href")

// --------------------------------------------------
// Dynamic DOM mainpulation
// createElement, appendChild, removeChild, prepend

// createElement
let box = document.createElement("div")
box.textContent = "This is Div Tag crate using JS"

// // append / prepend -- add element into HTML
// append -- add element into last
// document.body.append(box);
// prepend -- add element into first
document.body.prepend(box);

// remove
d.remove();

// appendChild
let outer_box = document.createElement("div");
outer_box.classList.add("outer");
document.body.append(outer_box);


let inner_box = document.createElement("div");
inner_box.classList.add("inner");
outer_box.appendChild(inner_box);

// append vs appendChild
// remove vs removeChild

// -------------------------------------------------
// style Update via .style and classList (add, remove, toggle)
console.dir(d);
d.style.backgroundColor = "green";
d.style.color = "white";
d.style.padding = "20px";

// ClassList
let card = document.querySelector(".card");
// console.dir(card)
card.classList.add("card-style")

// remove
card.classList.remove("card")

// toggle -- class --> available --> remove it
//           class --> not available --> add it
card.classList.toggle("card")

// Tasks:
// 1. What is the DOM ? How Does it represent the HTML Structure?
// -- Dom is tree sturcture of html. It represents the page's structure in memory as a logical tree of objects

// 2. Name the types of nodes in the DOM tree.
// -- Document Node, Element Node, Text Node, etc. 

// 3. What's the difference between an element node and text node?
// -- <div>Hello</div> In this, div is element node and hello is text node

// 4. Inspect the following HTML in the browser and identify each node:
// <div>Hello<span>World</span></div>

// 5. What is Difference between getElementById and querySelector?
// -- getElementById will find a specific mation Id and QuerySelectore find first occurence of mention tag.

// 6. What does getElementsByClassName return? Is it an array?
// -- it return mention class dom. yes it is a array.

// 7. Use querySelectorAll to select all buttons with class "buy-now".
document.querySelectorAll("buy-now")

// 8. T1: Select the heading of a page by ID and change its text to "Welcome to JS DOM"
// -- let e = document.getElementById("heading")
// -- e.textContent = "Welcome to js DOM"

// 9. T2: Select all <li> elements and print their text using a loop.
let list = document.querySelectorAll("li");
list.forEach((val) => {
    console.log(val.innerText)
})
for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent)
}

// 10. What's the differnce between innerText, textContent and innerHTML?
// -- innerText return value of element, TextContent return also retrun value of element, innerHTML return HTMLinside element

// 11. When should you use textContent instend of innerHTML?
// -- textConent change the text of element, innerHTML change html inside element

// 12. T3: Select a Paragraph and replace its content with: <b> Updated </b> by JavaScript
// let p = document.getElementById("p1")
// p.innerHTML = "<b> Updated </b>"

// 13. How do you get the src of an image using JavaScript?
// let img = document.getElementById("img")
// console.log(img.src)

// 14. what does setAttribute() do?
// -- setAttribute set a new attribute to the element through js

// 15. Add a title attribute to a div dyanmically.
// let div1 = document.getElementById("div1");
// console.log(div1)
// div1.setAttribute("title", "Hello")
// console.log(div1)

// 16. Remove the disabled attribute from a button.
// let btn = document.getElementById("btn")
// btn.removeAttribute("disabled")

// 17. what does createElement() do ? what's retured?
// -- createElement create a new element in the element. its return hrml element

// 18. What's the difference between appendChild() and prepend()?
// -- appendChild() append end of the dom and prepend() add start in dom

// 19. can you remove an element using removeChild() ?
// let div2 = document.getElementById("div2")
// let child = document.getElementById("child")
// div2.removeChild(child)

// 20. create a new list item <li> New Task</li> and add it to the end of a <ul>.
// let li = document.createElement("li");
// li.textContent = "New Task";

// let ul = document.querySelector("ul");
// ul.appendChild(li);

// 21. create a new image element with a placeholder source and add it at the top of a div.
// let imgs = document.createElement("img");
// img.src = "https://via.placeholder.com/150";

// let div = document.querySelector("div");
// div.prepend(img);

// 22. Select the first item in a list and delete it from the DOM.
// let firstItem = document.querySelector("ul li");
// firstItem.remove();

// 23. How do you change the background color of an element?
// element.style.backgroundColor = "yellow";

// 24. What's the difference between .classList.add() and classList.toggle()?
//  add()             toggle()                           
//  Always adds class Adds if missing, removes if present

// 25. Add hightlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((elem)=>{
// elem.classList.add("highlight")
// })
// let li = document.querySelectorAll("ul li:nth-child(2n)");

// li.forEach((elem)=>{
//     elem.classList.add("highlight");
// });

// 26. Set the font size of all <p> elements to 18px using .style
// let paragraphs = document.querySelectorAll("p");

// paragraphs.forEach((p)=>{
//     p.style.fontSize = "18px";
// });