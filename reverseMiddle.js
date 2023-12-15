// Problem:
/* Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order. */

// Solution:

function reverseMiddle(array) {
  const result = array.length % 2 ? 3 : 2;
  return array.splice(Math.floor(array.length/2) - 1, result).reverse();
}
