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

function splitS (str){
  return (str + "_").match(/../g);
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
let count = 0;
arr.forEach(elem => {
  if(smileys.includes(elem)){
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

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(a1, a2) {
  let str = a2.join(' ');
  return a1.filter(function(word){
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
