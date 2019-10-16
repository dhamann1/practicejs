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


// check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well (x) {
  let ideas = x.filter(y=>y==='good').length
    switch (true) {
      case ideas == 0: return 'Fail!'; break;
      case ideas < 3: return 'Publish!'; break;
      case ideas > 2: return 'I smell a series!'
    }
  
  }


function generateRange(min, max, step){
  let arr = [];
    while (min <= max) {
      arr.push(min);
      min += step;
    }
  return arr
  }


  // You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

  function oddOnesOut (nums) {
    var numCount = {};
    nums.forEach (x => {
      if (numCount[x]){
        numCount[x]++;
      } else {
        numCount[x] = 1; 
      }
    });
    return nums.filter(y => numCount[y] % 2 === 0);
  }

  // Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:
  // sum < 0
  // difference < 0
  // Either of the calculated ages come out to be negative

function getAges (sum,difference){
  if (sum < 0 || difference < 0 ) {return null;}
  var x = (sum + difference)/2; 
  var y = sum - x; 
  if (x < 0 || y < 0){return null;}
  return [x,y];
}


// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function longestVowelChain(s){
  var vowels = ['a','e','i','o', 'u'];
  var count = 0;
  var highestCount = 0;
  for(var i = 0; i < s.length - 1; i++){
    if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
      count++;
    } else {
      if (highestCount < count) {
      highestCount = count;
      }
    count = 1;
    }
  }
  return highestCount; 
}


// We need a function that counts the number of sheep present in the array (true means present).

const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;

// Give you a function ```animal```, accept 1 parameter:```obj``` like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."

const animal = o => `This ${o.color} ${o.name} has ${o.legs} legs.`;



// We'll create a function match which takes a candidate and a job, which will either return a boolean indicating whether the job is a valid match for the candidate.
// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) 

const match = (candidate, job ) => {
  if(!candidate.minSalary  || !job.maxSalary) {
    return "Error"; 
  }
   return  candidate.minSalary - candidate.minSalary/10 <= job.maxSalary 
  }

function findScreenHeight(width, ratio){
    var ratioSplit = ratio.split(':');
    return width +'x'+ width/ratioSplit[0]*ratioSplit[1];
  }

  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside.
  
function shortLongShort (a,b) {
  return a.length > b.length ? b+a+b : a+b+a; 
}


function isDivideBy (number, a, b){
  return number % a == 0 && number % b == 0; 
} 

// Is every value in the array an array?

function arrCheck(val) {
  return val.every(function(x) {
    return Array.isArray(x);
  });
};

// Return the area of a circle with the given radius. Round the returned number to two decimal places
function circleArea (radius) {
  if (isNaN(radius) || radius <= 0){
    return false;
  }
  return parseFloat((Math.PI * radius * radius).toFixed(2));
};

// Implement the method length, which accepts a linked list (head), and returns the length of the list.

function length(head) {
  var currentNode = head;
  for (var i = 0;currentNode; i++) {  
    currentNode = currentNode.next
  } 
  return i;
}

