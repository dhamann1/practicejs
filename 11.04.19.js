
// Finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  var avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.


function numberTest (array) {
  if (array.length <= 0) {
      return [];
  } else {
      return array.map((x,index) => {
          return index + 1 + ": " + x;
      })
  }
}



Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer

function cockroachSpeed(s) {
  var centsInKilo = 100000;
  var secsInHour = 3600;
  
  return Math.floor((s*centsInKilo)/secsInHour);
}

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function humanYearsCatYearsDogYears(humanYears) {
  var catYears = 0;
  var dogYears = 0;
  
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
}

// Return true if given object consists exclusively of zero or more whitespace characters, false otherwise.

String.prototype.whitespace=function(){
  return this.trim() === '';
}



// Write a function calculating distance between Point a and Point b. Point objects have x and y attributes

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}


function lottery(str){
  return str.split('').filter((a, i, arr) => !isNaN(a) && arr.indexOf(a) === i).join('') || "One more run!";
}

// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function lottery()). Your code inside lottery() must filter out all letters and return unique integers as a string. If there are no integers in the string return - “One more run!”.

function lottery(str){
  str = str.replace(/[a-z]/gi, '');
  return str.length > 0 ? str.split('').filter((value, index) => str.indexOf(value) == index).join('') : "One more run!";
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between (a, b) {
  var list = []; 
  for(var i = a; i <= b; i++) {
    list.push(i);
  }
  return list; 
} 

// Create a function isDivisible(n,...) that checks if the first agrument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(n,...args){
  return args.every(x => n % x === 0)
}


// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

const divide = weight => weight >= 4 && weight % 2 === 0; 

// A person contradicts Mary's belief if one of the following statements is true:
// they are young and beautiful but not loved;
// they are loved but not young or not beautiful.
// Example
// For young = true, beautiful = true and loved = true, the output should be false.
// Young and beautiful people are loved according to Mary's belief.
// For young = true, beautiful = false and loved = true, the output should be true.
// Mary doesn't believe that not beautiful people can be loved.
// Input/Output
// [input] boolean young
// [input] boolean beautiful
// [input] boolean loved
// [output] a boolean value
// true if the person contradicts Mary's belief, false otherwise.

function willYou (young, beautiful, loved) {
  if ((young && beautiful && loved) || (!young && !beautiful && !loved)) {
    return false;
  } else if (young && beautiful) {
    return true;
  } else if (!loved) {
    return false;
  } else {
    return true;
  }
}


// For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
// Example
// For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be 11.
// The answer was obtained as 5 + 1 + 2 + 3 = 11.

function houseNumbersSum(inputArray) {
  for (var sum = 0, i = 0;; i++)
    if (inputArray[i] === 0) {
    return sum;
    }
    else {
    sum += inputArray[i];
  }
}

// Output should be the length of the longest word, as a number.

function findLongest(str) {
  var strSplit = str.split(" ");
  var longest = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longest) {
      longest = strSplit[i].length;
      }
    }
    return longest;
}

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".

const hoopCount = n => (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';

// Find the sum of all multiples of n below m

function sumMul(n,m){
  var sum = 0; 
  if (n >= m) {
    return "INVALID";
  }
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}

Reverse a string while maintaining spaces

// So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

function searchNames( logins ){
  return logins.filter(login => {return login[0].slice(-1) === '_' });
}
  
function stringReversal(s){
  var a = s.split(" "); 
  var arr = a.join("").split("").reverse();
  return a.map(str => arr.splice(0, str.length).join("")).join(" ");
}

// Write a function that given an American floor (passed as an integer) returns the real floor.
// Moreover, your function should work for basement floors too: just return the same value as the passed one.

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  }
  return n - (n >= 13 ? 2 : 1);
}


// Check if a number is polydivisible or not. 

function polydivisible(x) {
  var y = x.toString()
    for (var i = 1; i <= y.length; i++) {
      var value = y.slice(0, i)
      if (parseInt(value) % i === 0) {
      } else {
        return false;
      }
    }
    return true ;
  }

// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make 'Past' function which returns time converted to milliseconds.

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// Happiness rating will be total score / number of people in the room.
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){
  var sum=0;
  var count=0;
  for (var key in meet) {
    if (key!=boss) {
      sum+=meet[key];
      count++;
    } else {
      sum+=meet[key]*2;
      count++;
    }
  }
  return sum/count<=5?'Get Out Now!':'Nice Work Champ!';
}
