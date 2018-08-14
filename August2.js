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

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" the return value must be true. Otherwise it should return false.

function Sleigh() {}
Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};


// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function calculateAge(a, b) {
  if (a - b == 0) {
    return 'You were born this very year!';
  }
  if (b - a == 1) {
    return `You are ${b-a} year old.`;
  }
  if (b > a) {
    return `You are ${b-a} years old.`;
  }
  if (a - b == 1) {
    return `You will be born in ${a-b} year.`;
  } else {
    return `You will be born in ${a-b} years.`;
  }
}
