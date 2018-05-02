// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitStrings(str) {
  str.length % 2 ? str += "_" : str;
  let newAr = [];
  for (let i = 0; i < str.length; i += 2) {
    newAr.push(str[i] + str[i + 1]);
  }
  return newAr;
}
