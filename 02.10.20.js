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


// Write a function ageInDays which returns your age in days.

function ageInDays(year, month, day) {
  var today = new Date();
  var bday = new Date(year, month-1, day);
  var days = (today-bday)/86400000;
  return "You are " + Math.floor(days) + " days old";
}

// add() gets anywhere between 0 and 100 arguments (Integers) and returns their sum.

var add = function (...n) {
  return n.reduce(function(a,b){
    return a + b;
  }, 0);
};
