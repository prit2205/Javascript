// event -- page per koi pan action karo tene ek event rise karshe, page par click, hover, typing all are event
// event listener --- event nu reaction -- give reaction when click, doubleclick, hover, typing

// add event listener
// select --> event --> function --> what you change
// event.addEventListener("event_name", function(){})

// =============================================
// command event: click, input, change, submit, mouseover, keyup
// click
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("cs-body");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
    } else{
        btn.textContent = "Dark Mode"
    }
});

let box = document.querySelector(".box");
let btn1 = document.querySelector(".btn1");
let span = document.querySelector("span");

btn1.addEventListener("click", () => {
    box.classList.toggle("bg-red");
    if (span.textContent=== "change color into Red" ) {
        span.textContent = "change color into white"
        
    } else {
         span.textContent = "change color into Red"
    }
});

// inout
// how to know which is typed ?
let inp = document.querySelector(".text");
inp.addEventListener("input", (dets) => {
    // console.log(dets);
    if (dets.data !== null) {
        console.log(dets.data);
    }
});

// change -- when you change elements state
let sel = document.querySelector(".sel");
let device = document.querySelector(".device");

sel.addEventListener("change", (dets) => {
    console.log(dets.target.value);
    device.textContent = dets.target.value;
});

let box1 = document.querySelector(".outer_box");
let inp1 = document.querySelector(".color-inp");
let inp2 = document.querySelector(".backc-inp");


inp1.addEventListener("change", (dets) => {
    box1.style.backgroundColor = dets.target.value;
});
inp2.addEventListener("change", (dets) => {
    box1.style.borderColor = dets.target.value;
});

// submit
let form = document.querySelector("form");

form.addEventListener("submit", () => {
    document.body.style.backgroundColor = "red";
});

// keyDown --> Keyborad Checker

// mousemove and mouseout

let box3 = document.querySelector(".box3");
box3.addEventListener("mousemove", ()=>{
    box3.style.width = "500px";
})

box3.addEventListener("mouseout", ()=>{
    box3.style.width = "100px";
})

// keyup - self

// =============================================
// Event Object
// sel.addEventListener("change", (dets) => {
//   console.log(dets); ===> dets -- that called event object
// });

// targrt, type, preventDefault
// target --> that show element
// type --> show event Type
// preventDefault --> use for html-form --> prevent from to refresh and clean details

// =============================================
// event  bubbling and capturing
// Event Bubbling -- when you click on most inner div, event will rise from inner to outer div par click thase, event will rise from inner to outer div par click thase, event will rise from inner to outer div par click thase

// AND

// first phase ==> event can run to top level element to bottom level element (parent to child)
// second phase ==> event can run to bottom level element to top level element (child to parent)

// first --> first phase then second phase ==> but phase 1 id default off, you have to on that setting
// first phase --> capture phase
// second phase --> event bubbling phase


let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let most_inner = document.querySelector(".most_inner");

outer.addEventListener("click", () => {
    console.log("Outer Div Clicked");
    document.body.style.backgroundColor = "skyblue";
}, true); // true --> first phase on

inner.addEventListener("click", () => {
    console.log("Inner Div Clicked");

});  
most_inner.addEventListener("click", () => {
    console.log("Most Inner Div Clicked");
    document.body.style.backgroundColor = "red";
});
// phase 2: child --> parent (most inner --> inner --> outer)
// true -- outer : phase 1 (true vali event run) : Parent --> child (ourter --> inner --> most inner)
// true -- outer, inner : phase 1 (true vali event run) : Parent --> child (ourter --> inner --> most inner) phse 2 (default) : child --> parent (most inner --> inner --> outer)

// =============================================

// use case: make it to do listr thing
// when you click on text that was show strike using bubbing 
// create list and when you click on list item, show strike using bubbling
let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {
    if (dets.target.tagName === "LI") {   // Only apply to LI elements
        if (dets.target.style.textDecoration === "line-through") {
            dets.target.style.textDecoration = "none";
        } else {
            dets.target.style.textDecoration = "line-through";
        }
    }
});

// use case:
// 1. secuity layer
// 2. chaeck when event bubbling is fail

// event and event listner and listner
// capture and bubbling

// live character count
let counter = document.querySelector("#counter");
let count = document.querySelector(".count");

counter.addEventListener("input", (dets) => {
    console.log(dets.target.value.length);
    console.log(counter.value.length);

    let limit = 10 - counter.value.length;

    if (limit < 0) {
        alert("Limited Reached");
        counter.disabled = true;
    } else {
        count.textContent = limit;
    }
});