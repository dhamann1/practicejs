// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  let s = n.toString();
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < s.length / 2; i++) {
    sum1 += parseInt(s[i]);
    sum2 += parseInt(s[s.length - i - 1]);
  }
  return sum1 === sum2;
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let count = 0;
  num = num.toString();
  while (num.length > 1) {
    num = num.split('').map(x => Number(x)).reduce((a, b) => a * b).toString();
    count++;
  }
  return count;
}


