// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiples3or5(number) {
  let count = 0;
  let sum = 0;
  while (count < number) {
    if (count % 3 == 0 || count % 5 == 0) {
      sum += count;
    }
    count++;
  }
  return sum;
}

// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
  let odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

// Complete the function caffeineBuzz, which takes a non-zero integer as it's one argument.
// If the integer is divisible by 3, return the string "Java".
// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
// If the integer is one of the above and is even, add "Script" to the end of the string.
// Otherwise, return the string "mocha_missing!"

function caffeineBuzz(n){
  if (n % 12 === 0) return "CoffeeScript";
  if (n % 6 === 0) return "JavaScript";
  if (n % 3 === 0)  return "Java";
  return "mocha_missing!";
}
