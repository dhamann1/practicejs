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
