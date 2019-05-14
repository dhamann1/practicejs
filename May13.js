// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

const sumR = x => x.reduce ((a,b)=> a+b,0); 

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

var orderedCount = function (text) {
    var letters = text.split("");
    var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index);
    return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
  };