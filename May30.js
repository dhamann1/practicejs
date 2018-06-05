// Task :
// Given a List [] of n integers , find minimum mumber to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
// Notes
// List size is at least 2 .
// List's numbers will only positives (n > 0) .
// Repeatition of numbers in the list could occur .
// The newer list's sum should equal the closest prime number.


function minimumNumber(numbers) {
  let sum = numbers.reduce((a, b) => a + b)
  for (let i = sum;; i++) {
    if (prime(i)) return i - sum
  }

  function prime(a) {
    if (a < 2) return false
    if (a % 2 === 0) return a === 2
    for (let i = 3; i * i < a; i += 2) {
      if (a % i === 0) return false
    }
    return true
  }
}

Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

  // Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

  var fatFingers = function(str) {
    if (!str) return str;
    let isCapsLocked = false;
    let result = str.split('').reduce(function(acc, char) {
      if (char.toUpperCase() === 'A') {
        isCapsLocked = !isCapsLocked;
        return acc;
      }
      if (isCapsLocked) {
        char = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      }
      acc += char;
      return acc;
    }, '');
    return result;
  };



// given a string with brackets and an index of an opening bracket and your task will be to return the index of the matching closing bracket. Both the input and returned index are 0-based except in Fortran where it is 1-based. An opening brace will always have a closing brace. Return -1 if there is no answer

function bracketFinder(str, idx) {
  if (str[idx] != '(') return -1
  let count = 1
  for (let i = idx + 1; i <= str.length; i++) {
    if (count == 0)
      return i - 1
    if (str[i] == '(')
      count += 1
    if (str[i] == ')')
      count -= 1
  }
}

// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
// The input is restricted to contain no numerals and only words containing the english alphabet letters.

function alphabetized(s) {
  let results = "";
  s = s.replace(/\s/g, '');
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach((item) => {
    s.split('').forEach((letter) => {
      if (item == letter.toLowerCase()) {
        results += letter;
      }
    });
  });
  return results;
}
