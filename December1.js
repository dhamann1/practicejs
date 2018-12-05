// Given an array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order

const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)


// There is a sentence which has a mistake in it's ordering.
//
// The part with a capital letter should be the first word.

function reOrdering(text){
let newArray = []
for(word of text.split(' ')){
    word[0] === word[0].toUpperCase() ? newArray.unshift(word) : newArray.push(word)
  }
  return newArray.join(' ').toString()
}


// remove every second element out of that array. Always keep the first element and start removing with the next element.

const removeEveryOther = items =>{
  return items.filter((item,index) => index % 2 === 0);
}
