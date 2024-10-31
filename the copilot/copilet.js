const choices = ["Paper", "Scissors", "Stone"];
const resultDiv = document.getElementById('result');

document.getElementById('paper').addEventListener('click', () => playGame('Paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));
document.getElementById('stone').addEventListener('click', () => playGame('Stone'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === "Paper" && computer === "Stone") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Stone" && computer === "Scissors")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
