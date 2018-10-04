let number = 0;
let workers = 0;
let grandmas = 0;
function clicker(num) {
    number = number + num;
    document.getElementById('number').innerHTML = number;
    // console.log(number);
    var money = document.getElementById('animation');
    // shake($('.moneySign'))
    // animation: shake 0.5s;

}
function addWorker() {

     var workerCost = Math.floor(10 * Math.pow(1.1,workers));
     if(number >= workerCost){
    workers = workers + 1;
    number = number - workerCost;
    document.getElementById('workers').innerHTML = workers;
    document.getElementById('number').innerHTML = number;
} else {
    var h2= document.createElement('h2');
    h2.setAttribute('id','error');
    var t = document.createTextNode('je hebt niet genoeg geld');
    h2.appendChild(t);
    document.body.appendChild(h2);
}
var nextCost = Math.floor(10 * Math.pow(1.1,workers));
document.getElementById('workerCost').innerHTML = nextCost;
    console.log(workers);
}

function addGrandma() {
    var grandmaCost = Math.floor(20 * Math.pow(1.1,grandmas));
    if(number >= grandmaCost) {
        grandmas = grandmas + 1;
        number = number - grandmaCost;
        document.getElementById('grandma').innerHTML = grandmas;
        document.getElementById('number').innerHTML = number;
    }
    var nextCost = Math.floor(20 * Math.pow(1.1,grandmas));
    document.getElementById('grandmaCost').innerHTML = nextCost;

}

 window.setInterval(function() {
    clicker(workers)
    for (var i = 0; i < 2; i++) {
        clicker(grandmas)
    }
    let total = workers + (grandmas * 2);
    document.getElementById('moneyPerSecond').innerHTML = total;
}, 1000);
window.setInterval(function() {
    if (document.getElementById("error")) {
        var element = document.getElementById('error');
        element.parentNode.removeChild(element);
    }

}, 4000);
