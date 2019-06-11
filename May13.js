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