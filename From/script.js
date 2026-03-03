// select
let form = document.querySelector("form");
let username = document.querySelector("#name");
let d_role = document.querySelector("#role");
let d_bio = document.querySelector("#bio");
let imgUrl = document.querySelector("#photo");

// event -- submit(form)
// use only this keyword
// crteate a object that have data and function

const userManagement = {
  users: [],
  // submit form
  init: function () {
    console.log(this.submitFrom.bind(this));
    form.addEventListener("submit", this.submitFrom.bind(this));
  },
  submitFrom: function (e) {
    e.preventDefault();
    console.log(this);
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    let userObj = {
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    };
    this.renderUi(userObj);
    this.saveToLocalStorage(userObj);
    console.log(this.users);
    form.reset();
  },
  // add user(html) function
  renderUi: function (userObj) {
    let card = document.createElement("div");
    card.className =
      "card max-w-lg w-auto  h-[300px] overflow-hidden border border-red-950 rounded-xl px-2 py-8 text-center shadow-xl";

    // image
    let img = document.createElement("img");
    img.className =
      "max-w-[100px] max-h-[100px] rounded-full shadow-xl w-full h-full mx-auto my-0 mb-4";
      img.src = `${userObj.photo}`;

    // username
    let h2 = document.createElement("h2");
    h2.className = "text-3xl font-semibold text-red-950 pt-2";
    h2.textContent = `${userObj.username}`;

    // role
    let role = document.createElement("p");
    role.className = "mt-2 text-xl font-medium text-gray-500";
    role.textContent = `${userObj.role}`;

    // bio
    let bio = document.createElement("p");
    bio.className = "text-lg font-semibold py-2 mx-auto";
    bio.textContent = `${userObj.bio}`;

    // appendChild
    let users_cards = document.querySelector(".users");
    users_cards.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(role);
    card.appendChild(bio);

    console.log(users_cards);
  },

  // saveToLocalStorage
  saveToLocalStorage: function (data) {
    const localData = JSON.parse(localStorage.getItem("formData")) || [];
    localData.push(data);
    localStorage.setItem("formData", JSON.stringify(localData));
  },
  getFromLocalStorage: function () {
    const localData = JSON.parse(localStorage.getItem("formData")) || [];
    localData.forEach((a, idx) => {
      this.renderUi(localData[idx]);
    });
  },

  // reset form
  // render ui
};
userManagement.init();
userManagement.getFromLocalStorage();

