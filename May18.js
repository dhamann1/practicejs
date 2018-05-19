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
