// Problem:

/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

The array `a` can contain numbers or strings. The value `x` can be either. Return true if the array contains the value, otherwise return false if it does not. With strings, you will need to account for case. */

// Solution:

function check(a,x) {
    return a.includes(x) ? true : false;
}
