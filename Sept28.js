// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = (a, b) => a.filter(num => !b.includes(num));
