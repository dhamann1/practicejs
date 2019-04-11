// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.


function avoidObstacles(inputArray) {
  inputArray = inputArray.sort((a, b) => {
    return a - b;
  });
  let lastArrayNumber = inputArray[inputArray.length - 1];
  for (var i = 1; i <= lastArrayNumber + 1; i++) {
    if (inputArray.every((elem) => {
        return elem % i != 0;
      })) {
      return i;
    }
  }
}

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

function rotateImage(a) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push([]);
    for (let d = a.length - 1; d >= 0; d--) {
      arr[i].push(a[d][i]);
    }
  }
  return arr;
}

