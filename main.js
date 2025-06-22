console.log("Testing...")

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

 // Humans Choice
function getHumanChoice()
{
     // prompt for input
    // Future fix: Invalid input 
    const humanChoice = prompt("Enter a choice (rock, paper, scissors:");

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
