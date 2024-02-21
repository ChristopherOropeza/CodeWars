// Problem:

/* Find the nearest square number of a positive integer n.

For example, if n = 111, then nearestSquare(n) equals 121 since 111 is closer to 121 (the square of 11) than 100 (the square of 10).

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n. */

// Solution:

function nearestSquare(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// Another solution:

function nearestSq(n){
    return Math.round(Math.sqrt(n)) ** 2;
}
