Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

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

const sumStr = (a,b) => {
  return String(Number(a) + Number(b));
}

<<<<<<< HEAD
// This program tests the life of an evaporator containing a gas.
//
// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
// The program reports the nth day (as an integer) on which the evaporator will be out of use.


function evaporator(content, evap_per_day, threshold){
var days = 0;
var gas = 100;
  while(gas >= threshold){
    gas -= gas * evap_per_day / 100;
    days++;
}
  return days;
}
=======
// Remove the spaces from the string, then return the resultant string.

const noSpace = x => x.split(' ').join(''); 

const noSpace = x => x.replace(/\s/g, ''); 

>>>>>>> 04a84a24f85c109195acebe2f7f8f673e8b21b59
