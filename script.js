/*Commentry */ 
const comments = document.querySelector("#comments");

function createComment (string) {
    const content = document.createElement('p');
    content.textContent = string;
    comments.appendChild(content);
}

createComment("Let's play!");

function removeAllChildComments(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


/*Scoring*/
let computerScore = 0;
let playerScore = 0;
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
    playerButton = "rock";
    playRound(playerButton, computerPlay());
    updateScore();
    checkWinner();
});

paper.addEventListener('click', function (e) {
    playerButton = "paper";
    playRound(playerButton, computerPlay());
    updateScore();
    checkWinner();
});

scissors.addEventListener('click', function (e) {
    playerButton = "scissors";
    playRound(playerButton, computerPlay());
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

    let message = "blank"

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection == 'paper') {
                computerScore++;
                message = "You lose! Paper beats rock.";
            } else if(computerSelection == 'scissors') {
                playerScore++;
                message = "You win! Rock beats scissors.";
            } else 
                message = "It's a draw! You both selected rock.";
                break;
        
        case 'paper':
            if(computerSelection == 'rock') {
                playerScore++;
                message = "You win! Paper beats rock.";
            } else if(computerSelection == 'scissors') {
                computerScore++;
                message = "You Lose! Scissors beats paper.";
            } else 
                message = "It's a draw! You both selected paper.";
                break;

        case 'scissors':
            if(computerSelection == 'paper') {
                playerScore++;
                message = "You win! Scissors beats paper.";
            } else if(computerSelection == 'rock') {
                computerScore++;
                message = "You Lose! Rock beats scissors.";
            } else 
                message = "It's a draw! You both selected scissors.";
                break;
    }

    return createComment(message);
}


function checkWinner() {
    if (computerScore >= 5 || playerScore >= 5) {
        removeAllChildComments(comments);
        createComment(playerScore > computerScore ? "Congratulations! You win!"
        : computerScore > playerScore ? "Unlucky... You were bested."
        : "It's a draw!");
        computerScore = 0;
        playerScore = 0;
        
        createComment("Play again?")
    } else return;
}


