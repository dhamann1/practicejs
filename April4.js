// You have to create the function factorial that receives n and returns n!. You have to use recursion.

function factorialRecursion(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Place all people in alphabetical order where Mothers are followed by their children.I.E "aAbaBb" => "AaaBbb".

function findChildren(dancingBrigade) {
  char = "";
  let arr = dancingBrigade.toLowerCase().split("").sort().map(item => {
    if (item != char) {
      char = item;
      return item.toUpperCase();
    }
    return item;
  }).join("");
  return arr;
};
