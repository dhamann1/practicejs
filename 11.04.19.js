
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
