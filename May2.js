// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitStrings(str) {
  str.length % 2 ? str += "_" : str;
  let newAr = [];
  for (let i = 0; i < str.length; i += 2) {
    newAr.push(str[i] + str[i + 1]);
  }
  return newAr;
}

//better solution:

function splitS (str){
  return (str + "_").match(/../g);
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

function countSmileys(arr) {
let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
let count = 0;
arr.forEach(elem => {
  if(smileys.includes(elem)){
    count++;
  }
})
  return count;
}
