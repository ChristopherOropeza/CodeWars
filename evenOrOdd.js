// Problem:

/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

For example:

evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd' */

// Solution:

const evenOrOdd = new Proxy(n => n % 2 ? "Odd" : "Even", { get: (target, prop) => target(prop) });

// Another solution:

const target = function(n) {
    return n % 2 ? 'Odd' : 'Even';
};
  
const handler = {
  get(target, prop) {
    return target(prop);
  }
};
  
const evenOrOdd = new Proxy(target, handler);
