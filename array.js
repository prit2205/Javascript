// Array -- Hold multiple values at same time
// ["product_name", 50000, '20%' ]
let a = [1, 2, 3, 4];
a[0] =  10;
a[1] =  20;
a[2] =  30;
a[3] =  40;
a[4] =  50;
// ["Hello", "a", "B", "C"]
// [2, "Bye", "Hello", 50]

// create
// define a variable= [multiple values]
// let product_data = ["S25 Ultra", 150000, "20%", "Mobile"]

// access
// position = [0 1 2 3] --> index
// access
// array_name [position(index)]
a[0];

// modify
// array name [position] = new value
a[0]= 10;

// Array Methods:(variable_name.method_name())
// push, pop, shift, unshitf, splice, silce, reverse, sort
// push --> enter new value into array -- place it into last 
a.push(5);
// use case -- enter new product into existing producats list

// pop --> remove last value into array
a.pop()
// use case -- remove last product you add into your list

// shift --> remove first value into array
a.shift()
// use case -- rmove old product automatic after sometimes

// unshift -- add value into array -- first
a.unshift(10)
// use case -- add a value into top a that data you receives

// spilice --> add / remove value into array -- specific position
// into () - first index(position), how many value you wan tto remove
let e = [50, 80, 40, 20, 10];
console.log(e.splice(50, 20));
// e.splice(2, 1);
// e.splice(2, 0, 100, 200);
// use case -- add / remove product into specific position on click

// slice - copy values from array -- specific position number of values
// new variable = array_name.slice(start_position, end_position) 

// slice -- copy values from array -- specific position number of values
// new variable = array_name.slice(start_position, end_position)
// star index -- include into copy
// end index -- not include into copy
let f = [100, 95, 30, 40, 25, 0];
let new_f = f.slice(1, 4);
console.log(new_f);
// use case -- copy specific products data into new variable for offer
// generate a report based on data and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove values into main array -- changes the main array
// slice -- copy values from main array -- main array will not change

// reverse -- reverse the array values
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your fronted

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
// h.sort();
// let sr = h.sort(function(a, b){
//   return a - b; // ascending order
// })

let arr1 = [10, 2, 33, 4, 25];
let temp_arr1 = arr1.sort(function(a, b){
   return a - b; // ascending order
 });

let arr2 = ["b", "f", "a", "e", "c"];

let arr3 = ["Hello", "Bye", "Apple", "Array", "Orange", "Variable"];
// arr3.sort();
// let sr3 = arr3.sort(function(a, b){
//   return a.localeCompare(b); // ascending order
// })

// // example 1:
 let tasks = ['Wake up', 'Brush teeth'];
 tasks.push("but Milk")

// // example 2:
 let notifications = ['Email', 'Message', 'Reminder'];
 notifications.pop()

// //example 3 :
 let customers = ['Customer1', 'Customer2', 'Customer3'];
 customers.shift()

// // ex 4:
 let playlist = ['Song B', 'Song C'];
 playlist.unshift("Song A")

// // ex 5: 
 let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
 students.splice(1,1, "Jhon", "Sara")
 console.log(students)

// // ex 6
 let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
  
// // ex 7
 let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 weekendDays = days.slice(5,)

// // ex 8
 let levels = ['Easy', 'Medium', 'Hard'];
 levels.sort().reverse()

// //ex 9
 let scores = [45, 12, 78, 34, 89];
 scores.sort((a, b) => a - b)

// //ex 10
let prices = [199, 49, 999, 299, 149];
 prices.sort((a, b) => a - b)

// // ex 11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
 let newProducts = products.slice(0,3)

// //ex 12
 let colors = ['Red', 'Green', 'Blue', 'Yellow'];
 colors.splice(3,1,"Purple", "orange")

// // ex 13
 let steps = ['Step 1', 'Step 2', 'Step 3'];
 steps.sort().reverse().push("Final Step")
  console.log(steps)

// // ex 14
 let names = ['alice', 'Bob', 'charlie', 'David', "Asda"];
  names.sort((a,b)=>{
      return a.toLowerCase().localeCompare(b.toLowerCase())
 })
  console.log(names)

 let arr = ['10', '2', '5', '30', '20']; // sort() cant sort numberically
 arr.sort((a, b) => a - b)
 console.log(arr)

  let arr5 = ['b', 'f', 'a', 'r', 'w', 'c', 'h', 'i']
 arr5.sort()
 console.log(arr5)

let i = [10, 54, 2, 5, 45, 23, 345, 23];

let newI = []
 i.forEach(e => {
     newI.push(e + 10);
 })
 console.log(newI)

 i.map(e => {
     newI.push(e+10)
 })
  console.log(newI)

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically

let movies = ['Avatar', 'Titanic', 'Gladiator'];
// Add 'Inception' to the end of the array
console.log(movies.push('Inception'));
// Remove the first movie from the array
console.log(movies.shift());
// Sort the movies alphabetically
console.log(movies.sort());
// Final value of movies:
// ['Gladiator', 'Inception', 'Titanic']


// Q16. splice() return value
// splice(startIndex, deleteCount)
// It returns the removed elements as a new array
let nums1 = [1, 2, 3, 4];
// Removes 2 elements starting from index 1 (removes 2 and 3)
let removedNums = nums1.splice(1, 2);
console.log(removedNums);
// removedNums → [2, 3]
// nums1 → [1, 4]


// Q17. slice() immutability check
// slice(startIndex, endIndex)
// It does NOT change the original array
let nums2 = [10, 20, 30, 40];
// Extracts elements from index 1 up to (but not including) index 3
let result = nums2.slice(1, 3);
console.log(result);
// result → [20, 30]
// nums2 remains → [10, 20, 30, 40]


// Q19. reverse() mutation
// reverse() mutates the original array and returns the same reference
let letters = ['a', 'b', 'c'];
// Reverses the array in place
let reversedLetters = letters.reverse();
console.log(reversedLetters);
// letters → ['c', 'b', 'a']
// reversedLetters → ['c', 'b', 'a']
// Both variables point to the same array


// Q21. splice() edge case
// What happens if deleteCount is 0?
// No elements are removed, only insertion happens
let arr4 = ['x', 'y', 'z'];
// Insert 'new' at index 1 without deleting anything
arr4.splice(1, 0, 'new');
console.log(arr4);
// arr4 → ['x', 'new', 'y', 'z']


// Q23. slice() negative index
// Negative indexes count from the end of the array
let values = [100, 200, 300, 400, 500];
// slice(-3, -1) means:
// start at 3rd element from the end (300)
// end at 1st element from the end (not included)
let sliced = values.slice(-3, -1);
console.log(sliced);
// sliced → [300, 400]


// Q24. splice() vs slice()
// a) Use splice() when you want to update the original array
// b) Use slice() when you want to keep the original array unchanged


// Q25. Chained methods (brain teaser)
// shift() removes and returns the first element
// push() adds an element to the end of the array
let arr7 = [1, 2, 3];
// shift() removes 1 → arr7 becomes [2, 3]
// push(1) adds it to the end
arr7.push(arr7.shift());
console.log(arr7);
// Final value of arr7 → [2, 3, 1]

// For Each Loop
// for each -- Array ni darek value mate loop chalse
let n1 = [10, 35, 50, 69];

n1.forEach((val) => {
    let new_val = val + 10;
    console.log(new_val);   
});

// important into Array
// now all method are used in real world project
// all method are very important
// mainpulate data using array metods and function

// .map() Method:
// map -- create new array from existing array
// first map create a black array -- only for understanding
let data = [10, 20, 30, 40];
// same like for each -- loop through each value
let temp_data = data.map((val) => {
    if(val > 15) {
        return val;
    }
});
// use case -- data ma thi spaecific condition na value nikalva
// ex. product ma thi specific price na product nikalva
// if you want to create a new array based on some condition from existing array

// ex 1:
const steps1 = [1000, 2000, 4000];
steps1.map((e, i) => {
    steps1[i] *= 2;
})
console.log(steps)

//ex 2
const minutes = [1, 5, 10];
minutes.map((e, i) => {
    minutes[i] *= 60;
})
console.log(minutes)

//ex 3
const pricest = [200, 350, 500];
pricest.map((e, i) => {
    pricest[i] += 50;
})
console.log(pricest)

// ex 4
const marks = [35, 72, 88, 40];
marks.map((e, i) => {
    marks[i] = e >= 40 ? `${e} : pass` : `${e} : fail`;
})
console.log(marks)

// ex 5
const name3 = ['rahul', 'neha', 'amit'];
name3.map((e, i) => {
    name3[i] = e.toUpperCase();
})
console.log(name3)

// ex 6
const prices1 = [500, 1000, 1500];
prices1.map((e, i) => {
    prices1[i] = e - (e * 0.10)
})
console.log(prices1)

// ex 7
const score = [45, 60, 85];
score.map((e, i) => {
    if (e >= 80) { score[i] += 20; }
    else if (e >= 50) { score[i] += 10; }
})
console.log(score)

// ex 8
const celsius = [0, 20, 30];
let fehrenheit = celsius.map(e => ((e * 9 / 5) + 32))
console.log(fehrenheit)

// ex 9
const numbers = [1, 2, 3, 4];
let table = numbers.map((e, i) => (`${e} * ${i} = ${e * i}`))
console.log(table)

// filter
// filter tyre use karvu ke jayre ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 3000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare

// use case -- data ma thi specific data new array store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive prdouct on your homepage 
// if you want to filter product based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type) => {
    if (type === "Tablet" || type === "Moblie") return true;
});

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [15, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
        return accumulator + val;
}, 0); // intial value of accumulator
// 0+ 10 => 10
// 10 + 68 => 75
// 20 + 10 => 30
console.log("Final Price :", final_price)
// accumulator --> je value function ma retun thase te accumulator ma store thase --> accumulator name change kari sako cho
// val --> array ni darek value

// use case -- data ma thi ek single value calulate karvi hoy
// ex. product ma thi total price calcaulate karvi hoy


// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
//.find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find( (e) => {
    if (e === "Tablet") {
        return true;
    } else if (e === "Desktop") {
        return true;
    } else {
        return false
    }
});

// use case -- data ma thi ek value find karvi hoy based on condition
// ex. product ma thi specifice product find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop 
let AllSara = people.find((name) => name === "Sara");
console.log("filter", AllSara);

// example 2: Book bus for travel 

// some 
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyere stop kare
// some() vs find() --> some() can't return you value item its return true or false, find() return value of array 
// give ans in true and false
let marks1 = [10, 20, 35, 90];
let any = marks1.some( (val) => {
    if (val > 85) return 12;
    // if  (val < 85) return "need improvement";
});
console.log(any)
// use cae -- check if some product are out of stock in your cart

//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
let def = [20, 30, 90, 45];
let num = def.every(function (val) {
    return val < 40;
})

// use case --> check all student is pass or not

// some), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() -> item === "Mobile" --> true
//.find() --> item === "Mobile" -> "Mobile"
//.filter() --> item == "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable 
let arr6 = [1, 2, 3, 4, 5]
// let j = arr6[0]; --> 1
// let k = arr6[2]; --> 3
let [ j, ,k] = arr6; // --> destructuring
// let [, , n] = arr;
console.log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
// name, email, gender, city
// console.log("name", name)


// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3; // just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and Object -- copy
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [...temp_arr, ...temp_arr2];
console.log(mix_arr)