// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(a1, a2) {
  let str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}
