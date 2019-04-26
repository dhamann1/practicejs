// Create a function that finds the integral of the expression passed.

const integrate = (coefficient, exponent) =>  coefficient / (exponent + 1) + 'x^' + (exponent + 1);

// Return the average of the given array rounded down to its nearest integer.

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

const grow = (nums) => nums.reduce((product, num) => product * num, 1);
