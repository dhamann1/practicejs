// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

function reverseParentheses(s) {
  while (s.indexOf(')', 0) != -1) {
    let c = s.indexOf(')', 0);
    let a = s.lastIndexOf('(', c);
    let b = s.slice(a + 1, c).split('').reverse().join('');
    let s = s.slice(0, a) + b + s.slice(c + 1);

  }
  return s;
}

// Your task is to clean up differently formatted telephone numbers by removing punctuation and the country code (1) if present.

// For example, the inputs

// +1 (613)-995-0253
// 613-995-0253
// 1 613 995 0253
// 613.995.0253
// should all produce the output

// 6139950253


function cleanNumber(pNumber) {
  let num = pNumber.replace(/\D/g, '');
  if (num.length === 10 && num[0] >= 2 && num[3] >= 2) {
    return num;
  } else if (num.length === 11 && num[0] === '1') {
    return num.substr(1, num.length);
  }
  return null;
}

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }
  return [team1, team2];
}

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// For Example:
// picture = ["abc",
//            "ded"]
// The output should be:
// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  let border = "";
  for (let i = 0; i < picture[0].length + 2; i++) {
    border += "*"
  }
  picture.unshift(border);
  picture.push(border);
  for (let j = 1; j < picture.length - 1; j++) {
    picture[j] = "*" + picture[j] + "*";
  }
  return picture;
}
