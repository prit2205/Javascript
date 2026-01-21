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