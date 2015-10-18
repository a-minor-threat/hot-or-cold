$(document).ready(function() {
    var target = 0;
    var guess = 0;
    var guessCount = -1;

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function() {
        newGame();
    })

    $(".button").click(function(event) {
      feedBack(target, guess);
    });

function getGuess() {
    'use strict';
//    var guess = parseInt(prompt("Choose a number between 1 and 100"));
    var guess = parseInt(document.getElementById("userGuess").value);
    return guess;
}

function randomNumber() {
    'use strict';
    var randNum = Math.floor(Math.random() * 100);
    console.log(randNum);
    return randNum;
}

function newGame() {
    'use strict';
    console.log("Generating random number and resetting all other variables.")
     target = randomNumber();
     guess = -1;
     guessCount = 0;
    document.getElementById("count").innerHTML = guessCount;
}

function feedBack(target, guess) {
    'use strict';
    if (target !== guess) {
        guess = getGuess();
        guessCount++;
        document.getElementById("count").innerHTML = guessCount;
    var numDiff = Math.abs(target - guess);
    }

    if (numDiff > 80) {
        document.getElementById("feedback").innerHTML = "You're ice cold!";
    } else if (numDiff > 60) {
        document.getElementById("feedback").innerHTML = "You're cold!";
    } else if (numDiff > 40) {
        document.getElementById("feedback").innerHTML = "You're not cold!";
    } else if (numDiff > 20) {
        document.getElementById("feedback").innerHTML = "You're getting slightly warm!";
    } else if (numDiff > 10) {
        document.getElementById("feedback").innerHTML = "You're getting really warm!";
    } else if (numDiff > 5) {
        document.getElementById("feedback").innerHTML = "You're getting hot!";
    } else if (numDiff > 0) {
        document.getElementById("feedback").innerHTML = "You're burning hot!";
    } else {
        document.getElementById("feedback").innerHTML = "Burned alive!";
    }
    if (numDiff === 0) {
        document.getElementById("feedback").innerHTML = "You win!";
    }
}


});


