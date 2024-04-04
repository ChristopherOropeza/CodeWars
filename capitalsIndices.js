// Problem:

/* Write a function that takes a single string (word) as an argument. The function must return an ordered list containing the indices of all capital letters in the string.

Example (Input --> Output):

"CodEWaRs" --> [0,3,4,6] */

// Solution:

function capitalsIndices(word) {
  return word.split('').reduce((indices,char,i) => char === char.toUpperCase() ? [...indices,i] : indices,[]);
}
