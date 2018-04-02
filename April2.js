// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return s.charAt(i);
    }
  }
  return '_';
}

// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(array) {
  let sortedArray = array.filter((elem) => {
    if (elem !== -1) {
      return elem;
    }
  }).sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      array[i] = sortedArray.shift();
    }
  }
  return array;
}

