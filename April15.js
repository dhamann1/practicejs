// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes starting with 0 up-to and including the maximum bound.

function prime(num) {
  let numArray = [];
  while (count <= num) {
    if (count % 2 != 0 || count != 1 || count === 2) {
      numArray.push(count);
      count++;
    }
  }
  return numArray;
}

// Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]

function largestDifference(data) {
  let largeDiff = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      if (data[i] <= data[j] && j - i > largeDiff) {
        largeDiff = j - i;
      }
    }
  }
  return largeDiff;
}

// A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. 

function luckCheck(ticket) {
  let length = ticket.length;
  let left = ticket.split('').splice(0, length / 2).map(elem => Number(elem));
  let right = ticket.split('').splice((length % 2 === 0 ? length / 2 : length / 2 + 1), length).map(elem => Number(elem));
  return left.reduce((a, b) => +a + +b) === right.reduce((a, b) => +a + +b);
}

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.


function toWeirdCase(string) {
  return string.split(' ').map(function (word) {
    return word.split('').map(function (letter, index) {
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
