// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

function getDrinkByProfession(param){
    var list = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
    }
    return list[param.toLowerCase()]||"Beer";
}

// Given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

function stringDuplicateRemoval(s) {
    var newArray = [];
    s.forEach(word => {
      var last = ""; 
      var result = ""; 
      for (var i = 0; i < word.length; i++){
        var char = word.charAt(i); 
        if (char !== last){
          result += char; 
          last = char;
        }
      }
      newArray.push(result); 
    })
    return newArray; 
    };

function isLeapYear(year) {
        return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
      }