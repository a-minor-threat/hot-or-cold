$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $(".what").click(function() {
        newGame();
    })

});

function takeGuess() {
    var getGuess = prompt("Choose a number between 1 and 100");
    return getGuess;
}

function randomNumber() {

    var randNum = Math.floor(Math.random() * ((100 - 1) + 1) + 1);
    return randNum;
}

function feedBack(randNum, getGuess) {
    while (randNum != getGuess) {
      if (getGuess < randNum)
      {
        alert("Hot! Try again!");
      } else {
        alert("Cold! Try again!")
      }
    }
    if (randNum === getGuess) {
      alert("You got it right!");
    }
}

function newGame() {
    randomNumber();
    feedback();

}