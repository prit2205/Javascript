// Object Oriented Javascript
// OOPS
// dar vakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tene upyog thi teme nava nava objet banavani sakiye chhiye tene j kevay chhe Object Oriented Programming

// blueprint(object kevo dekhase, object ma su method --> based on blueprint create objects)

// blueprint -- constructor
// function based constructor --> Contructor Function --> function Name always start with Capital Letter

function CreatePencil(name, price, color) {
   // blue print 
   this.name = name;
   this.price = price;
   this.color = color;

    this.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    };

    this.erase = function() {
        document.querySelectorAll('h1').forEach((text) => {
            if(text.style.color === this.color) {
                text.remove();
            }
        });
    };
   console.log(this);
}

let p1 = new CreatePencil("pencil1", 5, "black");
let p2 = new CreatePencil("pencil2", 10, "red");
let p3 = new CreatePencil("pencil3", 15, "blue");
let p4 = new CreatePencil("pencil4", 20, "green");
let p5 = new CreatePencil("pencil5", 50, "yellow");

// jo consturuction functions koi field tena prototype ma add attech kari de to te field badha object ma available thase

CreatePencil.prototype.shape = "rounded";

// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function 

// CLASS in Javascript
// class is syntatical suger over construction function, class ma apd constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand than construction function

class CreatPen {
    constructor(name, price, color, company) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;

        this.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    };

    this.erase = function() {
        document.querySelectorAll('h1').forEach((text) => {
            if(text.style.color === this.color) {
                text.remove();
            }
        });
    };
   console.log(this);
};
}

let pen1 = new CreatPen("Pne1", 5, "blue", "cello");
let pen2 = new CreatPen("Pne2", 10, "red", "shino");
let pen3 = new CreatPen("Pne3", 15, "yellow", "chatgpt");

// extends
// create a new class that hold old class value and aslo have some new values
// copy old class and add new value

class User {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = "user";
        // read profile
        this.profile = function () {
            console.log(this);
            // console.log({
            //     name: this.name,
            //     email: this.email,
            //     age: this.age,
            //     role: this.role,
            // });
            // return "user profile Fetched";
        };
        
        // create a post
        this.post = function (title, link) {
            let caption = document.createElement("p");
            caption.textContent = title;
            caption.className = "text-2xl text-teal-950";
            let img = document.createElement("img");
            img.setAttribute("src", link);
            img.className = "w-[200px] h-auto rounded-full  shadow-lg";

            document.body.appendChild(caption);
            document.body.appendChild(img);

        };
        
        console.log(this)
    }
}

let u1 = new User("test", "test@gmail.com", 25);
let u2 = new User("Demo", "Dem@gmail.com", 20);

class Admin extends User {
    constructor(name, email, age){
        super(name, email, age); // je class extends kariye tenu constructoer aetle super -- user nu constructor --> super
        this.role = "admin";
        console.log(this);

        // show all user's name
        this.showUsers = function(users) {
            // console.log(users);
            return users;
        };
    }
}

let admin = new Admin("admin", "admin@test.com", 25);
console.log("Admin can See All Data");
admin.showUsers({ user1: u1.profile(), user2: u2.profile() });

// prototype inheritance vs classical inheritance
// classical Inheritance -- create a classes and extands their classes

// inheritance meaning --> class to class inheritance (copy one class into anthor class)

// protoypeal inheritance --> object to object
// ek object chhe tene tame all props/methods ne inhrit kari chho ke nava object ma

let SoftDrink = {
    color: "blue",
    price: 50,
    buy: function (company) {
        console.log(
            " == This Your Bill == : \n",
            "Color" + this.color,
            " \n price" + this.price,
            "\n Company Name :" + company,
        );
    },
};

let BlueBerry = Object.create(SoftDrink);
console.log(BlueBerry);