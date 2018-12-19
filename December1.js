// Given an array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order

const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)


// There is a sentence which has a mistake in it's ordering.
//
// The part with a capital letter should be the first word.

function reOrdering(text) {
  let newArray = []
  for (word of text.split(' ')) {
    word[0] === word[0].toUpperCase() ? newArray.unshift(word) : newArray.push(word)
  }
  return newArray.join(' ').toString()
}


// remove every second element out of that array. Always keep the first element and start removing with the next element.

const removeEveryOther = items => {
  return items.filter((item, index) => index % 2 === 0);
}

// Find the anonymous function in the given array and use the function to filter the array

function FindFunction(func, arr) {
  return arr.filter(func.filter(f => typeof f == 'function')[0]);
}

// Create a method is_uppercase() to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase() ? true : false;
}

 // Given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = (numbers) => {
  numbers = numbers.split(' ').map(Number);
  let min = Math.min.apply(0, numbers);
  let max = Math.max.apply(0, numbers);
  return max + ' ' + min;
}


// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

function getAge(inputString){
  return parseInt(inputString[0]);
}



// You will be given this string called campaign:
// "Hello <NAME>, how is the weather in <CITY> today? We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!"
// You will be given this hash:
// person = { name : "Sally", city : "Glasgow", favourite_products : "toasters"}.
// You should return this string:
// "Hello Sally, how is the weather in Glasgow today? We wanted to let you know that toasters are on sale today only!"

function personalise(campaign, person){
  campaign = campaign.replace(/<NAME>/g,person.name);
  campaign = campaign.replace(/<CITY>/g,person.city);
  campaign = campaign.replace(/<FAVOURITE\sPRODUCTS>/g,person.favourite_products);
  return campaign;
}


// Finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = n => n * (n + 1) / 2;

// Determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');


// Given an array of integers, return a new array with each value doubled.
const maps = x => x.map(y => y * 2);


// Create a method that returns true if the function returns true for none of the items in the array. An empty list should return true.
const none = (arr, fun) => !arr.some(fun);

// Create a method one? (JS one) that accepts two params, a list and a block (JS: a function), and returns true only if the block (/function) returns true for exactly one item in the array

const one = (arr, fun) => arr.filter(fun).length === 1;
