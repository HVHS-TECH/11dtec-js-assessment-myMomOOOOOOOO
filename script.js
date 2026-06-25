console.log("Hello world!")


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "pizza") {
        alert("Welcome!");
    } else {
        alert("Wrong username or password.");
    }

}