
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