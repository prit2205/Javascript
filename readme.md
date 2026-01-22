// Variable declarations with different naming conventions
var a = "temp";
var _123 = "value";
var $123 = "dollar";

// Global variable without keyword (not recommended)
b = 24;

// Block-scoped variable with let
let temp = "let temp";

// Constant variable that cannot be reassigned
const temp_const = "Hello World";

// Variable declaration without initialization
var d;
// Redeclaring and assigning value to var d
var d = 12;
// String variables
var name = "John";
var name1 = "Doe";

// Variable reassignment from number to string
var temp1 = 12;
temp1 = "new value";
// Another number variable
var temp2 = 24;

// Demonstrating variable scope with var (var is function-scoped, not block-scoped)
var e = 30;
console.log( "global e:" + e );
{
    // This var e shadows the global one within the block, but since var is function-scoped, it affects globally
    var e = 40;
    console.log( "local e:" + e );
}
function test() {
    // var e inside function is local to the function
    var e = 50;
    console.log( "function e:" + e );
}
test();
console.log( "global e after block and function:" + e );

// Demonstrating hoisting with var and let
// var declarations are hoisted to the top of their scope and initialized with undefined
console.log(temp_b);
var temp_b = "temp b";

// let declarations are hoisted but not initialized, causing ReferenceError if accessed before declaration
//console.log(temp_c); // This would cause a ReferenceError
console.log(temp_c); // This line is after declaration, so it works
let temp_c = "temp c";

// hoisting impact example
// Accessing temp_d before declaration will log undefined due to hoisting
// but accessing temp_d_let before declaration would cause ReferenceError
// if you use console.log before initialization that give you undefined for var
var temp_d = 12;

// Accessing temp_d_let before declaration would cause ReferenceError
// Uncommenting the next line would throw an error
let temp_d_let = 24;
// hosting impact on var and let count

// var --> hosting --> can be redeclared
// let --> hosting --> ReferenceError
// const --> hosting --> ReferenceError



Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Give as Error </p>
<p>Why : nm exists but is not initialized yet resulting in </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: This is not given a error</p>
<p>Why : when console.log(b) runs b exists but has no value yet.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: output is 2</p>
<p>Why : var ignores block scope { }</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:  Inside: 20  Outside: 10</p>
<p>Why : let is block-scoped so The a inside { } is a different variable than the a outside</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error:  this work: person.name = "user"; </p>
<p>Why : const does not make the object immutable and It only makes the reference constant  const protects the reference, not the object itself</p>
</div>

// datatypes in Js
// two types
// 1. Primtive datatypes
// 2. Non-Primtive datatypes


// 1. primtive datatypes
// types: string, number, boolean, null, undefined, symbol, bigint
// copy --> real value
let a = 25;
let b = a;

// 2. Non-Primtive datatypes
// type [], {}, ()
// copy --> give refrence of parent
let d = [1, 2, 3, 4, 10];
let e = d;
// let arr1  = arr // copied array 'arr' into the 'arr1'
// d.popI(); // it will remove last element from array d 
// console.log(d); // [1,2,3,4]
// console.log(e); // [1,2,3,4]

// <-----Primitive Data Types----->
// types: string, number, boolean, null, undefined, symbol
// strings:
// '' single quotes
// "" dobule quotes
// `` - backticks
let f = "name";
f = "username";
f =  `user`;

// number:
let g = 24;
g = 24.50;
g = -24;
// boolean:
let k = true;
k = false;
// undefied:
let h;
console.log(h);

// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1==u2
let obj = { uid: 1, name: "test", email: "test@test.com"};
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] = "001";

// bigint:
// check range of number , Number.Max_SAFE_INTEGER
let number = 9007199254740991;
number = number + 10;
let num2 = 900719925470991n;
num2 + 8n; 

// <-----Non-Primitive Data Types----->
// types: arrays [], objects{}, functions ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age: 9, phone_number: 558998554 };
let profiles = [
    { name: "test1", age: 10,  phone_number: 98989775 },
    { name: "test2", age: 15,  phone_number: 9898889775 },
    { name: "test3", age: 11,  phone_number: 9898975575 },
];
function name(params) {}

// Dynamic Typing
let u_name = "username";
u_name = 125;
u_name = {};
// javascript --> typescript

// type coeration 
// "5" + 1 // + --> value Add and Coeration(Mix)
// "5" - 1

// Truthy VS Falsy Values
// 0, false, "", null, undefined, NaN, documnet.all, -- false
// ex. !!0 -- check value is true and false
// ex. if(null){}. is convert it into false
// ex. if(-1){}, js convert it into true
// all --> true

Javascript DataTypes:
<br>
<hr>
<br>
<h3>Example 1 :</h3>
<p>true + false </p>
<p>true</p>
</div>

 

<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>0</p>
</div>

 

<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>1212 </p>
</div>

 

<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
</div>

 

<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>11</p>
</div>

// operators
// Arithmetic, comparison, logical, assignment, unary, ternary
// Arithmetic:
// +, -, /, *, **, %
// + --> Add and concatenation
// ex. 1+2 --> Add 
// "user" + "name" --> concat
// 5 + "5" --> concat, 5 +5 --> Add
// -
// ex. 2 - 1
// /, *
// ex. 240/2, 25*2
// % (modulas) (sheshfal) (reminder)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** (square) (exposination)
// ex. 2**3 --> 8

// Comparison Operators:
// ==, ===, !=, !==, >, <, >=, <=
let m = 5;
let n = '5';
console.log("m == n =", m == n); // true (value comparison with type coercion)
console.log("m === n =", m === n); // false (value and type comparison)
console.log("m != n =", m != n); // don't check type only value
console.log("m !== n =", m !== n); // check value and type
console.log("m > n =", m > n);
console.log("m < n =", m < n);
console.log("m >= n =", m >= n);
console.log("m <= n =", m <= n);

// Assignment Operators:
// =, +=, -=, *=, /=, %=
let p = 10; // assignment
p += 5; // p = p + 5 add value 5 to p
console.log("p after += 5:", p);
p -= 3; // p = p - 3 subtract value 3 from p
console.log("p after -= 3:", p);
p *= 2; // p = p * 2 multiply p by 2
console.log("p after *= 2:", p);
p /= 4; // p = p / 4 divide p by 4
console.log("p after /= 4:", p);
p %= 3; // p = p % 3 modulus of p by 3
console.log("p after %= 3:", p);

// Logical Operators:
// && (AND), || (OR), ! (NOT)
let q = true;
let r = false;
let w = 12;
let z = 24;
console.log("q && r =", q && r); // Logical AND
console.log("w > z && r =", w > z && r); // Logical AND

console.log("q || r =", q || r); // Logical OR
console.log("w < z || r =", w < z || r); // Logical OR 

console.log("!q =", !q); // Logical NOT
console.log("!r =", !r); // Logical NOT

// Unary Operators:
// typeof, +, - , ++, --, !
let s = 15;
let t = "5";
console.log("typeof s =", typeof s); // typeof operator
console.log("+t =", +t); // unary plus operator
console.log("+s =", +s); // unary minus operator
// +"name" => NaN
console.log("-s =", -s); // unary minus
console.log("s++ =", s++); // post-increment
console.log("--s =", --s); // pre-decrement
console.log("!true =", !true); // logical NOT
console.log("!false =", !false); // logical NOT

// Ternary Operator:
// condition ? expr1 : expr2
let age = 20;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote);
// Example with numbers
let num = 10;
let parity = (num % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", parity);
// typeof NaN --> number
// typeof --> primitive data type mate use thay che
// instanceof --> reference data type mate use thay che
// instanceof operator example
let f = [1, 2, 3, 4, 5];
f instanceof Array; // true
f instanceof Object; // true


Javascript Operator
<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){

    console.log("Both are greater than 5");

}else{

    console.log("One or both are not greater than 5");

}</p>
<p>True</p>
<p>Why:Both conditions are true</p>
</div>
 
<div>

<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){

    console.log("Acess granted");

}else{

    console.log("Acess Denied");

}</p>
<p>Access granted</p>
<p>Why:At least one condition is true</p>
</div>
 
<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){

    console.log("Hot day");

}else{

    console.log("Pleasant day");

}</p>
<p> Hot day</p>

</div><p>Why:temp > 30 is true, !true becomes false</p>
 
<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){

    console.log("Truthy value");

}else{

    console.log("Falsy value");

}</p>
<p>Truthy value</p>
<p>Why:0 is a falsy value > </p>
</div>
 
<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Grade:C</p>
<p>Why: 78 >= 70 → true
So grade = "C"</p>


</div>
 
<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Status:Gold</p>
<p>Why: 120 >= 100 → Gold</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Access: Deny</p>
<p>Why:true && false = false</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>6</p>
<p>why: Value increases after execution</p>

</div>
 
<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>9</p>
<p>why: Value increases before execution</p>

</div>
 
<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>5 4</p>
<p>Why:c = 4 (old value)
b = 5 (incremented after)</p>
<p>why: c gets old value → 4
b becomes 5</p>

</div>
 
<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>5 5</p>
<p>why: b increases first
both become 5</p>


</div>
 
<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>10  9</p>
<p>why: Prints old value
Then decrements</p>

</div>
 
<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>12</p>
<p>Why:n++ → 5 (then n = 6)
++n → 7
5 + 7 = 12</p>
<p>why: n++ → 5 → n becomes 6
++n → 7
5 + 7 = 12</p>

</div>
 
<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){

result ++likes;

}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>101</p>
<p>why: ++likes or likes++ is valid
result ++likes is invalid syntax</p>


</div>
 
<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   

console.log("Matched");

}else{

    console.log("Not Matched"); 

}</p>
<p>Matched</p>
<p>Why:Comparison happens before decrement</p>
</div>


Javascript Controlflow
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){

    case 2:

    console.log("Two");

    case 3:

    console.log("Three");

}</P>
<p>Ans:Two and Three</p>
<p>Why:Because variable valuse is two so the switch case select that varible and match with case and if that match that case will be the execute but this code there are not breck so this print all  </p>
<div>
 
<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Ans:
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) { 
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D';
    } else if (score >= 0 && score < 60) {
        return 'F';
    } else {
        return 'Invalid score';
    }
};
getGrade(75);

Ans is C
</p>
<div>
 
<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Ans:
function rps(player1, player2){
    if(player1 === player2){
        return "It's a tie!";
    }
    if((player1 === "rock" && player2 === "scissors") ||
       (player1 === "paper" && player2 === "rock") ||
       (player1 === "scissors" && player2 === "paper")){
        return "Player 1 wins!";
    }
    return "Player 2 wins!";
}
console.log(rps("rock", "scissors")); // Player 1 wins!</p>
<div>
 