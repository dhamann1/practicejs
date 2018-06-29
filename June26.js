// Create a function called reverse for the String prototype that will allow the following functionality:
// "String".reverse();// => returns "gnirtS"
// "Super awesome string".reverse();// => returns "gnirts emosewa repuS"
// The reverse function should NOT modify the original string.

String.prototype.reverse = function() {
  let str = [];
  for (let i = this.length - 1; i >= 0; i--) {
    str.push(this[i])
  }
  return str.join('');
}

// Let's implement the reject()/Reject() function...

function reject(array, iterator) {
  return array.filter(x => !iterator(x));
}

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

function tea42(s) {
  return s.toString().replace(/2/g, 't')
}

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.
// Note:
// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:
// str = "In 2015, I want to know how much does iPhone 6+ cost?"
// The numbers are 2015, 6
// Sum is 2021.

function sumFromString(str) {
  let digitArr = str.split(/\D/g);
  let res = 0;
  for (let i = 0; i < digitArr.length; i++) {
    res += +digitArr[i];
  }
  return res;
}
