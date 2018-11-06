Given an array of numbers,
  return an array, with each member of input array rounded to a nearest number, divisible by 5.

const roundToFive = numbers => {
  return numbers.map(elem => Math.round(elem / 5) * 5);
}


// Given an array of numbers, return the difference between the largest and smallest values.

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);

// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

const switcher = x => {
  let alphabet = "zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map(e => alphabet[parseInt(e) - 1]).join('');
}

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

const sumStr = (a, b) => {
  return String(Number(a) + Number(b));
}


// This program tests the life of an evaporator containing a gas.
//
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
// The program reports the nth day (as an integer) on which the evaporator will be out of use.


function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var gas = 100;
  while (gas >= threshold) {
    gas -= gas * evap_per_day / 100;
    days++;
  }
  return days;
}

// Linear Kingdom has exactly one tram line. It has n stops, numbered from 1 to n in the order of tram's movement. At the i-th stop ai passengers exit the tram, while bi passengers enter it. The tram is empty before it arrives at the first stop.
// Calculate the tram's minimum capacity such that the number of people inside the tram never exceeds this capacity at any time. Note that at each stop all exiting passengers exit before any entering passenger enters the tram


function tram(stops, offboarding, onboarding) {
  let capacity = 0;
  let passengers = 0;
  for (let i = 0; i < stops; ++i) {
    passengers += onboarding[i] - offboarding[i];
    if (capacity < passengers) {
      capacity = passengers;
    }
  }
  return capacity;
}

// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
// Example:
// x = [1, 2, 3, 4, 5]
// t = 3
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
// [1, 3, 4, 5]
// Work through the array from left to right.
// Return the resulting array.

function doubleTrouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    let k = i + 1;
    if (x[i] + x[k] === t) {
      x.splice(k, 1);
      i--;
    }
  }
  return x;
}


// Wilson primes satisfy the following condition. Let P represent a prime number.
// Then ((P-1)! + 1) / (P * P) should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.


function amIWilson(p) {
  var n = (factorial(p-1) + 1) / (p*p);
  return n === parseInt(n);
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
}


// Given an array and a limit value. Check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}
