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

function getGuess() {
    var guess = parseInt(prompt("Choose a number between 1 and 100"));
    return guess;
}

function randomNumber() {

    var randNum = Math.floor(Math.random() * 100);
    console.log(randNum);
    return randNum;
}

function feedBack(numDiff) {

  if (numDiff > 80) {
    alert("You're ice cold!")
  } else if (numDiff > 60) {
     alert("You're cold!"); 
  } else if (numDiff > 40) {
    alert("You're not cold!");
  } else if (numDiff > 20) {
    alert("You're getting slightly warm!");
  } else if (numDiff > 10){
    alert("You're getting really warm!");
  } else if (numDiff>5) { 
    alert("You're getting hot!");
  } else if (numDiff>0){
    alert("You're burning hot!");
  } else {
    alert("Burned alive!");
  }
}

function newGame() {
    var target = randomNumber();
    var guess = -1;
    var guessCount = 0;
    var numDiff;
    while (target != guess){
      guess = getGuess();
      guessCount++;
      numDiff = Math.abs(target - guess);   
      feedBack(numDiff);   
    }

}