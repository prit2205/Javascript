// this Keyword
// this keyword special keyword in javascript
// beacause ofv this keyword we can access the properties and methods of an object
// this keyborad is used to refer to the current object
// this keyword is userful when we have to access the properties and methods of an object inside a method of that object

// this keyword cotext is determined by how a function is called(that is reason why this keyword is called dynamic scope)(this ni value this nu use kaya context ma chhe te par depend kare chhe)

// global Context
console.log(this);

// function context
function abc() {
    console.log(this);
}
abc();

// method context
let obj = {
    name: "test",
    sayName: function () {
        console.log("this", this);
        console.log(this.name);
    }, // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give object

    // if you use arrow function then this key give you windows object because arrow function does not have its own this keyword it takes this value from its parent scope

    // if you create one more function inside method then this loose their value --> soluation --> you have to create a arrow function
};
obj.sayName();

// method -- arrow function
let obj1 = {
    name: "test1",
    sayName: () => {
            console.log("this arrow fnc", this);
        },
    };
obj1.sayName(); // this = windows

// method -- fnc info fnc
let obj2 = {
    name: "test 2",
    sayName: function () {
        function abc1() {
            console.log("this fnc into fnc", this);
        }
        abc1();
    },
};
obj2.sayName(); // this = window

// arrow function and lexical this 
// arrow function does not have its own this keyword it takes this value from its parent value
let obj4 = {
    name: "john",
    sayName: function () {
        console.log(this); // metohd --> ek function je koi object ni under hoy tene method kevaay. // this --> give object
        let abc = () => {
            console.log(this); // arrow function does not have its own this keyword it takes this value from its parent scope
        };
        abc();
    },
};
obj4.sayName();

// Manual Binding
// call, apply, bind
// function call karti vakhate this keyword ni value set karva mate call, apply, bind method no upyog kariye chhiye

let obj5 = {
    name: "test10",
    email: "a@a.com",
}; // save this obj. into this keyword

function temp_a() {
    console.log(this);
}
// function.call(object_name) --> thsi keyword ni value set karva mate call method no upyog kariye chhiye
temp_a.call(obj5);

// function.call(object_name) --> thsi keyword ni value set karva mate apply method no upyog kariye chhiye

temp_a.call(obj5);
// function.call(object_name) --> thsi keyword ni value set karva mate bind method no upyog kariye chhiye
let fnc = temp_a.bind(obj5); // blank object create
fnc();
// console.log(fnc);

// event context
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    console.log(this);
});
// fnc --> h1(html element)
// arrow fnc --> window

// class context
class Person {
    constructor() {
    console.log(this);
    let user = "test";
    }
}

let p1 = new Person(); // this value --> blank obj

// context --> this value
// global --> window
// fnc --> window
// method context fnc es5 --> object
// method context arrow fnc es6 --> window
// method context fnc es5 into fnc es5 --> window
// method arrow fnc es6 into fnc es5 --> object
// method arrow fnc es6 into arrow fnc es6 --> window
// event context --> html element
// class context --> blank object
