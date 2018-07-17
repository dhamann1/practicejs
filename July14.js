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
