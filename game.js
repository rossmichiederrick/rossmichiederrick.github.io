

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var prevGuesses = [];var userGuess = null;

var targetLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + prevGuesses + " Computer picked: " + targetLetter);


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (prevGuesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		prevGuesses[prevGuesses.length]=userGuess;

		guessesLeft--;
	}

	if (targetLetter === userGuess) {
		wins++;
		guessesLeft = 9;
		prevGuesses = [];
		targetLetter = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + prevGuesses + " Computer picked: " + targetLetter);
	}

if (guessesLeft === 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		prevGuesses = [];
		targetLetter = letters[Math.floor(Math.random() * letters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + prevGuesses + " Computer picked: " + targetLetter);
	}

	var html = "<p>The Psychic Game</p>" + "<p>Guess what letter I'm thinking of</p>" + "<p>Wins:" + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p><h4>Your guesses so far: " + prevGuesses + "</p>";
	document.querySelector("#game").innerHTML = html;

}