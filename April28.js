// Write a function which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. If this isn't the case return 0.

function tripleDouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    triple = new RegExp(i + "{3}")
    double = new RegExp(i + "{2}")
    if (triple.test(num1) && double.test(num2)) {
      return 1
    }
  }
  return 0
}

// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

function isAlt(word) {
  let isVowels = ['a', 'e', 'i', 'o', 'u'];
  let prev;
  let cur;
  for (let i = 0; i < word.length; i++) {
    let cur = isVowels.indexOf(word[i]) === -1 ? 'consonant' : 'vowel';
    if (cur === prev) {
      return false;
    } else {
      prev = cur;
    }
  }
  return true;
}
