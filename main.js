console.log("Testing...")


 // Humans Choice
function getHumanChoice()
{
     // prompt for input
    // Future fix: Invalid input 
    const humanChoice = prompt("Enter a choice (rock, paper, scissors:").toLowerCase();

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

// Call the function 
// (testing prompt)
console.log(getHumanChoice());

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

// Keep track of score (global scope)
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    // We could lowercase the input in the other function
    // Instead over here we'll just do it.
    // (either method works)
    //humanChoice = humanChoice.toLowercase();

    // how many ways can we win?


    // I suppose you want to split
    // Player Wins

    if 
    ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper"))
    {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
    }
    else if 
    ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock"))
    {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
    }
    else
    {
        console.log("draw.")
    }

    // Player Loses


    // Draw
}

function playGame()
// For every game
{
    for (let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame()