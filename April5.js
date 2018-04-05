// Given an array, find the int that appears an odd number of times. 

function findOdd(a) {
  let numObj = {};
  a.map((elem) => {
    if (numObj[elem] !== undefined) {
      numObj[elem]++;
    } else {
      numObj[elem] = 1;
    }
  })
  for (let key in numObj) {
    if (numObj[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
