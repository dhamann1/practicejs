// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }
  let numArray1 = [];
  let numArray2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      numArray1.push(a[i]);
      numArray2.push(b[i]);
    }
  }
  numArray1.reverse();
  if (numArray1.length === 2 && numArray1.toString() === numArray2.toString()) {
    return true;
  }
  return false;
}


// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.


function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }
  return count;
}
