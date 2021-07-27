console.log("Let's play!");
let computerScore = 0;
let playerScore = 0;


/*Scoring*/
const computerScoreBoard = document.querySelector('#computerScoreBoard');
const playerScoreBoard = document.querySelector('#playerScoreBoard');


function updateScore () {
    computerScoreBoard.textContent = computerScore;
    playerScoreBoard.textContent = playerScore;
}

/*Assing event listeners to each button.*/
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function (e) {
    playerSelection = "rock";
    playRound(playerSelection, computerPlay());
    updateScore();
    checkWinner();
});

paper.addEventListener('click', function (e) {
    playerSelection = "paper";
    playRound(playerSelection, computerPlay());
    updateScore();
    checkWinner();
});

scissors.addEventListener('click', function (e) {
    playerSelection = "scissors";
    console.log(playRound(playerSelection, computerPlay()));
    updateScore();
    checkWinner();
});



/*Create array of possible options */
const options = ['rock', 'paper', 'scissors']


/*Make computer pick rock, paper or scissors */
function computerPlay() {
    /*Pick random number between 0 and 1, times by 3 gives 0, 1 or 2. Use that to select options*/
    return options[Math.floor((Math.random() * 3))];
}

function playRound(playerSelection, computerSelection) {

    console.log("Computer selected: " + computerSelection);
    console.log("You selected: " + playerSelection);

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection === 'paper') {
                computerScore++;
                return "You lose! Paper beats rock.";
            } else if(computerSelection === 'scissors') {
                playerScore++;
                return "You win! Rock beats scissors.";
            } else 
                return  "It's a draw! You both selected rock.";
        
        case 'paper':
            if(computerSelection === 'rock') {
                playerScore++;
                return "You win! Paper beats rock.";
            } else if(computerSelection === 'scissors') {
                computerScore++;
                return "You Lose! Scissors beats paper.";
            } else 
                return  "It's a draw! You both selected paper.";

        case 'scissors':
            if(computerSelection === 'paper') {
                playerScore++;
                return "You win! Scissors beats paper.";
            } else if(computerSelection === 'rock') {
                computerScore++;
                return "You Lose! Rock beats scissors.";
            } else 
                return  "It's a draw! You both selected scissors.";
    }
}


function game() {

    /*Display final score */
    console.log("Final score: Computer[" + computerScore + "], Player[" + playerScore + "].");

    /*Determine the winner. */
    playerScore > computerScore ? console.log("Congratulations! You win!")
    : computerScore > playerScore ? console.log("Unlucky... You were bested.")
    : console.log("It's a draw!");

}

function checkWinner() {
    if (computerScore >= 5 || playerScore >= 5) {
        console.log("Winner, resesting...")
        alert("Final score: Computer[" + computerScore + "], Player[" + playerScore + "].");
        computerScore = 0;
        playerScore = 0;
    } else return;
}


