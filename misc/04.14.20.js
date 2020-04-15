/*
You are given an array of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

Your task is to find x * x * y.
*/


function missingValues(arr) {
    var numCheck = {};
    var num1;
    var num2; 
    
    arr.map(function(x){
      if(!numCheck[x]) {
        numCheck[x] = 0; 
      }
      numCheck[x]++; 
    })
    for(var key in numCheck){
      if (numCheck[key] == 2){
        num2 = key;
      }
      else if (numCheck[key] == 1) {
        num1 = key; 
      } 
    }
    return num1 * num1 * num2;  
  }