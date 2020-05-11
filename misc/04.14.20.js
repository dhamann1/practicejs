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

  /*
  Given a positive integer n, calculate the following sum:

  n + n/2 + n/4 + n/8 + ...
  All elements of the sum are the results of integer division.
  
  Example
  25  =>  25 + 12 + 6 + 3 + 1 = 47
  */


  function halvingSum(n) {
    var sum = 0;
    while(n > 0) {
      sum += n;
      n = Math.floor(n / 2);
      console.log(n); 
    }
    return sum;
  }


  // function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
  
  function getSumOfDigits(integer){
    return integer.toString().split("").map(x => parseInt(x)).reduce((x,y) => x +y);  
   }
   

  //  Write a function that accepts two arguments and generates a sequence containing the integers from the first argument to the second inclusive.

  function generateIntegers (m,n) {
    let arr = []; 
    while(m <= n) {
      arr.push(m);
      m++; 
    }
    return arr; 
    }


    // You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

    function myLanguages(a) {
      return Object.keys(a).filter(x => a[x] >= 60).sort((x, y) => a[y] - a[x])
  }

// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent. Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7).

  function derive (coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
  }