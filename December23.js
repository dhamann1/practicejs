// Remove n exclamation marks in the sentence from left to right. n is positive integer.
const removeNExclamation = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

const evenNumbers = (array, number) => array.filter(x => x % 2 === 0).slice(-number)

// Given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

const oddBall = array => array.includes(array.indexOf("odd"));

// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

const findMagic = arr => arr.findIndex(i => arr[i] === i);


// If you say any of the following words a large bucket of "water" will be dumped on you: "water", "wet", "wash" This is true for any form of those words, like "washing", "watered", etc.

// If you say any of the following phrases you will be doused in "slime": "I don't know", "slime"

// If you say both in one sentence, a combination of water and slime, "sludge", will be dumped on you.

// Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.

function bucketOf(str) {
  str = str.toLowerCase();
  let water = /water|wet|wash/.test(str);
  let slime = /i don't know|i dont know|slime/.test(str);
  if (water && slime) return "sludge";
  if (water) return "water";
  if (slime) return "slime";
  else return "air";
}