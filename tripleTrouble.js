// Problem:

/* Create a function that will return a string that combines all of the letters of the three input strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see the example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all inputs to be the same length. */

// Solution:

function tripleTrouble(one, two, three){
  return [...one].map((_, i) => one[i] + two[i] + three[i]).join('');
}
