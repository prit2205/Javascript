// showing error message conditionally
let form = document.querySelector("form");
let ee = document.querySelector("#ee");
let email = document.querySelector(".email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email_regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let test_ans = email_regex.test(email.value);
    console.log(test_ans);

    if(!test_ans){
        ee.textContent = "Please enter a Invalid email";
        ee.style.color = "red";
    }
});
// value vs TextContent
// value --> get value from input field
// textContent --> get value from any element except input field