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
 



 JavaScript Loops: For, while, do-while, break, continue
<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>
Ans: for(i = 0; i < 10; i++){
    consol.log(i);
}
</div>
 
<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
Ans: i = 1;
while(i < 10){
    consol.log(i)
    i--;
}
</div>
 
<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>
<p>for(let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);

    }

}</p>
</div>
 
<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>
<p>let i= 1;</p>
<p>while(i<=15){
    if(i%2 !==0){ // or (i%2 ===1)
    console.log(i);
    }  i++;

}</p>
</div>
 
<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>
</div>
 
<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}

console.log(sum);
</p>
</div>
 
<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>
<p>
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
</p>
</div>
 
<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
<p>

let num = prompt("give a number");
for(let i=1; i <=numl i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}
</p>
</div>
 
<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
<p>

for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
</p>
</div>
 
<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }

}
</p>
</div>
 
<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>

for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}
</p>
</div>
 
<div>
<h1> (Break and Continue)Example 12:</h1>
<p>Print First 5 Odd Numbers</p>
<p>Write a loop from 1 to 100 that:</p>
<p>Prints only 5 odd numbers</p>
<p>Then stops the loop</p>
<p>Use Both if, continue and a counter + break</p>
<p>
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){cha
        break;
    }
}
</p>
</div>




## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p></p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
<p>Why: Function declaration is hoisted</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
<p>const add = (a, b) => a + b;</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
<p>function temp(a, b, c){
    console.log(a, b, c);
}
temp(1, 2);</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
<p>function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5);
</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total += val;
    });
    return total;
}
let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);</p>
<p>irst function has Error because loop condition is wrong (<=)</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
<p>function checkAge(age){
    if(age < 18){
        return "Too Young";
    }
    return "Access Granted";
}</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
<p>function f(){
    return;
}
[1, 2, 3].map(function (x){
    return x * 2; }
)
</p>
</div>


<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
<p>JS treats functions like normal values</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>Yes, function can be assigned to a variable and called</p>
<p>Output: Hello</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
<p>Functions are first-class citizens</p>
<p>Function passed as argument and executed</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
<p>Enables abstraction and reusable logic</p>
<p> Higher Order Function</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
<p>It modifies external variable (side effect)</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
<p>function numPure(total, n){
    return total + n;
}
numPure(5, 3);<p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
<p>When inner function remembers variables of outer function</p>
<p>function outer(){
    let x = 10;
    return function(){
        console.log(x);
    };
}</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
<p>Output: 1 and 2</p>
<p>Why: Closure preserves count value</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
<p>Why: Executes immediately</p>
<p>(function init(){
    console.log("Initialized");
})();</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
<p>Real-world use: Module pattern</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
<p>Output: TypeError</p>
<p>Why: var is hoisted but function value is undefined</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
<P>Why: Function declaration is fully hoisted</p>
<P>Output: Hello</p>
</div>
 
 // 1. Double daily steps count
// Real life: Fitness app doubling step goal
// const steps = [1000, 2000, 3000];
// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);


// 2. Convert minutes to seconds
// Real life: Video duration calculation
// const minutes = [1, 5, 10];
// const seconds = minutes.map(function(min) {
//   return min * 60;
// });


// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
// const prices = [200, 350, 500];
// const finalPrices = prices.map(price => price + 50);


// 4. Convert exam marks to grades
// Real life: Result system
// const marks = [35, 72, 88, 40];
// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = marks.map(getGrade);


// 5. Capitalize names
// Real life: Display usernames properly
// const names = ['rahul', 'neha', 'amit'];
// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );


// 6. Apply 10% discount
// Real life: Shopping sale
// const prices = [500, 1000, 1500];
// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);


// 7. Add bonus points to scores based on condition
// Real life: Game scoring system
// const scores = [45, 60, 85];
// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });


// 8. Convert temperatures with formula
// Real life: Weather app
// const celsius = [0, 20, 30];
// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);


// 9. Generate table of numbers
// Real life: Math learning app
// const numbers = [1, 2, 3, 4];
// const tableOfTwo = numbers.map(num => num * 2);


// 10. Combine map with string formatting
// Real life: SMS notification system
// const balances = [500, 1200, 300];
// const messages = balances.map(balance =>
//   Your balance is ₹${balance}
// );

### 1. Get even numbers
**Real life:** Find even roll numbers
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
ans:const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
```
---

### 2. Filter adults
**Real life:** Allow only 3+ users
```js
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
ans:const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
```

---

### 3. Remove empty items
**Real life:** Clean user input
```js
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
ans:const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
```
---

### 4. Filter passing marks
**Real life:** Exam result system
```js
const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
ans:const marks = [35, 72, 88, 40, 25];
const passedStudents = marks.filter(mark => mark >= 40);
```
---

### 5. Get affordable prices
**Real life:** Shopping app price filter
```js
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
ans:const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
```
---

### 6. Filter long words
**Real life:** Search keyword validation
```js
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
ans:const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
```

### 7. Filter positive numbers
**Real life:** Bank transaction validation
```js
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
ans:const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
```

---

### 8. Filter numbers within a range
**Real life:** Score selection
```js
const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
ans:const scores = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
```



JavaScript .reduce() Method Example:

### 1. Total money in wallet

**Real life:** Add all cash amounts
```js
const money = [100, 200, 50];

const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
ans:const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// Output: 350
```
 
---
 
### 2. Total steps walked in a week
**Real life:** Fitness tracker
```js
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
ans:const steps = [3000, 5000, 4000, 6000];
const weeklySteps = steps.reduce((total, step) => total + step, 0);
// Output: 18000
```
 
---
 
### 3. Find total cart price
**Real life:** Shopping bill
```js
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
ans:const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
// Output: 997
```
 
---
 
### 4. Find maximum score
**Real life:** Highest exam mark
```js
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);
ans:const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
// Output: 92
```

---
 
### 5. Count total characters
**Real life:** Text length calculation
```js
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
ans:const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
// Output: 9
```
 
---
 
### 6. Combine words into a sentence
**Real life:** Message builder
```js
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
ans:const words = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words.reduce((text, word) => text + ' ' + word);
// Output: "Learning JavaScript is fun"
```

---
 
### 7. Count passed students
**Real life:** Result summary
```js
const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
ans:const marks = [35, 72, 88, 40, 25];
const passCount = marks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
// Output: 3
```
 
---
 
### 8. Calculate final balance
**Real life:** Bank account calculation
```js
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
ans:const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// Output: 1000
```
---
 
---
 
### 10. Build comma-separated string
**Real life:** Display values in UI
```js
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
ans:const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
// Output: "Pen, Book, Pencil"
```
---
