// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(a1, a2) {
  let str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}

// Your code must return true or false depending upon whether the given number is a Narcissistic number.

function narcissistic(value) {
  let newValue = value.toString().split('');
  let returnValue = newValue.map(num => Math.pow(Number(num), newValue.length)).reduce((a, b) => a + b);
  return returnValue === value;
}

Build Tower by the following given argument:
  number of floors(integer and always greater than 0).

function towerBuilder(nFloors) {
  let tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1) +
      "*".repeat((i * 2) + 1) +
      " ".repeat(nFloors - i - 1));
  }
  return tower;
}


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiples3or5(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
