// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

function peopleBus(busStops) {
  let busAmount = 0;
  busStops.forEach(stop => {
    busAmount += (stop[0] - stop[1]);
  })
  return busAmount;
}

// Your friend has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs.
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. You have to use the filter-method of Javascript.

function searchNames(logins) {
  return logins.filter(function (value, index, arr) {
    return index % 2 === 1 && arr[index - 1].match(/^\.|\.$/);
  });
}

// Modify the kebabize function so that it converts a camel case string into a kebab 

function kebabize(str) {
  let removeNums = str.replace(/[0-9]/g, '');
  let strArr = removeNums.split('');
  let camelArray = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      if (i !== 0) {
        camelArray.push('-');
      }
      camelArray.push(strArr[i].toLowerCase());
    } else {
      camelArray.push(strArr[i]);
    }
  }
  return camelArray.join('');
}

// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.

// Also:

// the number of elements to be returned cannot be higher than the array/list/vector length;
// elements can be duplicated;
// in case of duplicates, just return them according to the original order (see third example for more clarity).


function firstNSmallest(array, n) {
  let a = array.slice();
  let small = [];
  let result = [];
  a.sort();

  for (let i = 0; i < n; i++) {
    small.push(a[i]);
  }
  for (let i = 0; i < array.length; i++) {
    if (small.includes(array[i])) {
      result.push(array[i]);
      small.splice(small.indexOf(array[i]), 1);
    }
  }
  return result;
}
