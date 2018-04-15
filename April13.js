// Complete the solution so that the function will break up camel casing, using a space between words.

function breakCamelCase(string) {
  string = string.split('').map(function (el) {
    if (letter === letter.toUpperCase()) {
      letter = ' ' + letter;
    }
    return letter;
  })
  return string.join('');
}


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let splitStr = str.split(' ').map(word => {
    word = word.slice(1, word.length) + word[0] + "ay";
    return word;
  }).join(' ');
  return splitStr;
}
