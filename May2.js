// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitStrings(str) {
  str.length % 2 ? str += "_" : str;
  let newAr = [];
  for (let i = 0; i < str.length; i += 2) {
    newAr.push(str[i] + str[i + 1]);
  }
  return newAr;
}

//better solution:

function splitS(str) {
  return (str + "_").match(/../g);
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
  let smileys = [":)", ";)", ":-)", ";-)", ";~)", ":~)", ":D", ";D", ":-D", ":~D", ";-D", ";~D"];
  let count = 0;
  arr.forEach(elem => {
    if (smileys.includes(elem)) {
      count++;
    }
  })
  return count;
}


// You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.
// Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.
function mineLocation(field) {
  for (let a = 0; a < field.length; a++) {
    for (let b = 0; b < field[a].length; b++) {
      if (field[a][b] === 1) {
        return [a, b];
      } else {
        return 'No mine';
      }
    }
  }
}

Given two arrays of strings a1 and a2
return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(a1, a2) {
  let str = a2.join(' ');
  return a1.filter(function (word) {
    return str.indexOf(word) !== -1;
  }).sort();
}

// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

function solutionFizzBuzz(number) {
  let A = 0;
  let B = 0;
  let C = 0;
  let solutionArr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      C++;
    } else if (i % 3 == 0) {
      A++;
    } else if (i % 5 == 0) {
      B++;
    }
  }
  return solutionArr.push(A, B, C);
}

// Your Task
// Return the name of the winner. If there is no winner, return null (in Java and JavaScript), None (in Python) or nil (in Ruby).
// Task Description
// There are no given candidates. An elector can vote for anyone. Each ballot contains only one name and represents one vote for this name. A name is an arbitrary string, e.g. "A", "B", or "XJDHD".

// There are no spoiled ballots.

// The ballot-box is represented by an unsorted list of names. Each entry in the list corresponds to one vote for this name. You do not know the names in advance (because there are no candidates).

// A name wins the election if it gets more than n/2 votes (n = number of all votes, i.e. n is equal to the size of the given list).

function getWinner(list) {
  let result = {};
  let winNumber = list.length / 2;
  list.forEach(function (char) {
    ++result[char] || (result[char] = 1);
  });
  let answer = Object.keys(result).filter(function (key) {
    if (result[key] > winNumber) return key;
  });
  return answer[0] || null;
}

// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second.
// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
// If the second string isn't a valid rotation of the first string, the method returns -1.

function shiftedDiff(first, second) {
  return (first.length == second.length) ? (second + second).indexOf(first) : -1;
}
