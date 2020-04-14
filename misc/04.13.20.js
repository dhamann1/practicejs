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

const add = (...n) => n.reduce((a,b) => a + b, 0); 

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
  ages.sort(function(a,b){
    return a-b;
  })
  return [ages[0], ages[ages.length -1], ages[ages.length -1] - ages[0]]
  }

  // Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

function tripleTrouble (one, two, three) {
  return one.split("").map(function(letter,index){
    return letter + two[index] + three[index]
  }).join("");
}


// Write a function that accepts two arguments: an array/list of integers and another integer (n).
// Determine the number of times where two integers in the array have a difference of n.

function intDiff (arr, n){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    for (var x = i + 1; x < arr.length; x++){
      if(Math.abs(arr[i] - arr[x]) == n){
        count++; 
      }
    }
  }
  return count;
}

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  return a.reduce((sum1,x1) => sum1 + x1 **2,0) > b.reduce((sum2,x2) => sum2 + x2 **3,0);
  }

// Implement a function that returns the minimal and the maximal value of a list.

function getMinMax(arr) {
  arr.sort((a,b)=>a-b); 
  return [arr[0], arr[arr.length-1]]; 
}