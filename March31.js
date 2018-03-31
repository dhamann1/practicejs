// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split('');
  s2 = s2.split('');
  let objS1 = {};
  let objS2 = {};
  s1.map((char) => {
    if (objS1[char] == undefined) {
      objS1[char] = 1;
    } else {
      objS1[char]++;
    }
  })
  s2.map((char) => {
    if (objS2[char] == undefined) {
      objS2[char] = 1;
    } else {
      objS2[char]++;
    }
  })
  for (let prop in objS1) {
    if (objS2.hasOwnProperty(prop) === true) {
      if (objS2[prop] < objS1[prop]) {
        count += objS2[prop];
      } else {
        count += objS1[prop]
      }
    }
  }
  return count;
}


