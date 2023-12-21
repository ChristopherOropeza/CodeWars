// Problem:

/* Complete the solution so that the function will break up camel casing, using a space between words.

Example:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// Solution:

function breakCamelCase(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}