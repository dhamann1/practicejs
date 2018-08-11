// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm feared of depends on which day of week it is... This a concrete description of my mental illness:
//
// Monday --> 12
//
// Tuesday --> numbers greater than 95
//
// Wednesday --> 34
//
// Thursday --> 0
//
// Friday --> numbers divisable by 2
//
// Saturday --> 56
//
// Sunday --> 666 or -666
//
// Write a function which takes a string (day of week) and an integer (number to be tested) so it tells the doctor if I'm feared or not. (return a boolean)



let AmIAfraid = (day, num) => {
  return {
    Monday: d => d == 12,
    Tuesday: d => d > 95,
    Wednesday: d => d == 34,
    Thursday: d => !d,
    Friday: d => !(d % 2),
    Saturday: d => d == 56,
    Sunday: d => Math.abs(d) == 666
  }[day](num);
}


// Output will be a valid sorted array with People objects sorted by Age in ascending order

function OrderPeople(people) {
  return people.sort((a, b) => a.age - b.age)
}


// Return another string such that even-indexed and odd-indexed characters of String are grouped and groups are space-separated

const sortMyString = string => {
  let even = string.split('').filter((v, i) => i % 2 === 0).join('');
  let odd = string.split('').filter((v, i) => i % 2 !== 0).join('');
  return even + ' ' + odd;
}

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
  if (bonus === true) {
    let newSal = salary * 10;
    return "$" + newSal;
  } else {
    return "$" + salary;
  }
}


// Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}


//Sum an array

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


// Create a function with two arguments that will return a list of length (n) with multiples of (x).

function countBy(x, n) {
  var numList = []
  for (let i = 1; i <= n; i++) {
    numList.push(x * i);
  }
  return numList;
}

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map(num => num === 0 ? num : -num);
}


//Remove exclamation marks from string

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}