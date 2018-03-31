// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

let sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
  var found = false;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      } else {
        found = true;
      }
      if (i === 1 || i + 1 === sequence.length) {
        continue;
      } else if (sequence[i] > sequence[i - 2]) {
        sequence[i - 1] = sequence[i - 2];
      } else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

let inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {
  let highestSum = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    let contestedNumSum = inputArray[i] * inputArray[i + 1];
    if (contestedNumSum > highestSum) {
      highestSum = contestedNumSum;
    }
  }
  return highestSum;
}

// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {};
