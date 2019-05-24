// Create a function that finds the integral of the expression passed.

const integrate = (coefficient, exponent) =>  coefficient / (exponent + 1) + 'x^' + (exponent + 1);

// Return the average of the given array rounded down to its nearest integer.

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.
// For Example:
// By applying a move to the string "where", the result is the string"here"`.
// By applying a move to the string "a", the result is an empty string""`.
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

function shiftLeft(s, t){
  let count = 0;
  while (s != t){
    s.length > t.length ? s = s.slice(1) : t = t.slice(1);
    count++
  }
  return count
}

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy

const isLochNessMonster = s => s.includes("tree fiddy") || s.includes("3.50");

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

const pillars = (numPill, dist, width) => {
  const distance = (numPill-1) * dist * 100
  const pillars = numPill > 2 ? (numPill-2) * width : 0
  return distance + pillars
}

// Write a function last that accepts a list and returns the last element in the list.
// If the list is empty:
// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

const last = xs => xs.length == 0 ? null : xs.pop(); 
