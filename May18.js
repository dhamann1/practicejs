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
    result[i] = array.length - i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
  }
  return foldArray(result, runs - 1);
}



const toHours = (i) => Math.floor(i / 60);
const setDigits = (i) => i < 10 ? `0${i}` : i;
const getTime = (i) => [toHours(i), i % 60];
const toTime = (arr) => `${arr[0]}:${setDigits(arr[1])}`;
const minutes = (i) => toTime(getTime(i));

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second)

function race(v1, v2, g) {
  let time = g / (v2 - v1);
  return v2 > v1 ? [Math.floor(time), Math.floor(time * 60 % 60), Math.floor(time * 3600 % 60)] : null;
}

// In English and programming, groups can be made using symbols such as () and {} that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.
// Make a program that checks a string for correct grouping.

function groupCheck(s) {
  var brackets = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  var stack = []

  for (var c of s) {
    if (c in brackets) {
      stack.push(c)
    } else if (brackets[stack[stack.length - 1]] == c) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length == 0
}

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *



function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
