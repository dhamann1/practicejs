// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].


function deleteNth(original, maxOccurrences) {
  if (!original) {
    return null;
  }
  if (maxOccurrences < 1) {
    return [];
  }
  let result = [];
  let itemCounts = {};
  for (let index = 0; index < original.length; index++) {
    let item = original[index];
    let count = itemCounts[item] || 0;
    if (count < maxOccurrences) {
      result.push(item);
      itemCounts[item] = count + 1;
    }
  }

  return result;
}

// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggers will of course take nothing (0).

function beggars(values, n) {
  let outputValues = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < values.length; j += n) {
      sum += values[j];
    }
    outputValues.push(sum);
  }
  return outputValues;
}


// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

function stringTransformer(str) {
  let splitStr = str.split('').map(letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase()
    }
    return letter.toLowerCase();
  }).join('').split(' ').reverse().join(' ');
  return splitStr;
}


// There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

function createSecretHolder(secret) {
  let newSecret = secret;
  return {
    setSecret: function (s) {
      newSecret = s;
    },
    getSecret: function () {
      return newSecret;
    }
  };
}
