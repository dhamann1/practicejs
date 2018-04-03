// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).


function orderedWords(words) {
  words = words.split(' ');
  let sortedArray = [];
  for (let i = 0; i <= words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[j].indexOf(i) >= 0) {
        sortedArray.push(words[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers) {
  let evenNumbers = [];
  let oddNumbers = [];
  numbers = numbers.split(' ');
  numbers.map((elem) => {
    if (elem % 2 === 0) {
      evenNumbers.push(elem);
    } else {
      oddNumbers.push(elem);
    }
  });
  if (evenNumbers.length > oddNumbers.length) {
    return numbers.indexOf(oddNumbers[0]);
  }
  return numbers.indexOf(evenNumbers[0]);
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  word = word.toLowerCase().split('');
  let newWord = word.map(elem => {
    if (word.indexOf(elem) == word.lastIndexOf(elem)) {
      return elem = "(";
    } else {
      return elem = ")";
    }
  });
  return newWord.join('');
}


