// Objects vs Array
// Objects -- when you want to show all data based on one entity (ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex. all users)
// let user_data = [{name: "abc", email: "test@gmail.com"}, {name:"def"}, {name: "abc1"}, {name: "ABC"}]

// create
// varabile = {}
// key: value --> key-value sturcture
let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
let demo1 = "name"
user[demo1] // --> convert into name (demo = 'name') --> output: Test

// Nesting and Deep Access
const user1 = {
    name: "test",
    address: {
        city: "Surat",
        pin: 395009,
        locations: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // --nested Object
user1.address.locations.lat; // --> Deep Access
// user1.address.location.lng;

// Object destructuring:
let { lat, lng } = user1.address.locations;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.locations;
// destructre and rename variable name

let demo = {
    first_name: "Demo",
    last_name: "User",
    age: 45,
    email: "demo@user.com",
};

// Looping (for-in loop)
// for (variable name in object_name){}
for (const key in demo) {
    // console.log(key);
    // obj.key --> not working
    // console.log(demo[key]);
    console.log(key, ":", demo[key]); // -- log whole object
}

// copying Objects: Spred, Object.assign, deep-clone
// Spred
// let user_data = {...demo};
let user_data = {gender: "Male", role: "user", ... demo} // add key-value and copy object
// Use case: State update
// const user = {
//  name: "Amit",
//  age: 30
// };

// const updateUser = {
// ...user,
//  age: 31
// };
// console.log(updateUser);

// Object.assign -- Copy and add keys-value
let user_data_assign = Object.assign({}, demo); // -nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number:7896845725}, demo); // - add and copy
// Use case: Default settings + user settings merge
// const defaultSettings = {
// theme: "light",
// language: "en"
// };

// const userSettings = {
//  theme: "dark"
// };

// const finalSettings = Object.assign({},defaultSettings, userSettings);

// console.log(finalSettings);

// Object.assign vs spred
// Object.assing() -- Method -- ES5 Old version, Less used
// Spred -- Oprator -- state updated, most used in react application, clean code

// deep clone
let temp_user1_clone = {...user1 }
// user1_clone.address.city = "Valsad" --> that will change value of user1 too
// issue: when you clone & copy nested object using spred or onject.assing into new variable that copy all value but nested object pass only refrence not copy
// (Jyare tame nested object(parent obj.) spred na upyog thi copy karo tyare nested obj.(child obj.)reference pass karshe -- value copy thase nahi)
// How to clone that -- use deep clone
// first convert your object to string
// JSON - Javascript Object to string
// JSON.stringify(obj._name) -- convert object into string
// JSON.parse(stingify_Object) -- convert string to object
let clone_user1 = JSON.parse(JSON.stringify(user1))
// Deep clone = completely new memory
// use case:
// Real time use:
// API response handling
// Avoid data mutation bugs

// Object.key -- add all keys into array formate
let key_arr = Object.keys(demo);
// Use case: User profile from validation
// ex. website par thi user from ma data ad kare chhe ane te data backend pase object formate ma aave chhe
// const userProfile = {
//   name: "Rahul",
//   email: "rahul@gmail.com",
//   age: 25
// };
// // now check how many filed user fill up 
// const keys = Object.keys(userProfile);
// console.log(keys);
// console.log(keys.length);

// Object.entries -- add key and value into array formate
// give array of arrays
let key_value_arr = Object.entries(demo);
// use case: Display user detils dynameicaaly (UI)
// ex. backed give you data into object formate
const user3 = {
    name: "Priya",
    city: "Ahmedabad",
    role: "Admin"
};
// print key and value both in profile page
Object.entries(user3).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});
// Object.entries(user) ===> convet into Array
// foreach ==> Array loop

// Optional Chaining, Computed Properrties
// user1.address.locationlog;
user1?.address?.locations?.lng; // --? optional chaining
// use case:
// without optional chaining -> app crash
// Backend data incomplete
// API response safety
// const apiResponse = {
// user: {
//      profile: {
//          name: "Neha"
//         }
//      }
//  };
// consle.log(apiResponse.user?.profile?.name);
// consle.log(apiResponse.user?.address?.city);

// ---------------------------------------
// Computed Properties
let role = "admin";
let user2 = {
    name: "test",
    age: 26,
    email: "test@gmail.com",
    address:{
        city: "Surat"
    },
    [role]: "test"
}
// Use Case: Dynamic object keys
// const fieldName = "email";
// const user = {
// name: "Ravi",
// [fieldName]: "ravi@gmail.com"
// };
// console.log(user);