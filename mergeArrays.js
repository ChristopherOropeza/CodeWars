// Task:

/* Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicates. */

// Solution:

function mergeArrays(a, b) {
  return [...new Set([...a,...b])].sort((c,d) => c-d);
}
