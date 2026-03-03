// koi Pan Code JS ma line run thase
// Ane te Natural Pattern hoy chhe ke code line by line chale
// pan code ma kyare aevi pan line aave ke je wait kare and tene pachhi no code run thay jaay

setTimeout(() => {
    console.log("Good Evening");
}, 2000); // Sync

console.log("hi");
console.log("Hello"); // async

// SYNC --aevo code jo line by line chalse

// ASYNC -- aevo code ke je ready thai pachhi chale

// Callback Pattern and Callback hell 
// function abc(val) {
//     setTimeout(
//         () => {
//         console.log("Function value", val);
//     }, 
//     Math.floor(Math.random() * 10) * 1000,
//   );
// }
// abc(12);             

function abc1(fnc) {
    setTimeout(
        () => {
            return fnc();
    }, 
    Math.floor(Math.random() * 10) * 1000,
  );
}
abc1(function () {
    console.log("Hey. How Are You"); //this is callback function
});

// ek function ne tame ek bijo function na parameter ma mokali aapo chho, to te parameter walu fnc ne kevai chhe callback function

function abc2(fnc) {
    setTimeout(
        () => {
            return fnc();
    }, 
    Math.floor(Math.random() * 10) * 1000,
  );
}
abc2(function () {
    console.log("I am Fine"); //this is callback function
});
 
// callback hell
// JavaScript ni library (React/Angular/vue) function hoy teno use karvo --> callback hell
function ShowProfile(username, cb) {
    console.log("Fetching All Profiles......");
    setTimeout(() => {
        cb({
            id: 1,
            username,
        });
    }, 2000);
} // default fnc --> library

function ShowAllPost(id, cb) {
    console.log("Fetching All Post......");
    setTimeout(() => {
        cb({ id: id, posts: ["post1", "post2", "post3"]
        });
    }, 3000);
} // default fnc --> library

function ShowAllStory(id, cb) {
    console.log("Fetching All Stories......");
    setTimeout(() => {
        cb({ id: id, posts: ["story1", "story2", "story3"]
        });
    }, 4000);
} // default fnc --> library

// saved post 
function SavePost(id, cb) {
    console.log("Fetching Save Post......");
    setTimeout(() => {
        cb({ id: id, save: ["post1", "post2", "post3"]
        });
    }, 5000);
} // default fnc --> library

// reels
function SaveReels(id, cb) {
    console.log("Fetching Show Reels......");
    setTimeout(() => {
        cb({ id: id, reels: ["Reel1", "Reel2", "Reel3"]
        });
    }, 6000);
}


ShowProfile("test", function (data) {
    console.log(data);

    ShowAllPost(data.id, function(data) {
        console.log(data);

        ShowAllStory(data.id, function (data) {
            console.log(data);

             SavePost(data.id, function (data) {
            console.log(data);

                 SaveReels(data.id, function (data) {
            console.log(data);
                 });
             });
        });
    });
}); // callback hell

