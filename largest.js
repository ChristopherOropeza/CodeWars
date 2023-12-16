// Problem:

/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7] */

// Solution:

function largest(n, array) {
  return array.sort((a,b)=>b-a).slice(0,n).sort((a,b)=>a-b);
}
