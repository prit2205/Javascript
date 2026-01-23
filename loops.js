// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for loop? when we know how many times we want to repeat a block of code
// print 1 to 10 --> console.log(1) ... console.log(10);
// for (ex. 1 -> 50 -> increment by 1)
// (start; end; change)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}   
// print even numbers from 1 to 20

for (let j = 9; j >= 1; j--) {
    console.log(j);
}

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

// while loop
// why use while loop? when we don't know how many times we want to repeat a block of code
//while (ex. 1 -> condition -> true)
// start
// while (end condition) 
// code
// change
// }

let k = 5;
while (k <= 20) {
    console.log("k with while loop", k);
    k++;
}
// make it true loop
// let k = 50;
// while (k = 20) {
//   console.log(k);
//   k++;
// }

// let j = 50;

// while (true) {
//   console.log(j);
//   j++;

//   if (j > 55) break; 
// }

let a = 30;
while (a >= 20){
    console.log(a)
    a--;
}

let c =30
 while(c > 20) {
     console.log(c)
     c--;
 }

 let f = 50;
 while (f <= 60 ){
     console.log("Hello", f)
     f++;
 }

 let q = 50;
 while(q <= 60) {
    console.log(q)
     ++q;
}

// do while loop
// do {} while (end);
// start
// do {
// code
// change
// } while (end condition);
let j = 12; // start
do {
    console.log("j with do while loop", j); // code
    j++; // change
} while (j < 20); // end condition

let z = 16; // start
do {
    console.log("z with do while loop error", z); // code
    z++; // change condition   
} while (z < 10);

// break 
for (let k = 1; k <= 201; k++) {
    console.log("loop with break", k);
    if (k === 25) {
        break;
    }
}

for (let k = 12; k <= 201; k++) {
    console.log("loop with break 2", k);
    if (k < 24){
        break
    }
}

for (let m = 1; m <= 50; m++) {
    console.log("loop with break 3", m);
    if (m === 30) {
        break;
    }   
}

// continue
for (let a = 1; a <= 10; a++) {
    if (a === 5) {
        continue;
    }   
    console.log(a);
}

for (let A = 1; A <= 15; A++) {
    if (A >= 8) {
        continue;
    }
    console.log("loop that skip numbers", A);
}
