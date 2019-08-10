// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

const removeDuplicates = row => row.filter((x, i) => row.lastIndexOf(x) === i)

// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

function sumOfABeach (beach) {
    return beach.split(/sand|water|fish|sun/gi).length - 1;
  }

  Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

  function adjacentElementsProduct(array) {
    let adjacentNumbersArray = [];
    for (let i=0; i<array.length-1; i++){
      adjacentNumbersArray.push(array[i] * array[i+1]);
    }
    return Math.max(...adjacentNumbersArray);
  }


//  Your task is very simple:
// Write a function hasOneChar returning:
// true if the given string contains the same character repeated all along the string
// false otherwise.

function hasOneChar(s) {
    return s === s[0].repeat(s.length)
  }
  