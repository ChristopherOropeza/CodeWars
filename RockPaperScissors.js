// Problem:

/* Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

// Solution:

const rps = (p1, p2) => {
    const matchups = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock"
    };
    
    if (p1 === p2) {
        return "Draw!";
    }
    
    if (matchups[p1] === p2) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};
