const users = [
  {
    id: 1,
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Frontend developer who loves building clean UI and interactive experiences.",
  },
  {
    id: 2,
    name: "Riya Sharma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    bio: "UI/UX designer passionate about user-centered digital products.",
  },
  {
    id: 3,
    name: "Kabir Patel",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    bio: "Full-stack MERN developer and open-source contributor.",
  },
  {
    id: 4,
    name: "Ananya Verma",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    bio: "Content creator and social media strategist.",
  },
  {
    id: 5,
    name: "Vivaan Singh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "Backend engineer specializing in Node.js and microservices.",
  },
  {
    id: 6,
    name: "Ishita Desai",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    bio: "Creative graphic designer with a love for branding.",
  },
  {
    id: 7,
    name: "Arjun Rao",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    bio: "Tech entrepreneur building SaaS platforms.",
  },
  {
    id: 8,
    name: "Meera Nair",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Mobile app developer and Flutter expert.",
  },
  {
    id: 9,
    name: "Rohan Kapoor",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600",
    bio: "Cybersecurity analyst focused on web security.",
  },
  {
    id: 10,
    name: "Diya Joshi",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
    bio: "Digital marketer with expertise in SEO and analytics.",
  },
  {
    id: 11,
    name: "Kunal Shah",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600",
    bio: "Data scientist exploring AI and machine learning.",
  },
  {
    id: 12,
    name: "Sneha Iyer",
    pic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
    bio: "Product manager passionate about tech innovation.",
  },
  {
    id: 13,
    name: "Yash Malhotra",
    pic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600",
    bio: "DevOps engineer automating cloud infrastructure.",
  },
  {
    id: 14,
    name: "Pooja Gupta",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    bio: "Photographer capturing stories through lenses.",
  },
  {
    id: 15,
    name: "Aditya Chauhan",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Blockchain developer exploring Web3 technologies.",
  },
  {
    id: 16,
    name: "Neha Kulkarni",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600",
    bio: "Frontend engineer focused on React performance.",
  },
  {
    id: 17,
    name: "Rahul Das",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600",
    bio: "AI enthusiast building smart automation systems.",
  },
  {
    id: 18,
    name: "Tanya Bansal",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    bio: "Creative writer and storytelling strategist.",
  },
  {
    id: 19,
    name: "Siddharth Jain",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    bio: "Startup mentor and business consultant.",
  },
  {
    id: 20,
    name: "Kavya Reddy",
    pic: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600",
    bio: "Software engineer building scalable web apps.",
  },
];

let card_container = document.querySelector(".card-container");

function showUsers(arr) { // arr - parameter
  arr.forEach((user) => {
    console.log(user);
    let card = document.createElement("div");
card.classList.add("card");
let blur_div = document.createElement("div");
blur_div.classList.add("blur");
let content = document.createElement("div");
content.classList.add("content");

let img = document.createElement("img");
img.classList.add("img");
img.setAttribute("src", user.pic);

let h2 = document.createElement("h2");
h2.textContent = user.name;
let p = document.createElement("p");
p.classList.add("card-text");
p.textContent = user.bio;

p.classList.add("card-text");

// add into html
card_container.appendChild(card);

card.appendChild(img);
card.appendChild(blur_div);
card.appendChild(content);

content.appendChild(h2);
content.appendChild(p);
  });
}
showUsers(users); 

// create card

let bar = document.querySelector(".bar");

bar.addEventListener("input", () => {
  console.log(bar.value.charAt(0));

  let new_user = users.filter((users) => {
    return users.name.startsWith(bar.value.charAt(0).toUpperCase());
  });

  card_container.innerHTML = "";

  console.log("new_user", new_user);

  showUsers(new_user);
});