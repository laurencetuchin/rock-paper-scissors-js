// create a function that decides what the computer choice of rock, paper, scissors will be
let choice = ["Rock", "Paper", "Scissors"];

// computer chooses randomly based on choice
function getComputerChoice() {
	return choice[getRandomInt()];
}

// gets random number based on length of choices
function getRandomInt() {
	return Math.floor(Math.random() * choice.length);
}

let computerChoice = getComputerChoice();

// random number to decide
let playerChoice = prompt("Rock, Paper or Scissors?");
// playerChoice;
// player choice helper function
function getPlayerChoice(playerChoice) {
	playerChoice = playerChoice.toLowerCase();
	playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	return playerChoice;
}

playerChoice = getPlayerChoice(playerChoice);

// reset helper
function reset() {
	playerChoice = getPlayerChoice(
		(playerChoice = prompt("Rock, Paper or Scissors?"))
	);
	// computerChoice = getComputerChoice();
	return playerChoice;
}

// valid choice check
function valid(validSelection) {
	validSelection = getPlayerChoice(validSelection);
	if (choice.includes(validSelection)) {
		return true;
	} else {
		return false;
	}
}

let playerScore = 0;
let computerScore = 0;

// score helper
function scoreHelper(number, playerChoice, computerChoice) {
	// if (number === 1 ? playerScore++ : computerScore++)
	if (computerScore === 3) {
		return "Computer wins";
	}
	if (playerScore === 3) {
		return "Player wins";
	}

	if (number === 1) {
		playerScore++;
		return `Player 1 wins, ${playerChoice} beats ${computerChoice}`;
	} else {
		computerScore++;
		return `Computer wins, ${computerChoice} beats ${playerChoice}`;
	}
}
// create a function that plays a round of RPS
function playRPS(playerChoice, computerChoice) {
	// check selection is valid
	if (valid(playerChoice)) {
		// if choice is the same = draw and replay
		if (playerChoice === computerChoice) {
			// playRPS(playerChoice, computerChoice);
			console.log("Draw");
			// reset();
			playerChoice = reset();
			computerChoice = getComputerChoice();
			playRPS(playerChoice, computerChoice);
		}
		// check for player 1 win scenario
		if (playerChoice === "Rock" && computerChoice === "Scissors") {
			scoreHelper(1, playerChoice, computerChoice);
		}

		if (playerChoice === "Paper" && computerChoice === "Rock") {
			return scoreHelper(1, playerChoice, computerChoice);
		}
		if (playerChoice === "Rock" && computerChoice === "Scissors") {
			return scoreHelper(1, playerChoice, computerChoice);
		} else {
			// player 1 cannot draw or win so must lose
			return scoreHelper(0, playerChoice, computerChoice);
		}
	} else {
		throw Error("Invalid choice");
	}
}

// console.log(playRPS(playerChoice, computerChoice));

function game() {
	// playRPS(playerChoice, computerChoice);

	for (let i = 0; i < 5; i++) {
		// reset();

		console.log(playRPS(playerChoice, computerChoice));
		playerChoice = reset();
		computerChoice = getComputerChoice();

		if (playerScore >= 3) {
			console.log("Player 1 Wins");
		}
		if (computerScore >= 3) {
			console.log("Computer wins");
		}
	}
}
game();

// function game(playRPS) {}

// function should take input from human and computer
// return string of winner from round

// player selection needs to be case insensitive - convert to lower/upper

// TIES must retake the round

// return the result of the function call
