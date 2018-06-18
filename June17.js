// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sum = age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8;
  let sq = Math.sqrt(sum);
  return Math.floor(sq/2);
}
