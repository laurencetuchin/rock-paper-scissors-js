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
// let playerChoice = prompt("Rock, Paper or Scissors?");
// playerChoice;
// player choice helper function
// let playerChoice;
// function getPlayerChoice(playerChoice) {
// 	playerChoice = playerChoice.toLowerCase();
// 	playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
// 	return playerChoice;
// }
// playerChoice = getPlayerChoice(playerChoice);

// reset helper
// function reset() {
// 	playerChoice = getPlayerChoice(
// 		(playerChoice = prompt("Rock, Paper or Scissors?"))
// 	);
// 	// computerChoice = getComputerChoice();
// 	return playerChoice;
// }

// valid choice check
function valid(validSelection) {
	// validSelection = getPlayerChoice(validSelection);
	if (choice.includes(validSelection)) {
		return true;
	} else {
		return false;
	}
}

let playerScore = 0;
let computerScore = 0;

let restartGame = document.querySelector(".restart-game");

function reset() {
	playerScore = 0;
	computerScore = 0;
	gameScore.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
	restartGame.style.display = "none";
	gameOutcome.textContent = "";
	console.log("reset button click");
}
restartGame.addEventListener("click", () => {
	reset();
});

let gameEnd = () => {
	if (playerScore === 3 || computerScore === 3) {
		restartGame.textContent = "Restart game";
	}
};

// score helper
function scoreHelper(number, playerChoice, computerChoice) {
	// if (number === 1 ? playerScore++ : computerScore++)
	console.log(number);
	console.log(playerChoice);
	console.log(computerChoice);
	if (number === 1) {
		playerScore++;
		gameScore.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
		if (playerScore === 5) {
			restartGame.style.display = "block";
			return "Player wins";
		}
		return `Player 1 wins, ${playerChoice} beats ${computerChoice}`;
	}
	if (number === 0) {
		computerScore++;
		gameScore.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
		if (computerScore === 5) {
			restartGame.style.display = "block";
			return "Computer wins";
		}

		return `Computer wins, ${computerChoice} beats ${playerChoice}`;
	}
}
// create a function that plays a round of RPS
function playRPS(playerChoice, computerChoice) {
	// check if game should end
	if (playerScore === 3 || computerScore === 3) {
		restartGame.style.display = "block";
		return "Please play again";
	}
	computerChoice = getComputerChoice();
	// check selection is valid
	if (valid(playerChoice)) {
		// if choice is the same = draw and replay
		if (playerChoice === computerChoice) {
			return "Draw, please play again";
		}
		// check for player 1 win scenario
		if (playerChoice === "Rock" && computerChoice === "Scissors") {
			// console.log("Win");
			scoreHelper(1, playerChoice, computerChoice);
		}

		if (playerChoice === "Paper" && computerChoice === "Rock") {
			// console.log("Win");
			return scoreHelper(1, playerChoice, computerChoice);
		}
		if (playerChoice === "Scissors" && computerChoice === "Paper") {
			// console.log("Win");
			return scoreHelper(1, playerChoice, computerChoice);
		}
		if (computerChoice === "Rock" && playerChoice === "Scissors") {
			// player 1 cannot draw or win so must lose
			// console.log("Computer wins");
			return scoreHelper(0, playerChoice, computerChoice);
		}
		if (computerChoice === "Paper" && playerChoice === "Rock") {
			// player 1 cannot draw or win so must lose
			// console.log("Computer wins");
			return scoreHelper(0, playerChoice, computerChoice);
		}
		if (computerChoice === "Scissors" && playerChoice === "Paper") {
			// player 1 cannot draw or win so must lose
			// console.log("Computer wins");
			return scoreHelper(0, playerChoice, computerChoice);
		}
	} else {
		throw Error("Invalid choice");
	}
}

// console.log(playRPS(playerChoice, computerChoice));

// function game() {
// 	// playRPS(playerChoice, computerChoice);

// 	// reset();

// 	console.log(playRPS(playerChoice, computerChoice));
// 	playerChoice = reset();
// 	computerChoice = getComputerChoice();

// 	if (playerScore >= 3) {
// 		console.log("Player 1 Wins");
// 	}
// 	if (computerScore >= 3) {
// 		console.log("Computer wins");
// 	}
// }

// function game(playRPS) {}

// function should take input from human and computer
// return string of winner from round

// player selection needs to be case insensitive - convert to lower/upper

// TIES must retake the round

// return the result of the function call

const buttons = document.querySelectorAll(".option");
let gameResult = "";

let gameOutcome = document.querySelector(".game-result");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		// console.log(e.target);

		gameOutcome.textContent = playRPS(e.target.value, getComputerChoice());
	});
});

// get result from game
// append to div
// gameOutcome.textContent = gameResult;

let gameScore = document.querySelector(".game-score");
gameScore.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
