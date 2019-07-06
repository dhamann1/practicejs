// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

const sumR = x => x.reduce ((a,b)=> a+b,0);

// Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

var orderedCount = function (text) {
    var letters = text.split("");
    var uniqs = letters.filter((letter, index) => letters.indexOf(letter) == index);
    return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
  };

const orderedCount = text => {
  let uniqs = text.split('').filter((letter,index) => text.indexOf(letter) == index);
  return uniqs.map((letter) => [letter, text.split(letter).length - 1]);
}

// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far, and
// the number of red marbles pulled out so far.
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

const guessBlue = (blueStart, redStart, bluePulled, redPulled) => {
  let blueLeft = blueStart - bluePulled;
  let redLeft = redStart - redPulled;
  let allLeft = blueLeft + redLeft;
  return blueLeft/allLeft;
}



// Given a word, return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = s => {
  let middle = s.length/2; 
  return s.length % 2 ? s.charAt(Math.floor(middle)) : s.slice (middle -1, middle + 1); 
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = x =>  x.split('').map(n => n < 5 ? 0 : 1).join('');

// Write a function called which verifies that a coupon code is valid, the coupon is not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var cd = new Date(currentDate);
  var ed = new Date(expirationDate);
  return (enteredCode === correctCode) && (ed >= cd);
}

// Your task is to check if the gunners are loaded and ready, if they are: Fire!
// If they aren't ready: Shiver me timbers!
// Your gunners for each test case are 4 or less.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

const cannonsReady = gunners => {
  return Object.values(gunners).every(response => response === 'aye') ? 'Fire!' : 'Shiver me timbers!'
}

const formatMoney = amount => '$' + amount.toFixed(2); 

// You are given two angles (in degrees) of a triangle. Write a function to return the 3rd.

const otherAngle = (a, b) => 180 - a - b;

// Return the Nth Even Number

const nthEven=n=>n*2-2;

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
    default:
      throw 'Error: wrong input';
  }
}

// You got an array with your colleges' points. Now calculate the average to your points!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

// You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {
  var sortedArr = arr1.concat(arr2).sort((a, b) => a - b);
  return sortedArr.filter((el, pos) => sortedArr.indexOf(el) === pos);
}

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

function paddedNumbers(value){
  return "Value is " + ("00000" + value).slice(-5);
}



// You need to approach your boss. Her decision will be based on three parameters:
// val=your value to the organisation
// happ=her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string 'x'.
// Note that if x contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.
// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

const sabb = (x, val, happ) => x.split('').reduce((s,a)=> s + 'sabbatical'.includes(a) , 0) + val + happ > 22 ? 'Sabbatical! Boom!' :  'Back to your desk, boy.';

// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

function getSize(w, h, d){
  var area = (2*d*h) + (2*w*h) + (2*d*w);
  var volume = d*w*h;
  return [area, volume];
}

// Given a number, Find if it is Disarium or not

function disariumNumber(n){
  let chk = 0;
  n.toString().split('').map((n,i) => chk += Math.pow(parseInt(n),i+1));
  return (chk === n ? 'Disarium !!' : 'Not !!');
}


// Given an array of numbers, return a string made up of four parts:

// a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// b) the same as above, post sorting the array into ascending order,

// c) the same as above, post sorting the array into descending order,

// d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen: '-'


function numsToCharString (arr) {
  return String.fromCharCode(arr[0], arr[1], arr[arr.length - 2], arr[arr.length - 1])
};

function sortTransform(a){
  const str1 = numsToCharString(a);
  const str2 = numsToCharString(a.sort((a, b) => a - b));
  const str3 = numsToCharString(a.sort((a, b) => b - a));
  const str4 = [...str3].sort((a, b) => a > b).join('');
  
  return [str1, str2, str3, str4].join('-')
}


// Create change_count() to return a dollar amount of how much change you have!

function changeCount( change ){
  let obj = {
    'penny': 0.01,
    'nickel': 0.05,
    'dime': 0.10,
    'quarter': 0.25,
    'dollar': 1.00
  }
  
  let arr = change.split(' ');
  
  return '$' + arr.reduce((sum, current) => sum + obj[current],0).toFixed(2);
}