// functions
// what --> function is a block of code that performs a specific task.
// why --> to avoid repetition of code, to make code reusable
// how --> function keyword, name, parameters, function body, return statement

// type of functions
// function name(parameters) {} --> function declaration
function abc () {}
// let fnc = function () {} --> function expression
let fnc = function () {};
// let fnc = () => {} --> arrow function --> fat arrow
let fnc1 = () => {};


function temp_car() {
    console.log("Adding Product");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition(params --> () ni andar lakheli values)
// arguments are the real values passed to the function(args --> () ni andar pass karel values)

function cartBtn_price(product) { // product --> parameter
    console.log("Adding", product, "to the cart");
}
cartBtn_price("Dell laptop"); // "Dell laptop" --> argument
cartBtn_price("Apple 16");
cartBtn_price("PS 5");

function cartBtn_price(product, price) {
    console.log("Adding", product, "to Cart with", price);
}
cartBtn_price("Dell laptop", 45000);
cartBtn_price("Apple 16", 250000);
cartBtn_price("PS 5", 50000);