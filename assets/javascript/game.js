var words = [
  "elephants",
  "tigers",
  "racoons",
  "walabees",
  "crocodile",
  "jellyfish"
];

//Empty variables to store values later
var randomWord = "";
var letterWord = [];
var gaps = 0;
var gapsAndCorrect = [];
var incorrectGuess = [];

//++ || --
var wins = 0;
var losses = 0;
var guessesRemaining = 15;

// Functions
function Game() {
  //generates random word
  randomWord = words[Math.floor(Math.random() * words.length)];

  // split the individual word into separate arrays, and store in new array
  // letterWord = randomWord.split("");
  letterWord = randomWord.split("");

  //store length in gaps
  gaps = letterWord.length;

  //creating a loop to generate "_" for each letter in array stored in gaps
  for (var i = 0; i < gaps; i++) {
    gapsAndCorrect.push("_");
  }

  //showing the "_" within HTML
  document.getElementById("currentword").innerHTML =
    "  " + gapsAndCorrect.join("  ");

  //console logging
  console.log(randomWord);
  console.log(letterWord);
  console.log(gaps);
  console.log(gapsAndCorrect);
}

// Reset Function
function reset() {
  guessesRemaining = 15;
  incorrectGuess = [];
  gapsAndCorrect = [];
  Game();
}

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
  var letterInWord = false;

  for (var i = 0; i < gaps; i++) {
    if (randomWord[i] == letter) {
      letterInWord = true;
    }
  }
  //if letterInWord (false)
  if (letterInWord) {
    //check each letter to see if it matches word
    for (var i = 0; i < gaps; i++) {
      if (randomWord[i] == letter) {
        gapsAndCorrect[i] = letter;
      }
    }
  }
  //otherwise, push the incorrect guess in the incorrect guesses section, and reduce remaining guesses
  else {
    incorrectGuess.push(letter);
    guessesRemaining--;
  }
  console.log(gapsAndCorrect);
}

//check to see if player won...
function complete() {
  console.log(
    "wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining
  );

  //if WON...
  if (letterWord.toString() == gapsAndCorrect.toString()) {
    wins++;
    reset();

    //display wins on screen
    document.getElementById("winstracker").innerHTML = " " + wins;
    alert("You Won! Press OK to Play Again!");

    //if LOST...
  } else if (guessesRemaining === 0) {
    losses++;
    alert("Good Try! Press OK to Play Again!");
    reset();

    document.getElementById("losstracker").innerHTML = " " + losses;
  }
  //display losses on screen && guesses remaining countdown
  document.getElementById("currentword").innerHTML =
    "  " + gapsAndCorrect.join(" ");
  document.getElementById("guessesremaining").innerHTML =
    " " + guessesRemaining;
}

//call start game function
Game();

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function(event) {
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();
  //check to see if guess entered matches value of random word
  checkLetters(guesses);
  //process wins/loss
  complete();
  //store player guess in console for reference
  console.log(guesses);

  //display/store incorrect letters on screen
  document.getElementById("playerguesses").innerHTML =
    "  " + incorrectGuess.join(" ");
};
