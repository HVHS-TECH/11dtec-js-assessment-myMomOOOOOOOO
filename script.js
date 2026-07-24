console.log("Hello world!")

let menu = [
    "Margherita Pizza",
    "Pepperoni Pizza",
    "Hawaiian Pizza",
    "Meatlovers Pizza",
    "Vegetarian Pizza",
    "Garlic Bread",
    "Fries",
    "Coke",
    "Sprite"
];

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
        let mar = Number(document.getElementById("marQuantity").value);
        let pep = Number(document.getElementById("pepQuantity").value);
        let haw = Number(document.getElementById("HawQuantity").value);
        let meat = Number(document.getElementById("meatQuantity").value);
        let veg = Number(document.getElementById("vegQuantity").value);
        let gar = Number(document.getElementById("garQuantity").value);
        let fri = Number(document.getElementById("friQuantity").value);
        let coke = Number(document.getElementById("cokeQuantity").value);
        let spr = Number(document.getElementById("sprQuantity").value);
        let money = Number(document.getElementById("money").value);

        let total =
        mar * 15 +
        pep * 18 +
        haw * 18 +
        meat * 20 +
        veg * 16 +
        gar * 8 +
        fri * 8.5 +
        coke * 5 +
        spr * 5;

        let receipt = "<h2>Receipt</h2>";
        receipt += "Customer: " + name + "<br></br>";

        if (mar > 0) receipt += "Margherita X" + mar + "<br>";
        if (pep > 0) receipt += "Pepperoni X" + pep + "<br>";
        if (haw > 0) receipt += "Hawaiian X" + haw + "<br>";
        if (meat > 0) receipt += "Meatlovers X" + meat + "<br>";
        if (veg > 0) receipt += "Vegetarian X" + veg + "<br>";
        if (gar > 0) receipt += "Garlic Bread X" + gar + "<br>";
        if (fri > 0) receipt += "Fries X" + fri + "<br>";
        if (coke > 0) receipt += "Coke X" + coke + "<br>";
        if (spr > 0) receipt += "Sprite X" + spr + "<br>";

        receipt += "<br><b>Total: $" + total.toFixed(2) + "</b>";
        receipt += "<br><br>Thank you for ordering!";

        document.getElementById("receipt").innerHTML = receipt;     
    }
 