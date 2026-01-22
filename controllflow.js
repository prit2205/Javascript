// control flow statements in JavaScript

// 1.if-else statement(if, else if, else,if else-if else)
// if(condition1){} --> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 > 13) {
    console.log(true);
} // condotion false hoy to {} code run na hoy

if (!12) {
    console.log("number");
}

if (!0) {
    console.log("number");
}

// if-else statement
let age = 18;   
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}              

if (age < 18) {
    console.log(true);
} else {
    console.log(false);
}

if (!12) {
    console.log("number");
} else {
    console.log("not a number");
}
// if-else if-else statement
let loggedin = true;
let admin = true;
if (loggedin && admin) {
    console.log("Welcome Admin");
} else if (loggedin) {
    console.log("Welcome User");
} else {
    console.log("Please log in");
}

// 2.switch statement
let day = 3;
switch (day)  // value --> case value same hoy to {} code run
 {
    case 1:
        console.log("Monday");          
        break;
    case 2:
        console.log("Tuesday");         
        break;
    case 3:
        console.log("Wednesday");       
        break;
    case 4:
        console.log("Thursday");        
        break;
    case 5:
        console.log("Friday");          
        break;
    case 6:
        console.log("Saturday");        
        break;
    case 7:
        console.log("Sunday");          
        break;
    default:
        console.log("Invalid day");
}

switch ("BOGO"){
    case "50%OFF first order":
        console.log("You get 50% off on your first order.");
        break;
    case "BOGO":
        console.log("Buy one get one free offer applied.");
        break;  
    case "FREESHIP":
        console.log("Free shipping on orders over $50.");
        break;
    default:
        console.log("Invalid coupon code.");
}

// Early return pattern
function score(value){
    if(value > 90) {
        return "value is more than 90";
    }
    else if(value > 80) {
        return "value is more than 80";
    }
    else if(value > 70) {
        return "value is more than 70";
    }
    else if(value > 60) {
        return "value is more than 60";
    }
    else if(value > 50) {
        return "value is more than 50";
    }
    else{
        return "value is less than or equal to 50";
    }
}
score(85);
// console.log(score(85));

function score(value){
    if(value < 90) return "value is less than 90";
    else if(value < 80) return "value is less than 80";
    else if(value < 70) return "value is less than 70";
    else if(value < 60) return "value is less than 60";
    else if(value < 50) return "value is less than 50";
    return "value is less than or equal to 50";
}

function score2(value){
    if(value < 60) return "value is less than 60";
    if(value < 70) return "value is less than 70";
    if(value < 80) return "value is less than 80";
    if(value < 90) return "value is less than 90";
    return "value is less than or equal to 50";
}

function getgrade(marks) {
    if (marks >= 90 && marks <= 100) return "A+";
    else if (marks >= 80 && marks < 90) return "A";
    else if (marks >= 70 && marks < 80) return "B";
    else if (marks >= 60 && marks < 70) return "C";
    else if (marks >= 50 && marks < 60) return "D";
    else if (marks >= 0 && marks < 50) return "Fail";
    else return "Invalid marks";
}

// ((player1 === "rock" && player2 === "scissors") ||
// (player1 === "paper" && player2 === "rock") ||
// (player1 === "scissors" && player2 === "paper")){
// return "Player 1 wins!";
//