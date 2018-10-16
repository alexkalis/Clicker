//setting the variablesz of the game.
let numbers = 0;
let workers = 0;
let grandmas = 0;
let bankers = 0;
let multiplier = 0;
let prestiges = 0;
let gold = 0;
document.getElementById("settings").style.visibility = "hidden";
document.getElementById("info").style.visibility = "hidden";
document.getElementById("stats").style.visibility = "hidden";
document.getElementById('prestige').style.visibility = 'hidden';
document.getElementById('prestigeTab').style.visibility = 'hidden';


//Saving the game and other save options:
function saveData() {
    var save = {
        numbers : numbers,
        workers: workers,
        grandmas : grandmas,
        bankers : bankers,
        multiplier : multiplier
    }
 localStorage.setItem("save", JSON.stringify(save));
 console.log('saved');
}
function savePrestige() {
    var prestigeSave = {
        prestiges : prestiges,
        gold : gold
    }
    localStorage.setItem("prestigeSave", JSON.stringify(prestigeSave));

}
//listens to a browser closing or reloading and calls the save function
// window.addEventListener("beforeunload", function(e){
//     saveData();
// }, false);

//checks if the ctrl + s button are entered and then calls the save function
var isCtrl = false;$(document).keyup(function (e) {
if(e.which == 17) isCtrl=false;
}).keydown(function (e) {
    if(e.which == 17) isCtrl=true;
    if(e.which == 83 && isCtrl == true) {
        var save = {
            numbers : numbers,
            workers: workers,
            grandmas : grandmas,
            bankers : bankers,
            multiplier : multiplier
        }
        alert('saved');
        localStorage.setItem("save", JSON.stringify(save));

    return false;
 }
});

/*this is a function that loads the saved data from the localstorage and puts the data into the variables declared up above.
*this function is automatically called when the browser is reloaded
*/


function deleteData() {
    localStorage.removeItem("save");
    console.log('save deleted');
}
window.onload = function loadData() {
    const savegame = JSON.parse(localStorage.getItem("save"));
    if (savegame == null) {
        console.log('no save');
    } else{
    if (typeof savegame.numbers !== "undefined") numbers = savegame.numbers;
    if (typeof savegame.workers !== "undefined") workers = savegame.workers;
    if (typeof savegame.grandmas !== "undefined") grandmas = savegame.grandmas;
    if (typeof savegame.bankers !== "undefined") bankers = savegame.bankers;
    if (typeof savegame.multiplier !== "undefined") multiplier = savegame.multiplier;
    console.log('loaded');
}
}

/*
*this function deletes the data from the localStorage
*/


function settings() {
    document.getElementById("settings").style.visibility = "visible";
    document.getElementById("allUpgrades").style.visibility = "visible";
    document.getElementById("money").style.visibility = "visible";

    document.getElementById("extras").style.visibility = "hidden";
    document.getElementById('info').style.visibility = "hidden";
    document.getElementById('stats').style.visibility = "hidden";


    document.getElementById("settingsButton").setAttribute("onclick","closeSettings()");
}
function closeSettings() {
    document.getElementById("extras").style.visibility = "visible";

    document.getElementById("settings").style.visibility = "hidden";
    document.getElementById('info').style.visibility = "hidden";
    document.getElementById('stats').style.visibility = "hidden";


    document.getElementById("settingsButton").setAttribute("onclick","settings()");

}
function info() {
    document.getElementById("settings").style.visibility = "hidden";

    document.getElementById("money").style.visibility = "visible";
    document.getElementById("extras").style.visibility = "hidden";
    document.getElementById("allUpgrades").style.visibility = "visible";
    document.getElementById('info').style.visibility = "visible";
    document.getElementById('stats').style.visibility = "hidden";

    document.getElementById("infoButton").setAttribute("onclick","closeInfo()");
}
function closeInfo() {
    document.getElementById("settings").style.visibility = "hidden";
    document.getElementById("info").style.visibility = "hidden";

    document.getElementById("extras").style.visibility = "visible";

    document.getElementById("infoButton").setAttribute("onclick","info()");
}
function stats() {
    document.getElementById("settings").style.visibility = "hidden";

    document.getElementById("money").style.visibility = "visible";
    document.getElementById("extras").style.visibility = "hidden";
    document.getElementById("allUpgrades").style.visibility = "visible";
    document.getElementById('info').style.visibility = "hidden";
    document.getElementById('stats').style.visibility = "visible";

    document.getElementById("statsButton").setAttribute("onclick","closeStats()");
}
function closeStats() {
    document.getElementById("settings").style.visibility = "hidden";
    document.getElementById("info").style.visibility = "hidden";

    document.getElementById("extras").style.visibility = "visible";
    document.getElementById('stats').style.visibility = "hidden";

    document.getElementById("statsButton").setAttribute("onclick","stats()");
}
/*
*when this function is called it adds a number to the number variable
*and then updates the number element to show the different number
*/
function autoClicker(num) {
    numbers = numbers + num;
    document.getElementById('number').innerHTML = numbers;
    document.getElementById('numbersStats').innerHTML = numbers;
    document.title= "Clicker €" + numbers;

}
function clicker(num) {
    if (multiplier == 0) {
        numbers = numbers + num;
    } else {
        numbers = numbers + num + multiplier;
    }
    document.getElementById('number').innerHTML = numbers;
    document.getElementById('numbersStats').innerHTML = numbers;
    document.title= "Clicker €" + numbers;
}
/*
*This function can be called to add a new worker
*it first calculates the worker cost and then it checks if the number you have is equal or higher to the cost of the worker.
*then it adds a new worker to the worker variable and takes the price of a worker of the numbers
*the else creates a new element which says you don't have enough money
*/
var workerCost = Math.floor(10 * Math.pow(1.1,workers));
var grandmaCost = Math.floor(20 * Math.pow(1.1,grandmas));
var bankerCost = Math.floor(30 * Math.pow(1.1,bankers));
var clickCost = Math.floor(100 * Math.pow(1.1, multiplier));




function addWorker() {
    var workerCost = Math.floor(10 * Math.pow(1.1,workers));
    if(numbers >= workerCost){
        workers = workers + 1;
        numbers = numbers - workerCost;
        console.log(workers);
        document.getElementById('workers').innerHTML = workers;
        document.getElementById('number').innerHTML = numbers;
    }
        // document.getElementById('worker').style.color = 'grey';
    let workerTotal =  workers;
    var nextCost = Math.floor(10 * Math.pow(1.1,workers));
    document.getElementById('workerCost').innerHTML = nextCost;
    document.getElementById('workerTotal').innerHTML = workerTotal;
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
    var bankerCost = Math.floor(30 * Math.pow(1.1,bankers));
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
    //bankertotal shows in the upgrades tab how much money you get from the bankers.
}

function upgradeCLick() {
    var clickCost = Math.floor(100 * Math.pow(2.1, multiplier));
    if (numbers >= clickCost) {
        multiplier = multiplier + 1;
        numbers = numbers - clickCost;
        document.getElementById('clicks').innerHTML = multiplier;
        document.getElementById('number').innerHTML = numbers;
    }
    var nextCost = Math.floor(100 * Math.pow(2.1, multiplier));
    document.getElementById('clickCost').innerHTML = nextCost;
}
// console.log(bankerCost);
// (function () {
//     if (numbers < bankerCost) {
//         console.log('you aint got no money boy')
//     } else {
//         console.log('yes')
//     }
// }) ();
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

    //starting with Prestige
    if (prestiges >= 1) {
        document.getElementById('prestigeTab').style.visibility = 'visible'
    }
    window.setInterval(function() {
            if (numbers >= 1000) {
           alert('You can prestige');
           document.getElementById('prestige').style.visibility = 'visible';
       }
   }, 10000);



    function prestige() {
        prestiges = prestiges + 1;
        var howMuchGold =  Math.floor(1 * Math.pow(1.1,prestiges));
        gold = gold + howMuchGold;
        console.log(prestiges);
        if (document.getElementById('prestige').onclick) {
            document.getElementById('prestige').style.visibility = 'hidden';
            localStorage.removeItem("save");
            location.reload();
        }
        savePrestige();
        // console.log(prestigeAble);
        console.log(`You have ${gold} gold`);
        console.log('You prestiged how many times? ');
        console.log(`Oh ${prestiges} time(s)`)
    }
    // var prestigeAble =  Math.floor(10000 * Math.pow(1.1,prestiges));


    // if (numbers >= prestigeAble) {
    //     alert('You can prestige');
    // } else {
    //     document.getElementById('prestige').style.visibility = 'hidden';
    // }

    //
    window.setInterval(function () {
        if (numbers < workerCost) {
            document.getElementById('worker').style.color = 'grey';
        } else {
            document.getElementById('worker').style.color = '';
        }
        if (numbers < grandmaCost){
            document.getElementById('grandma').style.color = 'grey';
        } else {
            document.getElementById('grandma').style.color = '';
        }
        if (numbers < bankerCost) {
            document.getElementById('banker').style.color = 'grey';
        } else {
            document.getElementById('banker').style.color = '';
        }
        if (numbers < clickCost) {
            document.getElementById('click').style.color = 'grey';
        } else {
            document.getElementById('click').style.color = '';
        }
    }, 100);
     window.setInterval(function() {
        autoClicker(workers)
        for (var i = 0; i < 5; i++) {
            autoClicker(bankers)
        }

        for (var i = 0; i < 2; i++) {
            autoClicker(grandmas)
        }
        // multiplier();
        let total = workers + (grandmas * 2) + (bankers * 5);
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

    //audio
    // var music = document.createElement('audio');
 //    var audio = document.querySelector('audio');
 //    console.log(audio   );
 //    function SetVolumeHalf()
 // {
 //     audio.volume = 0.5;
 //     console.log('why')
 // }
 // function SetVolumeMute() {
 //     audio.volume = 0.0;
 // }
 // function SetVolumeFull() {
 //     audio.volume = 1;
 // }

    // document.getElementById('numbersStats').innerHTML = numbers;
    document.getElementById('workersStats').innerHTML = workers;
    document.getElementById('grandmasStats').innerHTML = grandmas;
    document.getElementById('bankersStats').innerHTML = bankers;
