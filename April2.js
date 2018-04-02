// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

let s = "aabbfcc";

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return s.charAt(i);
    }
  }
  return '_';
}


console.log(firstNotRepeatingCharacter(s));
