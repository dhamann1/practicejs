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