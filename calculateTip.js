// Problem:

/* Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: 20% tip
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
"Rating not recognised"
Always round up the tip. */

// Solution:

function calculateTip(amount, rating) {
    const ratingMap = {
        "terrible": 0,
        "poor": 5,
        "good": 10,
        "great": 15,
        "excellent": 20
    };
  
    const lowercaseRating = rating.toLowerCase();
    const tipPercentage = ratingMap[lowercaseRating];
  
    return tipPercentage !== undefined ? Math.ceil((tipPercentage / 100) * amount) : "Rating not recognised";
}