function getDog(){
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data => {
document.getElementById("dogImg").src = data.message;
})
.catch(err => console.log(err));
}

getDog(); // load first image