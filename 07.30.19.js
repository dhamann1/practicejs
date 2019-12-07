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

// Find the first element of an array that is not consecutive.

function firstNonConsecutive (arr) {
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i]-arr[0]) !== i) {
      return arr[i];
    }
  }
  return null;
}

// Create a function named allNonConsecutive
// E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.
// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

function allNonConsecutive (arr) {
  var numArray = []; 
  for (var i = 1; i < arr.length; i++) {
    if ((arr[i]-arr[i-1]) !== 1) {
      numArray.push({"i": i, "n": arr[i]}); 
    }
  }
  return numArray;
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

const areYouPlayingBanjo = name => {
  return name[0] ==='r' || name[0] === 'R' ? name + " plays banjo" : name + " does not play banjo";
}

const areYouPlayingBanjo = name => {
  return name[0].toLowerCase() == 'r' ? name + " plays banjo" : name + " does not play banjo";
}

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var val = weight / (height * height);
  if(val <= 18.5) {
    return 'Underweight';
  }
  if(val <= 25.0) {
    return 'Normal';
  }
  if(val <= 30.0) {
    return 'Overweight';
  }
  return 'Obese';
}


// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUser(username) {
  return (/^[a-z_0-9]{4,16}$/.test(username));
}

// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.
// The booleans should always start with false becase there is no digit before the first one.

function divisibleByLast(n) {
  return n.toString().split('').map((y, index, array) => (y % array[index-1]) === 0);
}

// If　a = 1, b = 2, c = 3 ... z = 26

function wordsToMarks (string) {
  return string.split("").reduce((acc, char) => {
    return acc + char.charCodeAt() - 96; 
  }, 0); 
}

// Implement String#digit? which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};

// Note: If the count exceed 3 please return 'You need extra sleep'.
// The list of events can contain the following:
// You come here, to solve some kata ('cw').
// You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
// You just watch a movie ('movie').
// Other events can be present and it will be represent by arbitrary string, just ignore this one.
// Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.

function howMuchCoffee(events) {
  var count = 0;
  events.forEach((el) => {
    if(/^(CW|CAT|DOG|MOVIE)$/.test(el)){
      count += 2;
    }
    if(/^(cw|cat|dog|movie)$/.test(el)){
      count ++;
    }
  });
  if(count > 3){
    return 'You need extra sleep';
  }
  return count;
}


//Vowel String Method 

String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this);
}

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

function sumCubes(n){
  var sum = 0;
  while(n > 0) {
    sum += n**3;
    n--;
  }
  return sum;
}

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

function divCon(x) {
  var sum = 0;
  for (let i = 0; i < x.length; i++) {
    var n = x[i];
    if (Number.isInteger(n)){
      sum += n;
    }
    else {
      sum -= parseInt(n);
    }
  }
  return sum;
}