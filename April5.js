// Given an array, find the int that appears an odd number of times. 

function findOdd(a) {
  let numObj = {};
  a.map((elem) => {
    if (numObj[elem] !== undefined) {
      numObj[elem]++;
    } else {
      numObj[elem] = 1;
    }
  })
  for (let key in numObj) {
    if (numObj[key] % 2 !== 0) {
      return Number(key);
    }
  }
}


// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club. Help restore the original song title.

function songDecoder(str) {
  return str.replace(/(WUB)+/g, " ").trim();
}
