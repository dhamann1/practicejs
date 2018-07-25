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
  if(costs < 5){
   return Number(costs.toFixed(2));
  }else if(costs <= 30){
   return Number((costs * 2/3).toFixed(2));
  }else{
   return Number((costs - 10).toFixed(2));
  }
}


// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}
