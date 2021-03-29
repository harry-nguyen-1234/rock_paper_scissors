function computerPlay() {
    // Choose a random number from 3 to choose the hand
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "bad result";
    }
}

function playerSelection(button) {
    return button.id;
}

function playerWins(computerHand, playerHand) {
    if ((computerHand == "scissors" && playerHand == "rock") || 
    (computerHand == "paper" && playerHand == "scissors") ||
    (computerHand == "rock" && playerHand == "paper")) {
        return true;
    } else return false;
}

function playRound(button) {
    let computerHand = computerPlay();
    let playerHand = playerSelection(button);

    let commentaryString = "Computer: " + computerHand + " You: " + playerHand 
            + '\n';

    console.log(commentaryString);

    let resultString = "";
    if (computerHand == playerHand) {
        resultString = "Tie";
    } else if (playerWins(computerHand, playerHand)) {
        resultString = "Player wins";
    } else {
        resultString = "Computer wins";
    }
    console.log(resultString);

    const commentary = document.getElementById("commentary");
    commentary.textContent = commentaryString;

    const result = document.getElementById("result");
    result.textContent = resultString;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button)
    });
});