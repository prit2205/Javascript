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
