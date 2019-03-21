// Write a function that finds the sum of all its arguments.

function sum(...numbers) {
  return numbers.reduce((x, y) => x + y);
}

// Find the last element of the given argument(s).

function last(list) {
  var out = list;
  if (arguments.length > 1)
    list = arguments;
  if (list.length > 1)
    out = list[list.length - 1];
  return out;
}

const last = list => list[list.length-1];


// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.


function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits === []) {
    return [];
  }
  return bagOfFruits.map(fruit =>
    fruit.replace(/rotten/, () => '').toLowerCase()
  );
}

// Your are given a string. You must replace the word(s) coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.
function covfefe(str) {
  if (str.match(/coverage/g) === null) {
    return str + " covfefe";
  }
  return str.replace(/coverage/g, "covfefe");
}

// Given a string, swap the case for each of the letters.

let caseSwap = (str) => str.split('').map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');



// OK, let's help Santa and his elves with a simple function handOutGift() (hand_out_gift in Ruby, HandOutGift in C# ) which takes the name of the next child. If this child already got a gift, it must throw an error in order to remind Santa.

var names = [];

function handOutGift(name) {
  if (names.indexOf(name) !== -1) throw "Error";
  names.push(name)
}


Your task is to remove all consecutive duplicate words from string, leaving only first words entries.

let removeConsecutiveDuplicates = s => s.split(' ').filter((elem, i, arr) => arr[++i] !== elem).join(' ')




// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }

function count(string) {
  let countObj = {};
  let splitString = string.split('');
  splitString.map((char) => {
    if (countObj[char] != undefined) {
      countObj[char]++;
    } else {
      countObj[char] = 1;
    }
  })
  return countObj;
}


// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.


function pizzaPayments(costs) {
  if (costs < 5) {
    return Number(costs.toFixed(2));
  } else if (costs <= 30) {
    return Number((costs * 2 / 3).toFixed(2));
  } else {
    return Number((costs - 10).toFixed(2));
  }
}


// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}

const positiveSum = arr => arr.filter(x => x > 0).reduce((a,b) => a + b, 0); 



// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0
  }
  let max = Math.max.apply(Math, array);
  let min = Math.min.apply(Math, array);
  let sum = 0
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - max - min
}



// Your task is to count all the combinations of numbers in an array whose sum equals the number passed into the second parameter in the arguments of the function. The combination length will be limited to all combinations which are exactly one less than the length of the array. If the array is [2, 0, 0, 0, 1] only count the combinations of four numbers.

function numCombo(arr, num) {
  let sum = arr.reduce((a, b) => a + b)
  return arr.filter(x => sum - x == num).length;
}

// Given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function fixStringCase(s) {
  let lowerCase = 0;
  let upperCase = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++;
    } else {
      lowerC++;
    }
  }
  return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase()
}

// Write a method called workNeeded to figure out how much time you need to contribute to a project.

// Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

// If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
// If we don't have to contribute any time to the project then return "Easy Money!"



function workNeeded(projectMinutes, freelancers) {
  let freelancerMinutes = freelancers.map(([hours, minutes]) => hours * 60 + minutes)
    .reduce((a, b) => a + b);

  let minutesToSpare = projectMinutes - freelancerMinutes;
  if (minutesToSpare <= 0) {
    return 'Easy Money!';
  }

  let hours = Math.floor(minutesToSpare / 60);
  let minutes = minutesToSpare % 60;

  return `I need to work ${hours} hour(s) and ${minutes} minute(s)`
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

let doubleChar = (str) => str.split("").map(letter => letter + letter).join("");

// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  let num = [];
  for (let i = 1; i <= n; i++) {
    num.push(i);
  }
  return num;
}

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

function findDigit(num, nth) {
  if (nth < 1) return -1;
  if (num < 0) return findDigit(-num, nth);
  if (num == 0) return 0;
  if (nth > 1) return findDigit(Math.floor(num / 10), nth - 1);
  return num % 10;
}
