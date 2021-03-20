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

function playerSelection() {
    let playerInput = prompt("Enter your option: ");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

function playerWins(computerHand, playerHand) {
    if ((computerHand == "scissors" && playerHand == "rock") || 
    (computerHand == "paper" && playerHand == "scissors") ||
    (computerHand == "rock" && playerHand == "paper")) {
        return true;
    } else return false;
}

function game() {
    for (let i = 0; i < 3; i++) {
        let computerHand = computerPlay();
        let playerHand = playerSelection();
        console.log("Computer: " + computerHand + " You: " + playerHand);
        if (computerHand == playerHand) {
            console.log("Tie");
        } else if (playerWins(computerHand, playerHand)) {
            console.log("Player wins"); 
        }
    }
}