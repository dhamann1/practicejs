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
