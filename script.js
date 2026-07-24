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

        let change = money - total;
        let today = new Date();
        let orderNumber = Math.floor(Math.random() * 9000) + 1000;
        let wait = Math.floor(Math.random() * 15) + 10;

        let receipt = "<h2>Receipt</h2>";

        receipt += "Order #: " + orderNumber + "<br>";
        receipt += "Customer: " + name + "<br></br>";
        receipt += "date: " + today.toLocaleString() + "<br></br>";
        receipt += "<hr>";

        let item = 1;

        if (name== "") {
            alert("Please enter your name.");
            return;
        }

        if (mar > 0) {
           receipe += item + ". Margherita X" + mar + "<br>";
           item++;
        }
        if (pep > 0) {
            receipt += item + "Pepperoni X" + pep + "<br>";
            item;
        }
        if (haw > 0) {
            receipt += item + "Hawaiian X" + haw + "<br>";
            item;
        }
        if (meat > 0) {
            receipt += item + "Meatlovers X" + meat + "<br>";
            item;
        }
        if (veg > 0) {
            receipt += item + "Vegetarian X" + veg + "<br>";
            item;
        }
        if (gar > 0) {
            receipt += item + "Garlic Bread X" + gar + "<br>";
            item;
        }
        if (fri > 0) {
            receipt += item + "Fries X" + fri + "<br>";
            item;
        }
        if (coke > 0) {
            receipt += item + "Coke X" + coke + "<br>";
            item;
        }
        if (spr > 0) {
            receipt += item + "Sprite X" + spr + "<br>";
            item;
        }

        receipt += "<br><b>Total: $" + total.toFixed(2) + "</b>";
        receipt += "<br>Money Given: $" + money.toFixed(2);
        receipt += "<br>Change: $" + change.toFixed(2);
        receipt += "<br>Estimated wait: " + wait + " minutes";
        receipt += "<br><br>Thank you for ordering!";

        if (total == 0) {
            alert("Please choose at least one item.");
            return;
        }
        if (money < total) {
            alert("You don't have enough money.");
            return;
        }

        document.getElementById("receipt").innerHTML = receipt;     
    }

  

 