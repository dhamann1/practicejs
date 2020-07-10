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
  