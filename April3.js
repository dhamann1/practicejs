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

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let north = walk.filter(elem => elem === 'n').length;
  let south = walk.filter(elem => elem === 's').length;
  let east = walk.filter(elem => elem === 'e').length;
  let west = walk.filter(elem => elem === 'w').length;
  return walk.length === 10 && north === south && east === west;
}



