// Problem:

/* At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age]. */

// Solution:

function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];

    // Another solution
    
    /* let arr = [];
    ages.sort((a,b) => a-b);
    arr[0] = ages[0];
    arr[1] = ages[ages.length-1];
    arr[2] = ages[ages.length-1] - ages[0];
    return arr; */
  }