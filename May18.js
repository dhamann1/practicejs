// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

var nbrOfLaps = function(x, y) {
  let a = x;
  let b = y;
  let aSteps = 1;
  let bSteps = 1;

  while (a !== b) {
    if (a > b) {
      b = b + y;
      bSteps++;
    } else {
      a = a + x;
      aSteps++;
    }
  }

  return [aSteps, bSteps];
}

// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
// Same meaning: 1 == 1
// 1 != -1



function sumConsecutives(s) {
  let sum = 0,
    sums = [];
  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    if (s[i] != s[i + 1]) {
      sums.push(sum);
      sum = 0;
    }
  }
  return sums;
}



// In this Kata, you will be given an array of integers and your task is to return the number of arithmetic progressions of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.


function arithmeticProgressions(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr.indexOf(2 * arr[j] - arr[i]) > 0) result++;
    }
  }
  return result;
}

//write a method that folds a given array of integers by the middle x-times.


function foldArray(array, runs) {
  if (!runs) return array;
  let result = [];
  for (let i = 0; i < Math.ceil(array.length / 2); i++) {
    result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }
  return foldArray(result, runs - 1);
}
