// The method should return an array of sentences declaring the state or country and its capital.

function capital (capitals) {
    return capitals.map(function(x) {
      return 'The capital of ' + (x.state || x.country) + " is " + x.capital;  
    });
  }

  // Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

  function sortReindeer(reindeerNames) {
    return reindeerNames.sort((name1, name2) => lastName(name1) > lastName(name2));
  }
  
  function lastName(name) {
    return name.split(' ')[1];
  }

  // Given two strings a and b and your task will be to return the characters that are not common in the two strings.

  function uniqueString(a,b){
    return (a+b).split("").filter(x => !a.includes(x) || !b.includes(x)).join("");
   };

  //  Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
   
  function divisibleByThree(str){
    var sum = 0; 
    str.split("").map(x => sum += parseInt(x));
    return sum % 3 === 0; 
  }

  // Given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
  
  function capitalizeWord(paragraph){
    if (paragraph == '') {
      return '';
    } else {
      return paragraph.split('. ').map(word => word[0].toUpperCase() + word.slice(1)).join('. ') 
    }
  }

  function findMultiples(integer,limit){
    var resultList = []
    for (var i = integer; i<=limit; i+=integer)
      resultList.push(i) 
      return resultList;
  }

  // Reverse the portion of that string between those two indices inclusive.

  function stringChallenge(string, a, b) {
    return string.slice(0, a) + string.slice(a, b + 1).split('').reverse().join('') + string.slice(b + 1)
  }

  // Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
  
  function evenChars (string) {
    if (string.length < 2 || string.length > 100){
      return "invalid string";
    } else {
      return string.split("").filter((item,index) => {
        return index % 2 !== 0; 
      });
    }
  }

// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

function dominator(arr) {
  var numMap = {};
  arr.forEach(num => {
    if(!numMap[num]){
      numMap[num] = 1;
    } else {
      numMap[num]++;
    }
  })
  for(var i in numMap){
    if (numMap[i] > arr.length/2){
      return Number(i); 
    } 
  }
  return -1; 
} 

// Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.

function getMissingElement(superImportantArray){
  superImportantArray.sort();
  for(var i = 0; i < 10; i++){
    if (superImportantArray[i] !== i) {
      return i; 
    }
  }
}

var runningSum = function(nums) {
  var sum = 0;
  var sumNum = [];
  nums.forEach(num => {
      sumNum.push(sum += num);
  })
  return sumNum; 
};

var runningSum = (nums) => {
  var sum = 0;
  return nums.map(num => {
      return sum += num; 
  })
}
