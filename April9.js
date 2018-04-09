// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

const arrayDiff = (a, b) => {
  return a.filter(num => {
    return b.indexOf(num) == -1;
  })
}

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 

function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
}

// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
// " Hello World " => "#HelloWorld"

function generateHashtag(str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(word => {
      return word[0].toUpperCase() + word.slice(1);
    }).join('');
}
