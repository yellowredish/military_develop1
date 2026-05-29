var gold = 0;

function add() {
    gold += 1 ;
    update();
}

function update() {
    document.querySelector("#countNum").value = gold;
    
}