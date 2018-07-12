// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.


function scrollingText(text) {
  let result = []
  for (let i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
  }
  return result
}

// Given an integer as input, can you round it to the next (meaning, "higher") 5?

function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n;
}

// The aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

function getLargerNumbers = (a, b) => a.map((x, i) => Math.max(x, b[i]));
