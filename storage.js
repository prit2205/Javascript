// localStorage API: setItem, getItem, removeItem, clear
// localStorage --> store data in key-value pair, data will be stored even after closing the browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key", value);
localStorage.setItem("name", "test_user");

// getItem
// localstorage.getItem("key_name");
localStorage.getItem("name");

// removeItem
// let user = localStorage.getItem("name");

// update
localStorage.setItem("name", "Demo_User");

// sessionStorage API:
// sessionStorag --> save that for temporarily time when you close tab delete was deleted
// (aa storage tab ni life time sudhi chhe, tab band thai jay to data delete thato nathi)
// ~ 5 MB storage

// setItem
sessionStorage.setItem("email", "test@test.com");

// getItem
let email = sessionStorage.getItem("email");

// removeItem
// sessionStorage.removeItem("email");

// update
sessionStorage.setItem("email", "user@user.com");
sessionStorage.setItem("name", "user");
sessionStorage.setItem("age", "10");
sessionStorage.setItem("cart", "");

// clear
sessionStorage.clear();

// Storing/retrieving string vs JSON
// save as string into Localstorage and sessionStorage -- try to save array and string 
localStorage.setItem("users", '["demo", "test", "test1", "demo"]')
let users = localStorage.getItem("users");

// JSON.stringify
// JSON.parse

localStorage.setItem(
    "demo",
    JSON.stringify({name: 'demo', age: 10, email: 'demo@a.com'}),
);
let demo = JSON.parse(localStorage.getItem("demo"));

// Cookie --> store data into browser cookies
// Cookie API:
// ~ 4 KB storage
document.cookie = "email = demo@gmail.com";

// max age
document.cookie = "user = demo; max-age = 10"; // 10 sec

// date and time
document.cookie = "age = 10; expires = wed, 20 Feb 2026 12:00:00 GMT"

