const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0);

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
const strCount = (str,letter) => str.split(letter).length-1; 
