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


// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

function findNB(m) {
  let n = 0;
  while (m > 0) {
    n++;
    m -= n ** 3;
  }
  return m ? -1 : n;
}

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
  let moneyObj = {
    25: 0,
    50: 0,
    100: 0
  }
  for (let i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        moneyObj[25]++;
        break;
      case 50:
        moneyObj[50]++;
        moneyObj[25]--;
        break;
      case 100:
        moneyObj[100]++;
        if (moneyObj[50]) {
          moneyObj[50]--;
        } else {
          moneyObj[25] -= 2;
        }
        moneyObj[25]--;
        break;
    }
  }
  for (var key in moneyObj) {
    if (moneyObj[key] < 0) {
      return 'NO'
    } else {
      return 'YES'
    }
  }
}
