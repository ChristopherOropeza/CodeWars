// Problem:

/* In this problem you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

// Solution:

function wellOfIdeas(x){
    const goodX = x.filter(idea => idea === 'good').length;
  
    if (goodX === 1 || goodX === 2) {
      return 'Publish!';
    } else if (goodX > 2) {
      return 'I smell a series!';
    } else {
      return 'Fail!';
    }
}