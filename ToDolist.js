// select
let inp = document.querySelector("input");
let addBtn = document.querySelector("#add_btn");
let ul = document.querySelector(".task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks));  // save data into array(obj. , formate) into array
    console.log(localStorage);
}

function ShowTasks(){
ul.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type='checkbox' ${task.done ? "checked": ""}> ${task.text}<button class='Dbtn'>Delete</button>`;
        ul.appendChild(li);
    });

    console.log(tasks);

}

addBtn.addEventListener("click", () => {
    let value = inp.value;
    
    console.log(value);
    tasks.push({ text: value, done: false});
    saveLocalStorage();
    ShowTasks();

    inp.value = "";
});

ul.addEventListener("click", (e) => {
    console.log(e.target.closest("li"));
    let li = e.target.closest("li");
    console.dir(e.target)
    console.log([...ul.children].indexOf(li));
    let index = [...ul.children].indexOf(li); // copy ul child(li) and find index number using indexOf(li)

    // Checkbox
    if(e.target.type === "checkbox") {
    tasks[index].done = e.target.checked;
    }

    // Delete btn
    if(e.target.classList.contains("Dbtn")) {
        tasks.splice(index, 1);
    }

    saveLocalStorage();
    ShowTasks();
});


ShowTasks();
