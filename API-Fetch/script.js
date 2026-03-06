// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responeses in JavaScript. It provides a modern and flexible way to interact with APIs and retrive data form servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basic: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perfrom different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then --> then --> catch
function Userdata() {
    fetch("https://randomuser.me/api/?results=100")
    .then(function(rawdata) {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log("Final Data step 1", data);
        console.log("Final Data step 2", data.results);
        console.log("First Data", data.results[0]);
        console.log("First User Email", data.results[0].email);
    })
    .catch(() => {
        console.error(err);
    });
}

Userdata();


// create a card ==> gender, name, phone number, email, location, photo

