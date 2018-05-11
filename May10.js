// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array).

function peopleBus(busStops) {
  let busAmount = 0;
  busStops.forEach(stop => {
    busAmount += (stop[0] - stop[1]);
  })
  return busAmount;
}
