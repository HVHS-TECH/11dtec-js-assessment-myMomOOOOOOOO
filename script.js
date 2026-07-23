console.log("Hello world!")


function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "username" && password == "password") {
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

 function showMenu() {
    let menu = document.getElementById("menu")

    if (menu.innerHTML != "") {
        menu.innerHTML = "";
        return;
    }
    if (localStorage.getItem("loggedIn") == "true") {
        menu.innerHTML =
        '<button onclick="logout()">logout</button>';

    } else {
        menu.innerHTML =
        '<button onclick="location.href=\'Login.html\'">Login</button>';
    }
    }

    function finishOrder() {
        let name = document.getElementById("customerName").value;
        let mar = document.getElementById("marQuantity").value;
        let pep = document.getElementById("pepQuantity").value;
        let haw = document.getElementById("hawQuantity").value;
        let meat = document.getElementById("meatQuantity").value;
        let veg = document.getElementById("vegQuantity").value;
        let gar = document.getElementById("garQuantity").value;
        let fri = document.getElementById("friQuantity").value;
        let coke = document.getElementById("cokeQuantity").value;
        let spr = document.getElementById("sprQuantity").value;

        let total =
        mar * 15 +
        pep * 18 +
        haw * 18 +
        meat * 20 +
        veg * 16 +
        gar * 8 +
        fri * 8.5 +
        coke * 5 +
        spr * 5 +

        document.getElementById("receipt").innerHTML = 
        "Thank you " + name +
        "<br>Your total is $" + total.toFixed(2);
        
    }
 