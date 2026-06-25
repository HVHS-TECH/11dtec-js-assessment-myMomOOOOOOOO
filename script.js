console.log("Hello world!")


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "pizza") {
        alert("Welcome!");

        localStorage.setItem("loggedIn", "true");
        location.href = "index.html"
    } else {
        alert("Wrong username or password.");
    }


    

}

 function startOrder() {

        if (localStorage.getItem("loggedIn") == "true") {
            location.href = "Menu.html"
        } else {
            location.href = "Login.html";
        }
 }