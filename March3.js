const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
const strCount = (str, letter) => str.split(letter).length - 1;

// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
const nextItem = (xs, item) => {
  let found = false;
  for (let element of xs) {
    if (found) {
      return element;
    }
    found = element === item;
  }
}

// Create a function which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).
// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
// The possible return strings are: "addition", "subtraction", "multiplication", "division".

const calcType = (a, b, res) =>
  a + b === res ? 'addition' :
  a - b === res ? 'subtraction' :
  a * b === res ? 'multiplication' :
  a / b === res ? 'division' :
  null;

  // Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
  // Ex:
  // scramble('abcd', [0,3,1,2]) -> 'acdb'

  function scramble(str, arr) {
    let output = [];
    arr.forEach((charIdx, i) => output[charIdx] = str[i])
    return output.join('');
  };

  // You have to return the digits of this number within an array in reverse order.
  const digitize = n => n.toString().split('').reverse().map(x => parseInt(x));

  // write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
  // the string should start with a 1.

  const stringy = size => {
  let str = '';
  for(let i = 1; i <= size; i++){
    str += i % 2;
  }
  return str;
}

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

const check = (a,x) => a.includes(x); 

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

const warnTheSheep = queue => {
  let position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
