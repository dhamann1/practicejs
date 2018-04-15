// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  if (string === undefined) {
    return '1';
  }
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) && parseInt(string[i]) !== 0) {
      let numberCount = string.slice(i, string.length);
      numberCount = parseInt(numberCount) + 1;
      return string.slice(0, i) + numberCount;
    } else if (parseInt(string[i]) === 0) {
      for (let j = i; j < string.length; j++) {
        let numberCount = string.slice(i, j);
        if (j + 1 == string.length) {
          return string.slice(0, i) + numberCount;
        }
        if (parseInt(string[j]) !== 0) {
          let splitNum = string.slice(j, string.length);
          splitNum = parseInt(splitNum) + 1;
          return string.slice(0, i) + numberCount + splitNum;
        }
      }
    }
  }
  return string + "1";
}
