// You have to create the function factorial that receives n and returns n!. You have to use recursion.

function factorialRecursion(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
