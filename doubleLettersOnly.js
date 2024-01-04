// Problem:

/* Write a program that takes in a word and checks if it contains two repeating letters followed by a different letter. Return true if it does, return false otherwise. */

// Solution:

function doubleLettersOnly(s) {
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] === s[i+1]) {
      return true;
    }
  }
  return false;
}
