// Problem:

/* Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"] */

// Solution:

const addCW = (el) => {
    let websites = [];
    if (el === 'codewars') {
        websites.push(el);
    }
    return websites;
};