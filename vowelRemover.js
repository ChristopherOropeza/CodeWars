// Task:

/* Create a function called vowelRemover to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
Don't worry about uppercase vowels, and 'y' is not considered a vowel for this problem. */

// Solution:

function vowelRemover(string) {
  return string.split('').filter(char => !'aeiou'.includes(char)).join('');
}
