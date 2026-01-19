// Variable declarations with different naming conventions
var a = "temp";
var _123 = "value";
var $123 = "dollar";

// Missing var/let/const - creates global variable (bad practice)
b = 24;

// let declaration - block scoped
let temp = "let temp";

// const declaration - block scoped, cannot be reassigned
const temp_const = "Hello world !!";

// Hoisting example: declaring var twice
var d;
var d = 12;

// Variable naming - similar names can cause confusion
var name = "Jhon";
let name1= "shane";

// Reassigning variables
var temp1 = 12;
temp = "number";
var temp2 = 24;

// Demonstrating scope differences (var is function-scoped, not block-scoped)
var e = 23;
console.log("Global Scope " + e);
{
    var e = 25;
    console.log("block Scope " + e);
}
function abc() {
    var e = 30;
    console.log("Functional Scope " + e);
}
abc();
console.log(e);

// Hoisting with var: declaration is moved to top, initialization stays
// Demonstrating hoisting with var and let
console.log(temp_b);
var temp_b = "temp b";

// console.log(temp_c); // Uncommenting this line will cause a ReferenceError
// console.log(temp_c);                  // Would throw ReferenceError
console.log(temp_c);
temp_c = "temp c";

// hoisting imapact
var temp_d = 12;
// var hoisting impact - redeclaration allowed
// let prevents redeclaration in same scope
let temp_d_let = 24;
// hosting impact on var and let count

// var --> hosting --> can be redeclared
// let --> hosting --> ReferenceError
// const --> hosting --> ReferenceError
