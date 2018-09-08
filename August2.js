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
Sleigh.prototype.authenticate = function (name, password) {
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

Write a
function called that takes a string of parentheses, and determines
if the order of the parentheses is valid.The
function should
return true
if the string is valid, and false
if it 's invalid.

function validParentheses(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}

// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x and y

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}


// Check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

let checkTheBucket = arr => arr.includes('gold')

// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

const countSheep = num => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
}

// This function should return a number (final grade). There are four types of final grades:
//
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) return 100
  if (exam > 75 && projects > 4) return 90
  if (exam > 50 && projects > 1) return 75
  return 0;
}

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

const reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')

// When provided with a number between 0-9, return it in words.

function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Unknown number';
  }
}

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  var total = 40 * d,
    discount = 0;
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }
  return total;
}


// You were camping with your friends far away from home, but when it's time to go back, you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%


function calculateTip(amount, rating) {

  let tips = {
    'terrible': 0,
    'poor': .05,
    'good': .1,
    'great': .15,
    'excellent': .2
  }

  rating = rating.toLowerCase();

  return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";

}

// create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// create three functions that one needs to be able to call upon an array
// This function returns true only if the predicate supplied returns true for all the items in the array
// This function returns true only if the predicate supplied returns false for all the items in the array
// This function returns true if at least one of the items in the array returns true for the predicate supplied

Array.prototype.all = function (p) {
  return this.filter(p).length === this.length;
};

Array.prototype.none = function (p) {
  return this.filter(p).length === 0;
};

Array.prototype.any = function (p) {
  return this.filter(p).length > 0;
};
