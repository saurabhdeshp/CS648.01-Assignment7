function view(inventory) {
    "use strict";
    var i, stored;
   
    for (i = 0; i < inventory.length; i += 1) {
        stored = localStorage.getItem(inventory[i].sku);
        if (stored !== null) {
            inventory[i].quantity = stored;
        }
        window.console.log(inventory[i].sku + "\t" + inventory[i].product + "\t" + "(" + inventory[i].quantity + ")" + "\t$" + inventory[i].cost);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var i, newQuantity, skuToUpdate;
    skuToUpdate = parseInt(window.prompt("Enter the sku to update"), 10);
    if (skuToUpdate === null || isNaN(skuToUpdate)) {
        window.alert("The entered sku is not valid");
        return false;
    } else {
        for (i = 0; i < inventory.length; i += 1) {      
            if (inventory[i].sku === skuToUpdate) {     
                newQuantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (newQuantity === null || isNaN(newQuantity)) {
                    window.alert("The quantity you entered is not valid");
                } else {            
                   localStorage.setItem(inventory[i].sku, newQuantity);                
                   inventory[i].quantity = newQuantity;                
                    window.console.log("The quantity of \"" + inventory[i].product + "\" was updated to " + newQuantity + " unit(s)");      
                    window.console.log("");
                    view(inventory);
                    return true;
                }
            } else { 
                window.alert("The sku is not present in inventory");
                return false;
            }
        }
    }
}

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update inventory");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function getInventory() {
    "use strict";
    var tshirt = [], jeans = [], jacket = [], hat = [], socks = [], inventory;

    tshirt.sku = 1;
    tshirt.product = "TShirt";
    tshirt.quantity = 58;
    tshirt.cost = 15;

    jeans.sku = 2;
    jeans.product = "Jeans";
    jeans.quantity = 200;
    jeans.cost = 49;

    jacket.sku = 3;
    jacket.product = "Jacket";
    jacket.quantity = 169;
    jacket.cost = 63;

    hat.sku = 4;
    hat.product = "hat";
    hat.quantity = 400;
    hat.cost = 18;

    socks.sku = 5;
    socks.product = "Socks";
    socks.quantity = 100;
    socks.cost = 21;
    
    inventory = [tshirt, jeans, jacket, hat, socks];
    
    return inventory;
}

window.addEventListener("load", function () {
    "use strict";
    var inventory, command;
    displayMenu();
    inventory = getInventory(); 
    while (true) {
        command = window.prompt("Enter command \n 1. view. \n 2. update. \n 3. exit.");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Exit");
});