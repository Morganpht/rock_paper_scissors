console.log("Let's play!");

/*Create array of possible options */
const options = ['rock', 'paper', 'scissors']
let computerScore = 0;
let playerScore = 0;

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
    /*Player input for their guess */
    playerSelection = prompt("Choose either rock, paper or scissors: ");

    /*Play a round of rock paper scissors */
    console.log(playRound(playerSelection, computerPlay()));
    
    /*Track score and display results*/
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + playerScore);

    /*Loop 5 times */
}

game();
game();
game();
game();
game();