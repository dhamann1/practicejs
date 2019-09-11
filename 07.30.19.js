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


// Create a method that takes an array as an input, and outputs the index at which the sole odd number is located.

function oddOne(arr) {
  return arr.findIndex((num) => (num % 2 != 0))
}

// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.
// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!
// e.g. "The score is four nil" should return [4,0]
// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.


function scoreboard (string) {
  var numbers = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
  var scoreOne = string.split(' ').reverse()[1];
  var scoreTwo = string.split(' ').reverse()[0];
  return [numbers[scoreOne], numbers[scoreTwo]];
}

// Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
// Extra perfect number is the number that first and last bits are set bits.


function extraPerfect(n){
  var numArray = [];
  
  for (var i = 1; i <= n; i += 2) {
    numArray.push(i)
  }
  return numArray;
}


//Find the mean of an array 
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;


