// Array -- Hold multiple values at same time
// ["product_name", 50000, '20%' ]
a[0] =  10;
a[1] =  20;
a[2] =  30;
a[3] =  40;
a[4] =  50;
// ["Hello", "a", "B", "C"]
// [2, "Bye", "Hello", 50]

// create
// define a variable= [multiple values]
let arr = [1, 2, 3, 4];
// let product_data = ["S25 Ultra", 150000, "20%", "Mobile"]

// access
// position = [0 1 2 3] --> index
// access
// array_name [position(index)]
arr[0];

// modify
// array name [position] = new value
arr[0]= 10;

// Array Methods:(variable_name.method_name())
// push, pop, shift, unshitf, splice, silce, reverse, sort
// push --> enter new value into array -- place it into last 
arr.push(5);
// use case -- enter new product into existing producats list

// pop --> remove last value into array
arr.pop()
// use case -- remove last product you add into your list

// shift --> remove first value into array
arr.shift()
// use case -- rmove old product automatic after sometimes

// unshift -- add value into array -- first
arr.unshift(10)
// use case -- add a value into top a that data you receives