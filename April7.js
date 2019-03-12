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

function uniqueInOrder(it) {
  let result = [];
  for (let i = 0; i < it.length; i++) {
    if (it[i] !== result[result.length - 1]) {
      result.push(it[i])
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

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function whoLikes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
      break;
  }
}


// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let splitString = text.toLowerCase().split('');
  let numObj = {};
  for (let i in splitString) {
    if (!numObj[splitString[i]]) {
      numObj[splitString[i]] = 1;
    } else {
      numObj[splitString[i]] += 1;
    }
  }
  let result = 0;
  for (let prop in numObj) {
    if (numObj[prop] > 1) {
      result++;
    }
  }
  return result;
}
