// Remove n exclamation marks in the sentence from left to right. n is positive integer.
const removeNExclamation = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

const evenNumbers = (array, number) => array.filter(x => x % 2 === 0).slice(-number)

// Given an array with several "even" words, one "odd" word, and some numbers mixed in.

// Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

const oddBall = array => array.includes(array.indexOf("odd"));

// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

const findMagic = arr => arr.findIndex(i => arr[i] === i);

// Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);


const parseNumbers = arr => arr.map(num => parseInt(num));

//Sum of even numbers in array

const sumEvenNumbers = a => a.reduce((r, num) => r + (num % 2 ? 0 : num), 0);
