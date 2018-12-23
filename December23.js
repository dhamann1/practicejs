// Remove n exclamation marks in the sentence from left to right. n is positive integer.
const removeNExclamation = (s, n) => n ? remove(s.replace('!', ''), n - 1) : s;
