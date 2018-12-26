// Remove n exclamation marks in the sentence from left to right. n is positive integer.
const removeNExclamation = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

const evenNumbers = (array, number) => array.filter(x => x % 2 === 0).slice(-number)

// Given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

const oddBall = array => array.includes(array.indexOf("odd")); 