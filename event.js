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
    document.body.classList.toggle("box");
    console.log(btn.textContent)
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode"
    } else{
        btn.textContent = "Dark Mode"
    }
});