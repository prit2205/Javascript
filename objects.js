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