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
