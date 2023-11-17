// Problem:

/* Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects! 

Faulty solution:
function buildString(...template){
  return `I like #{template.join(',')}!`;
}
*/

// Solution:

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
