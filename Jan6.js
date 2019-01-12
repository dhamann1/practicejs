// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
  return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
}

const bingo = arr => [2,7,9,14,15].every(num => arr.includes(num)) ? "WIN" : "LOSE";


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalize(s){
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
const tripleX = str => str.substr(str.indexOf('x')+1, 2) === 'xx';

// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0
function Hero(name){
  this.name = name ? name : "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
