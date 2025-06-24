 // Human Choice
function getHumanChoice()
{
     // Prompt user input
    const humanChoice = prompt("Enter a choice (rock, paper, scissors):").toLowerCase();

    if (humanChoice == "rock")
    {
        return "rock";
    }
    else if (humanChoice == "paper")
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }

}

// Computer Choice
function getComputerChoice()
{
    // Return one following string values (rock, paper, scissors)
    // No arrays, what else could you use --> Conditional Statements, Switch


    // We need it to randomly choose numbers 1, 2, 3
    // The floor will prevent 1.2 or 2.5
    // The + 1 will make sure it starts 1, 2, 3 not 0-3
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (computerChoice == 1)
    {
        return "rock"; 
    }
    else if (computerChoice == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

// Keep track of score 

// Global Variables
let humanScore = 0;
let computerScore = 0;

// Game logic
function playRound(humanChoice, computerChoice)
{
    // Player wins
    if 
    ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper"))
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
    }
    // Player loses
    else if 
    ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock"))
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
    }
    // Draw
    else
    {
        console.log("You both picked the same option, so it's a tie.")
    }

}

// To play the game
function playGame()
{
    // 5 Rounds
    for (let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Your score: ${humanScore} and the Computers: ${computerScore}`)

    if (humanScore > computerScore)
    {
        console.log("You win the game!")
    }
    else if (humanScore < computerScore)
    {
        console.log("Game over! The computer wins!")
    }
    else
    {
        console.log("The game has concluded in a tie.")
    }
}

playGame()