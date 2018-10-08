//setting the variablesz of the game.
let numbers = 0;
let workers = 0;
let grandmas = 0;
let bankers = 0;
document.getElementById("settings").style.visibility = "hidden";
//saving the game in local storage
function saveData() {
    var save = {
        numbers : numbers,
        workers: workers,
        grandmas : grandmas
    }
 localStorage.setItem("save", JSON.stringify(save));
 console.log('saved');
}
//listens to a browser closing or reloading and calls the save function
window.addEventListener("beforeunload", function(e){
    saveData();
}, false);

//checks if the ctrl + s button are entered and then calls the save function
var isCtrl = false;$(document).keyup(function (e) {
if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
    if(e.which == 17) isCtrl=true;
    if(e.which == 83 && isCtrl == true) {
        var save = {
            numbers : numbers,
            workers: workers,
            grandmas : grandmas
        }
        alert('saved');
        localStorage.setItem("save", JSON.stringify(save));

 	return false;
 }
});

/*this is a function that loads the saved data from the localstorage and puts the data into the variables declared up above.
*this function is automatically called when the browser is reloaded
*/
(function loadData() {
const savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.numbers !== "undefined") numbers = savegame.numbers;
if (typeof savegame.workers !== "undefined") workers = savegame.workers;
if (typeof savegame.grandmas !== "undefined") grandmas = savegame.grandmas;
console.log('loaded');
})();
/*
*this function deletes the data from the localStorage
*/
function deleteData() {
    localStorage.removeItem("save");
    console.log('save deleted');
}

function settings() {
    document.getElementById("settings").style.visibility = "visible";
    document.getElementById("settings").style.height = "450px";
    document.getElementById("settings").style.width = "1265px";

    document.getElementById("all").style.visibility = "hidden";
    document.getElementById("settingsButton").setAttribute("onclick","closeSettings()");
}
function closeSettings() {

    document.getElementById("settings").style.visibility = "hidden";
    document.getElementById("all").style.visibility = "visible";
    document.getElementById("settingsButton").setAttribute("onclick","settings()");
}
/*
*when this function is called it adds a number to the number variable
*and then updates the number element to show the different number
*/
function clicker(num) {
    numbers = numbers + num;
    document.getElementById('number').innerHTML = numbers;
    // console.log(numbers);
    var money = document.getElementById('animation');
    // shake($('.moneySign'))
    // animation: shake 0.5s;

}
/*
*This function can be called to add a new worker
*it first calculates the worker cost and then it checks if the number you have is equal or higher to the cost of the worker.
*then it adds a new worker to the worker variable and takes the price of a worker of the numbers
*the else creates a new element which says you don't have enough money
*/
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
        let workerTotal =  workers;
        var nextCost = Math.floor(10 * Math.pow(1.1,workers));
        document.getElementById('workerCost').innerHTML = nextCost;
        document.getElementById('workerTotal').innerHTML = workerTotal;
            // console.log(workers);
        }
/*
*This is the same ass adding a worker without the error
*/
function addGrandma() {
    var grandmaCost = Math.floor(20 * Math.pow(1.1,grandmas));
    if(numbers >= grandmaCost) {
        grandmas = grandmas + 1;
        numbers = numbers - grandmaCost;
        document.getElementById('grandma').innerHTML = grandmas;
        document.getElementById('number').innerHTML = numbers;
    }
    let grandmaTotal =  grandmas * 2;
    var nextCost = Math.floor(20 * Math.pow(1.1,grandmas));
    document.getElementById('grandmaCost').innerHTML = nextCost;
    document.getElementById('grandmaTotal').innerHTML = grandmaTotal;

}

function addBanker() {
    var bankerCost = Math.floor(30 * Math.pow(1.1,bankers))
    if (numbers >= bankerCost) {
        bankers = bankers + 1;
        numbers = numbers - bankerCost;
        document.getElementById('banker').innerHTML = bankers;
        document.getElementById('number').innerHTML = numbers;
    }
    let bankerTotal =  bankers * 5;
    var nextCost = Math.floor(30 * Math.pow(1.1,bankers));
    document.getElementById('bankerCost').innerHTML = nextCost;
    document.getElementById('bankerTotal').innerHTML = bankerTotal;
    // console.log('new banker');
}
    console.log(bankers);

    // function multiplier() {
    //     if (grandmas >= 2) {
    //         for (var i = 0; i < 10; i++) {
    //             clicker(grandmas);
    //             console.log('test');
    //         }
    //     } else {
    //         for (var i = 0; i < 2; i++) {
    //             clicker(grandmas);
    //         }
    //     }
    // }

     window.setInterval(function() {
        clicker(workers)
        for (var i = 0; i < 5; i++) {
            clicker(bankers)
        }

        for (var i = 0; i < 2; i++) {
            clicker(grandmas)
        }
        // multiplier();
        let total = workers +(grandmas * 2) + (bankers * 5);
        document.getElementById('moneyPerSecond').innerHTML = total;
    }, 1000);

    window.setInterval(function() {
        if (document.getElementById("error")) {
            var element = document.getElementById('error');
            element.parentNode.removeChild(element);
        }

    }, 4000);

    window.setInterval(function() {
        saveData();
    }, 60000);
