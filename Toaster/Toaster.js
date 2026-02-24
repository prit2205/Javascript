let d = 20;
function abc() {
    console.log(d);
}
function def() {
    let d = 25;
    abc();
}
def();
// console.log ans: 20

function parent() {
    let a = 12;
    return function () {
        console.log(a);
    };
}
let fnc1 = parent();
fnc1();
// consol.log 

// counter
function counter() {
    let a = 0;
    return function () {
        a++;
        console.log(a);
    };
}
let fnc = counter();
fnc();//1
fnc();//2
fnc();//3
fnc();//4
fnc();//5

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();

// create toaster
function createToaster(configs) {
    let toast = document.querySelector(".toast");

    return function (data) {
        let toaster = document.createElement("div");
        toaster.className = `${configs.theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-red-950 border border-red-950"}bg-gray-800 px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none shadow-lg`;

        toaster.textContent = data;

        if(configs.positionY !== "top" || configs.positionX === "left"){
            console.log(configs, "if running");
            toast.className +=`${configs.positionY === "left" ? "left-4" : "right-4"} ${configs.positionx === "top" ? "top-4" : "bottom-4"}`; 
        }

        toast.appendChild(toaster);

          setTimeout(() => {
        toast.removeChild(toaster);
    }, configs.duration * 1000);
    };
}

let toast = createToaster({
    positionY: "right",
    positionX: "bottom",
    theme: "light",
    duration: 5, // 3 sec
});

toast("Welcome Admin");
setTimeout(()=>{
    toast("You Have 2 New Notifications");
}, 2000);
setTimeout(()=>{
    toast("Managers Login At 9:30 AM");
}, 4000);
setTimeout(()=>{
toast("New Leave Application Raised By Developer");
}, 6000);
