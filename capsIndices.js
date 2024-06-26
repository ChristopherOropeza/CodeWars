// Problem:

/* Write a function that takes a single string (word) as an argument. The function must return an ordered list containing the indices of all the capital letters in the string.

Example (Input --> Output):

"CodEWaRs" --> [0,3,4,6] */

// Solution:

function capsIndices(word) {
  return word.split('').reduce((indices,char,i) => char === char.toUpperCase() ? [...indices,i] : indices,[]);
}
