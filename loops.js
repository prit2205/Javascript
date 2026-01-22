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