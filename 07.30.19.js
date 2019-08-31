// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

const removeDuplicates = row => row.filter((x, i) => row.lastIndexOf(x) === i)

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function sumOfABeach (beach) {
    return beach.split(/sand|water|fish|sun/gi).length - 1;
  }

  Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

  function adjacentElementsProduct(array) {
    let adjacentNumbersArray = [];
    for (let i=0; i<array.length-1; i++){
      adjacentNumbersArray.push(array[i] * array[i+1]);
    }
    return Math.max(...adjacentNumbersArray);
  }


//  Your task is very simple:
// Write a function hasOneChar returning:
// true if the given string contains the same character repeated all along the string
// false otherwise.

function hasOneChar(s) {
    return s === s[0].repeat(s.length)
  }
  

  // Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

  function alphabetSymmetry (arr) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((letter, index) => index === alphabet.indexOf(letter)).length);
  }


//create a rock, paper, scissors function. 

function rps (p1, p2) {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};
  


function palindrome(num) { 
  
  if (!Number.isInteger(num) || num < 0) {
      return "Not valid";
  }
  
  return (num == num.toString().split("").reverse().join("")) ? true : false;
} 

// Given a year, return the century it is in.

const centuryFromYear = year => Math.ceil(year/100)

// A function sumAverage(arr) where arr is an array containing arrays full of numbers

const sum = (a,b)=>a+b
const getAverage = a => a.reduce(sum,0)/a.length
const sumAverage = A => Math.floor(A.map(getAverage).reduce(sum,0))


// Given an array of integers, Find the Nth smallest element in this array of integers

const nthSmallest = (a, n) => a.sort((x, y) => x - y)[n - 1];
