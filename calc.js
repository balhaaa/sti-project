function calcul() {
    let machawi = parseInt(document.getElementById("machawi").value) * 35;
    let littleMachawi = parseInt(document.getElementById("littleMachawi").value) * 20;
    let halfChicken = parseInt(document.getElementById("halfChicken").value) * 14;
    let chichTaouk = parseInt(document.getElementById("chichTaouk").value) * 14;
    let kebab = parseInt(document.getElementById("kebab").value) * 14;
    let roastLamb = parseInt(document.getElementById("roastLamb").value) * 25;
    let water = parseInt(document.getElementById("water").value) ;
    let pepsi = parseInt(document.getElementById("pepsi").value) * 5;
    let coca = parseInt(document.getElementById("coca").value) * 2.5;
    let fanta = parseInt(document.getElementById("fanta").value) *2 ;

    let total = machawi + littleMachawi + halfChicken + chichTaouk + kebab + roastLamb + water + pepsi + coca + fanta ;

    document.getElementById("totalPrice").innerHTML = total;
}
function place() {
    let total = document.getElementById("totalPrice").textContent;
    
    if (total == "0") {
        alert("Please select at least one item before ordering.");
    } else {
        alert("Order placed successfully! Your total is " + total + " DT.");
    }
}

function cancel() {
    document.getElementById("orderForm").reset();
    document.getElementById("totalPrice").innerHTML = "0";
}