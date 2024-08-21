/* Problem:
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first, it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

// Solution:

function stringClean(s){
  // Function will return the cleaned string
  return s.split('').map((char) => char < '0' || char > '9' ? char : '').join('');
}

// Other solutions:

function stringClean(s){
  return s.split('').filter((n) => n != parseInt(n)).join('');
}

function stringClean(s){
  return s.replace(/\d/g, "");
}

function stringClean(s){
  let result = '';

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char < '0' || char > '9') {
      result += char;
    }
  }

  return result;
}
