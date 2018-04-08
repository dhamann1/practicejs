// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(words) {
  return words.split(' ').map(word => {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    let tempArray = strarr.slice(i, i + k);
    let tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

// Implement the function uniqueInOrder which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(iterable) {
  let result = [];
  let last;
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i]);
    }
  }
  return result;
}



// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

function sumPairs(ints, s) {
  let seen = {};
  for (let i = 0; i < ints.length; i++) {
    if (seen[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }
    seen[ints[i]] = true;
  }
  return undefined;
}
