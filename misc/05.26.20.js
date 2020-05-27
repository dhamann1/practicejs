// The method should return an array of sentences declaring the state or country and its capital.

function capital (capitals) {
    return capitals.map(function(x) {
      return 'The capital of ' + (x.state || x.country) + " is " + x.capital;  
    });
  }