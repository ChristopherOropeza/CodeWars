// Problem:

/* Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56 */

// Solution:

function getNumberFromString(s) {
    const numbersOnly = s.replace(/\D/g, '');
    return parseInt(numbersOnly);
}