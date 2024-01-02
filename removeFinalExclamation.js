// Problem:

/* Description:
Remove all exclamation marks from the end of a string.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi" */

// Solution:

function removeFinalExclamation(string) {  
  return string.replace(/!+$/, '');
}
