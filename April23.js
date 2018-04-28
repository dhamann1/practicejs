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

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:
// "zero nine five two" -> "four"
// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
  if (str == false) {
    return 'n/a';
  }
  var numObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  let splitString = str.split(' ');
  let sum = 0;
  let length = splitString.length;
  let bigNum = false;
  splitString.forEach(function(num) {
    if (numObj[num] || num === 'zero') {
      sum += numObj[num];
    } else {
      bigNum = true;
    }
  });
  let average = Math.floor(sum / length);
  if (bigNum == false) {
    for (let key in numObj) {
      console.log(bigNum);
      if (numObj[key] === average) {
        return key;
      }
    }
  } else {
    return 'n/a';
  }
}
