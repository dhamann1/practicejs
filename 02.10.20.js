// Create a method that can determine how many letters and digits are in a given string.

function countLettersAndDigits(s) {
    return s.replace(/[^a-z\d]/gi,"").length;
  }