// Task:

/* Complete the solution shown below so that it reverses all of the words within the string passed in.

function reverseWords(str){
  return str;
}

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The" */

// Solution:

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
