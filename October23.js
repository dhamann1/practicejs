Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

const roundToFive = numbers => {
  return numbers.map(elem => Math.round(elem / 5) * 5);
}


// Given an array of numbers, return the difference between the largest and smallest values.

const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers);
