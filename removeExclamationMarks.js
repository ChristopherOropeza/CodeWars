// Problem:

/* Write a function RemoveExclamationMarks which removes all exclamation marks from a given string. */

// Solution: 
function removeExclamationMarks(s) {
  return s.replaceAll('!','');
}

// Another solution:
function removeExclamationMarks(s) {
  return s.split('').filter(char => char != '!').join('');
}
