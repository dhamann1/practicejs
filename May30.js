// Task :
// Given a List [] of n integers , find minimum mumber to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
// Notes
// List size is at least 2 .
// List's numbers will only positives (n > 0) .
// Repeatition of numbers in the list could occur .
// The newer list's sum should equal the closest prime number.


function minimumNumber(numbers) {
  let sum = numbers.reduce((a, b) => a + b)
  for (let i = sum;; i++) {
    if (prime(i)) return i - sum
  }
  function prime(a) {
    if (a < 2) return false
    if (a % 2 === 0) return a === 2
    for (let i = 3; i * i < a; i += 2) {
      if (a % i === 0) return false
    }
    return true
  }
}
