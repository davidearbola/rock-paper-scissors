const choise = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scorePlayerDisplay = document.getElementById("scorePlayer");
const scoreComputerDisplay = document.getElementById("scoreComputer");
let scorePlayer = 0;
let scoreComputer = 0;

function playGame(playerChoise) {
	const computerChoise = choise[Math.floor(Math.random() * 3)];

	let result = "";
	resultDisplay.classList.remove("win", "lose");

	if (computerChoise === playerChoise) {
		resultDisplay.innerText = "IT'S A TIE!";
	} else {
		switch (playerChoise) {
			case "rock":
				result = computerChoise === "scissors" ? "YOU WIN!" : "YOU LOSE";
				if (result === "YOU WIN!") {
					scorePlayer++;
					resultDisplay.classList.add("win");
				} else {
					scoreComputer++;
					resultDisplay.classList.add("lose");
				}
				resultDisplay.innerText = result;
				break;
			case "paper":
				result = computerChoise === "rock" ? "YOU WIN!" : "YOU LOSE";
				if (result === "YOU WIN!") {
					scorePlayer++;
					resultDisplay.classList.add("win");
				} else {
					scoreComputer++;
					resultDisplay.classList.add("lose");
				}
				resultDisplay.innerText = result;
				break;
			case "scissors":
				result = computerChoise === "paper" ? "YOU WIN!" : "YOU LOSE";
				if (result === "YOU WIN!") {
					scorePlayer++;
					resultDisplay.classList.add("win");
				} else {
					scoreComputer++;
					resultDisplay.classList.add("lose");
				}
				resultDisplay.innerText = result;
				break;
		}
	}
	playerDisplay.innerText = `Player: ${playerChoise.toUpperCase()}`;
	computerDisplay.innerText = `Computer: ${computerChoise.toUpperCase()}`;
	scorePlayerDisplay.innerText = `Player score: ${scorePlayer}`;
	scoreComputerDisplay.innerText = `Computer score: ${scoreComputer}`;
}

function resetGame() {
	playerDisplay.innerText = "Player:";
	computerDisplay.innerText = "Computer";
	resultDisplay.innerText = "NEW GAME!";
	resultDisplay.classList.remove("win", "lose");
	scorePlayerDisplay.innerText = "Player score:";
	scoreComputerDisplay.innerText = "Computer score:";
	scorePlayer = 0;
	scoreComputer = 0;
}
