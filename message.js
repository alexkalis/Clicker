var messages = ['Money money money it\'s so funny', 'Give me my f**king money', 'Money doesn\'t bring you happinness']

// document.getElementById('messagePlace').innerHTML = random;
window.setInterval(function() {
    // $('#messagePlace').html(random);
    var random = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('messagePlace').innerHTML = random;
    // console.log('test')
}, 2000);

// Array.prototype.randomElement = function () {
//     return this[Math.floor(Math.random() * this.length)]
// // }
// var myRandomElement = messages.randomElement();
// document.getElementById('messagePlace2').innerHTML = myRandomElement;
