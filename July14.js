// Write a function that finds the sum of all its arguments.

function sum(...numbers) {
  return numbers.reduce((x, y) => x + y);
}

// Find the last element of the given argument(s).

function last(list){
  var out = list;
  if(arguments.length > 1)
    list = arguments;
  if(list.length > 1)
    out = list[list.length-1];
  return out;
}
