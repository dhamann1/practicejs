// Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

var nbrOfLaps = function (x, y) {
  let a = x;
  let b = y;
  let aSteps = 1;
  let bSteps = 1;

  while (a !== b) {
    if (a > b) {
      b = b + y;
      bSteps++;
    }
    else {
      a = a + x;
      aSteps++;
    }
  }

  return [aSteps, bSteps];
}

// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
// Same meaning: 1 == 1
// 1 != -1



function sumConsecutives(s) {
    let sum = 0,
    sums = [];
    for( let i = 0; i < s.length; i++){
      sum += s[i];
      if(s[i] != s[i+1]){
        sums.push(sum);
        sum = 0;
      }
    }
    return sums;
}
