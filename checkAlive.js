// Task:

/* While making a game you decided to create a function to check if the user is still alive called checkIfAlive. Unfortunately, some errors were made while creating the function.

The function checkIfAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives a parameter called `health`, which will always be a whole number between -10 and 10. */

// Solution:

function checkIfAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
