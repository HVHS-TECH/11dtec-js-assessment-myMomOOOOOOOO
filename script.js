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

        if (name== "") {
            alert("Please enter your name.");
            return;
        }

        let items =
        mar + pep + haw + meat + veg + gar + fri + coke + spr;


    
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

        if (total == 0) {
            alert("Please choose at least one item.");
            return;
        }
        if (money < total) {
            alert("You don't have enough money.");
            return;
        }

        let change = (money - total).toFixed(2);
        let today = new Date();
        let orderNumber = Math.floor(Math.random() * 9000) + 1000;
        let wait = Math.floor(Math.random() * 15) + 10;

        let receipt = "<h2>Receipt</h2>";

        receipt += "Order #: " + orderNumber + "<br>";
        receipt += "Customer: " + name + "<br></br>";
        receipt += "Date: " + today.toLocaleString() + "<br></br>";
        receipt += "<hr>";
        receipt += "<br>Total Items: " + items;

        let item = 1;

        

        if (mar > 0) {
           receipt += item + ". Margherita X" + mar + "<br>";
           item++;
        }
        if (pep > 0) {
            receipt += item + ". Pepperoni X" + pep + "<br>";
            item++;
        }
        if (haw > 0) {
            receipt += item + ". Hawaiian X" + haw + "<br>";
            item++;
        }
        if (meat > 0) {
            receipt += item + ". Meatlovers X" + meat + "<br>";
            item++;
        }
        if (veg > 0) {
            receipt += item + ". Vegetarian X" + veg + "<br>";
            item++;
        }
        if (gar > 0) {
            receipt += item + ". Garlic Bread X" + gar + "<br>";
            item++;
        }
        if (fri > 0) {
            receipt += item + ". Fries X" + fri + "<br>";
            item++;
        }
        if (coke > 0) {
            receipt += item + ". Coke X" + coke + "<br>";
            item++;
        }
        if (spr > 0) {
            receipt += item + ". Sprite X" + spr + "<br>";
            item++;
        }
        receipt += "<hr>";
        receipt += "<br><b>Total: $" + total.toFixed(2) + "</b>";
        alert("Payment accepted!");
        receipt += "<br>Money Given: $" + money.toFixed(2);
        receipt += "<br>Change: $" + change;
        receipt += "<br>Estimated wait: " + wait + " minutes";
        receipt += "<br>Pick up at the front counter.";
        receipt += "<br>Status: Preparing";
        receipt += "<br><br>Thank you for ordering from A Slice of Life!";
        receipt += "<br>We hope to see you again!"

        

        document.getElementById("receipt").innerHTML = receipt;     
    }

function resetOrder() {
    document.getElementById("customerName").value = "";

    document.getElementById("marQuantity").value = "";
    document.getElementById("pepQuantity").value = "";
    document.getElementById("HawQuantity").value = "";
    document.getElementById("meatQuantity").value = "";
    document.getElementById("vegQuantity").value = "";
    document.getElementById("garQuantity").value = "";
    document.getElementById("friQuantity").value = "";
    document.getElementById("cokeQuantity").value = "";
    document.getElementById("sprQuantity").value = "";
    document.getElementById("money").value = "";
    document.getElementById("receipt").innerHTML = "";
}

  

 