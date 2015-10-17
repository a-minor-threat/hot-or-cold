$(document).ready(function() {

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
      feedBack();
    });

});

function getGuess() {
    'use strict';
    var guess = parseInt(prompt("Choose a number between 1 and 100"));
//    var guess = document.getElementById("userGuess").value;
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
    var target = randomNumber();
    var guess = -1;
    var guessCount = 0;
    var numDiff;
    document.getElementById("count").innerHTML = guessCount;
    while (target !== guess) {
        guess = getGuess();
        guessCount++;
        document.getElementById("count").innerHTML = guessCount;
        numDiff = Math.abs(target - guess);
        feedBack(numDiff);
    }
    if (target === guess) {
        document.getElementById("feedback").innerHTML = "You win!";
        return;
    }
}

function feedBack(numDiff) {
    'use strict';
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
}

