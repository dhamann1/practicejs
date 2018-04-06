// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers) {
  let evenArray = [];
  let oddArray = [];
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenArray.push(integers[i]);
    } else {
      oddArray.push(integers[i]);
    }
  }
  if (evenArray.length > oddArray.length) {
    return oddArray[0]
  } else {
    return evenArray[0];
  }
}
