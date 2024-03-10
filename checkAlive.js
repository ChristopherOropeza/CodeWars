// Task:

/* While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive. Unfortunately, Greg made some errors while creating the function.

The function checkIfAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter called "health", which will always be a whole number between -10 and 10. */

// Solution:

function checkIfAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
