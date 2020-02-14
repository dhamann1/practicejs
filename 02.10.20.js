// Create a method that can determine how many letters and digits are in a given string.

function countLettersAndDigits(s) {
    return s.replace(/[^a-z\d]/gi,"").length;
  }


// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.

function paperwork(n, m) {
    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }