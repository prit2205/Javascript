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


function temp_cart() {
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
};
cartBtn_price("Dell laptop"); // "Dell laptop" --> argument
cartBtn_price("Apple 16");
cartBtn_price("PS 5");

function cartBtn_price(product, price) {
    console.log("Adding", product, "to Cart with", price);
};
cartBtn_price("Dell laptop", 45000);
cartBtn_price("Apple 16", 250000);
cartBtn_price("PS 5", 50000);

// convert into arrow function
// let fuc == () => {}
let fnc_arrow = (product, price) => {
    console.log("Adding", product, "to Cart with", price);
};
cartBtn_price("Dell laptop", 45000);
cartBtn_price("Apple 16", 250000);
cartBtn_price("PS 5", 50000);

function student_info(name, age, grade) {
    console.log("Student Name:", name, "Age:", age, "Grade:", grade);
}
student_info("Prit", 24, "A+");
student_info("Amit", 22, "B");
student_info("Sonal", 23, "A");     
student_info("Rina", 21, "C+");

// Default , rest parameters in function
// default 
function def(v1, v2) {
    console.log(v1, v2);
}
def();

function buyNow(product = "Product Name", price = "product_price") {
    console.log(product, price);
}
buyNow("Mobile");

// rest --> Jayre function ma multiple arguments pass karva hoy tyare rest parameter use kariye ( rest ---> ... jo function na parameter ni anadar lakhvama aava chhe)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(v1, v2, v3, ...numbers) {
    // numbers -- rest parameter
    console.log("reset", v1, v2, v3, numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
    // ...numbers -- rest parameter
    console.log("reset", numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// return or early return
function temp_fnc() {
    if (10 > 9) return "true";
}
temp_fnc();

// first class functions:
// functions can be treated as values
// let fnc1 = function () {} - function expression
// let fnc2 = () => {} - arrow function

const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart5("function expression - S25 ultra", 69000);
// convert into arrow function 
const cart6 = (product, price) => {
    console.log(`Adding ${product} at ${price}`);
};

cart6("function expression - S25 ultra", 69000);

// function can be passed as arguments to other function 
function temp_fnc2(params) {
    params(); // agrs function
}
temp_fnc2(() => {
    console.log("second function")
}); // function agrs --> function
// function can be returned from other functions

function temp_fnc3() {
    return function fnc4(){
        console.log("function 4");
        // return "function can be retruned from other function"
    }
}
console.log(temp_fnc3()());

// higher order function (HOF)
// function that takes another function as an argurment or returns as a result (eva function je return kare)

// function abcd(val();)}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order

let temp_a = 20; // state
function temp_change() {
    return "hello";
} // --> pure function
console.log(temp_change());

console.log("value of temp_a before change:" ,temp_a);

// impure function --> function je same input par modify kare(impure function --> je function bahar na state ne modif kare)
function temp_change1() {
    temp_a++;
} // --> inpure function
temp_change1();
console.log("value of temp_a after change", temp_a);
temp_change1();
console.log("value of temp_a after change", temp_a);
temp_change1();
console.log("value of temp_a after change", temp_a);

// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable)(function with in function)

function outer(){
    let outer_var = 50; // parent function variable
    function inner(){
        outer_var--;
        console.log(outer_var); // child function consolelog
    }
    return inner();
}
console.log(outer())

function outer1(){
    let outer_var = 50; // parent function variable
    function inner(){
        outer_var += 2;
        console.log(outer_var); // child function consolelog
    }
    return inner();
}
console.log(outer1())

// lexical scope --> nested function can access varibles declared in their outer scope
function outer2() {
    let temp_outer= "outer function variable";
    function inner1(){
        let temp_inner = "inner function variable";
        console.log(temp_outer);

        function most_inner() {
            console.log("most_inner function output" ,temp_outer);
            console.log("most_inner function output" ,temp_inner);

            function most_most_inner() {
            console.log("most_inner function output" ,temp_outer);
            console.log("most_inner function output" ,temp_inner);
            }
            most_most_inner();
        }
        most_inner();
    }
    inner1();
}
outer2();

// IIFE - Immediately Invoked function expression 
(function () {})(); // function je declare karata j call thai jay
(function temp_IIFE() {
    console.log("IIFE Function")
})();

// Hoisting in function 
temp_abc();
function temp_abc(){
    console.log("Hosited Function")
} // -- function decleration

let temp_abc1 = () => {
    console.log("Arrow Function")
}
temp_abc1();

// function expression
// hoistedFunction1(); // error:
// let hoistedFunction1 = function () {
// console.log("Hoisted function called");
// }


// Example 1:
// Function declaration is fully hoisted (can be called before definition)
// Function expression is not hoisted with its value (only variable hoisted)

// Example 2:
// Answer: No Error
// Why: Function declaration is hoisted
// greet();
// function greet(){
//     console.log("Hello!");
// }

// // Example 3:
// // Arrow Function version
// const add = (a, b) => a + b;

// // Example 4:
// // Parameter: name
// // Argument: "user"
// function welcome(name){
//     console.log("Welcome " + name);
// }
// welcome("user");

// // Example 5:
// // Parameters: 3 (a, b, c)
// // Arguments: 2 (1, 2)
// // No Error, c becomes undefined
// function temp(a, b, c){
//     console.log(a, b, c);
// }
// temp(1, 2);

// // Example 6:
// // Output: Hello Guest
// // No Error because default parameter is used
// function temp_user(name = "Guest"){
//     console.log("Hello " + name);
// }
// temp_user();

// // Example 7:
// // ... is rest operator
// // It collects multiple arguments into an array
// function number(...numbers){
//     console.log(numbers);
// }
// number(1, 2, 3, 4, 5);

// // Example 8:
// // First function has Error because loop condition is wrong (<=)
// // Second function is correct
// function calculateTotal(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total += val;
//     });
//     return total;
// }
// let sumtotal = calculateTotal(10, 20, 30, 40, 50);
// console.log(sumtotal);

// // Example 9:
// // Fixed using early return
// function checkAge(age){
//     if(age < 18){
//         return "Too Young";
//     }
//     return "Access Granted";
// }

// // Example 10:
// // Return value is undefined
// function f(){
//     return;
// }
// [1, 2, 3].map(function (x){
//     return x * 2; }
// )
