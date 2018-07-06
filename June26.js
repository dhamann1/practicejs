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

// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

function makeString(s) {
  return s.split(' ').map(a => a[0]).join('');
}

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;

  var count = {};

  collection.forEach(item => {
    count[item] = (count[item] || 0) + 1;
  });

  return Math.max(...Object.values(count));
}



function multiplyChars(word, number) {
  return word.repeat(number);
}

// Complete the method which accepts an array of integers, and returns one of the following:
//
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

function isSortedAndHow(array) {
  var ans;
  if (array[1] > array[0]) {
    ans = "yes, ascending";
  }

  if (ans === "yes, ascending") {
    for (var i = 1; i < array.length; i++) {
      if (array[i] >= array[i - 1]) {
        ans = "yes, ascending";
      } else return ans = "no";
    }
  }
  if (ans !== "yes, ascending") {
    for (var i = 1; i < array.length; i++) {
      if (array[i] <= array[i - 1]) {
        ans = "yes, descending";
      } else return ans = "no";
    }
  }
  return ans;
}

// Given an integral number, determine if it's a square number:

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}
