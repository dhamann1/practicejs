Given an array of numbers,
  return an array, with each member of input array rounded to a nearest number, divisible by 5.

const roundToFive = numbers => {
  return numbers.map(elem => Math.round(elem / 5) * 5);
}


// Given an array of numbers, return the difference between the largest and smallest values.

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

const switcher = x => {
  let alphabet = "zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map(e => alphabet[parseInt(e) - 1]).join('');
}

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

const sumStr = (a, b) => {
  return String(Number(a) + Number(b));
}


// This program tests the life of an evaporator containing a gas.
//
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
// The program reports the nth day (as an integer) on which the evaporator will be out of use.


function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var gas = 100;
  while (gas >= threshold) {
    gas -= gas * evap_per_day / 100;
    days++;
  }
  return days;
}

// Linear Kingdom has exactly one tram line. It has n stops, numbered from 1 to n in the order of tram's movement. At the i-th stop ai passengers exit the tram, while bi passengers enter it. The tram is empty before it arrives at the first stop.
// Calculate the tram's minimum capacity such that the number of people inside the tram never exceeds this capacity at any time. Note that at each stop all exiting passengers exit before any entering passenger enters the tram


function tram(stops, offboarding, onboarding) {
  let capacity = 0;
  let passengers = 0;
  for (let i = 0; i < stops; ++i) {
    passengers += onboarding[i] - offboarding[i];
    if (capacity < passengers) {
      capacity = passengers;
    }
  }
  return capacity;
}

// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
// Example:
// x = [1, 2, 3, 4, 5]
// t = 3
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.

function doubleTrouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    let k = i + 1;
    if (x[i] + x[k] === t) {
      x.splice(k, 1);
      i--;
    }
  }
  return x;
}


// Wilson primes satisfy the following condition. Let P represent a prime number.
// Then ((P-1)! + 1) / (P * P) should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.


function amIWilson(p) {
  var n = (factorial(p - 1) + 1) / (p * p);
  return n === parseInt(n);
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


// Given an array and a limit value. Check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(array, limit) {
  return array.filter((value) => value > limit).length > 0 ? false : true;
}

const smallEnough = (numArr, limit) => numArr.filter((value => value > limit)).length > 0 ? false : true;

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

const stringMerge = (s1, s2, l) => s1.slice(0, s1.indexOf(l)) + s2.slice(s2.indexOf(l));

// Write a function to convert a name into initials.

function abbrevName(name) {
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

const abbrevName = name => name.split(' ').map(word => word.substr(0,1).toUpperCase()).join('.')


// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]

function getNames(data) {
  return data.map(i => i.name);
}


// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

function formatWords(words) {
  if (words === [] || words === null) {
    return "";
  };
  words = words.filter(function (n) {
    return n !== '';
  })
  return words.map(function (a, i) {
    if (i == words.length - 2) return a + " and";
    return a + ",";
  }).join(" ").slice(0, -1);
}


// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.


const capitalsFirst = str => {
  let words = str.split(' ');
  let upper = words.filter(function(x) { return x.charAt(0).match(/[A-Z]/) });
  let lower = words.filter(function(x) { return x.charAt(0).match(/[a-z]/) });
  return upper.concat(lower).join(' ');
}

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

const litres = time => Math.floor(time * .5);

// Correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

const corrections = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');

//Convert number to strings

const numberToString = num => String(num);

// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

const any = (arr, fun) => arr.some(fun);


// You will be given a string.
// You need to return an array of three strings by gradually pulling apart the string.
// You should repeat the following steps until the string length is 1:
// a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.
// The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

function popShift(s){
  let result =['','',''];
  let arr = s.split('');
  while (arr.length > 1) {
    result[1]+= arr.shift();
    result[0]+= arr.pop();
  }
  result[2] = arr[0] || '';
  return result;
}
