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

String.prototype.toAlternatingCase = function() {
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

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals % 6]
}


// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return an array containing only the name as is"

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name]
}

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.



function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}
