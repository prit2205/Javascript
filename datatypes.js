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