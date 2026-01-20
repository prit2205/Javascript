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
let number = 900719925471991;
number = number + 10;
let num2 = 9007199254711991145;
num2 + 10n; 