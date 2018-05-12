// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

function peopleBus(busStops) {
  let busAmount = 0;
  busStops.forEach(stop => {
    busAmount += (stop[0] - stop[1]);
  })
  return busAmount;
}

// Your friend has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs.
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. You have to use the filter-method of Javascript.

function searchNames( logins ){
  return logins.filter(function(value, index, arr) {
    return index % 2 === 1 && arr[index - 1].match(/^\.|\.$/);
  });
}