// Problem:

/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Edit: Also added ability to do calculate modulus.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 
('%', 6, 6) --> 0 */

// Solution:

function basicOp(operation, value1, value2){
    switch(operation){
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                return "Cannot divide by zero";
            }
        case '%':
            if (value2 !== 0) {
                return value1 % value2;
            } else {
                return "Cannot calculate modulus with a divisor of zero";
                }
        default:
            return `Error, ${operation} is not an operation. You can only input the following 5 symbols: '+, -, *, /, %'.`;
    }
}