// Problem:

/* Given an array of numbers, check if any of the numbers are the character codes for lowercase vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

// Solution:

function isVowel(a){
  return a.map(n => 'aeiou'.includes(String.fromCharCode(n)) ? String.fromCharCode(n) : n);
}
