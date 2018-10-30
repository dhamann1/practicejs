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

// Remove the spaces from the string, then return the resultant string.

const noSpace = x => x.split(' ').join(''); 

const noSpace = x => x.replace(/\s/g, ''); 

