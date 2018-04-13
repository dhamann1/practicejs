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
