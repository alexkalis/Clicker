let numbers = 0;
let workers = 0;
let grandmas = 0;

function saveData() {
    var save = {
        numbers : numbers,
        workers: workers,
        grandmas : grandmas
    }
localStorage.setItem("save", JSON.stringify(save));
console.log('saved');
}
function loadData() {
const savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.numbers !== "undefined") numbers = savegame.numbers;
if (typeof savegame.workers !== "undefined") workers = savegame.workers;
if (typeof savegame.grandmas !== "undefined") grandmas = savegame.grandmas;
console.log('loaded');
}
function clicker(num) {
    numbers = numbers + num;
    document.getElementById('number').innerHTML = numbers;
    // console.log(numbers);
    var money = document.getElementById('animation');
    // shake($('.moneySign'))
    // animation: shake 0.5s;

}
function addWorker() {

     var workerCost = Math.floor(10 * Math.pow(1.1,workers));
     if(numbers >= workerCost){
    workers = workers + 1;
    numbers = numbers - workerCost;
    document.getElementById('workers').innerHTML = workers;
    document.getElementById('number').innerHTML = numbers;
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
    if(numbers >= grandmaCost) {
        grandmas = grandmas + 1;
        numbers = numbers - grandmaCost;
        document.getElementById('grandma').innerHTML = grandmas;
        document.getElementById('numbers').innerHTML = numbers;
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
