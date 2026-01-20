// a = 10; // window variable
var a = "temp";
var _123 = "value";
var $123 = "dollar";

// var b; // declare
b = 24;

// // var add value into window
// // var is function scoped
// // var can be redeclared and reassigned

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

// Hosting Imapct
// Hostong --> when your create a variable into js that break into two part first is declare part that go to up and there intialization part that go down
var temp_d = 12;

//var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you see console.log before initialization that give you error;
// hoistinf imapct on var ,  let , const

// var --> hoist --> undefined
// let --> hoist --> error
// const --> hoist --> error