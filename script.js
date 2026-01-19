var a = "temp";
var _123 = "value";
var $123 = "dollar";

b = 24;

let temp = "let temp";

const temp_const = "Hello world !!";

var d;
var d = 12;

var name = "Jhon";
let name1= "shane";

var temp1 = 12;
temp = "number";
var temp2 = 24;

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