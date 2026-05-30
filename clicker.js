var gold = 0;

function add() {
    gold += 1 ;
    update();
}

function update() {
    document.querySelector("#countNum").value = gold;
    
}

function shop(){
    document.getElementById("shopWindow").style.display = "block";

}

function closeShop(){
    document.getElementById("shopWindow").style.display = "none";
}