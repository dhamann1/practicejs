// Given an array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order

const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)
