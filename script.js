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

function logout() {
    localStorage.removeItem("loggedIn");
    location.href = "index.html";
}

 function startOrder() {

        if (localStorage.getItem("loggedIn") == "true") {
            location.href = "Menu.html"
        } else {
            location.href = "Login.html";
        }
 }


 function marTotal() {

    let quantity = document.getElementById("marQuantity").value;
    let total = quantity * 15;

    document.getElementById("marTotal").innerHTML =  "total: $" + total;
 }

 function pepTotal() {

    let quantity = document.getElementById("pepQuantity").value;
    let total = quantity * 18;

    document.getElementById("pepTotal").innerHTML =  "total: $" + total;
 }

 function garTotal() {

    let quantity = document.getElementById("garQuantity").value;
    let total = quantity * 8;

    document.getElementById("garTotal").innerHTML =  "total: $" + total;
 }