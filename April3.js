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
  return sortedArray;
}
