// Task:

/* Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

// Solution:

const countSheep = (num) => [...Array(num)].map((el,i) => `${++i} sheep...`).join('');

// Another solution

const countSheep = length => Array.from({length},(_,i) => `${++i} sheep...`).join('');
