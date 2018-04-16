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
