// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.


function scrollingText(text) {
  let result = []
  for (let i = 0; i < text.length; i++) {
    result.push((text.slice(i) + text.slice(0, i)).toUpperCase())
  }
  return result
}

// Given an integer as input, can you round it to the next (meaning, "higher") 5?

function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n;
}

const roundToNext5 = n => {while (n % 5 !== 0) {n++;} return n;}


// The aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

let getLargerNumbers = (a, b) => a.map((x, i) => Math.max(x, b[i]));


// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.
function reverser(sentence){
  return sentence.split("").reverse().join("").split(" ").reverse().join(" ");
}

// Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

let bump = string => string.split('n').length >16 ? "Car Dead":"Woohoo!";
