// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

function peopleBus(busStops) {
  let busAmount = 0;
  busStops.forEach(stop => {
    busAmount += (stop[0] - stop[1]);
  })
  return busAmount;
}

// Your friend has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs.
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. You have to use the filter-method of Javascript.

function searchNames(logins) {
  return logins.filter(function (value, index, arr) {
    return index % 2 === 1 && arr[index - 1].match(/^\.|\.$/);
  });
}

// Modify the kebabize function so that it converts a camel case string into a kebab

function kebabize(str) {
  let removeNums = str.replace(/[0-9]/g, '');
  let strArr = removeNums.split('');
  let camelArray = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      if (i !== 0) {
        camelArray.push('-');
      }
      camelArray.push(strArr[i].toLowerCase());
    } else {
      camelArray.push(strArr[i]);
    }
  }
  return camelArray.join('');
}

// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

// Also:

// the number of elements to be returned cannot be higher than the array/list/vector length;
// elements can be duplicated;
// in case of duplicates, just return them according to the original order (see third example for more clarity).


function firstNSmallest(array, n) {
  let a = array.slice();
  let small = [];
  let result = [];
  a.sort();

  for (let i = 0; i < n; i++) {
    small.push(a[i]);
  }
  for (let i = 0; i < array.length; i++) {
    if (small.includes(array[i])) {
      result.push(array[i]);
      small.splice(small.indexOf(array[i]), 1);
    }
  }
  return result;
}

// You've just recently been hired to calculate scores for a Dart Board game!
// Scoring specifications:
// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radiuses are less than 5, award 100 BONUS POINTS!
// Write a function that accepts an array of radiuses (can be integers and/or floats), and returns a total score using the above specification.
// An empty array should return 0.


function scoreThrows(radiuses) {
  if (radiuses.length <= 0) {
    return 0;
  }
  let score = 0
  let count = true
  for (let i = 0; i < radiuses.length; i++) {
    if (radiuses[i] < 5) {
      score += 10;
    } else if (radiuses[i] <= 10) {
      score += 5;
      count = false;
    } else {
      count = false;
    }
  }

  if (count) {
    score += 100
  }

  return score;
}

// Given two arrays, the purpose of this Kata is to check if these two arrays are the same. "The same" in this Kata means the two arrays contains arrays of 2 numbers which are same and not necessarily sorted the same way. i.e. [[2,5], [3,6]] is same as [[5,2], [3,6]] or [[6,3], [5,2]] or [[6,3], [2,5]] etc

// [[2,5], [3,6]] is NOT the same as [[2,3], [5,6]]
// Two empty arrays [] are the same
// [[2,5], [5,2]] is the same as [[2,5], [2,5]] but NOT the same as [[2,5]]
// [[2,5], [3,5], [6,2]] is the same as [[2,6], [5,3], [2,5]] or [[3,5], [6,2], [5,2]], etc
// An array can be empty or contain a minimun of one array of 2 integers and up to 100 array of 2 integers

function same(a, b) {
  a = a.map((v) => v.sort()).sort().join();
  b = b.map((v) => v.sort()).sort().join();
  return a === b;
}

// You're working in a number zoo, and it seems that one of the numbers has gone missing!
// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.
// In case the zoo loses another number, they want your program to work regardless of how many numbers the zoo has in total.
// Write the function findNumber(array) that takes an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. Return the number that is missing.

function findNumber(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
