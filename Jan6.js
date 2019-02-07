// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
  return [2, 9, 14, 7, 15].every(x => a.includes(x)) ? "WIN" : "LOSE"
}

const bingo = arr => [2, 7, 9, 14, 15].every(num => arr.includes(num)) ? "WIN" : "LOSE";


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalize(s) {
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

// Given a string, remove any characters that are unique from the string.

const onlyDuplicates = str => str.split('').filter(letter => str.indexOf(letter) != str.lastIndexOf(letter)).join('');


// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation

const setAlarm = (employed, vacation) => employed && !vacation;

// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
const tripleX = str => str.substr(str.indexOf('x') + 1, 2) === 'xx';

// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0
function Hero(name) {
  this.name = name ? name : "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}


// Bob has written a function to detect the type of an object. It receives any primitive values or objects, and returns its object type as a string. But it seems to be working incorrectly. Can you figure out why, and fix the code for him?

function objectType() {
  return Object.prototype.toString.call(
    arguments.length ? arguments[0] : null
  );
}

// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The called floor, i.e. the floor you want to reach
// It should return the name of the elevator closest to the called floor ("left"/"right").
// In the case where both elevators are equidistant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers in the closed-open range [0, 3).

//Answer 1
function elevator(left, right, call) {
  let distanceLeft = Math.abs(left - call);
  let distanceRight = Math.abs(right - call);
  return distanceLeft < distanceRight ? "left" : "right";
}

//Answer 2
const elevator = (left, right, call) => Math.abs(left-call) < Math.abs(right-call) ? "left" : "right";


// You have to write a function that accepts three parameters:
// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  let passengerCount = on + wait;
  if (passengerCount <= cap) return 0;
  else return passengerCount - cap;
}

const enough = (cap, on, wait) => (on + wait > cap) ? on+wait-cap : 0;

// Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

const gooseFilter = birds => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(x => !geese.includes(x));
}



// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

const removeUrlAnchor = url => url.split('#')[0];

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

const sumMix = x => x.map(num => +num).reduce((a,b) => a + b);

// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.

const twoSort = list => list.sort()[0].split('').join('***'); 
